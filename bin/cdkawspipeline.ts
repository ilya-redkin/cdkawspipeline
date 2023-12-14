#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkawspipelineStack } from '../lib/cdkawspipeline-stack';

const app = new cdk.App();
new CdkawspipelineStack(app, 'CdkawspipelineStack', {
  env: { account: '910999324116', region: 'us-east-1' },
});