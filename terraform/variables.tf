variable "aws_root_access_key_id" {}

variable "aws_root_access_key_secret" {}

variable "default_aws_region" {
  type = "string"
  default = "eu-central-1"
  description = "Default AWS Region"
}


variable "env" {
  type = "string"
  default = "prd"
  description = "Environment Type [prd, tst, dev, stg]"
}
