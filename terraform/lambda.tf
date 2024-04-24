resource "aws_s3_bucket" "s3_bucket_lambda" {
  bucket = var.s3_bucket_lambda
  tags = {
    ENVIRONMENT = var.environment
  }
}
resource "aws_iam_role" "resize_photo_lambda_iam" {
  name = "resize_photo-lambda-role-${var.app_name}-${var.environment}"
  assume_role_policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Principal" : {
            "Service" : "lambda.amazonaws.com"
          },
          "Action" : "sts:AssumeRole"
        }
      ]
  })


  inline_policy {
    name = "ResizePhotoLambdaPolicy-${var.environment}"

    policy = jsonencode({
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : [
            "s3:*",
            "s3-object-lambda:*"
          ],
          "Resource" : "*"
        }
      ]
    })
  }
}
resource "aws_lambda_function" "resize_photo_lambda" {
  function_name    = "Resize-Photo-${var.app_name}-${var.environment}"
  filename         = "${path.module}/lambda-source-code/resizePhoto.zip"
  source_code_hash = filebase64sha256("${path.module}/lambda-source-code/resizePhoto.zip")
  handler          = "lambda.handler"
  role             = aws_iam_role.resize_photo_lambda_iam.arn
  runtime          = "nodejs18.x"
  timeout          = 60
  description      = "${var.app_name} Resize Photo  - ${var.environment}"
  tags = {
    ENVIRONMENT = var.environment
  }
  environment {
    variables = {
      DATABASE_URL  = var.database_url
      PHOTOS_BUCKET = var.s3_bucket_lambda

    }
  }
}