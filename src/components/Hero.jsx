import React, { useState, useEffect } from 'react';
import { personalInfo, keyMetrics } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  Database, 
  Cloud, 
  BarChart, 
  CheckCircle2, 
  Download, 
  Sparkles,
  Server,
  Activity,
  Layers
} from 'lucide-react';
import { Github } from './Icons';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [queryTimer, setQueryTimer] = useState(128);

  // Simulated live execution latency ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setQueryTimer((prev) => (prev > 90 ? prev - 3 : 134));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-inner shadow-cyan-950">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Data Analyst & Cloud Roles</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">AWS • SQL • Power BI</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turning Big Data into{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Strategic Intelligence
              </span>{' '}
              & Scalable Cloud Systems
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hello! I'm <strong className="text-white font-semibold">Piyarul Sekh</strong>. I bridge the gap between raw data chaos and executive decision-making. I specialize in building end-to-end data analytics pipelines, exploratory modeling, dynamic Power BI dashboards, and resilient AWS cloud infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#analytics"
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Launch Live Analytics</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm sm:text-base rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FolderGit2IconWrapper />
                <span>Featured Projects</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm rounded-xl border border-slate-800 transition-colors"
                title="View GitHub Profile"
              >
                <Github className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-xs">@Piyarul7290</span>
              </a>
            </div>

            {/* Value Proposition Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Advanced SQL CTEs & Window Functions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Power BI & DAX Calculations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                AWS Infrastructure as Code (Terraform)
              </span>
            </div>
          </div>

          {/* Right Column: High-tech Interactive Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative rounded-2xl bg-[#0F172A]/90 border border-slate-800 backdrop-blur-xl p-5 shadow-2xl space-y-4">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-xs text-slate-400">cloud-analytics-node::ap-south-1</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 text-[10px] font-mono">
                    <Activity className="w-3 h-3 animate-pulse" />
                    LIVE TELEMETRY
                  </div>
                </div>

                {/* Tab Switcher inside widget */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-lg text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`py-1.5 rounded text-center transition-colors ${
                      activeTab === 'pipeline' 
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Cloud & Pipeline Stats
                  </button>
                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`py-1.5 rounded text-center transition-colors ${
                      activeTab === 'sql' 
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    SQL Query Engine
                  </button>
                </div>

                {/* Tab Content 1: Cloud & Pipeline stats */}
                {activeTab === 'pipeline' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-2">
                          <Cloud className="w-4 h-4 text-cyan-400" />
                          <span>AWS Infrastructure</span>
                        </span>
                        <span className="text-emerald-400 font-bold">OPTIMAL</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-slate-400">
                        <div className="bg-slate-950 p-2 rounded">
                          <p className="text-slate-500 text-[9px]">VPC SUBNET</p>
                          <p className="text-slate-200 font-bold">10.0.0.0/16</p>
                        </div>
                        <div className="bg-slate-950 p-2 rounded">
                          <p className="text-slate-500 text-[9px]">STORAGE (S3)</p>
                          <p className="text-cyan-400 font-bold">500K+ rows</p>
                        </div>
                        <div className="bg-slate-950 p-2 rounded">
                          <p className="text-slate-500 text-[9px]">LATENCY</p>
                          <p className="text-emerald-400 font-bold">{queryTimer}ms</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-2">
                          <BarChart className="w-4 h-4 text-purple-400" />
                          <span>BI & Analytics Refresh</span>
                        </span>
                        <span className="text-cyan-400 font-bold">SYNCED</span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">RFM Customer Segmentation</span>
                          <span className="text-slate-200 font-semibold">100% Calculated</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full w-full"></div>
                        </div>

                        <div className="flex justify-between text-[11px] pt-1">
                          <span className="text-slate-400">Fraud Anomaly Detection Precision</span>
                          <span className="text-emerald-400 font-semibold">92.4% ROC-AUC</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full w-[92%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: SQL Query Engine */}
                {activeTab === 'sql' && (
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] space-y-2">
                    <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-900">
                      <span>analytics_dwh=# EXPLAIN ANALYZE</span>
                      <span className="text-cyan-400">Index Scan [OK]</span>
                    </div>
                    <pre className="text-slate-300 overflow-x-auto p-1 leading-relaxed">
                      <code>
                        <span className="text-purple-400">WITH</span> SalesCohort <span className="text-purple-400">AS</span> (<br/>
                        &nbsp;&nbsp;<span className="text-cyan-400">SELECT</span> user_id, order_val,<br/>
                        &nbsp;&nbsp;<span className="text-amber-400">NTILE</span>(5) <span className="text-purple-400">OVER</span>(<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">ORDER BY</span> order_val <span className="text-purple-400">DESC</span><br/>
                        &nbsp;&nbsp;) <span className="text-purple-400">AS</span> tier_quintile<br/>
                        &nbsp;&nbsp;<span className="text-purple-400">FROM</span> transactions<br/>
                        )<br/>
                        <span className="text-cyan-400">SELECT</span> tier_quintile, <span className="text-amber-400">COUNT</span>(*)<br/>
                        <span className="text-purple-400">FROM</span> SalesCohort <span className="text-purple-400">GROUP BY</span> 1;
                      </code>
                    </pre>
                    <div className="p-2 rounded bg-cyan-950/40 border border-cyan-800/40 text-[10px] text-cyan-300 flex items-center justify-between">
                      <span>Execution: 14.2ms | Cost: 0.42</span>
                      <span className="text-emerald-400 font-bold">35% Faster vs Subquery</span>
                    </div>
                  </div>
                )}

                {/* Terminal status line */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    DevOps pipeline: Terraform + Jenkins
                  </span>
                  <span>AWS ap-south-1</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Key Metrics Ticker Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="relative group p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-200">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FolderGit2IconWrapper() {
  return (
    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
      <circle cx="12" cy="13" r="2"/>
      <path d="M14 13h3"/>
      <path d="M7 13h3"/>
    </svg>
  );
}
