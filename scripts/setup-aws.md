# AWS Deployment Setup Guide

## Prerequisites
- AWS Account
- AWS CLI installed and configured
- Node.js 18+ installed

## Step 1: Create S3 Bucket

1. Go to AWS S3 Console
2. Create a new bucket with a unique name (e.g., `my-portfolio-site`)
3. Uncheck "Block all public access"
4. Enable static website hosting:
   - Index document: `index.html`
   - Error document: `index.html` (for SPA routing)

5. Add bucket policy for public access:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

## Step 2: Create CloudFront Distribution

1. Go to CloudFront Console
2. Create Distribution
3. Origin Settings:
   - Origin Domain: Select your S3 bucket
   - Origin Path: Leave empty
   - S3 bucket access: Yes use OAI

4. Default Cache Behavior:
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Allowed HTTP Methods: GET, HEAD
   - Cache Policy: CachingOptimized

5. Distribution Settings:
   - Price Class: Use appropriate for your needs
   - Custom Error Pages:
     - 404 -> /index.html (200 response code) for SPA routing

## Step 3: Configure GitHub Secrets

Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `S3_BUCKET_NAME`: Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

## Step 4: Deploy

### Manual Deployment
```bash
# Set environment variables
export AWS_BUCKET_NAME=your-bucket-name
export CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id

# Run deployment script
npm run deploy:aws
```

### Automatic Deployment
Push to main branch to trigger GitHub Actions workflow

## Security Best Practices

1. Use IAM user with minimal permissions:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR-BUCKET-NAME",
        "arn:aws:s3:::YOUR-BUCKET-NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

2. Rotate access keys regularly
3. Use environment-specific buckets (dev, staging, prod)
4. Enable S3 versioning for rollback capability
5. Configure CloudFront security headers

## Cost Optimization

- S3: ~$0.023 per GB/month
- CloudFront: ~$0.085 per GB transfer
- Estimated monthly cost for small portfolio: < $5

## Monitoring

1. Enable CloudWatch metrics
2. Set up billing alerts
3. Monitor CloudFront cache hit ratio
4. Track S3 request metrics