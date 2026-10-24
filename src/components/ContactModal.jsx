import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Copy, 
  Check, 
  Clock,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { DATA } from '../data/portfolioData';
import { sound } from './SoundEffects';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analytics & Cloud Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playSuccess();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.email);
    sound.playPop();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="w-full max-w-2xl rounded-3xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden relative z-10 flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-800 bg-neutral-950/70 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  OPEN TO WORK
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {DATA.availability}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                Connect with Piyarul Sekh
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
          <div className="p-6 space-y-6">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-white">
                  Message Dispatched!
                </h4>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-amber-400">{formData.name}</strong>. Piyarul will receive your inquiry and reply to <strong className="text-white">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Data Analytics Opportunity', message: '' });
                  }}
                  className="mt-2 px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                {/* Fast Email Card */}
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] font-mono text-neutral-500">DIRECT EMAIL</p>
                      <a href={`mailto:${DATA.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors truncate block">
                        {DATA.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Chen"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. michael@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Role / Project Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-amber-500 font-mono"
                    >
                      <option value="Data Analyst Full-Time Position">Data Analyst Full-Time Position</option>
                      <option value="BI & Analytics Internship">BI & Analytics Internship</option>
                      <option value="AWS Cloud & DevOps Engineering">AWS Cloud & DevOps Engineering</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your data stack challenges, project goals, or open opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-amber-500 font-mono resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full premium-btn premium-btn--primary font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Send Message to Piyarul</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
