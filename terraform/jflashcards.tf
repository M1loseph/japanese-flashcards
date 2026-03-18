terraform {
  backend "gcs" {
    bucket = "m1loseph-terraform"
    prefix = "jflashcards-prod"
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "7.22.0"
    }
  }

  required_version = "~> 1.14.6"
}

provider "google" {
  project = var.project_id
}

resource "google_cloud_run_v2_service" "jflashcards-v2" {
  name                 = "jflashcards-v2"
  location             = var.region
  deletion_protection  = true
  ingress              = "INGRESS_TRAFFIC_ALL"
  invoker_iam_disabled = true
  launch_stage         = "GA"

  scaling {
    max_instance_count = 2
  }

  template {
    execution_environment            = "EXECUTION_ENVIRONMENT_GEN1"
    max_instance_request_concurrency = 1000
    service_account                  = google_service_account.jflashcards-v2-service-account.email
    timeout                          = "30s"

    containers {
      image = "docker.io/${var.jflashcards_image}"

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

resource "google_service_account" "jflashcards-v2-service-account" {
  account_id   = "jflashcards-v2"
  display_name = "Service Account for jflashcards-v2"
}

resource "google_service_account_iam_member" "allow_github_service_account_user" {
  service_account_id = google_service_account.jflashcards-v2-service-account.name
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:terraform-account@${var.project_id}.iam.gserviceaccount.com"
}
