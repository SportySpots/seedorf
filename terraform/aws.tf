provider "aws" {
  access_key = "${var.aws_root_access_key_id}"
  secret_key = "${var.aws_root_access_key_secret}"
  region     = "${var.default_aws_region}"
}

# VPC - eu-central-1 - prd, stg, tst, dev

resource "aws_vpc" "eu_central_1_prd" {
  # cidr_block - (Required) The CIDR block for the VPC.
  cidr_block = "10.0.0.0/16"

  # instance_tenancy - (Optional) A tenancy option for instances launched into the VPC
  # REF: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html
  # default : Your instance runs on shared hardware.
  # dedicated : Your instance runs on single-tenant hardware.
  # host : Your instance runs on a Dedicated Host, which is an isolated server with configurations that you can control.
  instance_tenancy = "default"

  # enable_dns_support - (Optional) A boolean flag to enable/disable DNS support in the VPC. Defaults true.
  enable_dns_support = true

  # enable_dns_hostnames - (Optional) A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
  enable_dns_hostnames = true

  # tags - (Optional) A mapping of tags to assign to the resource.

  tags {
    Environment = "prd"
  }
}



# Subnet - eu-central-1[a,b,c] - prd

resource "aws_subnet" "eu_central_1a_prd" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1a"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_prd.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.0.0.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "prd"
  }

}


resource "aws_subnet" "eu_central_1b_prd" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1b"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_prd.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.0.16.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "prd"
  }

}

resource "aws_subnet" "eu_central_1c_prd" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1c"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_prd.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.0.32.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "prd"
  }

}




# Route Table

resource "aws_default_route_table" "eu_central_1_prd" {
  default_route_table_id = "${aws_vpc.eu_central_1_prd.default_route_table_id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.eu_central_1_prd.id}"
  }

  tags {
    Environment = "prd"
  }
}



# Internet Gateway VPC - prd, stg, tst, dev
# Create an internet gateway to give our subnet access to the outside world
resource "aws_internet_gateway" "eu_central_1_prd" {
  vpc_id = "${aws_vpc.eu_central_1_prd.id}"
  tags {
    Environment = "prd"
  }
}



### Default Network ACL

resource "aws_default_network_acl" "eu_central_1_prd" {
  default_network_acl_id = "${aws_vpc.eu_central_1_prd.default_network_acl_id}"

  subnet_ids = ["${aws_subnet.eu_central_1a_prd.id}",
                "${aws_subnet.eu_central_1b_prd.id}",
                "${aws_subnet.eu_central_1c_prd.id}"]

  ingress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  egress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  tags {
    Environment = "prd"
  }
}


### Default Security Group

resource "aws_default_security_group" "eu_central_1_prd" {
  vpc_id = "${aws_vpc.eu_central_1_prd.id}"

  ingress {
    protocol  = -1
    from_port = 0
    to_port   = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Environment = "prd"
  }
}


# S3 Buckets

resource "aws_s3_bucket" "prd_logs" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-prd-logs"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "log-delivery-write"

  tags {
    Environment = "prd"
  }
}

resource "aws_s3_bucket" "stg_logs" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-stg-logs"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "log-delivery-write"

  tags {
    Environment = "stg"
  }
}

resource "aws_s3_bucket" "tst_logs" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-tst-logs"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "log-delivery-write"

  tags {
    Environment = "tst"
  }
}

resource "aws_s3_bucket" "dev_logs" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-dev-logs"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "log-delivery-write"

  tags {
    Environment = "dev"
  }
}

resource "aws_s3_bucket" "prd_config" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-prd-config"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "private"

  versioning {
    enabled = true
  }

  logging {
    target_bucket = "${aws_s3_bucket.prd_logs.id}"
    target_prefix = "prd/logs/configs/"
  }

  tags {
    Environment = "prd"
  }
}


resource "aws_s3_bucket" "stg_config" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-stg-config"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "private"

  versioning {
    enabled = true
  }

  logging {
    target_bucket = "${aws_s3_bucket.stg_logs.id}"
    target_prefix = "stg/logs/configs/"
  }

  tags {
    Environment = "stg"
  }
}

resource "aws_s3_bucket" "tst_config" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-tst-config"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "private"

  versioning {
    enabled = true
  }

  logging {
    target_bucket = "${aws_s3_bucket.tst_logs.id}"
    target_prefix = "tst/logs/configs/"
  }

  tags {
    Environment = "tst"
  }
}

resource "aws_s3_bucket" "dev_config" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-dev-config"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "private"

  versioning {
    enabled = true
  }

  logging {
    target_bucket = "${aws_s3_bucket.dev_logs.id}"
    target_prefix = "dev/logs/configs/"
  }

  tags {
    Environment = "dev"
  }
}

resource "aws_s3_bucket" "media_prd" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "public-read"

  tags {
    Environment = "prd"
  }
}

resource "aws_s3_bucket" "media_stg" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-stg"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "public-read"

  tags {
    Environment = "stg"
  }
}

resource "aws_s3_bucket" "media_tst" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-tst"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "public-read"

  tags {
    Environment = "tst"
  }
}

resource "aws_s3_bucket" "media_dev" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-dev"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "public-read"

  tags {
    Environment = "dev"
  }
}

resource "aws_s3_bucket" "elastic_beanstalk_prd" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-prd-elastic-beanstalk"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "private"

  tags {
    Environment = "prd"
  }
}

# Route 53 Setup

resource "aws_route53_zone" "prd" {
  vpc_region = "${var.default_aws_region}"
  name = "sportyspots.com"

  tags {
    Environment = "prd"
  }
}


resource "aws_route53_zone" "stg" {
  vpc_region = "${var.default_aws_region}"
  name = "stg.sportyspots.com"

  tags {
    Environment = "stg"
  }
}

resource "aws_route53_zone" "tst" {
  vpc_region = "${var.default_aws_region}"
  name = "tst.sportyspots.com"

  tags {
    Environment = "tst"
  }
}

resource "aws_route53_zone" "dev" {
  vpc_region = "${var.default_aws_region}"
  name = "dev.sportyspots.com"

  tags {
    Environment = "dev"
  }
}

resource "aws_route53_record" "stg-ns" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "stg.sportyspots.com"
  type    = "NS"
  ttl     = "30"

  records = [ "${aws_route53_zone.stg.name_servers.0}",
              "${aws_route53_zone.stg.name_servers.1}",
              "${aws_route53_zone.stg.name_servers.2}",
              "${aws_route53_zone.stg.name_servers.3}"
            ]
}

resource "aws_route53_record" "tst-ns" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "tst.sportyspots.com"
  type    = "NS"
  ttl     = "30"

  records = [ "${aws_route53_zone.tst.name_servers.0}",
              "${aws_route53_zone.tst.name_servers.1}",
              "${aws_route53_zone.tst.name_servers.2}",
              "${aws_route53_zone.tst.name_servers.3}"
            ]
}

resource "aws_route53_record" "dev-ns" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "dev.sportyspots.com"
  type    = "NS"
  ttl     = "30"

  records = [ "${aws_route53_zone.dev.name_servers.0}",
              "${aws_route53_zone.dev.name_servers.1}",
              "${aws_route53_zone.dev.name_servers.2}",
              "${aws_route53_zone.dev.name_servers.3}",
            ]
}

resource "aws_route53_record" "root" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = ""
  type    = "A"
  ttl     = "300"
  records = ["52.85.62.129"]
}

resource "aws_route53_record" "mx-gandi" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = ""
  type    = "MX"
  ttl     = "300"
  records = [
    "10 spool.mail.gandi.net.",
    "50 fb.mail.gandi.net."
  ]
}

resource "aws_route53_record" "txt" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = ""
  type    = "TXT"
  ttl     = "300"
  records = [
    "google-site-verification=Rrn1qnVhrS32n_FVJQgcyRqfueBCv9cZSGDow-2KETs",
    "v=spf1 include:_mailcust.gandi.net ?all"
  ]
}

resource "aws_route53_record" "cname-imap" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "imap"
  type    = "CNAME"
  ttl     = "300"
  records = ["mail.gandi.net."]
}

resource "aws_route53_record" "cname-mail" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "mail"
  type    = "CNAME"
  ttl     = "300"
  records = ["webmail.gandi.net."]
}

resource "aws_route53_record" "cname-pop" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "pop"
  type    = "CNAME"
  ttl     = "300"
  records = ["mail.gandi.net."]
}

resource "aws_route53_record" "cname-www" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "www"
  type    = "CNAME"
  ttl     = "300"
  records = ["d1wlhp2yjktro3.cloudfront.net."]
}

resource "aws_route53_record" "cname-cloudfront-website-acm-validation-1" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "_cefcb3fef89a600535ada5f1acd9cbc8.www"
  type    = "CNAME"
  ttl     = "300"
  records = ["_d087855d050e7e17fac3d28a6ed043f0.acm-validations.aws."]
}

resource "aws_route53_record" "cname-cloudfront-website-acm-validation-2" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "_f27fb96223e454b8147243095cec387c"
  type    = "CNAME"
  ttl     = "300"
  records = ["_6a8ea2983012ac9ec9a56074ed6923d6.acm-validations.aws."]
}

# ECR
resource "aws_ecr_repository" "sportyspots" {
  name = "sportyspots"
}

resource "aws_ecr_repository_policy" "sportyspots" {
  repository = "${aws_ecr_repository.sportyspots.name}"

  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowAll",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:DescribeRepositories",
                "ecr:GetRepositoryPolicy",
                "ecr:ListImages",
                "ecr:DeleteRepository",
                "ecr:BatchDeleteImage",
                "ecr:SetRepositoryPolicy",
                "ecr:DeleteRepositoryPolicy"
            ]
        }
    ]
}
EOF
}

resource "aws_ecr_lifecycle_policy" "expiry_tagged_untagged" {
  repository = "${aws_ecr_repository.sportyspots.name}"

  policy = <<EOF
{
    "rules": [
        {
            "rulePriority": 1,
            "description": "Expire images older than 14 days",
            "selection": {
                "tagStatus": "untagged",
                "countType": "sinceImagePushed",
                "countUnit": "days",
                "countNumber": 14
            },
            "action": {
                "type": "expire"
            }
        },
        {
            "rulePriority": 2,
            "description": "Keep last 30 images",
            "selection": {
                "tagStatus": "tagged",
                "tagPrefixList": ["v"],
                "countType": "imageCountMoreThan",
                "countNumber": 30
            },
            "action": {
                "type": "expire"
            }
        }
    ]
}
EOF
}

# ACM - AWS Certificate Manager
resource "aws_acm_certificate" "wildcard" {
  domain_name = "*.sportyspots.com"
  validation_method = "DNS"

  tags {
    Environment = "prd"
  }
}

### prd cert validation
resource "aws_route53_record" "wildcard-cert-validation" {
  name = "${aws_acm_certificate.wildcard.domain_validation_options.0.resource_record_name}"
  type = "${aws_acm_certificate.wildcard.domain_validation_options.0.resource_record_type}"
  zone_id = "${aws_route53_zone.prd.id}"
  records = ["${aws_acm_certificate.wildcard.domain_validation_options.0.resource_record_value}"]
  ttl = 60
}

resource "aws_acm_certificate_validation" "wildcard-cert" {
  certificate_arn = "${aws_acm_certificate.wildcard.arn}"
  validation_record_fqdns = ["${aws_route53_record.wildcard-cert-validation.fqdn}"]
}


## EC2
resource "aws_key_pair" "sportyspots-admin" {
  key_name   = "sportyspots-admin"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDJSFjROcg5VfsaXftlbAj+HC1eV5Ht25unibQqZ2c3ye+PtmeACy6p1TmNsQPMMZ+24zWSgtx8X8XSDhrgTb6IFjmEdBaEaXm8pYY+5OwafTHGR1UV9CZ8Qrog9Xikz3ufU0DRPgFkGyrlwMHHRx7bb2EAa9GMtzISwlSNwvOSZ1RusdnF5Oh+DhoiQ2mS4Z7DzfiqP3NVK5oQ7tIS+kGjxGzDV33RYO18MWU1pqG2PyozYQqthy1WEqwT85t6QnYu+62jA9qUaeKXpI8eqZ7xU74oT7MTuqUjJxMZ087GI6WcEg/5fCqZuXQ3iB3CGuMSdEXVsaPxId2PqLQM+D+Gf0G224N9yVyXSsAQuMKkwN4iKXBf+U+TRnL09H+BnQLZISkv8ZTA1iggxVqCF/Sjq8L4hDZLSRbAbUjJr3GxYjR8mq/SjFGOsO0y3W1wQQuOm0T9AE34WEWq38gyF+bW9xoKz7AXqG58Zy7vdOQvsXrDW8sUFIfGa8imraHSlzHJQBPALEDeU6+qeOXz83scE3P+O+QMC0StodkkFC0RAlxejibr1S92FdDCsmfWBihCY6WCnFSIlb8gkI1mEkGUvzzrR15RrRblhMXIM07W0BAeIFKUYcPxya5EIzmjBbo73BPTSYsLKya6i/f5qEwt2vKJKRBrsb7HPCUIVa1Lnw== admin@sportyspots.com"
}

## IAM Setup

### IAM Groups
resource "aws_iam_group" "admins" {
  name = "admins"
}

# devops user without access to console
resource "aws_iam_group" "devops" {
  name = "devops"
}

resource "aws_iam_group" "developers" {
  name = "developers"
}


### IAM Users
resource "aws_iam_user" "ashutosh" {
  name          = "ashutosh"
  force_destroy = true
}

resource "aws_iam_user_login_profile" "ashutosh" {
  user    = "${aws_iam_user.ashutosh.name}"
  pgp_key = "keybase:ashutoshb"
}

output "iam_user_ashutosh_password" {
  value = "${aws_iam_user_login_profile.ashutosh.encrypted_password}"
}

resource "aws_iam_user_ssh_key" "ashutosh" {
  username   = "${aws_iam_user.ashutosh.name}"
  encoding   = "SSH"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC9BkSIa5SGn1Mj8RJxYppkthUd8JchlhKjqrfm0t/p9bEgcUCJ4IG1h1MiMM+zhEDH5K07D5tYaAR0xUS98s/KG/Kecb5Mtc9G2Agsy7abV5sQ7UpYzC+0ziYPh4tpVGBT67YIrYaRDDNkq+3JbzPw6F7dae3avcJo9XfSK4B8VxPFpaHzs5RWL6/yFf4270Z2KYRDtFgNONnf1KmGgFmmrUn65HWCxhHipFjBJtwrjufBO1WST4WBeRETfAl9nsu/xsEoaCG0q6L72wW6gJ6a6Msx3aSO2OM4SKlnosRIHidpc2PbHkzCYjwSXOUatIK98F/QefqlnOQ7J6AKCKal ashutoshb@gmail.com"
}


### IAM User Group Membership
resource "aws_iam_group_membership" "admins" {
  name = "admin-group-membership"

  users = [
    "${aws_iam_user.ashutosh.name}"
  ]

  group = "${aws_iam_group.admins.name}"
}



### IAM Roles

data "aws_iam_policy_document" "default" {
  statement {
    sid = ""

    actions = [
      "elasticloadbalancing:DescribeInstanceHealth",
      "elasticloadbalancing:DescribeLoadBalancers",
      "elasticloadbalancing:DescribeTargetHealth",
      "ec2:DescribeInstances",
      "ec2:DescribeInstanceStatus",
      "ec2:GetConsoleOutput",
      "ec2:AssociateAddress",
      "ec2:DescribeAddresses",
      "ec2:DescribeSecurityGroups",
      "sqs:GetQueueAttributes",
      "sqs:GetQueueUrl",
      "autoscaling:DescribeAutoScalingGroups",
      "autoscaling:DescribeAutoScalingInstances",
      "autoscaling:DescribeScalingActivities",
      "autoscaling:DescribeNotificationConfigurations",
    ]

    resources = ["*"]

    effect = "Allow"
  }

  statement {
    sid = "AllowOperations"

    actions = [
      "autoscaling:AttachInstances",
      "autoscaling:CreateAutoScalingGroup",
      "autoscaling:CreateLaunchConfiguration",
      "autoscaling:DeleteLaunchConfiguration",
      "autoscaling:DeleteAutoScalingGroup",
      "autoscaling:DeleteScheduledAction",
      "autoscaling:DescribeAccountLimits",
      "autoscaling:DescribeAutoScalingGroups",
      "autoscaling:DescribeAutoScalingInstances",
      "autoscaling:DescribeLaunchConfigurations",
      "autoscaling:DescribeLoadBalancers",
      "autoscaling:DescribeNotificationConfigurations",
      "autoscaling:DescribeScalingActivities",
      "autoscaling:DescribeScheduledActions",
      "autoscaling:DetachInstances",
      "autoscaling:PutScheduledUpdateGroupAction",
      "autoscaling:ResumeProcesses",
      "autoscaling:SetDesiredCapacity",
      "autoscaling:SuspendProcesses",
      "autoscaling:TerminateInstanceInAutoScalingGroup",
      "autoscaling:UpdateAutoScalingGroup",
      "cloudwatch:PutMetricAlarm",
      "ec2:AssociateAddress",
      "ec2:AllocateAddress",
      "ec2:AuthorizeSecurityGroupEgress",
      "ec2:AuthorizeSecurityGroupIngress",
      "ec2:CreateSecurityGroup",
      "ec2:DeleteSecurityGroup",
      "ec2:DescribeAccountAttributes",
      "ec2:DescribeAddresses",
      "ec2:DescribeImages",
      "ec2:DescribeInstances",
      "ec2:DescribeKeyPairs",
      "ec2:DescribeSecurityGroups",
      "ec2:DescribeSnapshots",
      "ec2:DescribeSubnets",
      "ec2:DescribeVpcs",
      "ec2:DisassociateAddress",
      "ec2:ReleaseAddress",
      "ec2:RevokeSecurityGroupEgress",
      "ec2:RevokeSecurityGroupIngress",
      "ec2:TerminateInstances",
      "ecs:CreateCluster",
      "ecs:DeleteCluster",
      "ecs:DescribeClusters",
      "ecs:RegisterTaskDefinition",
      "elasticbeanstalk:*",
      "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
      "elasticloadbalancing:ConfigureHealthCheck",
      "elasticloadbalancing:CreateLoadBalancer",
      "elasticloadbalancing:DeleteLoadBalancer",
      "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
      "elasticloadbalancing:DescribeInstanceHealth",
      "elasticloadbalancing:DescribeLoadBalancers",
      "elasticloadbalancing:DescribeTargetHealth",
      "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
      "elasticloadbalancing:DescribeTargetGroups",
      "elasticloadbalancing:RegisterTargets",
      "elasticloadbalancing:DeregisterTargets",
      "iam:ListRoles",
      "iam:PassRole",
      "logs:CreateLogGroup",
      "logs:PutRetentionPolicy",
      "rds:DescribeDBEngineVersions",
      "rds:DescribeDBInstances",
      "rds:DescribeOrderableDBInstanceOptions",
      "s3:CopyObject",
      "s3:GetObject",
      "s3:GetObjectAcl",
      "s3:GetObjectMetadata",
      "s3:ListBucket",
      "s3:listBuckets",
      "s3:ListObjects",
      "sns:CreateTopic",
      "sns:GetTopicAttributes",
      "sns:ListSubscriptionsByTopic",
      "sns:Subscribe",
      "sqs:GetQueueAttributes",
      "sqs:GetQueueUrl",
      "codebuild:CreateProject",
      "codebuild:DeleteProject",
      "codebuild:BatchGetBuilds",
      "codebuild:StartBuild",
    ]

    resources = ["*"]

    effect = "Allow"
  }

  statement {
    sid = "AllowS3OperationsOnElasticBeanstalkBuckets"

    actions = [
      "s3:*",
    ]

    resources = [
      "arn:aws:s3:::*",
    ]

    effect = "Allow"
  }

  statement {
    sid = "AllowDeleteCloudwatchLogGroups"

    actions = [
      "logs:DeleteLogGroup",
    ]

    resources = [
      "arn:aws:logs:*:*:log-group:/aws/elasticbeanstalk*",
    ]

    effect = "Allow"
  }

  statement {
    sid = "AllowCloudformationOperationsOnElasticBeanstalkStacks"

    actions = [
      "cloudformation:*",
    ]

    resources = [
      "arn:aws:cloudformation:*:*:stack/awseb-*",
      "arn:aws:cloudformation:*:*:stack/eb-*",
    ]

    effect = "Allow"
  }
}

data "aws_iam_policy_document" "ec2" {
  statement {
    sid = ""

    actions = [
      "sts:AssumeRole",
    ]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }

    effect = "Allow"
  }

  statement {
    sid = ""

    actions = [
      "sts:AssumeRole",
    ]

    principals {
      type        = "Service"
      identifiers = ["ssm.amazonaws.com"]
    }

    effect = "Allow"
  }
}


#### Elastic Beanstalk Role
resource "aws_iam_role" "elastic_beanstalk_role" {
  name = "elastic-beanstalk-role"
  path = "/"
  assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "",
        "Effect": "Allow",
        "Principal": {
          "Service": "elasticbeanstalk.amazonaws.com"
        },
        "Action": "sts:AssumeRole",
        "Condition": {
          "StringEquals": {
            "sts:ExternalId": "elasticbeanstalk"
          }
        }
      }
    ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "elastic_beanstalk_service_attach" {
    role       = "${aws_iam_role.elastic_beanstalk_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkService"
}

resource "aws_iam_role_policy_attachment" "elastic_beanstalk_enhanced_health_attach" {
    role       = "${aws_iam_role.elastic_beanstalk_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkEnhancedHealth"
}

resource "aws_iam_instance_profile" "elastic_beanstalk_profile" {
  name  = "elastic-beanstalk-profile"
  role = "${aws_iam_role.elastic_beanstalk_role.name}"
}

#### EC2 IAM Role
resource "aws_iam_role" "ec2_role" {
  name               = "ec2-role"
  assume_role_policy = "${data.aws_iam_policy_document.ec2.json}"
}

resource "aws_iam_role_policy" "ec2_default_policy" {
  name   = "ec2-default"
  role   = "${aws_iam_role.ec2_role.id}"
  policy = "${data.aws_iam_policy_document.default.json}"
}

resource "aws_iam_role_policy_attachment" "ec2_web_tier" {
  role       = "${aws_iam_role.ec2_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/AWSElasticBeanstalkWebTier"
}

resource "aws_iam_role_policy_attachment" "ec2_worker_tier" {
  role       = "${aws_iam_role.ec2_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/AWSElasticBeanstalkWorkerTier"
}

resource "aws_iam_role_policy_attachment" "ec2_ssm" {
  role       = "${aws_iam_role.ec2_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforSSM"

  lifecycle {
    create_before_destroy = true
  }

}

resource "aws_iam_role_policy_attachment" "ec2_multi_container_docker" {
  role       = "${aws_iam_role.ec2_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/AWSElasticBeanstalkMulticontainerDocker"
}

resource "aws_iam_role_policy_attachment" "ec2_ssm_automation" {
  role       = "${aws_iam_role.ec2_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonSSMAutomationRole"

  lifecycle {
    create_before_destroy = true
  }
}

# http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.container.console.html
# http://docs.aws.amazon.com/AmazonECR/latest/userguide/ecr_managed_policies.html#AmazonEC2ContainerRegistryReadOnly
resource "aws_iam_role_policy_attachment" "ec2_ecr_readonly" {
  role       = "${aws_iam_role.ec2_role.name}"
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

# TODO: whats a good value for registration limit
resource "aws_ssm_activation" "ec2_ssm" {
  name               = "ec-ssm-activation"
  iam_role           = "${aws_iam_role.ec2_role.id}"
  registration_limit = "5"
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "ec2-instance-profile"
  role = "${aws_iam_role.ec2_role.name}"
}

/*
## ECS
resource "aws_ecs_cluster" "sportyspots" {
  name = "sportyspots"
}
*/

/*
## Elastic Beanstalk

resource "aws_elastic_beanstalk_application" "sportyspots" {
  name        = "sportyspots"
  description = "SportySpots Production Application"
}

# define elastic beanstalk app version "latest"
resource "aws_elastic_beanstalk_application_version" "sportyspots_latest" {
  name        = "latest"
  application = "${aws_elastic_beanstalk_application.sportyspots.name}"
  description = "Version latest of app sportyspots"
  bucket      = "sportyspots-prd-elastic-beanstalk"
  key         = "latest.zip"
}

resource "aws_elastic_beanstalk_environment" "prd" {
  name = "sportyspots-prd"
  application = "${aws_elastic_beanstalk_application.sportyspots.name}"
  cname_prefix = "sportyspots"
  solution_stack_name = "64bit Amazon Linux 2017.09 v2.9.1 running Multi-container Docker 17.12.0-ce (Generic)"
  tier = "WebServer"
  # version_label = "latest"

  # REF: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html#command-options-general-autoscalingasg
  setting {
    namespace = "aws:autoscaling:asg"
    name = "Availability Zones"
    value = "Any 1"
  }

  #setting {
  #  namespace = "aws:autoscaling:asg"
  #  name = "Custom Availability Zones"
  #  value = "eu-central-1"
  #}

  setting {
    namespace = "aws:autoscaling:asg"
    name = "MinSize"
    value = "1"
  }

  setting {
    namespace = "aws:autoscaling:asg"
    name = "MaxSize"
    value = "2"
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name = "EC2KeyName"
    value = "${aws_key_pair.sportyspots-admin.key_name}"
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name = "IamInstanceProfile"
    value = "${aws_iam_instance_profile.ec2_instance_profile.arn}"
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name = "InstanceType"
    value = "t2.micro"
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name = "SecurityGroups"
    value = "${aws_default_security_group.eu_central_1_prd.id}"
  }


  setting {
    namespace = "aws:ec2:vpc"
    name      = "VPCId"
    value     = "${aws_vpc.eu_central_1_prd.id}"
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = "${aws_subnet.eu_central_1a_prd.id},${aws_subnet.eu_central_1b_prd.id},${aws_subnet.eu_central_1c_prd.id}"
  }

  setting {
    namespace = "aws:ec2:vpc"
    name = "ELBSubnets"
    value = "${aws_subnet.eu_central_1a_prd.id},${aws_subnet.eu_central_1b_prd.id},${aws_subnet.eu_central_1c_prd.id}"
  }

  setting {
    namespace = "aws:ec2:vpc"
    name = "AssociatePublicIpAddress"
    value = "true"
  }

  #setting {
  #  namespace = "aws:elasticbeanstalk:application"
  #  name = "Application Healthcheck URL"
  #  value = "HTTPS:443/"
  #}

  # TODO: Add extra env variables here
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name = "ENV"
    value = "prd"
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name = "RetentionInDays"
    value = "90"
  }

  setting {
    name = "DeploymentPolicy"
    namespace = "aws:elasticbeanstalk:command"
    value = "AllAtOnce"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name = "ServiceRole"
    value = "${aws_iam_role.elastic_beanstalk_role.name}"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name = "LoadBalancerType"
    value = "application"
  }

  setting {
    namespace = "aws:elasticbeanstalk:healthreporting:system"
    name = "SystemType"
    value = "enhanced"
  }

  setting {
    namespace = "aws:elasticbeanstalk:hostmanager"
    name = "LogPublicationControl"
    value = "true"
  }

  setting {
    name = "ManagedActionsEnabled"
    namespace = "aws:elasticbeanstalk:managedactions"
    value = "true"
  }

  setting {
    namespace = "aws:elasticbeanstalk:managedactions"
    name = "PreferredStartTime"
    value = "Sun:07:00"
  }

  setting {
    namespace = "aws:elasticbeanstalk:managedactions:platformupdate"
    name = "UpdateLevel"
    value = "minor"
  }

  setting {
    namespace = "aws:elasticbeanstalk:managedactions:platformupdate"
    name = "InstanceRefreshEnabled"
    value = "true"
  }

  tags {
    Environment = "prd"
  }
}
*/
