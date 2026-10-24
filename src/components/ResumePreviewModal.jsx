import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Sparkles,
  FileText,
  Award
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { DATA } from '../data/portfolioData';
import { sound } from './SoundEffects';

export default function ResumePreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-4xl rounded-3xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Controls */}
          <div className="p-4 sm:px-6 border-b border-neutral-800 bg-neutral-950/80 flex items-center justify-between no-print">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-amber-400" />
              <h3 className="font-display font-bold text-white text-base">
                ATS Resume Document Preview
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                VERIFIED FORMAT
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer size={13} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-neutral-950 text-neutral-200 font-sans space-y-6 text-xs sm:text-sm">
            {/* Resume Top Header */}
            <div className="border-b border-neutral-800 pb-6 text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight uppercase">
                {DATA.name}
              </h1>
              <p className="text-amber-400 font-mono font-medium text-xs sm:text-sm">
                {DATA.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-400 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-amber-400" />
                  {DATA.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-emerald-400" />
                  {DATA.location}
                </span>
                <span>•</span>
                <a href={DATA.links.github} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-amber-400">
                  github.com/Piyarul7290
                </a>
                <span>•</span>
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-amber-400">
                  linkedin.com/in/piyarulsekh
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold border-b border-neutral-800 pb-1">
                Executive Profile Summary
              </h2>
              <p className="text-neutral-300 leading-relaxed text-xs">
                {DATA.about}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold border-b border-neutral-800 pb-1">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono">
                <div>
                  <strong className="text-white">Data Analytics & BI:</strong> Power BI (DAX), Tableau, EDA, Advanced Excel, Star Schema Modeling
                </div>
                <div>
                  <strong className="text-white">Cloud & DevOps:</strong> AWS (VPC, EC2, S3, RDS), Terraform IaC, Docker, Linux, Jenkins
                </div>
                <div>
                  <strong className="text-white">Databases & SQL:</strong> PostgreSQL, MySQL, CTEs, Window Functions, Query Plan Tuning
                </div>
                <div>
                  <strong className="text-white">Programming & ML:</strong> Python (Pandas, NumPy, Scikit-Learn, Seaborn), Git, Bash Scripting
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold border-b border-neutral-800 pb-1">
                Selected Engineering & Analytics Projects
              </h2>
              {DATA.projects.slice(0, 4).map((p) => (
                <div key={p.id} className="space-y-1 text-xs">
                  <div className="flex items-baseline justify-between">
                    <strong className="text-white text-sm font-semibold">{p.title}</strong>
                    <span className="font-mono text-amber-400 text-[11px]">{p.tools.slice(0, 3).join(", ")}</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{p.description}</p>
                  {p.highlights && (
                    <ul className="list-disc list-inside text-neutral-400 space-y-0.5 text-[11px]">
                      {p.highlights.slice(0, 2).map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold border-b border-neutral-800 pb-1">
                Education & Academics
              </h2>
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-white">B.Tech in Computer Science and Engineering</strong>
                  <p className="text-neutral-400">Core: DBMS, Operating Systems, Computer Networks, Data Structures & Cloud Architecture</p>
                </div>
                <span className="font-mono text-neutral-400">2022 - 2026</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
