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
