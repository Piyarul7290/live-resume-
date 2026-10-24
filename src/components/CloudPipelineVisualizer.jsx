import React, { useState } from 'react';
import { 
  Cloud, 
  Database, 
  Cpu, 
  Server, 
  BarChart3, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2
} from 'lucide-react';
import { sound } from './SoundEffects';

const stages = [
  {
    id: "ingestion",
    title: "1. Data Ingestion & Streaming",
    icon: Database,
    status: "Healthy",
    throughput: "12.4 MB/s",
    tech: ["PostgreSQL CDC", "REST APIs", "AWS CloudWatch", "Python Scrapers"],
    description: "Multi-source ingestion pipeline pulling raw transactional streams, telemetry events, and relational change data.",
    cloudDetails: "AWS API Gateway & EventBridge routing into partitioned buffer buckets."
  },
  {
    id: "lakehouse",
    title: "2. Cloud Storage & Lakehouse",
    icon: Cloud,
    status: "Encrypted (KMS)",
    throughput: "99.999% SLA",
    tech: ["AWS S3 Buckets", "Data Lakehouse", "Parquet Format", "Lifecycle Rules"],
    description: "Raw, Bronze, and Silver layer isolation with automatic tiering to S3 Glacier for audit compliance.",
    cloudDetails: "Terraform-provisioned S3 with KMS SSE-C encryption and strict IAM boundary policies."
  },
  {
    id: "processing",
    title: "3. ETL Wrangling & Orchestration",
    icon: Cpu,
    status: "Automated",
    throughput: "Sub-second processing",
    tech: ["Python (Pandas / NumPy)", "Docker Containers", "Terraform", "Jenkins CI/CD"],
    description: "Automated data transformation, deduplication, missing value imputation, and feature engineering jobs.",
    cloudDetails: "Containerized batch workloads running on auto-scaled EC2 compute within a custom AWS VPC."
  },
  {
    id: "warehouse",
    title: "4. Data Mart & Modeling",
    icon: Server,
    status: "Indexed",
    throughput: "35% Faster CTEs",
    tech: ["PostgreSQL", "Star Schema", "Window Functions", "Materialized Views"],
    description: "Analytical data warehouse structured with dimensional star schema, fact tables, and optimized indices for BI querying.",
    cloudDetails: "Multi-AZ RDS PostgreSQL with read replicas and automated daily snapshot backups."
  },
  {
    id: "bi_insights",
    title: "5. BI Dashboards & Decision AI",
    icon: BarChart3,
    status: "Live Refresh",
    throughput: "Real-time KPIs",
    tech: ["Power BI", "DAX Measures", "Interactive Plotly", "Scikit-Learn"],
    description: "Executive scorecards, customer cohort retention visualizers, and predictive anomaly risk heatmaps.",
    cloudDetails: "Automated scheduled gateway refresh delivering reports straight to decision makers."
  }
];

export default function CloudPipelineVisualizer() {
  const [selectedStage, setSelectedStage] = useState(stages[0]);

  const handleSelectStage = (stage) => {
    sound.playClick();
    setSelectedStage(stage);
  };

  return (
    <div className="w-full relative p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl shadow-2xl">
      
      {/* 5-Stage Interactive Flow Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-8">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = selectedStage.id === stage.id;

          return (
            <div key={stage.id} className="relative">
              <button
                onClick={() => handleSelectStage(stage)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-500/20 text-amber-400' : 'bg-neutral-800 text-neutral-400'}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xs sm:text-sm text-white leading-snug">
                    {stage.title.split('. ')[1] || stage.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/70 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Zap size={12} />
                    {stage.status}
                  </span>
                  <span className="text-neutral-500">{stage.throughput}</span>
                </div>
              </button>

              {idx < stages.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-neutral-700 pointer-events-none">
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Stage Detail Inspector */}
      <div className="rounded-2xl bg-neutral-950/90 border border-neutral-800 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold uppercase">
                STAGE INSPECTOR
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                Throughput SLA: {selectedStage.throughput}
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              {selectedStage.title}
            </h3>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {selectedStage.description}
            </p>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                <Cloud size={14} />
                <span className="uppercase tracking-wider">AWS Cloud Deployment Spec</span>
              </div>
              <p className="text-xs text-neutral-300 font-mono">
                {selectedStage.cloudDetails}
              </p>
            </div>

            <div className="pt-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                INTEGRATED STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedStage.tech.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 space-y-3">
            <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Reliability & Governance Checklist</span>
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-300 font-mono">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Multi-AZ Subnets across ap-south-1a/b</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Terraform remote state locked in DynamoDB</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>IQR Outlier clipping & column null validation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>35% Query speedup with indexed SQL CTEs</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
