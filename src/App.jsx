import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveAnalyticsDashboard from './components/LiveAnalyticsDashboard';
import CloudPipelineVisualizer from './components/CloudPipelineVisualizer';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import CodePlayground from './components/CodePlayground';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero & Identity */}
        <Hero />

        {/* Live BI Analytics Sandbox (Recharts Powered) */}
        <LiveAnalyticsDashboard />

        {/* End-to-End Cloud Data Pipeline & AWS Architecture */}
        <CloudPipelineVisualizer />

        {/* Featured Projects & Case Studies */}
        <Projects />

        {/* Technical Mastery & Competencies Matrix */}
        <SkillsMatrix />

        {/* SQL & Cloud Code Playground */}
        <CodePlayground />

        {/* About Candidate & Methodology */}
        <About />

        {/* Interactive Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
