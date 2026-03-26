variable "project_id" {
  description = "The ID of the project in which to create the resources."
  type        = string
}

variable "region" {
  description = "The region in which to create the resources."
  type        = string
  default     = "europe-west1"
}

variable "jflashcards_image" {
  description = "The full name with a tag of the jflashcards Docker image to deploy."
  type        = string
}

variable "billing_account_id" {
  description = "The ID of the billing account to use for the budget."
  type        = string
}
