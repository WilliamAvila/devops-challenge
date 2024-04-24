
variable "environment" {
  default = "dev"
}
variable "app_name" {
  default = "myapp"
}
variable "region" {
  default = "us-east-1"
}
#Frontend
variable "s3_bucket_frontend" {
  default = "my-frontend-react-app"
}
#EBS
variable "s3_bucket_ebs" {
  default = "my-ebs-bucket"
}
#RDS Instance Settings
variable "postgres_admin_username" {
  default = "myadmin"
}
variable "postgres_admin_password" {
  default = "mypassword123a"
}
variable "rds_allocated_storage" {
  default = "5"
}
variable "rds_instance_class" {
  default = "db.t3.micro"
}
variable "rds_multi_az" {
  default = "false"
}
variable "skip_final_snapshot" {
  default = "true"
}
variable "zone_id" {
  default = "Z30HKQ7PFK0NE"
}
#Lambda Environment Variables
variable "s3_bucket_lambda" {
  default = "my-resize-photo-bucket"
}
variable "database_url" {
  default = ""
}
