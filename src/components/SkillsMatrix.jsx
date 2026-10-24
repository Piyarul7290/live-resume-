import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  BarChart2, 
  CloudRain, 
  Database, 
  Terminal, 
  Award, 
  CheckCircle2, 
  Cpu, 
  Layers,
  Sparkles
} from 'lucide-react';

const iconMap = {
  BarChart2: BarChart2,
  CloudRain: CloudRain,
  Database: Database,
  Terminal: Terminal
};

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Mastery Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills & Tooling Ecosystem
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Engineered for high-throughput enterprise analysis and cloud-native reliability—connecting exploratory statistical data modeling with containerized AWS deployments.
          </p>
        </div>

        {/* 4 Skill Category Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Layers;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-200 font-semibold">{skill.name}</span>
                        <span className="text-cyan-400 font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Bar */}
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 h-full rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-400 font-mono leading-tight">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Cloud & Analytics Toolkit Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-sm sm:text-base">
                  Professional Focus & Target Roles
                </h4>
                <p className="text-xs text-slate-400">
                  Data Analyst • Business Intelligence Engineer • Cloud Data Specialist • Analytics Engineer
                </p>
              </div>
            </div>

            {/* Quick tool pills */}
            <div className="flex flex-wrap items-center gap-2">
              {["Power BI (DAX)", "AWS (EC2, S3, RDS)", "SQL (PostgreSQL)", "Terraform IaC", "Python (Pandas)", "Docker", "Jenkins"].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-950 text-slate-200 text-xs font-mono border border-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
