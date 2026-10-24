import React, { useState } from 'react';
import { codePlaygroundSnippets } from '../data/portfolioData';
import { 
  Code2, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  Cpu, 
  Database, 
  Cloud,
  FileCode
} from 'lucide-react';

export default function CodePlayground() {
  const [selectedSnippet, setSelectedSnippet] = useState(codePlaygroundSnippets[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Code Craft & Performance Optimization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            SQL & Cloud Code Showcase
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Inspect real SQL CTE queries, Python automated wrangling classes, and Terraform Infrastructure-as-Code modules engineered for performance and maintainability.
          </p>
        </div>

        {/* Code Terminal Shell */}
        <div className="rounded-2xl bg-[#0B0F19] border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Bar with Tabs and Copy */}
          <div className="bg-slate-900/90 border-b border-slate-800 p-3 sm:px-6 flex flex-wrap items-center justify-between gap-4">
            
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {codePlaygroundSnippets.map((snippet) => {
                const isSelected = selectedSnippet.id === snippet.id;
                return (
                  <button
                    key={snippet.id}
                    onClick={() => setSelectedSnippet(snippet)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      isSelected
                        ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{snippet.title.split(':')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions: Copy & Language */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 uppercase bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                {selectedSnippet.language}
              </span>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Description Strip */}
          <div className="px-6 py-3.5 bg-slate-900/40 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{selectedSnippet.title}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/80">
                {selectedSnippet.badge}
              </span>
            </div>
            <p className="text-slate-400 font-mono text-[11px]">
              {selectedSnippet.description}
            </p>
          </div>

          {/* Code Window */}
          <div className="p-6 overflow-x-auto bg-[#070A12] font-mono text-xs sm:text-sm text-slate-200 leading-relaxed max-h-[500px]">
            <pre>
              <code>{selectedSnippet.code}</code>
            </pre>
          </div>

          {/* Terminal Footer status */}
          <div className="bg-slate-950 px-6 py-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Syntax validated • Ready for production execution
            </span>
            <span>UTF-8 • Unix (LF)</span>
          </div>

        </div>

      </div>
    </section>
  );
}
