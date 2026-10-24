import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  CheckCircle, 
  X, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Database
} from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Data Analytics', 'Cloud & DevOps'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Production & Analytical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Analytics & Cloud Deployments
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Real projects spanning large-scale RFM behavioral segmentation, multi-tier AWS infrastructure provisioning, live server telemetry, and executive Power BI dashboards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0F172A]/80 border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div className="p-6">
                {/* Header row with badge & github */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    {project.badge}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Project Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6 text-center">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-1">
                      <p className="text-xs font-bold text-cyan-400">{m.val}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800/70 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Case Study & Code</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0F172A] border border-cyan-500/40 shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900/60">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {activeModalProject.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeModalProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-sm">
              
              {/* Problem */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Business Challenge & Problem Statement
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  {activeModalProject.deepDive.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Architectural Solution & Methodology
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  {activeModalProject.deepDive.solution}
                </p>
              </div>

              {/* Business Impact */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Quantified Business Impact & Metrics
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  {activeModalProject.deepDive.businessImpact}
                </p>
              </div>

              {/* Code Snippet */}
              {activeModalProject.deepDive.codeSnippet && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-amber-400" />
                    Key Algorithmic / Infrastructure Code
                  </h4>
                  <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                    <code>{activeModalProject.deepDive.codeSnippet}</code>
                  </pre>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
              >
                Close Case Study
              </button>

              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold rounded-lg shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
