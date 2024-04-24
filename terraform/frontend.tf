resource "aws_s3_bucket" "s3_b_frontend" {
  bucket = var.s3_bucket_frontend
  tags = {
    ENVIRONMENT = var.environment
  }
}

resource "aws_s3_bucket_website_configuration" "s3_web_config" {
  bucket = aws_s3_bucket.s3_b_frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "b_ownership_controls" {
  bucket = aws_s3_bucket.s3_b_frontend.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}
resource "aws_s3_bucket_public_access_block" "b_public_access_block" {
  bucket = aws_s3_bucket.s3_b_frontend.id

  block_public_acls   = false
  block_public_policy = false
}
resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.s3_b_frontend.id
  policy = jsonencode(
    {
      "Version" : "2008-10-17",
      "Statement" : [
        {
          "Sid" : "PublicReadGetObject",
          "Effect" : "Allow",
          "Principal" : {
            "AWS" : "*"
          },
          "Action" : "s3:GetObject",
          "Resource" : "arn:aws:s3:::${var.s3_bucket_frontend}/*"
        }
      ]
  })


  depends_on = [aws_s3_bucket_public_access_block.b_public_access_block]
}
resource "aws_s3_bucket_acl" "b_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.b_ownership_controls,
    aws_s3_bucket_public_access_block.b_public_access_block,
  ]

  bucket = aws_s3_bucket.s3_b_frontend.id
  acl    = "public-read"
}
