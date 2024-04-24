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



data "aws_cloudfront_cache_policy" "cdn_managed-caching-optimized_policy" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_response_headers_policy" "cdn_managed-cors-with-preflight_policy" {
  name = "Managed-CORS-With-Preflight"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.s3_b_frontend.bucket_regional_domain_name
    origin_id                = "${var.s3_bucket_frontend}-S3WebOrigin"
  }

  enabled             = true
  is_ipv6_enabled     = false
  comment             = "${var.app_name} react website - ${var.environment}"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD","OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${var.s3_bucket_frontend}-S3WebOrigin"
    cache_policy_id = data.aws_cloudfront_cache_policy.cdn_managed-caching-optimized_policy.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.cdn_managed-cors-with-preflight_policy.id
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
   custom_error_response {
      error_code          = 404
      response_code       = 200
      response_page_path  = "/index.html"
      error_caching_min_ttl = 10
  }
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }
}



