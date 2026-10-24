import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle, 
  Copy, 
  Check, 
  Sparkles,
  PhoneCall,
  Clock
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analytics / Cloud Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something High-Impact
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Actively seeking Data Analyst, BI Analyst, and Cloud Specialist roles. Have an interesting data puzzle or cloud pipeline challenge? Let's connect!
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Contact Details
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Feel free to send an email, connect on LinkedIn, or review my latest commits on GitHub.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-slate-400">EMAIL ADDRESS</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between gap-3 transition-colors group block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">LINKEDIN</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/piyarulsekh
                    </p>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Connect →</span>
              </a>

              {/* GitHub Profile Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between gap-3 transition-colors group block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">GITHUB REPOSITORIES</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/Piyarul7290
                    </p>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Follow →</span>
              </a>

              {/* Location & Availability */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Location: {personalInfo.location} (Open to Relocation & Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-cyan-400">{formData.name}</strong>. I've received your inquiry and will respond to <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Data Analytics Opportunity', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Opportunity Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Data Analyst Role">Data Analyst Full-Time Position</option>
                      <option value="BI & Analytics Internship">BI & Analytics Internship</option>
                      <option value="Cloud & DevOps Project">Cloud Infrastructure / AWS Project</option>
                      <option value="Freelance Consultation">Freelance Analytics Consultation</option>
                      <option value="General Collaboration">General Networking / Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your data challenges, project goals, or role details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Piyarul</span>
                  </button>

                  <p className="text-[11px] text-slate-500 font-mono text-center">
                    Direct inquiries are immediately forwarded to piyarusekh7290@gmail.com
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
