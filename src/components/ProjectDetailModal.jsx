import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Database
} from 'lucide-react';
import { Github } from './Icons';
import { sound } from './SoundEffects';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6">
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
          className="w-full max-w-3xl rounded-3xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-800 bg-neutral-950/70 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {project.category}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  PRODUCTION PROJECT
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

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

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm">
            {/* Overview */}
            <p className="text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-center">
                    <span className="text-lg sm:text-xl font-display font-bold text-amber-400 block">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture Flow Summary */}
            {project.architectureSummary && (
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                  <Layers size={14} />
                  <span>DATA & CLOUD ARCHITECTURE FLOW</span>
                </div>
                <p className="text-xs text-neutral-300 font-mono">
                  {project.architectureSummary}
                </p>
              </div>
            )}

            {/* Architecture Flow Steps */}
            {project.architectureFlow && (
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Execution Stages & Methodology
                </h4>
                <div className="space-y-2">
                  {project.architectureFlow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs">
                      <span className="text-amber-500 font-mono font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                      <span className="text-neutral-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Outcomes / Highlights */}
            {project.highlights && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Key Analytical & Business Outcomes</span>
                </h4>
                <div className="space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security & Reliability Controls */}
            {project.securityControls && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Security, Governance & Performance Safeguards</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.securityControls.map((sc, i) => (
                    <span key={i} className="px-3 py-1 rounded-xl bg-neutral-950 text-neutral-300 text-xs font-mono border border-neutral-800">
                      {sc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            <div className="pt-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-neutral-800 text-neutral-200 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:px-6 border-t border-neutral-800 bg-neutral-950/70 flex items-center justify-between">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono cursor-pointer transition-colors"
            >
              Close
            </button>

            <a
              href={project.linkUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-mono font-bold transition-all shadow-md shadow-amber-500/20"
            >
              <Github className="w-4 h-4 text-neutral-950" />
              <span>Inspect on GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
