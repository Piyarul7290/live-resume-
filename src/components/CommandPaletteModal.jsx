import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  Bot, 
  FileText, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Terminal, 
  ArrowRight,
  Phone,
  BarChart3,
  Cloud,
  FolderGit2,
  Code2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { DATA } from '../data/portfolioData';
import { sound } from './SoundEffects';

export default function CommandPaletteModal({
  isOpen,
  onClose,
  onOpenAI,
  onOpenResume,
  onOpenContact,
  onSelectProject
}) {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      sound.playOpenModal();
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.email);
    sound.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(DATA.phoneRaw);
    sound.playSuccess();
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const navActions = [
    { icon: <Bot size={16} className="text-amber-400" />, title: "Open AI Recruiter Copilot", shortcut: "AI", action: () => { onClose(); onOpenAI(); } },
    { icon: <FileText size={16} className="text-emerald-400" />, title: "View ATS Resume / Print PDF", shortcut: "PDF", action: () => { onClose(); onOpenResume(); } },
    { icon: <Mail size={16} className="text-cyan-400" />, title: "Direct Contact / Inquiry Form", shortcut: "MSG", action: () => { onClose(); onOpenContact(); } },
    { icon: <Copy size={16} className="text-neutral-400" />, title: copiedEmail ? "Copied piyarusekh7290@gmail.com!" : "Copy Email to Clipboard", shortcut: "EMAIL", action: handleCopyEmail },
    { icon: <Github className="w-4 h-4 text-white" />, title: "Visit GitHub (@Piyarul7290)", shortcut: "GIT", action: () => window.open(DATA.links.github, "_blank") },
    { icon: <Linkedin className="w-4 h-4 text-blue-400" />, title: "Connect on LinkedIn", shortcut: "IN", action: () => window.open(DATA.links.linkedin, "_blank") },
  ];

  const sectionLinks = [
    { name: "Live BI Analytics Sandbox", href: "#analytics", desc: "Interactive Recharts revenue, RFM & AWS metrics" },
    { name: "Live GitHub Telemetry 2.0", href: "#github-live", desc: "Real-time repos, commits & activity" },
    { name: "Cloud Pipeline Architecture", href: "#pipeline", desc: "End-to-end AWS S3, ETL, and PostgreSQL star schema" },
    { name: "Core Analytical Capabilities", href: "#services", desc: "EDA, Power BI, SQL CTEs, AWS Terraform, Docker" },
    { name: "Featured Projects & Case Studies", href: "#projects", desc: "RFM Segmentation, Executive Sales, VPC IaC" },
    { name: "Experience & Education", href: "#experience", desc: "B.Tech Computer Science & engineering deployments" },
    { name: "SQL & Cloud Code Showcase", href: "#code", desc: "Production window functions, Python pipelines & IaC" },
    { name: "Contact & Status", href: "#contact", desc: "Direct reach-out & hiring availability" },
  ];

  const filteredProjects = DATA.projects.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.tools.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[130] flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
          />

          {/* Palette Dialog Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-800 bg-neutral-950/50">
              <Search size={18} className="text-amber-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project name, or skill (e.g. 'AWS', 'Power BI', 'SQL', 'RFM')..."
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-mono"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-neutral-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-[10px] font-mono text-neutral-400">
                ESC
              </kbd>
            </div>

            {/* List Body */}
            <div className="p-3 overflow-y-auto space-y-4 text-xs font-mono">
              {/* Quick Actions */}
              {!query && (
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest px-2 block mb-1.5">
                    Fast Navigation & Actions
                  </span>
                  <div className="space-y-1">
                    {navActions.map((act, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          sound.playClick();
                          act.action();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-800/80 text-left text-neutral-200 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          {act.icon}
                          <span className="group-hover:text-amber-400 transition-colors">{act.title}</span>
                        </div>
                        <span className="text-[10px] text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                          {act.shortcut}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest px-2 block mb-1.5">
                    Projects ({filteredProjects.length})
                  </span>
                  <div className="space-y-1">
                    {filteredProjects.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => {
                          sound.playClick();
                          onClose();
                          if (onSelectProject) onSelectProject(proj.id);
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-800/80 text-left text-neutral-200 transition-colors group cursor-pointer"
                      >
                        <div className="overflow-hidden">
                          <p className="font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
                            {proj.title}
                          </p>
                          <p className="text-[11px] text-neutral-400 truncate">
                            {proj.tools.join(" • ")}
                          </p>
                        </div>
                        <ArrowRight size={14} className="text-neutral-500 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sections Navigation */}
              <div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest px-2 block mb-1.5">
                  Portfolio Sections
                </span>
                <div className="space-y-1">
                  {sectionLinks.map((sec, i) => (
                    <a
                      key={i}
                      href={sec.href}
                      onClick={() => {
                        sound.playClick();
                        onClose();
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-800/80 text-neutral-200 transition-colors group cursor-pointer"
                    >
                      <div>
                        <span className="text-white group-hover:text-amber-400 transition-colors block font-medium">
                          {sec.name}
                        </span>
                        <span className="text-[10px] text-neutral-500 block">
                          {sec.desc}
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">Jump →</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-neutral-800 bg-neutral-950/70 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
              <span>Use <kbd className="text-neutral-300">↑</kbd> <kbd className="text-neutral-300">↓</kbd> to navigate</span>
              <span>Piyarul Sekh • Live Resume 2.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
