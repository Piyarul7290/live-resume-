import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#070A12] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm">
              PS
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 font-mono">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Nav pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#analytics" className="hover:text-cyan-400 transition-colors">Live Analytics</a>
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Cloud Pipeline</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#code" className="hover:text-cyan-400 transition-colors">Code Showcase</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono transition-colors border border-slate-800"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        {/* Bottom copyright and socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-rose-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
