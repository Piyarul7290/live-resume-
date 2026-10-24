import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Quote, 
  Target, 
  CheckCircle2, 
  Mail,
  Workflow
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function About() {
  const workflowSteps = [
    { num: "01", title: "Ingestion & Audit", desc: "Extracting from SQL databases, web APIs & cloud storage with schema validation." },
    { num: "02", title: "Wrangling & Cleaning", desc: "Handling missing values, deduplication, IQR outlier normalization, and type casting." },
    { num: "03", title: "Exploratory Data Analysis", desc: "Statistical profiling, correlation matrices, hypothesis tests, and distribution analysis." },
    { num: "04", title: "Dashboards & DAX", desc: "Designing interactive Power BI executive scorecards with dynamic time-intelligence." },
    { num: "05", title: "Executive Decision", desc: "Translating analytical conclusions into measurable business ROI and strategy." }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Candidate Profile & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Piyarul Sekh
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Computer Science Engineer passionate about turning data chaos into decision-grade clarity and automated cloud systems.
          </p>
        </div>

        {/* 2-Column Profile & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>The Bridge Between Data & Business</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a <strong>Computer Science & Engineering student</strong> with a focus on <strong>Data Analytics, Business Intelligence, and Cloud/DevOps Engineering</strong>. My core mission is bridging the gap between raw data and executive business choices—converting disorganized datasets into clean, reliable, and visually compelling insights.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether formulating multi-table SQL window queries, building custom DAX measures for Power BI dashboards, or provisioning automated AWS VPC networks with Terraform, I approach every challenge with engineering rigor and a decision-first mindset.
              </p>

              {/* Deming Quote Box */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 relative">
                <Quote className="w-6 h-6 text-cyan-400/40 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm font-medium italic text-cyan-200">
                  "{personalInfo.quote}"
                </p>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  — {personalInfo.quoteAuthor}
                </p>
              </div>

              {/* Quick Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>B.Tech in Computer Science</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Based in India (Open to Remote / Relocation)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: GitHub Activity & Live Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-sm text-white">GitHub Analytics</span>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
                >
                  @Piyarul7290 →
                </a>
              </div>

              {/* Live GitHub Stats Card */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0D1117] p-2 flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Piyarul7290&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=38BDF8&icon_color=38BDF8&text_color=E2E8F0"
                  alt="Piyarul's GitHub Stats"
                  className="w-full max-w-sm rounded"
                  loading="lazy"
                />
              </div>

              {/* Top Languages Card */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0D1117] p-2 flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Piyarul7290&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=38BDF8&text_color=E2E8F0"
                  alt="Piyarul's Top Languages"
                  className="w-full max-w-sm rounded"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>

        {/* 5-Step Analytical Methodology Bar */}
        <div className="rounded-2xl bg-[#0F172A]/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <Workflow className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              End-to-End Analytical Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2 relative"
              >
                <span className="text-xl font-extrabold text-cyan-500/40 font-mono">
                  {step.num}
                </span>
                <h4 className="font-bold text-sm text-slate-100">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
