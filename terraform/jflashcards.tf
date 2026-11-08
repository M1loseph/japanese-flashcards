terraform {
  backend "gcs" {
    bucket = "m1loseph-terraform"
    prefix = "jflashcards-prod"
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "8.8.1"
    }
  }

  required_version = "~> 1.14.6"
}

provider "google" {
  project               = var.project_id
  user_project_override = true
  billing_project       = var.project_id
}

data "google_project" "jflashcards-project" {
  project_id = var.project_id
}

resource "google_artifact_registry_repository" "dockerhub-remote" {
  project       = var.project_id
  location      = var.region
  repository_id = "dockerhub-remote"
  description   = "Remote repository for public Docker Hub images"
  format        = "DOCKER"
  mode          = "REMOTE_REPOSITORY"

  remote_repository_config {
    description = "Docker Hub"
    docker_repository {
      public_repository = "DOCKER_HUB"
    }
  }
}

resource "google_artifact_registry_repository_iam_member" "cloud_run_service_agent_reader" {
  project    = var.project_id
  location   = google_artifact_registry_repository.dockerhub-remote.location
  repository = google_artifact_registry_repository.dockerhub-remote.name
  role       = "roles/artifactregistry.reader"
  member     = "serviceAccount:service-${data.google_project.jflashcards-project.number}@serverless-robot-prod.iam.gserviceaccount.com"
}

resource "google_cloud_run_v2_service" "jflashcards-v2" {
  name                 = "jflashcards-v2"
  location             = var.region
  deletion_protection  = true
  ingress              = "INGRESS_TRAFFIC_ALL"
  invoker_iam_disabled = true
  launch_stage         = "GA"

  depends_on = [
    google_artifact_registry_repository_iam_member.cloud_run_service_agent_reader,
  ]

  scaling {
    max_instance_count = 2
  }

  template {
    execution_environment            = "EXECUTION_ENVIRONMENT_GEN1"
    max_instance_request_concurrency = 1000
    service_account                  = google_service_account.jflashcards-v2-service-account.email
    timeout                          = "30s"

    containers {
      image = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.dockerhub-remote.repository_id}/${var.jflashcards_image}"

      resources {
        limits = {
          cpu    = "1000m"
          memory = "128Mi"
        }
        cpu_idle          = true
        startup_cpu_boost = true
      }

      startup_probe {
        failure_threshold     = 3
        initial_delay_seconds = 1
        period_seconds        = 3
        timeout_seconds       = 1

        http_get {
          path = "/health"
          port = 8080
        }
      }

      liveness_probe {
        timeout_seconds   = 5
        period_seconds    = 10
        failure_threshold = 3

        http_get {
          path = "/health"
          port = 8080
        }
      }
    }
  }

  traffic {
    type = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
  }
}

resource "google_cloud_run_domain_mapping" "jflashcards-v2-domain" {
  location = var.region
  name     = "japonskie-fiszki.com"

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_v2_service.jflashcards-v2.name
  }
}

resource "google_dns_managed_zone" "jflashcards-zone" {
  name     = "japonskie-fiszki-com"
  dns_name = "japonskie-fiszki.com."
}

resource "google_dns_record_set" "jflashcards-a" {
  name         = google_dns_managed_zone.jflashcards-zone.dns_name
  managed_zone = google_dns_managed_zone.jflashcards-zone.name
  type         = "A"
  ttl          = 1800
  rrdatas      = [for record in google_cloud_run_domain_mapping.jflashcards-v2-domain.status[0].resource_records : record.rrdata if record.type == "A"]
}

resource "google_dns_record_set" "jflashcards-aaaa" {
  name         = google_dns_managed_zone.jflashcards-zone.dns_name
  managed_zone = google_dns_managed_zone.jflashcards-zone.name
  type         = "AAAA"
  ttl          = 1800
  rrdatas      = [for record in google_cloud_run_domain_mapping.jflashcards-v2-domain.status[0].resource_records : record.rrdata if record.type == "AAAA"]
}

resource "google_service_account" "jflashcards-v2-service-account" {
  account_id   = "jflashcards-v2"
  display_name = "Service Account for jflashcards-v2"
}

resource "google_service_account_iam_member" "allow_github_service_account_user" {
  service_account_id = google_service_account.jflashcards-v2-service-account.name
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:terraform-account@${var.project_id}.iam.gserviceaccount.com"
}

resource "google_billing_budget" "my_monthly_budget" {
  billing_account = var.billing_account_id
  display_name    = "JFlashcards monthly budget"
  amount {
    specified_amount {
      currency_code = "PLN"
      units         = "10"
    }
  }
  budget_filter {
    projects = ["projects/${data.google_project.jflashcards-project.number}"]
  }
  threshold_rules {
    threshold_percent = 0.5
  }
  threshold_rules {
    threshold_percent = 0.9
  }
  threshold_rules {
    threshold_percent = 1
  }
  threshold_rules {
    threshold_percent = 1.5
  }
}
