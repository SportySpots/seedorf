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

resource "aws_vpc" "eu_central_1_stg" {
  # cidr_block - (Required) The CIDR block for the VPC.
  cidr_block = "10.1.0.0/16"

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
    Environment = "stg"
  }
}

resource "aws_vpc" "eu_central_1_tst" {
  # cidr_block - (Required) The CIDR block for the VPC.
  cidr_block = "10.2.0.0/16"

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
    Environment = "tst"
  }
}

resource "aws_vpc" "eu_central_1_dev" {
  # cidr_block - (Required) The CIDR block for the VPC.
  cidr_block = "10.3.0.0/16"

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
    Environment = "dev"
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




# Subnet - eu-central-1[a,b,c] - stg

resource "aws_subnet" "eu_central_1a_stg" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1a"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_stg.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.1.0.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "stg"
  }

}


resource "aws_subnet" "eu_central_1b_stg" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1b"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_stg.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.1.16.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "stg"
  }

}

resource "aws_subnet" "eu_central_1c_stg" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1c"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_stg.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.1.32.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "stg"
  }

}

# Subnet - eu-central-1[a,b,c] - tst

resource "aws_subnet" "eu_central_1a_tst" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1a"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_tst.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.2.0.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "tst"
  }

}


resource "aws_subnet" "eu_central_1b_tst" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1b"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_tst.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.2.16.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "tst"
  }

}

resource "aws_subnet" "eu_central_1c_tst" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1c"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_tst.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.2.32.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "tst"
  }

}


# Subnet - eu-central-1[a,b,c] - dev

resource "aws_subnet" "eu_central_1a_dev" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1a"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_dev.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.3.0.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "dev"
  }

}


resource "aws_subnet" "eu_central_1b_dev" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1b"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_dev.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.3.16.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "dev"
  }

}

resource "aws_subnet" "eu_central_1c_dev" {
  # availability_zone- (Optional) The AZ for the subnet.
  availability_zone = "eu-central-1c"

  # vpc_id - (Required) The VPC ID.
  vpc_id = "${aws_vpc.eu_central_1_dev.id}"

  # cidr_block - (Required) The CIDR block for the subnet.
  cidr_block = "10.3.32.0/20"

  # map_public_ip_on_launch - (Optional) Specify true to indicate that instances launched into the subnet should be assigned a public IP address. Default is false.
  map_public_ip_on_launch = true

  # ipv6_cidr_block - (Optional) The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.
  # assign_ipv6_address_on_creation - (Optional) Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. Default is false

  # tags - (Optional) A mapping of tags to assign to the resource.
  tags {
    Environment = "dev"
  }

}

# Route Table

resource "aws_default_route_table" "eu_central_1_prd" {
  default_route_table_id = "${aws_vpc.eu_central_1_prd.default_route_table_id}"

  tags {
    Environment = "prd"
  }
}

resource "aws_default_route_table" "eu_central_1_stg" {
  default_route_table_id = "${aws_vpc.eu_central_1_stg.default_route_table_id}"

  tags {
    Environment = "stg"
  }
}

resource "aws_default_route_table" "eu_central_1_tst" {
  default_route_table_id = "${aws_vpc.eu_central_1_tst.default_route_table_id}"

  tags {
    Environment = "tst"
  }
}

resource "aws_default_route_table" "eu_central_1_dev" {
  default_route_table_id = "${aws_vpc.eu_central_1_dev.default_route_table_id}"

  tags {
    Environment = "dev"
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

resource "aws_internet_gateway" "eu_central_1_stg" {
  vpc_id = "${aws_vpc.eu_central_1_stg.id}"
  tags {
    Environment = "stg"
  }
}

resource "aws_internet_gateway" "eu_central_1_tst" {
  vpc_id = "${aws_vpc.eu_central_1_tst.id}"
  tags {
    Environment = "tst"
  }
}

resource "aws_internet_gateway" "eu_central_1_dev" {
  vpc_id = "${aws_vpc.eu_central_1_dev.id}"
  tags {
    Environment = "dev"
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

resource "aws_default_network_acl" "eu_central_1_stg" {
  default_network_acl_id = "${aws_vpc.eu_central_1_stg.default_network_acl_id}"

  subnet_ids = ["${aws_subnet.eu_central_1a_stg.id}",
                "${aws_subnet.eu_central_1b_stg.id}",
                "${aws_subnet.eu_central_1c_stg.id}"]

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
    Environment = "stg"
  }
}

resource "aws_default_network_acl" "eu_central_1_tst" {
  default_network_acl_id = "${aws_vpc.eu_central_1_tst.default_network_acl_id}"

  subnet_ids = ["${aws_subnet.eu_central_1a_tst.id}",
                "${aws_subnet.eu_central_1b_tst.id}",
                "${aws_subnet.eu_central_1c_tst.id}"]

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
    Environment = "tst"
  }
}

resource "aws_default_network_acl" "eu_central_1_dev" {
  default_network_acl_id = "${aws_vpc.eu_central_1_dev.default_network_acl_id}"

  subnet_ids = ["${aws_subnet.eu_central_1a_dev.id}",
                "${aws_subnet.eu_central_1b_dev.id}",
                "${aws_subnet.eu_central_1c_dev.id}"]

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
    Environment = "dev"
  }
}

### Default Security Group

resource "aws_default_security_group" "eu_central_1_prd" {
  vpc_id = "${aws_vpc.eu_central_1_prd.id}"

  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
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


resource "aws_default_security_group" "eu_central_1_stg" {
  vpc_id = "${aws_vpc.eu_central_1_stg.id}"

  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Environment = "stg"
  }
}

resource "aws_default_security_group" "eu_central_1_tst" {
  vpc_id = "${aws_vpc.eu_central_1_tst.id}"

  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Environment = "tst"
  }
}

resource "aws_default_security_group" "eu_central_1_dev" {
  vpc_id = "${aws_vpc.eu_central_1_dev.id}"

  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Environment = "dev"
  }
}

## S3 Buckets

resource "aws_s3_bucket" "logs" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-logs"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "log-delivery-write"

  tags {
    Environment = "ops"
  }
}

resource "aws_s3_bucket" "config" {
  region = "${var.default_aws_region}"
  bucket = "sportyspots-config"

  # REF: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
  acl    = "private"

  versioning {
    enabled = true
  }

  logging {
    target_bucket = "${aws_s3_bucket.logs.id}"
    target_prefix = "logs/configs/"
  }

  tags {
    Environment = "ops"
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
  name    = "@"
  type    = "A"
  ttl     = "300"
  records = ["52.85.62.129"]
}

resource "aws_route53_record" "mx-gandi" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "@"
  type    = "MX"
  ttl     = "300"
  records = [
    "10 spool.mail.gandi.net.",
    "50 fb.mail.gandi.net."
  ]
}

resource "aws_route53_record" "txt-gandi-spf" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "@"
  type    = "TXT"
  ttl     = "300"
  records = [
    "v=spf1 include:_mailcust.gandi.net ?all"
  ]
}

resource "aws_route53_record" "txt-google-verification" {
  zone_id = "${aws_route53_zone.prd.zone_id}"
  name    = "@"
  type    = "TXT"
  ttl     = "300"
  records = [
    "google-site-verification=Rrn1qnVhrS32n_FVJQgcyRqfueBCv9cZSGDow-2KETs"
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

#resource "aws_route53_record" "cname-www" {
#  zone_id = "${aws_route53_zone.prd.zone_id}"
#  name    = "www"
#  type    = "CNAME"
#  ttl     = "300"
#  records = ["d1wlhp2yjktro3.cloudfront.net."]
#}

#resource "aws_route53_record" "cname-cloudfront-website-acm-validation-1" {
#  zone_id = "${aws_route53_zone.prd.zone_id}"
#  name    = "_cefcb3fef89a600535ada5f1acd9cbc8.www"
#  type    = "CNAME"
#  ttl     = "300"
#  records = ["_d087855d050e7e17fac3d28a6ed043f0.acm-validations.aws."]
#}

#resource "aws_route53_record" "cname-cloudfront-website-acm-validation-2" {
#  zone_id = "${aws_route53_zone.prd.zone_id}"
#  name    = "_f27fb96223e454b8147243095cec387c"
#  type    = "CNAME"
#  ttl     = "300"
#  records = ["_6a8ea2983012ac9ec9a56074ed6923d6.acm-validations.aws."]
#}

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


## ACM - AWS Certificate Manager
#resource "aws_acm_certificate" "wildcard" {
#  domain_name = "*.sportyspots.com"
#  validation_method = "DNS"
#
#  tags {
#    Environment = "prd"
#  }
#}

#resource "aws_acm_certificate" "stg" {
#  domain_name = "stg.sportyspots.com"
#  validation_method = "DNS"
#  subject_alternative_names = [
#    "api.stg.sportyspots.com",
#    "www.stg.sportyspots.com"
#  ]
#
#  tags {
#    Environment = "stg"
#  }
#}

#resource "aws_acm_certificate" "tst" {
#  domain_name = "tst.sportyspots.com"
#  validation_method = "DNS"
#  subject_alternative_names = [
#    "api.tst.sportyspots.com",
#    "www.tst.sportyspots.com"
#  ]
#
# tags {
#    Environment = "tst"
#  }
#}

#resource "aws_acm_certificate" "dev" {
#  domain_name = "dev.sportyspots.com"
#  validation_method = "DNS"
#  subject_alternative_names = [
#    "api.dev.sportyspots.com",
#    "www.dev.sportyspots.com"
#  ]
#
#  tags {
#    Environment = "dev"
#  }
#}

### prd cert validation
#resource "aws_route53_record" "wildcard-cert-validation" {
#  name = "${aws_acm_certificate.wildcard.domain_validation_options.0.resource_record_name}"
#  type = "${aws_acm_certificate.wildcard.domain_validation_options.0.resource_record_type}"
#  zone_id = "${aws_route53_zone.prd.id}"
#  records = ["${aws_acm_certificate.wildcard.domain_validation_options.0.resource_record_value}"]
#  ttl = 60
#}

#resource "aws_acm_certificate_validation" "wildcard-cert" {
#  certificate_arn = "${aws_acm_certificate.wildcard.arn}"
#  validation_record_fqdns = ["${aws_route53_record.wildcard-cert-validation.fqdn}"]
#}

### stg cert validation
#resource "aws_route53_record" "stg-cert-validation" {
#  name = "${aws_acm_certificate.stg.domain_validation_options.0.resource_record_name}"
#  type = "${aws_acm_certificate.stg.domain_validation_options.0.resource_record_type}"
#  zone_id = "${aws_route53_zone.stg.id}"
#  records = ["${aws_acm_certificate.stg.domain_validation_options.0.resource_record_value}"]
#  ttl = 60
#}

#resource "aws_acm_certificate_validation" "stg-cert" {
#  certificate_arn = "${aws_acm_certificate.stg.arn}"
#  validation_record_fqdns = ["${aws_route53_record.stg-cert-validation.fqdn}"]
#}

### tst cert validation
#resource "aws_route53_record" "tst-cert-validation" {
#  name = "${aws_acm_certificate.tst.domain_validation_options.0.resource_record_name}"
#  type = "${aws_acm_certificate.tst.domain_validation_options.0.resource_record_type}"
#  zone_id = "${aws_route53_zone.tst.id}"
#  records = ["${aws_acm_certificate.tst.domain_validation_options.0.resource_record_value}"]
#  ttl = 60
#}

#resource "aws_acm_certificate_validation" "tst-cert" {
#  certificate_arn = "${aws_acm_certificate.tst.arn}"
#  validation_record_fqdns = ["${aws_route53_record.tst-cert-validation.fqdn}"]
#}

### dev cert validation
#resource "aws_route53_record" "dev-cert-validation" {
#  name = "${aws_acm_certificate.dev.domain_validation_options.0.resource_record_name}"
#  type = "${aws_acm_certificate.dev.domain_validation_options.0.resource_record_type}"
#  zone_id = "${aws_route53_zone.dev.id}"
#  records = ["${aws_acm_certificate.dev.domain_validation_options.0.resource_record_value}"]
#  ttl = 60
#}

#resource "aws_acm_certificate_validation" "dev-cert" {
#  certificate_arn = "${aws_acm_certificate.dev.arn}"
#  validation_record_fqdns = ["${aws_route53_record.dev-cert-validation.fqdn}"]
#}
