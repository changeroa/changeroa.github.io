#!/usr/bin/env node

/**
 * AWS Deployment Script
 * 
 * This script handles the deployment of the portfolio to AWS S3 and CloudFront
 * 
 * Prerequisites:
 * 1. AWS CLI installed and configured
 * 2. S3 bucket created with static website hosting enabled
 * 3. CloudFront distribution configured
 * 
 * Environment variables needed:
 * - AWS_BUCKET_NAME: S3 bucket name
 * - CLOUDFRONT_DISTRIBUTION_ID: CloudFront distribution ID
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function executeCommand(command, description) {
  try {
    log(`\n📦 ${description}...`, colors.cyan);
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed!`, colors.green);
  } catch (error) {
    log(`❌ Error during ${description}`, colors.red);
    process.exit(1);
  }
}

async function deploy() {
  log('\n🚀 Starting AWS Deployment Process', colors.bright + colors.green);
  
  // Check if dist folder exists
  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    log('❌ Build folder (dist) not found. Please run "npm run build" first.', colors.red);
    process.exit(1);
  }
  
  // Check environment variables
  const bucketName = process.env.AWS_BUCKET_NAME;
  const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;
  
  if (!bucketName) {
    log('❌ AWS_BUCKET_NAME environment variable is not set', colors.red);
    process.exit(1);
  }
  
  // Build the project
  executeCommand('npm run build', 'Building the application');
  
  // Deploy to S3
  executeCommand(
    `aws s3 sync dist/ s3://${bucketName} --delete --exclude ".git/*" --exclude ".github/*"`,
    'Deploying to S3'
  );
  
  // Invalidate CloudFront cache if distribution ID is provided
  if (distributionId) {
    executeCommand(
      `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
      'Invalidating CloudFront cache'
    );
  } else {
    log('⚠️  CloudFront distribution ID not provided. Skipping cache invalidation.', colors.yellow);
  }
  
  log('\n✨ Deployment completed successfully!', colors.bright + colors.green);
  log(`🌐 Your site should be live at: https://${bucketName}.s3-website.amazonaws.com`, colors.cyan);
  
  if (distributionId) {
    log('📡 CloudFront distribution will be updated shortly.', colors.cyan);
  }
}

// Run deployment
deploy().catch((error) => {
  log(`\n❌ Deployment failed: ${error.message}`, colors.red);
  process.exit(1);
});