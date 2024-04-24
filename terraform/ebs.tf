resource "aws_s3_bucket" "ebs_bucket" {
  bucket = var.s3_bucket_ebs
  tags = {
    ENVIRONMENT = var.environment
  }
}
resource "aws_s3_object" "express_api" {
  bucket = aws_s3_bucket.ebs_bucket.id
  key    = "beanstalk/deploy.zip"
  source = "../packages/api/dist.zip"
}

resource "aws_elastic_beanstalk_application" "express_api" {
  name = "my-express-api"
}

resource "aws_elastic_beanstalk_application_version" "express_api" {
  bucket      = var.s3_bucket_ebs
  key         = "beanstalk/deploy.zip"
  name        = "tf-ebs-version-label"
  application = aws_elastic_beanstalk_application.express_api.name
  description = "ExpressAPI"
  
  depends_on = [aws_s3_object.express_api]
}

resource "aws_elastic_beanstalk_environment" "express_api" {
  name                = "expressApiEnvironment"
  application         = aws_elastic_beanstalk_application.express_api.name
  solution_stack_name = "64bit Amazon Linux 2023 v6.1.3 running Node.js 20"
  tier                   = "WebServer"
  wait_for_ready_timeout = "20m"        
  setting {
    namespace = "aws:ec2:vpc"
    name      = "VPCId"
    value     = var.vpc_id
  }
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     =  "aws-elasticbeanstalk-ec2-role"
  }
  setting {
    namespace = "aws:ec2:vpc"
    name      = "AssociatePublicIpAddress"
    value     =  "True"
  }
 
  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = join(",", var.public_subnets)
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "MatcherHTTPCode"
    value     = "200"
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "InstanceType"
    value     = "t2.micro"
  }
  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MinSize"
    value     = 1
  }
  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MaxSize"
    value     = 2
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "DATABASE_URL"
    value     = ""
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "PHOTOS_BUCKET"
    value     = ""
  }
 setting {
    namespace = "aws:elasticbeanstalk:healthreporting:system"
    name      = "SystemType"
    value     = "enhanced"
  }
  
  depends_on = [aws_elastic_beanstalk_application_version.express_api]
} 