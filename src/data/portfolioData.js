export const personalInfo = {
  name: "Piyarul Sekh",
  handle: "Piyarul7290",
  title: "Data Analyst & Cloud Specialist",
  tagline: "Bridging Enterprise Analytics, Business Intelligence & Scalable Cloud Infrastructure",
  bio: "Computer Science & Engineering student specializing in Data Analytics, Business Intelligence, and Cloud/DevOps Engineering. Passionate about transforming messy, high-volume datasets into clean, actionable insights and architecting resilient, automated cloud data pipelines on AWS.",
  location: "India",
  email: "piyarusekh7290@gmail.com",
  github: "https://github.com/Piyarul7290",
  linkedin: "https://www.linkedin.com/in/piyarulsekh/",
  status: "Open to Full-Time & Internship Opportunities",
  quote: "Without data, you're just another person with an opinion.",
  quoteAuthor: "W. Edwards Deming"
};

export const keyMetrics = [
  { label: "Data Records Processed", value: "500K+", subtext: "E-Commerce & Transaction Logs" },
  { label: "Fraud Detection Precision", value: "92%", subtext: "ML & Anomaly Clustering" },
  { label: "Cloud Uptime & Reliability", value: "99.9%", subtext: "Automated AWS & Monitoring" },
  { label: "Query Speed Optimization", value: "35%+", subtext: "CTEs & Index Tuning" }
];

export const interactiveChartData = {
  monthlyTrends: [
    { month: "Jan", revenue: 42000, target: 38000, activeUsers: 2400, cloudCost: 420 },
    { month: "Feb", revenue: 48500, target: 41000, activeUsers: 2850, cloudCost: 450 },
    { month: "Mar", revenue: 56200, target: 45000, activeUsers: 3400, cloudCost: 490 },
    { month: "Apr", revenue: 53100, target: 47000, activeUsers: 3300, cloudCost: 480 },
    { month: "May", revenue: 64500, target: 51000, activeUsers: 4100, cloudCost: 520 },
    { month: "Jun", revenue: 72000, target: 55000, activeUsers: 4800, cloudCost: 560 },
    { month: "Jul", revenue: 69800, target: 58000, activeUsers: 4650, cloudCost: 540 },
    { month: "Aug", revenue: 81200, target: 62000, activeUsers: 5300, cloudCost: 610 },
    { month: "Sep", revenue: 89400, target: 67000, activeUsers: 5950, cloudCost: 640 },
    { month: "Oct", revenue: 95800, target: 72000, activeUsers: 6400, cloudCost: 680 }
  ],
  rfmSegments: [
    { name: "Champions & VIPs", count: 1850, percentage: 22, color: "#06B6D4" },
    { name: "Loyal Customers", count: 2420, percentage: 29, color: "#3B82F6" },
    { name: "Potential Loyalists", count: 1680, percentage: 20, color: "#8B5CF6" },
    { name: "At-Risk / Inactive", count: 1420, percentage: 17, color: "#F59E0B" },
    { name: "Hibernating Churn", count: 1010, percentage: 12, color: "#EF4444" }
  ],
  cloudResourceMetrics: [
    { hour: "00:00", cpuUsage: 28, memoryUsage: 45, networkIO: 120, latencyMs: 38 },
    { hour: "04:00", cpuUsage: 22, memoryUsage: 42, networkIO: 95, latencyMs: 35 },
    { hour: "08:00", cpuUsage: 64, memoryUsage: 68, networkIO: 380, latencyMs: 44 },
    { hour: "12:00", cpuUsage: 86, memoryUsage: 82, networkIO: 560, latencyMs: 52 },
    { hour: "16:00", cpuUsage: 78, memoryUsage: 76, networkIO: 490, latencyMs: 48 },
    { hour: "20:00", cpuUsage: 54, memoryUsage: 62, networkIO: 310, latencyMs: 41 }
  ],
  skillRadar: [
    { subject: "SQL & Relational DBs", A: 95, fullMark: 100 },
    { subject: "Python & Data Wrangling", A: 90, fullMark: 100 },
    { subject: "Power BI & DAX", A: 88, fullMark: 100 },
    { subject: "AWS Cloud Services", A: 84, fullMark: 100 },
    { subject: "Terraform & IaC", A: 80, fullMark: 100 },
    { subject: "Docker & Linux Ops", A: 82, fullMark: 100 }
  ]
};

export const pipelineStages = [
  {
    id: "ingestion",
    title: "1. Data Ingestion & Streaming",
    icon: "Database",
    status: "Healthy",
    throughput: "12.4 MB/s",
    tech: ["PostgreSQL CDC", "REST APIs", "AWS CloudWatch", "Python Scrapers"],
    description: "Multi-source ingestion pipeline pulling raw transactional streams, telemetry events, and relational change data.",
    cloudDetails: "AWS API Gateway & EventBridge routing into partitioned buffer buckets."
  },
  {
    id: "lakehouse",
    title: "2. Cloud Storage & Lakehouse",
    icon: "Cloud",
    status: "Encrypted (KMS)",
    throughput: "99.999% SLA",
    tech: ["AWS S3 Buckets", "Data Lakehouse", "Parquet Format", "Lifecycle Rules"],
    description: "Raw, Bronze, and Silver layer isolation with automatic tiering to S3 Glacier for audit compliance.",
    cloudDetails: "Terraform-provisioned S3 with KMS SSE-C encryption and strict IAM boundary policies."
  },
  {
    id: "processing",
    title: "3. ETL Wrangling & Orchestration",
    icon: "Cpu",
    status: "Automated",
    throughput: "Sub-second processing",
    tech: ["Python (Pandas / NumPy)", "Docker Containers", "Terraform", "Jenkins CI/CD"],
    description: "Automated data transformation, deduplication, missing value imputation, and feature engineering jobs.",
    cloudDetails: "Containerized batch workloads running on auto-scaled EC2 compute within a custom AWS VPC."
  },
  {
    id: "warehouse",
    title: "4. Data Mart & Modeling",
    icon: "Server",
    status: "Indexed",
    throughput: "35% Faster CTEs",
    tech: ["PostgreSQL", "Star Schema", "Window Functions", "Materialized Views"],
    description: "Analytical data warehouse structured with dimensional star schema, fact tables, and optimized indices for BI querying.",
    cloudDetails: "Multi-AZ RDS PostgreSQL with read replicas and automated daily snapshot backups."
  },
  {
    id: "bi_insights",
    title: "5. BI Dashboards & Decision AI",
    icon: "BarChart3",
    status: "Live Refresh",
    throughput: "Real-time KPIs",
    tech: ["Power BI", "DAX Measures", "Interactive Plotly", "Scikit-Learn"],
    description: "Executive scorecards, customer cohort retention visualizers, and predictive anomaly risk heatmaps.",
    cloudDetails: "Automated scheduled gateway refresh delivering reports straight to decision makers."
  }
];

export const projects = [
  {
    id: "ecommerce-rfm",
    title: "E-Commerce Customer Segmentation & RFM Analysis",
    subtitle: "Behavioral Analytics & Churn Prediction",
    category: "Data Analytics",
    github: "https://github.com/Piyarul7290",
    featured: true,
    badge: "Analytics & ML",
    tags: ["Python", "Pandas", "Power BI", "Scikit-Learn", "DAX", "Seaborn"],
    summary: "Conducted deep Recency, Frequency & Monetary (RFM) segmentation across 500k+ transactional records to pinpoint VIP buyer clusters and quantify churn risk factors.",
    metrics: [
      { label: "Transactions", val: "500K+" },
      { label: "VIP Segment", val: "Top 15%" },
      { label: "Retention Lift", val: "+18%" }
    ],
    deepDive: {
      problem: "The retail business suffered from generic mass email campaigns with high unsubscribe rates and low repurchase conversions across varying customer lifecycles.",
      solution: "Engineered an RFM segmentation scoring algorithm in Python. Normalized scores into quintiles, classified customers into 5 distinct behavioral tiers, and exported clean dimension tables to Power BI.",
      businessImpact: "Helped focus marketing budget toward high-LTV VIPs while implementing automated early-warning triggers for at-risk accounts.",
      codeSnippet: `# RFM Quintile Scoring Logic in Python
def compute_rfm_scores(df, snapshot_date):
    rfm = df.groupby('customer_id').agg({
        'order_date': lambda x: (snapshot_date - x.max()).days,
        'order_id': 'count',
        'total_amount': 'sum'
    }).rename(columns={
        'order_date': 'Recency',
        'order_id': 'Frequency',
        'total_amount': 'Monetary'
    })
    
    # 1 to 5 Quantile Scoring
    rfm['R_Score'] = pd.qcut(rfm['Recency'], 5, labels=[5, 4, 3, 2, 1])
    rfm['F_Score'] = pd.qcut(rfm['Frequency'].rank(method='first'), 5, labels=[1, 2, 3, 4, 5])
    rfm['M_Score'] = pd.qcut(rfm['Monetary'], 5, labels=[1, 2, 3, 4, 5])
    return rfm`
    }
  },
  {
    id: "executive-sales-bi",
    title: "Executive Sales & Revenue KPI Dashboard",
    subtitle: "Enterprise Business Intelligence & DAX Modeling",
    category: "Data Analytics",
    github: "https://github.com/Piyarul7290",
    featured: true,
    badge: "Power BI Core",
    tags: ["Power BI", "DAX", "PostgreSQL", "Excel", "Data Modeling", "ETL"],
    summary: "Architected an interactive multi-page Power BI dashboard tracking MoM sales trends, regional profit margins, and inventory turnaround with automated refresh logic.",
    metrics: [
      { label: "Sales Analyzed", val: "$4.2M" },
      { label: "DAX Measures", val: "24+" },
      { label: "Refresh Latency", val: "Automated" }
    ],
    deepDive: {
      problem: "Executive leadership lacked real-time visibility into regional margin leaks, product line velocity, and month-over-month variances across global distribution centers.",
      solution: "Modeled a Star Schema with FactSales and DimDate, DimProduct, DimStore. Formulated dynamic time-intelligence DAX measures (YTD, Prior Year, MoM Growth %, Pareto 80/20).",
      businessImpact: "Reduced weekly executive reporting compilation time from 6 hours to 0 via automated gateway updates.",
      codeSnippet: `// DAX Time-Intelligence Variance Measure
Revenue MoM Growth % = 
VAR CurrentMonthRev = [Total Net Revenue]
VAR PriorMonthRev = CALCULATE([Total Net Revenue], DATEADD('DimDate'[Date], -1, MONTH))
RETURN
    DIVIDE(CurrentMonthRev - PriorMonthRev, PriorMonthRev, 0)`
    }
  },
  {
    id: "terraform-vpc-ec2",
    title: "AWS Multi-Tier VPC & Cloud Infrastructure",
    subtitle: "Infrastructure as Code (IaC) & Cloud Architecture",
    category: "Cloud & DevOps",
    github: "https://github.com/Piyarul7290/terraform-vpc-ec2",
    featured: true,
    badge: "AWS & Terraform",
    tags: ["Terraform", "AWS", "VPC", "EC2", "HCL", "Security Groups", "DevOps"],
    summary: "Production-ready Infrastructure as Code provisioning an isolated AWS VPC, public/private subnets, NAT Gateways, Internet Gateway, and secure EC2 compute nodes.",
    metrics: [
      { label: "Cloud Provider", val: "AWS" },
      { label: "IaC Engine", val: "Terraform" },
      { label: "Subnets", val: "Multi-AZ" }
    ],
    deepDive: {
      problem: "Manual AWS console provisioning caused configuration drift, inconsistent security group rules, and accidental exposure of internal data nodes to the public internet.",
      solution: "Wrote modular Terraform configs with variable parametrization, remote state locking via S3/DynamoDB, and hardened bastion host configurations.",
      businessImpact: "Spun up repeatable, production-grade cloud environments in under 3 minutes with zero manual error.",
      codeSnippet: `# AWS VPC & Multi-Tier Subnets in Terraform
resource "aws_vpc" "analytics_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = {
    Name        = "analytics-production-vpc"
    Environment = "Prod"
  }
}

resource "aws_subnet" "private_data_subnet" {
  vpc_id            = aws_vpc.analytics_vpc.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "ap-south-1a"
  tags = { Name = "private-data-warehouse-sub" }
}`
    }
  },
  {
    id: "python-server-monitor",
    title: "Automated Cloud Server & Health Monitor",
    subtitle: "Real-time Infrastructure Telemetry & Alerts",
    category: "Cloud & DevOps",
    github: "https://github.com/Piyarul7290/python-server-monitor",
    featured: true,
    badge: "Cloud Monitoring",
    tags: ["Python", "Linux", "System Telemetry", "Sockets", "Alerting", "DevOps"],
    summary: "Lightweight, resilient server monitoring daemon tracking CPU, memory saturation, disk I/O, network latency, and triggering automated threshold alerts.",
    metrics: [
      { label: "Heartbeat", val: "Every 5s" },
      { label: "Resource Footprint", val: "<15MB" },
      { label: "Alert Latency", val: "<500ms" }
    ],
    deepDive: {
      problem: "Cloud servers hosting analytical microservices would occasionally encounter memory leaks or disk spikes during ETL jobs, leading to unannounced outages.",
      solution: "Built a Python-based background monitoring agent utilizing psutil and Linux proc filesystem. Sends alert webhooks whenever thresholds exceed 85% for 3 consecutive intervals.",
      businessImpact: "Eliminated silent server crashes and provided actionable diagnostic logs for rapid root-cause remediation.",
      codeSnippet: `# Telemetry Monitor Loop in Python
import psutil, time, logging

def audit_server_health(cpu_limit=85.0, mem_limit=90.0):
    cpu = psutil.cpu_percent(interval=1)
    mem = psutil.virtual_memory().percent
    disk = psutil.disk_usage('/').percent
    
    if cpu > cpu_limit or mem > mem_limit:
        trigger_cloud_alert(f"RESOURCE CRITICAL: CPU {cpu}%, RAM {mem}%")
    return {"cpu": cpu, "memory": mem, "disk": disk}`
    }
  },
  {
    id: "fraud-anomaly-detection",
    title: "Financial Transactions & Fraud Anomaly Detection",
    subtitle: "SQL Window Functions & Scikit-Learn Modeling",
    category: "Data Analytics",
    github: "https://github.com/Piyarul7290",
    featured: false,
    badge: "FinTech & Risk",
    tags: ["SQL", "PostgreSQL", "Python", "Scikit-Learn", "Window Functions"],
    summary: "Extracted transactional behavioral velocity using advanced SQL CTEs & window functions; identified high-risk fraudulent clusters with 92% classification precision.",
    metrics: [
      { label: "Precision", val: "92%" },
      { label: "SQL CTEs", val: "5-Tier" },
      { label: "False Positive Reduction", val: "40%" }
    ],
    deepDive: {
      problem: "Traditional rule-based fraud flags generated overwhelming false positives, exhausting investigation teams and delaying legitimate payments.",
      solution: "Employed rolling window SQL functions to compute rolling 1-hour and 24-hour spend velocity per cardholder, feeding normalized statistical features into anomaly detection algorithms.",
      businessImpact: "Improved high-risk account flagging accuracy by 92% while cutting false positive alerts by 40%.",
      codeSnippet: `-- SQL Window Function for Spend Velocity Outliers
WITH CardholderVelocity AS (
    SELECT 
        transaction_id,
        user_id,
        amount,
        created_at,
        AVG(amount) OVER(
            PARTITION BY user_id 
            ORDER BY created_at 
            ROWS BETWEEN 30 PRECEDING AND 1 PRECEDING
        ) AS rolling_avg_spend,
        COUNT(transaction_id) OVER(
            PARTITION BY user_id 
            ORDER BY created_at 
            RANGE BETWEEN INTERVAL '1 HOUR' PRECEDING AND CURRENT ROW
        ) AS hourly_tx_count
    FROM transactions
)
SELECT * FROM CardholderVelocity 
WHERE amount > (rolling_avg_spend * 4.5) AND hourly_tx_count > 5;`
    }
  },
  {
    id: "devops-cicd-pipeline",
    title: "Cloud CI/CD DevOps Pipeline",
    subtitle: "Automated Build, Test & Deployment Automation",
    category: "Cloud & DevOps",
    github: "https://github.com/Piyarul7290/devops-project",
    featured: false,
    badge: "DevOps & CI/CD",
    tags: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Bash", "Node.js"],
    summary: "End-to-end automated deployment pipeline incorporating code linting, automated container builds, image scanning, and zero-downtime deployment orchestration.",
    metrics: [
      { label: "Deploy Time", val: "3.5 min" },
      { label: "Testing", val: "Automated" },
      { label: "Downtime", val: "Zero" }
    ],
    deepDive: {
      problem: "Manual FTP and SSH deployments led to broken configuration files, inconsistent environments between testing and production, and high developer downtime.",
      solution: "Created an automated Jenkins / GitHub Actions pipeline with containerized Docker build steps, security image linting, and automated webhook triggers on main branch merges.",
      businessImpact: "Cut release cycle times from hours to under 4 minutes with fully auditable artifact versions.",
      codeSnippet: `// Jenkinsfile Stage Definition
pipeline {
    agent any
    stages {
        stage('Lint & Unit Test') {
            steps { sh 'npm run test:ci' }
        }
        stage('Docker Build & Push') {
            steps {
                sh 'docker build -t piyarul7290/data-app:\${BUILD_NUMBER} .'
                sh 'docker push piyarul7290/data-app:\${BUILD_NUMBER}'
            }
        }
    }
}`
    }
  },
  {
    id: "hr-attrition-analytics",
    title: "HR Workforce Analytics & Employee Attrition Study",
    subtitle: "Exploratory Data Analysis & Statistical Inference",
    category: "Data Analytics",
    github: "https://github.com/Piyarul7290",
    featured: false,
    badge: "People Analytics",
    tags: ["Python", "Statsmodels", "Plotly", "Hypothesis Testing", "EDA"],
    summary: "Analyzed attrition dynamics across 10+ corporate departments; uncovered pay disparity, overtime duration, and manager tenure as primary drivers of employee turnover.",
    metrics: [
      { label: "Departments", val: "10+" },
      { label: "Key Factors", val: "Top 3 Isolated" },
      { label: "EDA Charts", val: "15+" }
    ],
    deepDive: {
      problem: "Corporate client experienced high tech staff turnover without clarity on whether salary, management, or work-life balance was the primary driver.",
      solution: "Conducted rigorous hypothesis testing (Chi-square and T-tests) alongside correlation heatmaps and logistic regression feature importance to identify attrition drivers.",
      businessImpact: "Provided actionable HR policy recommendations to restructure overtime compensation and retention bonuses for key roles.",
      codeSnippet: `# Correlation & Feature Significance
import statsmodels.api as sm
def analyze_attrition_drivers(df):
    X = df[['MonthlyIncome', 'OverTime_Binary', 'YearsAtCompany', 'JobSatisfaction']]
    y = df['Attrition_Binary']
    X = sm.add_constant(X)
    logit_model = sm.Logit(y, X).fit()
    return logit_model.summary()`
    }
  }
];

export const skillCategories = [
  {
    category: "Data Analytics & Business Intelligence",
    description: "Transforming raw records into executive decisions and actionable storytelling.",
    icon: "BarChart2",
    skills: [
      { name: "Power BI & DAX", level: 90, desc: "Complex DAX measures, time intelligence, data modeling, star schemas" },
      { name: "Exploratory Data Analysis (EDA)", level: 95, desc: "Outlier detection, distributions, missing value imputation, profiling" },
      { name: "Tableau & Dashboarding", level: 85, desc: "Interactive dashboards, parameters, drill-down stories" },
      { name: "Statistical Modeling", level: 82, desc: "Hypothesis testing, correlation analysis, regression & clustering" },
      { name: "Advanced Excel", level: 92, desc: "XLOOKUP, Power Query, Pivot Tables, financial modeling" }
    ]
  },
  {
    category: "Cloud Infrastructure & DevOps",
    description: "Architecting resilient, secure, and automated cloud computing backbones.",
    icon: "CloudRain",
    skills: [
      { name: "Amazon Web Services (AWS)", level: 86, desc: "EC2, S3, RDS, VPC, Lambda, CloudWatch, IAM, Security Groups" },
      { name: "Terraform (IaC)", level: 82, desc: "Multi-tier infrastructure automation, state management, modular templates" },
      { name: "Docker & Containerization", level: 85, desc: "Dockerfile optimization, multi-stage builds, container isolation" },
      { name: "Linux & Bash Scripting", level: 88, desc: "System administration, daemon scripting, performance profiling" },
      { name: "CI/CD & Jenkins", level: 80, desc: "Pipeline as code, automated testing gates, GitHub Actions" }
    ]
  },
  {
    category: "Databases & Query Optimization",
    description: "Engineering robust relational stores and high-throughput query structures.",
    icon: "Database",
    skills: [
      { name: "SQL (PostgreSQL / MySQL)", level: 94, desc: "CTEs, Window Functions, Complex Joins, Indexing, Query Plans" },
      { name: "Database Schema Design", level: 88, desc: "Normalization (1NF-3NF), Star & Snowflake Dimensional Schemas" },
      { name: "ETL & Pipeline Engineering", level: 86, desc: "Batch ingestion, data validation, transformation logic" }
    ]
  },
  {
    category: "Programming & Data Science",
    description: "Writing clean, maintainable Python and algorithmic logic for data wrangling.",
    icon: "Terminal",
    skills: [
      { name: "Python", level: 92, desc: "Pandas, NumPy, Scikit-Learn, Seaborn, Matplotlib, Requests" },
      { name: "Git & Version Control", level: 90, desc: "Branching strategies, collaborative pull requests, release tagging" },
      { name: "Data Structures & Algorithms", level: 84, desc: "Efficient algorithmic complexity, caching, scalable data structures" }
    ]
  }
];

export const codePlaygroundSnippets = [
  {
    id: "sql-window",
    title: "SQL: Advanced Window Functions & CTEs",
    language: "sql",
    badge: "Database Optimization",
    description: "Multi-tier CTE computing customer lifetime spend percentiles, rolling averages, and purchase intervals to spot top churn risks.",
    code: `-- Executive Customer Cohort & Churn Risk Analysis
WITH CustomerTransactions AS (
    SELECT 
        c.customer_id,
        c.customer_name,
        c.region,
        o.order_id,
        o.order_date,
        o.order_amount,
        -- Calculate lag between current and previous order in days
        EXTRACT(DAY FROM o.order_date - LAG(o.order_date) OVER(
            PARTITION BY c.customer_id 
            ORDER BY o.order_date
        )) AS days_since_last_order,
        -- Rolling 90-day spend
        SUM(o.order_amount) OVER(
            PARTITION BY c.customer_id 
            ORDER BY o.order_date 
            RANGE BETWEEN INTERVAL '90 DAYS' PRECEDING AND CURRENT ROW
        ) AS rolling_90d_spend
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
),
RankedCohorts AS (
    SELECT 
        customer_id,
        customer_name,
        region,
        COUNT(order_id) AS total_orders,
        ROUND(AVG(days_since_last_order), 1) AS avg_order_cadence,
        MAX(rolling_90d_spend) AS peak_90d_spend,
        NTILE(5) OVER(ORDER BY MAX(rolling_90d_spend) DESC) AS ltv_tier
    FROM CustomerTransactions
    GROUP BY customer_id, customer_name, region
)
SELECT 
    customer_name,
    region,
    total_orders,
    avg_order_cadence,
    peak_90d_spend,
    CASE 
        WHEN ltv_tier = 1 AND avg_order_cadence > 45 THEN 'VIP At Churn Risk'
        WHEN ltv_tier = 1 THEN 'Active Champion VIP'
        WHEN ltv_tier IN (2, 3) THEN 'High Potential Growth'
        ELSE 'Casual Low Frequency'
    END AS cohort_classification
FROM RankedCohorts
ORDER BY peak_90d_spend DESC;`
  },
  {
    id: "python-etl",
    title: "Python: Streaming Data Cleaning & Outlier Imputation",
    language: "python",
    badge: "Data Wrangling",
    description: "Production data sanitation pipeline utilizing IQR outlier clipping, categorical mode imputation, and automated data quality checks.",
    code: `import pandas as pd
import numpy as np
from datetime import datetime

class DataSanitizerPipeline:
    """Production-grade data wrangling and outlier normalization"""
    def __init__(self, iqr_multiplier: float = 1.5):
        self.iqr_multiplier = iqr_multiplier
        self.quality_report = {}

    def fit_transform(self, df: pd.DataFrame) -> pd.DataFrame:
        clean_df = df.copy()
        
        # 1. Clean missing values with domain logic
        numeric_cols = clean_df.select_dtypes(include=[np.number]).columns
        for col in numeric_cols:
            median_val = clean_df[col].median()
            clean_df[col] = clean_df[col].fillna(median_val)
            
            # 2. Outlier Detection via IQR
            q1 = clean_df[col].quantile(0.25)
            q3 = clean_df[col].quantile(0.75)
            iqr = q3 - q1
            lower_bound = q1 - (self.iqr_multiplier * iqr)
            upper_bound = q3 + (self.iqr_multiplier * iqr)
            
            outliers_detected = ((clean_df[col] < lower_bound) | (clean_df[col] > upper_bound)).sum()
            self.quality_report[col] = {
                "median": median_val,
                "outliers_clipped": int(outliers_detected)
            }
            # Clip bounds to preserve record integrity
            clean_df[col] = np.clip(clean_df[col], lower_bound, upper_bound)

        print(f"[{datetime.now()}] Data pipeline completed successfully.")
        return clean_df`
  },
  {
    id: "terraform-iac",
    title: "Terraform: Cloud VPC & Subnet Automation",
    language: "hcl",
    badge: "Cloud IaC",
    description: "Terraform configuration establishing an enterprise-grade Virtual Private Cloud (VPC) with high-availability subnets across AWS Availability Zones.",
    code: `terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Provision Core Isolated VPC
resource "aws_vpc" "data_analytics_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "piyarul-analytics-vpc"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# Public Subnet for Ingestion API Gateway
resource "aws_subnet" "public_ingestion_1" {
  vpc_id                  = aws_vpc.data_analytics_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "\${var.aws_region}a"
  map_public_ip_on_launch = true

  tags = { Name = "public-ingestion-subnet-1" }
}

# Private Subnet for Analytical Database
resource "aws_subnet" "private_database_1" {
  vpc_id            = aws_vpc.data_analytics_vpc.id
  cidr_block        = "10.0.10.0/24"
  availability_zone = "\${var.aws_region}a"

  tags = { Name = "private-warehouse-subnet-1" }
}`
  }
];
