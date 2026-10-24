import React, { useState } from 'react';
import { pipelineStages } from '../data/portfolioData';
import { 
  Cloud, 
  Database, 
  Cpu, 
  Server, 
  BarChart3, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Workflow,
  Lock,
  Boxes
} from 'lucide-react';

const iconMap = {
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu,
  Server: Server,
  BarChart3: BarChart3
};

export default function CloudPipelineVisualizer() {
  const [selectedStage, setSelectedStage] = useState(pipelineStages[0]);

  return (
    <section id="pipeline" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-300 text-xs font-mono mb-3">
            <Cloud className="w-3.5 h-3.5 text-blue-400" />
            <span>End-to-End Cloud Specialist Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cloud Data Pipeline & Architecture
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            How raw events transform into high-impact BI decisions through resilient AWS cloud infrastructure, automated ETL pipelines, and strict data governance.
          </p>
        </div>

        {/* 5-Stage Interactive Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-10">
          {pipelineStages.map((stage, idx) => {
            const Icon = iconMap[stage.icon] || Database;
            const isSelected = selectedStage.id === stage.id;

            return (
              <div key={stage.id} className="relative">
                <button
                  onClick={() => setSelectedStage(stage)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-900 to-slate-900/95 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50 scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                        Stage 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-semibold text-xs sm:text-sm text-slate-200 leading-snug">
                      {stage.title.split('. ')[1] || stage.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {stage.status}
                    </span>
                    <span className="text-slate-400">{stage.throughput}</span>
                  </div>
                </button>

                {/* Connector Arrow for desktop */}
                {idx < pipelineStages.length - 1 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600 pointer-events-none">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Inspector */}
        <div className="rounded-2xl bg-[#0F172A]/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left detail description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 text-xs font-mono">
                  ACTIVE STAGE INSPECTOR
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  SLA: {selectedStage.throughput}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {selectedStage.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedStage.description}
              </p>

              {/* Cloud Architecture Details */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <Cloud className="w-4 h-4" />
                  <span className="font-semibold uppercase tracking-wider">AWS Cloud Deployment Spec</span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  {selectedStage.cloudDetails}
                </p>
              </div>

              {/* Technologies tags */}
              <div className="pt-2">
                <p className="text-xs text-slate-400 font-mono mb-2">INTEGRATED STACK & TOOLS:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.tech.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Security & Reliability Checklist */}
            <div className="lg:col-span-5 bg-slate-950/70 p-6 rounded-xl border border-slate-800 space-y-4">
              <h4 className="font-semibold text-sm text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Cloud Reliability & Governance Matrix
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Multi-AZ Redundancy:</strong>
                    <p className="text-slate-400 text-[11px]">Subnets distributed across ap-south-1a and ap-south-1b for 99.9% uptime.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Automated IaC Lifecycle:</strong>
                    <p className="text-slate-400 text-[11px]">Terraform state files locked with AWS DynamoDB preventing concurrent collisions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Data Sanitization & Auditing:</strong>
                    <p className="text-slate-400 text-[11px]">Strict column-level null checks, IQR outlier clipping, and automated CloudWatch alarms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Optimized Analytical Queries:</strong>
                    <p className="text-slate-400 text-[11px]">Pre-computed materialized views & indexed CTEs cutting report latency by 35%.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
