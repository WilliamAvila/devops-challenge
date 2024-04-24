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
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "NODE_ENV"
    value     = "production"
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
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "AWS_REGION"
    value     = ""
  }
  depends_on = [aws_elastic_beanstalk_application_version.express_api]
} 