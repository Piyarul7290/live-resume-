import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  BarChart3, 
  Cloud, 
  Code2, 
  Layers, 
  FolderGit2, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Live Analytics", href: "#analytics", icon: BarChart3 },
    { name: "Cloud Architecture", href: "#pipeline", icon: Cloud },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Skills", href: "#skills", icon: Layers },
    { name: "Code Showcase", href: "#code", icon: Code2 },
    { name: "About", href: "#about", icon: Sparkles },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              PS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                  Data & Cloud
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono hidden sm:block">
                @{personalInfo.handle}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-500/80" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Social Icons & Hire CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm rounded-lg shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium rounded-md"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-cyan-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm rounded-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
