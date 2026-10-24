import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  Terminal, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { DATA } from '../data/portfolioData';
import { sound } from './SoundEffects';

const PRESET_PROMPTS = [
  { label: "💡 30s Elevator Pitch", query: "Give me a quick 30-second summary of who Piyarul is." },
  { label: "💼 Why Hire Piyarul?", query: "Why should we hire Piyarul for Data Analytics or Cloud roles?" },
  { label: "📊 Power BI & DAX", query: "What are his Power BI dashboard and DAX modeling skills?" },
  { label: "☁️ AWS & Terraform", query: "What is his hands-on experience with AWS, VPCs, and Terraform IaC?" },
  { label: "🗄️ SQL & Query Tuning", query: "How does he write SQL CTEs and optimize analytical query speeds?" },
  { label: "📞 Hiring & Availability", query: "What is his current availability and how do I contact him?" }
];

export default function AICopilotModal({
  isOpen,
  onClose,
  onOpenContact,
  onOpenProject
}) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Piyarul's **AI Career Copilot**.\n\nI can answer questions about his **Data Analytics pipelines**, **Power BI & DAX modeling**, **AWS Cloud & Terraform IaC**, and **hiring availability**.\n\nWhat would you like to explore today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: 'System'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      sound.playOpenModal();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const findBestAnswer = (query) => {
    const q = query.toLowerCase();

    // 1. Elevator Pitch
    if (q.includes('pitch') || q.includes('who is') || q.includes('summary') || q.includes('about')) {
      return `### 💡 30-Second Elevator Pitch\n\n**Piyarul Sekh** is a Computer Science & Engineering specialist bridging **Data Analytics & Business Intelligence** with **Cloud/DevOps Engineering**.\n\n- **Core Focus:** Turning messy enterprise datasets into clean, actionable Power BI scorecards and architecting resilient AWS cloud infrastructure.\n- **Proven Track Record:** Analyzed 500k+ transactional records, engineered 24+ DAX time-intelligence formulas, and automated multi-AZ AWS environments via Terraform IaC.\n- **Location:** India (Open to global remote roles and on-site relocation).`;
    }

    // 2. Why Hire
    if (q.includes('why hire') || q.includes('hire') || q.includes('strength') || q.includes('role')) {
      return `### 💼 Why Hire Piyarul Sekh?\n\n1. **Rare Hybrid Competency:** Most candidates only know dashboards or only infrastructure. Piyarul connects both: extracting raw data with SQL, transforming it with Python, modeling it in Power BI, and deploying it on secure AWS infrastructure.\n2. **Decision-Driven Mindset:** Grounded in Deming's philosophy (*"Without data, you're just another person with an opinion"*), he builds analytics that executives can immediately act upon.\n3. **Production Rigor:** Writes modular Terraform with state locking, containerizes with Docker, and writes indexed SQL CTEs that improve query speeds by 35%+.`;
    }

    // 3. Power BI & DAX
    if (q.includes('power bi') || q.includes('dax') || q.includes('dashboard') || q.includes('bi')) {
      return `### 📊 Power BI & Business Intelligence Expertise\n\n- **Complex DAX Measures:** Extensive experience authoring dynamic time-intelligence formulas (YTD, Prior Year comparisons, MoM Growth %, and Pareto 80/20 distributions).\n- **Star Schema Modeling:** Designs normalized fact and dimension tables (DimDate, DimProduct, FactSales) with clean 1-to-many relationships.\n- **Executive Dashboards:** Created the **Executive Sales & Revenue KPI Dashboard** analyzing $4.2M in transactions, complete with scheduled gateway refresh.`;
    }

    // 4. AWS & Cloud
    if (q.includes('aws') || q.includes('cloud') || q.includes('terraform') || q.includes('vpc') || q.includes('iac')) {
      return `### ☁️ AWS Cloud & Infrastructure as Code\n\n- **Terraform IaC:** Hands-on repository ([terraform-vpc-ec2](https://github.com/Piyarul7290/terraform-vpc-ec2)) provisioning multi-tier VPCs, public/private subnets across availability zones, and NAT Gateways.\n- **AWS Services:** EC2, S3 (KMS encrypted data lake), RDS PostgreSQL, Lambda, IAM boundaries, and CloudWatch metrics.\n- **Server Telemetry:** Built [python-server-monitor](https://github.com/Piyarul7290/python-server-monitor) for automated background CPU/RAM and disk health monitoring.`;
    }

    // 5. SQL & Database
    if (q.includes('sql') || q.includes('query') || q.includes('database') || q.includes('postgres') || q.includes('cte')) {
      return `### 🗄️ SQL & Query Performance\n\n- **Advanced Window Functions:** Rolling average spend velocity, customer cohort retention percentiles (` + "`NTILE(5)`" + `), and event lags.\n- **CTEs & Schema Design:** 5-tier Common Table Expressions reducing nested subquery bottlenecks by 35%+.\n- **Relational Stores:** PostgreSQL and MySQL database administration and indexing strategies.`;
    }

    // 6. Contact & Availability
    if (q.includes('contact') || q.includes('email') || q.includes('available') || q.includes('hire') || q.includes('phone')) {
      return `### 📬 Availability & Contact Information\n\n- **Status:** Actively open for **Data Analyst, BI Analyst, and Cloud Specialist** full-time roles & internships.\n- **Email:** [piyarusekh7290@gmail.com](mailto:piyarusekh7290@gmail.com)\n- **GitHub:** [github.com/Piyarul7290](https://github.com/Piyarul7290)\n- **LinkedIn:** [linkedin.com/in/piyarulsekh](https://www.linkedin.com/in/piyarulsekh/)\n\n*Would you like me to open the Contact form for you right now?*`;
    }

    // Default intelligent response
    return `Piyarul is experienced in **${query}** as part of his Data Analytics and Cloud engineering toolkit.\n\nHe applies statistical rigor, SQL window queries, Power BI DAX formulas, and Terraform AWS provisioning to deliver measurable business ROI.\n\nFeel free to ask about his **RFM Customer Segmentation project**, **AWS Terraform VPC repo**, or **how to contact him directly**!`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    sound.playClick();
    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      sound.playSuccess();
      const reply = findBestAnswer(userMessage.text);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          category: 'AI Assistant'
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handlePresetClick = (query) => {
    setInput(query);
    sound.playPop();
  };

  const copyMessage = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-3xl rounded-3xl bg-neutral-900 border border-amber-500/40 shadow-2xl overflow-hidden relative z-10 flex flex-col h-[85vh] max-h-[750px]"
          >
            {/* Header */}
            <div className="p-4 sm:px-6 border-b border-neutral-800 bg-neutral-950/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-white text-base">
                      AI Recruiter & Career Copilot
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      DATA & CLOUD
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono">
                    Ask anything about Piyarul Sekh's projects, stack, and availability
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-3 bg-neutral-950/40 border-b border-neutral-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {PRESET_PROMPTS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handlePresetClick(p.query)}
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-amber-500/10 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-amber-400 text-xs font-mono whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-mono text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 ${
                      msg.sender === 'user'
                        ? 'bg-amber-500 text-neutral-950 font-sans font-medium rounded-br-sm'
                        : 'bg-neutral-950/80 border border-neutral-800 text-neutral-200 rounded-bl-sm space-y-2'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 text-[10px] opacity-60 mb-1">
                      <span>{msg.sender === 'user' ? 'You' : 'AI Copilot'}</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className="whitespace-pre-line leading-relaxed font-sans text-xs sm:text-sm">
                      {msg.text}
                    </div>

                    {msg.sender === 'ai' && (
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => copyMessage(msg.id, msg.text)}
                          className="flex items-center gap-1 text-[10px] text-neutral-500 hover:text-amber-400 transition-colors"
                        >
                          {copiedId === msg.id ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                          <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-amber-400 text-xs flex items-center gap-2">
                    <Sparkles size={14} className="animate-spin" />
                    <span>Analyzing Piyarul's engineering data...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 border-t border-neutral-800 bg-neutral-950/80 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Power BI, SQL CTEs, AWS Terraform, or hiring availability..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 font-mono"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-neutral-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Send</span>
                <Send size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
