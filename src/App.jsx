import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Copy, 
  Check, 
  Bot, 
  Terminal, 
  FileText, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Send, 
  Zap, 
  Phone, 
  Activity, 
  Cloud, 
  Boxes, 
  Server, 
  Database,
  BarChart3,
  TrendingUp,
  FolderGit2
} from 'lucide-react';
import { Github, Linkedin } from './components/Icons';
import { DATA } from './data/portfolioData';
import LiveGitHubTracker from './components/LiveGitHubTracker';
import CommandPaletteModal from './components/CommandPaletteModal';
import AICopilotModal from './components/AICopilotModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import ResumePreviewModal from './components/ResumePreviewModal';
import ContactModal from './components/ContactModal';
import LiveAnalyticsDashboard from './components/LiveAnalyticsDashboard';
import CloudPipelineVisualizer from './components/CloudPipelineVisualizer';
import { sound } from './components/SoundEffects';

// Section Header with Amber Rule
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16 overflow-hidden">
    {subtitle && (
      <div className="flex items-center gap-4 mb-3">
        <div className="w-8 h-[1px] bg-amber-500" />
        <span className="text-amber-500 text-xs font-mono font-bold tracking-[0.3em] uppercase">{subtitle}</span>
      </div>
    )}
    <motion.h2
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white"
    >
      {title}
    </motion.h2>
  </div>
);

// Devicon helper
const getDeviconClass = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("aws")) return "devicon-amazonwebservices-plain text-[#FF9900]";
  if (t.includes("linux")) return "devicon-linux-plain text-white";
  if (t.includes("bash")) return "devicon-bash-plain text-[#4EAA25]";
  if (t.includes("terraform")) return "devicon-terraform-plain text-[#844FBA]";
  if (t.includes("docker")) return "devicon-docker-plain text-[#2496ED]";
  if (t.includes("jenkins")) return "devicon-jenkins-plain text-[#D33833]";
  if (t.includes("github") || t.includes("git")) return "devicon-github-original text-white";
  if (t.includes("python")) return "devicon-python-plain text-[#3776AB]";
  if (t.includes("pandas") || t.includes("numpy")) return "devicon-python-plain text-[#3776AB]";
  if (t.includes("postgres")) return "devicon-postgresql-plain text-[#4169E1]";
  if (t.includes("mysql")) return "devicon-mysql-plain text-[#4479A1]";
  if (t.includes("react")) return "devicon-react-original text-[#61DAFB]";
  return null;
};

export default function App() {
  const [expandedService, setExpandedService] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  // Modals
  const [isAICopilotOpen, setIsAICopilotOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState(null);

  const { scrollYProgress } = useScroll();

  // Keyboard Shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sound.playOpenModal();
        setIsCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsAICopilotOpen(false);
        setIsCommandPaletteOpen(false);
        setIsContactOpen(false);
        setIsResumeOpen(false);
        setSelectedProjectForDetail(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Parallax spring calculations for hero
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400, mass: 1 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400, mass: 1 });

  const nameParallaxX = useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [25, -25]);
  const nameParallaxY = useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [25, -25]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.email);
    sound.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const toggleSound = () => {
    sound.enabled = !sound.enabled;
    setIsSoundMuted(!sound.enabled);
    if (sound.enabled) sound.playClick();
  };

  const projectCategories = ["All", "Data Analytics & BI", "Cloud & DevOps"];

  const filteredProjects = DATA.projects.filter(project => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-400 selection:bg-amber-500/30 selection:text-amber-200 cursor-default relative overflow-hidden">
      
      {/* Top Scroll Progress Line */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[120] h-0.5 origin-left bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 shadow-[0_0_14px_rgba(245,158,11,0.75)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient Cyber Background Glow & Subtle Dot Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[150px]" />
        <motion.div animate={{ x: [0, -45, 0], y: [0, 30, 0], scale: [1, 0.94, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[35%] right-[-15%] w-[45%] h-[45%] rounded-full bg-cyan-500/8 blur-[160px]" />
        <motion.div animate={{ x: [0, -25, 0], y: [0, -35, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] opacity-25"></div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[110] flex items-center gap-2.5 px-4 py-3 bg-amber-500 text-neutral-950 font-medium text-xs rounded-2xl shadow-xl shadow-amber-500/20 border border-amber-400 font-mono"
          >
            <Check size={16} />
            <span>Email copied ({DATA.email})</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action HUD (Bottom-Right: AI Copilot) */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
        <motion.button 
          id="floating-ai-copilot"
          onClick={() => {
            sound.playOpenModal();
            setIsAICopilotOpen(true);
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="important-asset flex items-center gap-2.5 px-4 sm:px-5 py-3.5 bg-neutral-900/90 hover:bg-amber-500 text-neutral-200 hover:text-neutral-950 backdrop-blur-md border border-amber-500/40 hover:border-amber-400 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all group cursor-pointer active:scale-95"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 group-hover:bg-neutral-950"></span>
          </span>
          <Bot size={16} className="text-amber-400 group-hover:text-neutral-950" />
          <span className="text-xs font-mono font-bold tracking-wide uppercase">AI Career Copilot</span>
        </motion.button>
      </div>

      {/* Bottom-Left Utility HUD */}
      <div className="fixed bottom-6 left-6 z-[100] hidden sm:flex items-center gap-2">
        <button
          onClick={() => {
            sound.playClick();
            setIsCommandPaletteOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 text-neutral-400 hover:text-white text-xs font-mono backdrop-blur-md shadow-lg transition-all cursor-pointer"
        >
          <Terminal size={13} className="text-amber-500" />
          <span>Cmd + K</span>
        </button>

        <button
          onClick={handleCopyEmail}
          title={`Copy Email: ${DATA.email}`}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-900/80 hover:bg-amber-500/20 border border-neutral-800 hover:border-amber-500/40 text-neutral-400 hover:text-amber-300 text-xs font-mono backdrop-blur-md transition-all cursor-pointer"
        >
          <Mail size={13} className="text-amber-400" />
          <span>Email</span>
        </button>

        <button
          onClick={toggleSound}
          title={isSoundMuted ? "Unmute sound effects" : "Mute sound effects"}
          className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-amber-400 backdrop-blur-md transition-all cursor-pointer"
        >
          {isSoundMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>

      {/* Header Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 px-4 sm:px-8 py-4 flex justify-between items-center backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800/50"
      >
        <div className="flex items-center gap-3">
          <a href="#landing" className="font-display font-bold text-white tracking-tight text-lg hover:text-amber-400 transition-colors flex items-center gap-2">
            <span>{DATA.name.toUpperCase()}</span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hidden sm:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              LIVE RESUME 2.0
            </span>
          </a>
        </div>

        <div className="hidden lg:flex space-x-6 text-xs uppercase tracking-widest font-semibold font-mono text-neutral-400">
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#github-live" className="hover:text-amber-400 transition-colors">GitHub Live</a>
          <a href="#analytics" className="hover:text-amber-400 transition-colors">Live BI</a>
          <a href="#pipeline" className="hover:text-amber-400 transition-colors">Cloud Flow</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">Capabilities</a>
          <a href="#work" className="hover:text-amber-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-amber-400 transition-colors">Tech Stack</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume PDF View Trigger */}
          <button 
            onClick={() => {
              sound.playClick();
              setIsResumeOpen(true);
            }}
            className="premium-btn premium-btn--dark premium-btn--sm flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          >
            <FileText size={13} className="text-amber-400" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          {/* Connect Modal Trigger */}
          <button 
            onClick={() => {
              sound.playClick();
              setIsContactOpen(true);
            }}
            className="premium-btn premium-btn--primary premium-btn--sm flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          >
            <Send size={12} />
            <span>Connect</span>
          </button>
        </div>
      </motion.nav>

      {/* Main Container */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col gap-28 md:gap-40"
      >
        {/* Landing Hero Section with Giant Parallax Name & Orbits */}
        <section className="relative flex flex-col items-center justify-center min-h-[82vh] pt-6 overflow-visible z-10 w-full" id="landing">
          
          {/* Parallax Background Name & Planetary Orbits */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none flex flex-col items-center justify-center overflow-visible">
            <motion.h1 
              style={{ x: nameParallaxX, y: nameParallaxY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] md:text-[11vw] font-display font-bold tracking-tighter leading-none text-neutral-800/70 whitespace-nowrap select-none uppercase"
            >
              {DATA.name}
            </motion.h1>
            <motion.div
              aria-hidden="true"
              className="hero-orbit hero-orbit-one"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden="true"
              className="hero-orbit hero-orbit-two"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Glowing Avatar / Profile Presentation */}
          <div className="relative z-10 w-full max-w-sm md:max-w-md flex justify-center items-center mt-6">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-amber-500/40 p-1.5 bg-neutral-900/80 shadow-[0_0_80px_rgba(245,158,11,0.25)] relative z-10">
                <img 
                  src="https://avatars.githubusercontent.com/u/195097829?v=4" 
                  alt="Piyarul Sekh" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/20 blur-[90px] rounded-full z-0 pointer-events-none"></div>
            </div>
          </div>

          {/* Hero Headlines & CTA Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 mt-6 text-center flex flex-col items-center gap-2"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-lg">
              <Sparkles size={12} />
              <span>Data Analytics • Business Intelligence • Cloud Specialist</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-none mt-2">
              {DATA.title}
            </h2>

            {/* Premium Pill Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <button
                onClick={() => {
                  sound.playOpenModal();
                  setIsAICopilotOpen(true);
                }}
                className="hero-cta premium-btn premium-btn--primary flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                <Bot size={15} />
                <span>Interview AI Copilot</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsContactOpen(true);
                }}
                className="hero-cta premium-btn premium-btn--secondary flex items-center gap-2 font-mono text-xs uppercase tracking-wider cursor-pointer"
              >
                <Send size={15} />
                <span>Connect with Piyarul</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsResumeOpen(true);
                }}
                className="hero-cta premium-btn premium-btn--dark flex items-center gap-2 text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
              >
                <FileText size={15} className="text-amber-400" />
                <span>Resume PDF</span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* Live GitHub Telemetry Section */}
        <section id="github-live" className="py-2">
          <LiveGitHubTracker />
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-amber-500" />
                <span className="text-amber-500 text-xs font-mono font-bold tracking-[0.3em] uppercase">Engineering Trajectory</span>
              </div>
              <h2 className="text-[2.8rem] md:text-5xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.08]">
                I don't just analyze <br />
                <span className="font-serif italic text-amber-500 font-medium tracking-normal">data streams</span>—I engineer <br />
                <span className="font-serif italic text-amber-500 font-medium tracking-normal">decision intelligence</span> <br />
                and resilient cloud platforms.
              </h2>

              <div className="mt-8 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-xs font-mono text-amber-300">
                "{DATA.quote}" — <span className="text-neutral-400">{DATA.quoteAuthor}</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center lg:mt-8"
            >
              <div className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line">
                {DATA.about}
              </div>

              <div className="w-full h-px bg-neutral-800/60 mb-8" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {DATA.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col p-4 bg-neutral-900/40 border border-neutral-800/70 rounded-2xl hover:border-amber-500/40 transition-colors">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 mb-1">{stat.value}</span>
                    <span className="text-white text-xs font-semibold leading-snug">{stat.label}</span>
                    <span className="text-[10px] font-mono text-neutral-500 mt-0.5">{stat.change}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live BI Analytics Sandbox Section (Recharts) */}
        <section id="analytics" className="py-2">
          <SectionHeader title="Live Business Intelligence Sandbox" subtitle="Data Analytics" />
          <LiveAnalyticsDashboard />
        </section>

        {/* End-to-End Cloud Pipeline Visualizer */}
        <section id="pipeline" className="py-2">
          <SectionHeader title="AWS Cloud Data Architecture" subtitle="Cloud Specialist" />
          <CloudPipelineVisualizer />
        </section>

        {/* Core Capabilities Accordion */}
        <section id="services" className="py-2">
          <SectionHeader title="Specialized Capabilities" subtitle="Engineering Focus" />
          <div className="space-y-4">
            {DATA.services.map((service, idx) => {
              const isExpanded = expandedService === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'bg-neutral-900/80 border-amber-500/50 shadow-xl' 
                      : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <button
                    onClick={() => {
                      sound.playClick();
                      setExpandedService(isExpanded ? null : idx);
                    }}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-amber-500">0{idx + 1}.</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-display font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-xs text-neutral-400 font-mono mt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={18} className="text-amber-400" /> : <ChevronDown size={18} className="text-neutral-500" />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 border-t border-neutral-800/80 space-y-4"
                      >
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.skills.map((skill, sIdx) => {
                            const iconClass = getDeviconClass(skill);
                            return (
                              <span key={sIdx} className="px-3 py-1 rounded-xl bg-neutral-950 text-xs font-mono text-neutral-300 border border-neutral-800 flex items-center gap-1.5">
                                {iconClass && <i className={iconClass}></i>}
                                <span>{skill}</span>
                              </span>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Projects Gallery */}
        <section id="work" className="py-2">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <SectionHeader title="Featured Production Work" subtitle="Selected Projects" />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-neutral-900 p-1.5 rounded-xl border border-neutral-800 self-start sm:self-auto font-mono text-xs">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {project.category}
                    </span>
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 hover:text-white"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-2.5 mb-5">
                    {project.description}
                  </p>

                  {/* Metrics Strip */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-neutral-950 border border-neutral-850 mb-5 text-center font-mono">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <span className="text-amber-400 font-bold text-xs block">{m.value}</span>
                          <span className="text-[9px] text-neutral-500 block truncate">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-neutral-950 text-[10px] font-mono text-neutral-400 border border-neutral-850">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    onClick={() => {
                      sound.playOpenModal();
                      setSelectedProjectForDetail(project);
                    }}
                    className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight size={13} />
                  </button>

                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-neutral-500 hover:text-white"
                  >
                    Inspect Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Trajectory Timeline */}
        <section id="experience" className="py-2">
          <SectionHeader title="Academic & Engineering Path" subtitle="Trajectory" />
          <div className="space-y-6 relative border-l border-neutral-800 pl-6 ml-3">
            {DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-amber-500 group-hover:scale-125 transition-transform" />
                <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-lg font-display font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-amber-400">{exp.period}</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-400">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-neutral-300 leading-relaxed pt-1">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="list-disc list-inside text-xs text-neutral-400 space-y-1 pt-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorized Tech Stack */}
        <section id="skills" className="py-2">
          <SectionHeader title="Categorized Tooling & Stack" subtitle="Technologies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.categorizedTechStack.map((cat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-amber-500">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const iconClass = getDeviconClass(skill);
                    return (
                      <span key={sIdx} className="px-3 py-1.5 rounded-xl bg-neutral-950 text-xs font-mono text-neutral-200 border border-neutral-800 flex items-center gap-1.5">
                        {iconClass && <i className={iconClass}></i>}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Final Section */}
        <section id="contact" className="py-12 border-t border-neutral-900">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <span className="text-amber-500 text-xs font-mono font-bold tracking-[0.3em] uppercase">
              Initiate Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Ready to Turn Raw Data into Actionable ROI?
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Available for full-time Data Analyst, BI Analyst, and Cloud Engineering opportunities. Let's discuss how my analytics and cloud pipeline stack can support your mission.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  sound.playClick();
                  setIsContactOpen(true);
                }}
                className="premium-btn premium-btn--primary font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <Send size={15} />
                <span>Send a Direct Message</span>
              </button>

              <button
                onClick={() => {
                  sound.playOpenModal();
                  setIsAICopilotOpen(true);
                }}
                className="premium-btn premium-btn--dark font-mono text-xs uppercase tracking-wider flex items-center gap-2 text-white cursor-pointer"
              >
                <Bot size={15} className="text-amber-400" />
                <span>Interview AI Copilot</span>
              </button>
            </div>
          </div>
        </section>

      </motion.main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-10 px-6 text-xs font-mono text-neutral-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href={DATA.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${DATA.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <AICopilotModal
        isOpen={isAICopilotOpen}
        onClose={() => setIsAICopilotOpen(false)}
        onOpenContact={() => {
          setIsAICopilotOpen(false);
          setIsContactOpen(true);
        }}
      />

      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenAI={() => setIsAICopilotOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onSelectProject={(id) => {
          const proj = DATA.projects.find(p => p.id === id);
          if (proj) setSelectedProjectForDetail(proj);
        }}
      />

      <ProjectDetailModal
        project={selectedProjectForDetail}
        onClose={() => setSelectedProjectForDetail(null)}
      />

      <ResumePreviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
