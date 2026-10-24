export const DATA = {
  name: "Piyarul Sekh",
  title: "Data Analyst & Cloud Specialist",
  tagline: "Translating high-volume data streams into decision intelligence & scalable AWS cloud pipelines.",
  email: "piyarusekh7290@gmail.com",
  phone: "+91 98765 43210", // Placeholder or editable by user
  phoneRaw: "9876543210",
  location: "India (Open to Remote & Global Relocation)",
  status: "Available for Data Analyst, BI & Cloud Engineering Roles",
  availability: "Open to Full-Time Positions, Internships & High-Impact Projects",
  yearsOfExperience: "Hands-on Analytical & Cloud Focus",
  githubUsername: "Piyarul7290",
  links: {
    github: "https://github.com/Piyarul7290",
    linkedin: "https://www.linkedin.com/in/piyarulsekh/",
    email: "mailto:piyarusekh7290@gmail.com",
  },
  bio: "Data Analytics • SQL (PostgreSQL) • Power BI (DAX) • Python • AWS Cloud • Terraform • Docker",
  about: `I am a Computer Science & Engineering student with a core specialization in Data Analytics, Business Intelligence, and Cloud/DevOps Engineering.

I bridge the gap between disorganized raw data and strategic business choices—transforming millions of transaction records into clean analytical data marts, interactive Power BI dashboards, and predictive risk models.

On the infrastructure side, I architect automated, reproducible cloud environments on AWS using Terraform IaC, containerize analytical workloads with Docker, and build background telemetry monitors to ensure 99.9% uptime.`,
  
  quote: "Without data, you're just another person with an opinion.",
  quoteAuthor: "W. Edwards Deming",

  stats: [
    { label: "Public Repositories", value: "13+", change: "Live from GitHub" },
    { label: "Data Records Analyzed", value: "500K+", change: "E-Commerce & FinTech" },
    { label: "Query Speed Optimization", value: "35%+", change: "CTEs & Index Tuning" },
    { label: "Cloud Uptime & Reliability", value: "99.9%", change: "AWS Multi-AZ & IaC" },
  ],

  services: [
    {
      title: "Exploratory Data Analysis (EDA) & Modeling",
      subtitle: "Python (Pandas, NumPy, Seaborn), Statistical Inference & Scikit-Learn",
      description: "Deep statistical profiling, anomaly detection, hypothesis testing, and machine learning classification. Cleaning messy datasets with custom IQR outlier clipping, handling missing values, and generating correlation matrix insights.",
      skills: ["Python", "Pandas", "NumPy", "Seaborn", "Scikit-Learn", "Matplotlib", "Statsmodels", "Hypothesis Testing"]
    },
    {
      title: "Business Intelligence & Executive Dashboards",
      subtitle: "Power BI, Complex DAX Measures, Tableau & Advanced Excel",
      description: "Designing responsive executive scorecards, cohort retention heatmaps, and sales funnels. Authoring dynamic time-intelligence DAX measures (YTD, MoM Growth %, Pareto 80/20) and automating scheduled gateway data refreshes.",
      skills: ["Power BI", "DAX Formulas", "Tableau", "Advanced Excel", "Power Query", "Star Schema", "Executive KPIs"]
    },
    {
      title: "Database Engineering & SQL Optimization",
      subtitle: "PostgreSQL, MySQL, Advanced CTEs & Window Functions",
      description: "Architecting normalized analytical schemas (1NF-3NF) and dimensional fact/dimension tables. Writing multi-tier Common Table Expressions (CTEs), rolling window functions (OVER PARTITION BY), and optimizing query execution plans by 35%+.",
      skills: ["SQL", "PostgreSQL", "MySQL", "CTEs", "Window Functions", "Query Plan Tuning", "Data Normalization"]
    },
    {
      title: "Cloud Infrastructure as Code (AWS & Terraform)",
      subtitle: "AWS VPC, EC2, S3, RDS, Lambda & Terraform Automation",
      description: "Provisioning reproducible multi-tier cloud architectures on AWS. Designing isolated VPCs, public/private subnets across multiple Availability Zones, automated S3 data lakes with KMS encryption, and DynamoDB-locked Terraform states.",
      skills: ["AWS", "VPC", "EC2", "S3 Data Lake", "RDS PostgreSQL", "Terraform (IaC)", "IAM Security", "CloudWatch"]
    },
    {
      title: "Containerization & DevOps CI/CD",
      subtitle: "Docker, Jenkins, GitHub Actions & Linux Systems",
      description: "Containerizing data processing pipelines and backend analytical services. Automating build and test verification via Jenkins and GitHub Actions pipelines for zero-downtime rollouts.",
      skills: ["Docker", "Jenkins", "GitHub Actions", "Linux (Ubuntu)", "Bash Shell", "Git", "Automated Testing"]
    },
    {
      title: "Telemetry & Cloud Server Monitoring",
      subtitle: "Python Daemons, Resource Tracking & Automated Alerting",
      description: "Building lightweight daemon monitors tracking CPU load, RAM allocation, disk saturation, and network latency. Configured webhook alerting triggers for early incident mitigation.",
      skills: ["Python psutil", "System Telemetry", "Linux Daemons", "Threshold Alerting", "Sockets", "SRE Fundamentals"]
    }
  ],

  experience: [
    {
      role: "B.Tech in Computer Science and Engineering",
      company: "Engineering University (India)",
      period: "2022 - 2026",
      location: "India",
      description: "Core specialization in Database Management Systems (DBMS), Data Structures & Algorithms, Cloud Computing, Operating Systems, and Statistical Modeling.",
      highlights: [
        "Led multiple data science and cloud automation academic projects.",
        "Built automated CI/CD and server health monitoring tools published on GitHub.",
        "Authored open-source analytical datasets and machine learning notebooks."
      ]
    },
    {
      role: "Data Analytics & Cloud Engineering Projects",
      company: "Independent Research & Production Deployments",
      period: "2024 - Present",
      location: "Remote",
      description: "End-to-end development of analytical pipelines and cloud-native infrastructure.",
      highlights: [
        "Engineered RFM customer segmentation on 500k+ transactions with Power BI dashboard delivery.",
        "Provisioned multi-tier AWS VPC and EC2 environments with automated Terraform IaC.",
        "Built financial anomaly and fraud detection models with 92% precision score."
      ]
    }
  ],

  categorizedTechStack: [
    {
      category: "Analytics & BI",
      skills: ["Power BI", "DAX", "Tableau", "Excel", "Pandas", "NumPy", "Seaborn"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "Terraform", "Docker", "Linux", "Jenkins", "GitHub Actions"]
    },
    {
      category: "Databases & Querying",
      skills: ["SQL", "PostgreSQL", "MySQL", "CTEs", "ETL Pipelines"]
    },
    {
      category: "Programming & Tools",
      skills: ["Python", "Git", "Bash", "REST APIs", "Scikit-Learn"]
    }
  ],

  projects: [
    {
      id: "ecommerce-rfm",
      title: "E-Commerce Customer Segmentation & RFM Analysis",
      category: "Data Analytics & BI",
      description: "Conducted behavioral Recency, Frequency & Monetary (RFM) segmentation across 500k+ transactional records, categorizing buyers into 5 strategic tiers and uncovering high-value retention opportunities.",
      tools: ["Python", "Pandas", "Power BI", "DAX", "Seaborn", "Scikit-Learn"],
      linkText: "GitHub Repository",
      linkUrl: "https://github.com/Piyarul7290",
      featured: true,
      architectureSummary: "500k+ Transaction Ingestion -> Python RFM Scoring -> Normalized Dimensional Tables -> Power BI Dynamic Dashboard",
      architectureFlow: [
        "Ingested 500,000+ raw e-commerce orders from CSV/SQL into Pandas.",
        "Computed recency interval, purchase frequency, and lifetime monetary spend per user.",
        "Assigned 1-5 quintile scores and grouped users into VIPs, Loyalists, and At-Risk tiers.",
        "Imported model into Power BI with custom DAX measures for executive reporting."
      ],
      highlights: [
        "Identified top 15% VIP customers driving over 55% of total gross revenue.",
        "Delivered dynamic Power BI visualizer with drill-through customer cohort analysis.",
        "Reduced customer churn risk through automated early-warning RFM flag triggers."
      ],
      metrics: [
        { label: "Transactions Processed", value: "500K+" },
        { label: "VIP Customer Tier", value: "Top 15%" },
        { label: "Retention Impact", value: "+18%" }
      ],
      challenges: "Handling extreme outliers and transaction skew across international currencies.",
      securityControls: ["PII Customer Anonymization", "Role-based Dashboard Permissions", "Deterministic Data Validation"]
    },
    {
      id: "executive-sales-bi",
      title: "Executive Sales & Revenue KPI Dashboard",
      category: "Data Analytics & BI",
      description: "Architected an interactive multi-page Power BI dashboard tracking MoM sales trends, regional profit margins, and inventory turnaround with automated refresh logic.",
      tools: ["Power BI", "DAX", "PostgreSQL", "Data Modeling", "Excel"],
      linkText: "GitHub Repository",
      linkUrl: "https://github.com/Piyarul7290",
      featured: true,
      architectureSummary: "PostgreSQL Fact Tables -> Star Schema Modeling -> DAX Time-Intelligence Measures -> Power BI Service",
      architectureFlow: [
        "Connected PostgreSQL analytical warehouse fact tables to Power BI.",
        "Formulated dimensional star schema linking FactSales to DimDate, DimProduct, and DimRegion.",
        "Engineered 24+ custom DAX measures including YTD Revenue, Prior Year Variances, and MoM Growth %.",
        "Published interactive report with automated scheduled data refresh."
      ],
      highlights: [
        "Analyzed $4.2M in aggregate commercial transactions.",
        "Automated recurring executive report generation, saving 6 hours per week.",
        "Surfaced regional profitability leaks enabling supply chain inventory reallocation."
      ],
      metrics: [
        { label: "Sales Analyzed", value: "$4.2M" },
        { label: "DAX Measures", value: "24+" },
        { label: "Refresh Latency", value: "Automated" }
      ],
      challenges: "Handling complex date calendars with non-standard 4-4-5 accounting fiscal periods.",
      securityControls: ["Row-Level Security (RLS)", "Encrypted Gateway Tunnel", "Audit Activity Logging"]
    },
    {
      id: "terraform-vpc-ec2",
      title: "AWS Multi-Tier VPC & Cloud Infrastructure",
      category: "Cloud & DevOps",
      description: "Production-ready Infrastructure as Code provisioning an isolated AWS VPC, public/private subnets, NAT Gateways, Internet Gateway, and secure EC2 compute nodes.",
      tools: ["Terraform", "AWS", "VPC", "EC2", "HCL", "Security Groups"],
      linkText: "GitHub Repository",
      linkUrl: "https://github.com/Piyarul7290/terraform-vpc-ec2",
      featured: true,
      architectureSummary: "Terraform IaC -> AWS Provider -> Multi-AZ Subnets -> NAT/Internet Gateways -> Hardened EC2 Nodes",
      architectureFlow: [
        "Wrote modular HCL templates with parameterized variables for reusable staging and prod environments.",
        "Configured AWS VPC with 10.0.0.0/16 CIDR and subnets in ap-south-1a and ap-south-1b.",
        "Implemented secure NAT Gateways allowing private compute nodes outbound updates without internet exposure.",
        "Secured state persistence with remote S3 backend and DynamoDB state locking."
      ],
      highlights: [
        "Spins up complete multi-tier cloud infrastructure in under 3 minutes.",
        "Strict principle of least privilege with AWS IAM security policies.",
        "Eliminated configuration drift between development and production."
      ],
      metrics: [
        { label: "Cloud Provider", value: "AWS" },
        { label: "IaC Engine", value: "Terraform" },
        { label: "Deployment Time", value: "< 3 min" }
      ],
      challenges: "Preventing concurrent terraform apply race conditions across distributed developers.",
      securityControls: ["DynamoDB State Locking", "KMS S3 Encryption", "Zero Public Ingress to Private Subnets"]
    },
    {
      id: "python-server-monitor",
      title: "Automated Cloud Server & Health Monitor",
      category: "Cloud & DevOps",
      description: "Lightweight, resilient server monitoring daemon tracking CPU, memory saturation, disk I/O, network latency, and triggering automated threshold alerts.",
      tools: ["Python", "Linux", "System Telemetry", "Sockets", "Alerting"],
      linkText: "GitHub Repository",
      linkUrl: "https://github.com/Piyarul7290/python-server-monitor",
      featured: true,
      architectureSummary: "Python Daemon -> Linux Proc / psutil -> Threshold Evaluation -> Webhook Alert Engine",
      architectureFlow: [
        "Initialized background daemon executing 5-second sampling cycles via psutil.",
        "Calculated rolling averages for CPU cores, virtual memory, and filesystem partitions.",
        "Triggered automated webhook notifications when resource consumption breached 85% for 3 intervals.",
        "Logged structured telemetry for post-incident root-cause analysis."
      ],
      highlights: [
        "Extremely low memory footprint (<15MB RAM usage).",
        "Sub-second alert latency upon infrastructure anomalies.",
        "Tested under sustained stress loads on Ubuntu Linux."
      ],
      metrics: [
        { label: "Sampling Interval", value: "5 sec" },
        { label: "Daemon Footprint", value: "< 15 MB" },
        { label: "Alert Latency", value: "< 500 ms" }
      ],
      challenges: "Minimizing probe overhead during high CPU saturation events.",
      securityControls: ["Isolated Unprivileged Service User", "Signed Webhook Payloads", "Local Log Rotation"]
    },
    {
      id: "fraud-anomaly-detection",
      title: "Financial Transactions & Fraud Anomaly Detection",
      category: "Data Analytics & BI",
      description: "Extracted transactional behavioral velocity using advanced SQL CTEs & window functions; identified high-risk fraudulent clusters with 92% classification precision.",
      tools: ["SQL", "PostgreSQL", "Python", "Scikit-Learn", "Window Functions"],
      linkText: "GitHub Repository",
      linkUrl: "https://github.com/Piyarul7290",
      featured: false,
      architectureSummary: "Raw Ledger Logs -> PostgreSQL Rolling Window CTEs -> Feature Vectorization -> Anomaly Isolation",
      architectureFlow: [
        "Queried ledger records using SQL window functions (AVG OVER 30 PRECEDING rows).",
        "Computed 1-hour and 24-hour spend velocity multipliers per cardholder account.",
        "Fed normalized behavioral vectors into Scikit-Learn anomaly classification algorithms.",
        "Filtered fraudulent clusters achieving 92% precision score."
      ],
      highlights: [
        "Decreased false-positive fraud alerts by 40%.",
        "Engineered 5-tier SQL Common Table Expressions for rapid ETL querying.",
        "Delivered reproducible statistical profiling workflow."
      ],
      metrics: [
        { label: "Model Precision", value: "92%" },
        { label: "SQL CTE Tiers", value: "5-Tier" },
        { label: "False Positive Drop", value: "-40%" }
      ],
      challenges: "Severe class imbalance with less than 0.2% legitimate fraud labels in training data.",
      securityControls: ["PCI-DSS Sensitive Data Masking", "Immutable Audit Table Tracing"]
    },
    {
      id: "devops-cicd-pipeline",
      title: "Cloud CI/CD DevOps Pipeline",
      category: "Cloud & DevOps",
      description: "End-to-end automated deployment pipeline incorporating code linting, automated container builds, image scanning, and zero-downtime deployment orchestration.",
      tools: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Bash", "Linux"],
      linkText: "GitHub Repository",
      linkUrl: "https://github.com/Piyarul7290/devops-project",
      featured: false,
      architectureSummary: "Git Push -> GitHub Webhook -> Jenkins Declarative Pipeline -> Docker Build -> Cloud Deploy",
      architectureFlow: [
        "Triggered automated build pipeline on git commit pushes to main branch.",
        "Executed automated unit and syntax validation test suites.",
        "Built multi-stage Docker container images with minimized footprint.",
        "Automated deployment to target cloud instances with zero developer intervention."
      ],
      highlights: [
        "Reduced manual deployment cycle from hours to 3.5 minutes.",
        "Eliminated environment disparity across development and cloud production.",
        "Automated container build artifacts tagged with unique build numbers."
      ],
      metrics: [
        { label: "Deploy Time", value: "3.5 min" },
        { label: "Build Testing", value: "Automated" },
        { label: "Downtime", value: "Zero" }
      ],
      challenges: "Optimizing Docker layer caching to prevent redundant dependency downloads.",
      securityControls: ["Environment Variable Secret Masking", "Multi-Stage Docker Slimming"]
    }
  ]
};

// Interactive Chart Datasets for Recharts Live Cockpit
export const liveChartData = {
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
    { name: "Champions & VIPs", count: 1850, percentage: 22, color: "#F59E0B" },
    { name: "Loyal Customers", count: 2420, percentage: 29, color: "#10B981" },
    { name: "Potential Loyalists", count: 1680, percentage: 20, color: "#06B6D4" },
    { name: "At-Risk / Inactive", count: 1420, percentage: 17, color: "#8B5CF6" },
    { name: "Hibernating Churn", count: 1010, percentage: 12, color: "#EF4444" }
  ],
  cloudResourceMetrics: [
    { hour: "00:00", cpuUsage: 28, memoryUsage: 45, latencyMs: 38 },
    { hour: "04:00", cpuUsage: 22, memoryUsage: 42, latencyMs: 35 },
    { hour: "08:00", cpuUsage: 64, memoryUsage: 68, latencyMs: 44 },
    { hour: "12:00", cpuUsage: 86, memoryUsage: 82, latencyMs: 52 },
    { hour: "16:00", cpuUsage: 78, memoryUsage: 76, latencyMs: 48 },
    { hour: "20:00", cpuUsage: 54, memoryUsage: 62, latencyMs: 41 }
  ],
  skillRadar: [
    { subject: "SQL & PostgreSQL", A: 95, fullMark: 100 },
    { subject: "Python & Wrangling", A: 92, fullMark: 100 },
    { subject: "Power BI & DAX", A: 88, fullMark: 100 },
    { subject: "AWS Cloud (VPC/S3)", A: 86, fullMark: 100 },
    { subject: "Terraform IaC", A: 82, fullMark: 100 },
    { subject: "Docker & Linux", A: 84, fullMark: 100 }
  ]
};
