import React, { useState } from 'react';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { interactiveChartData } from '../data/portfolioData';
import { 
  TrendingUp, 
  Users, 
  Cloud, 
  Target, 
  Sliders, 
  CheckCircle, 
  RefreshCw, 
  Layers, 
  BarChart3,
  PieChart as PieIcon,
  Activity
} from 'lucide-react';

export default function LiveAnalyticsDashboard() {
  const [activeView, setActiveView] = useState('revenue');
  const [showTarget, setShowTarget] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all');

  // Filtered dataset
  const filteredTrends = timeFilter === 'recent' 
    ? interactiveChartData.monthlyTrends.slice(5) 
    : interactiveChartData.monthlyTrends;

  return (
    <section id="analytics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Data Analytics Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Business Intelligence & Telemetry Console
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Explore live interactive visualizations simulated from real enterprise data workflows—from multi-month revenue growth to RFM customer cohort distribution and AWS infrastructure telemetry.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="rounded-2xl bg-[#0F172A]/90 border border-slate-800 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-8">
          
          {/* Top Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            {/* View Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveView('revenue')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeView === 'revenue'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/70'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Revenue & Growth</span>
              </button>

              <button
                onClick={() => setActiveView('rfm')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeView === 'rfm'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/70'
                }`}
              >
                <PieIcon className="w-4 h-4" />
                <span>RFM Customer Segments</span>
              </button>

              <button
                onClick={() => setActiveView('cloud')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeView === 'cloud'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/70'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>AWS Cloud Telemetry</span>
              </button>

              <button
                onClick={() => setActiveView('radar')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeView === 'radar'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/70'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Competency Radar</span>
              </button>
            </div>

            {/* Filter controls */}
            <div className="flex items-center gap-3">
              {activeView === 'revenue' && (
                <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setTimeFilter('all')}
                    className={`px-2 py-1 rounded font-mono ${timeFilter === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400'}`}
                  >
                    10 Months
                  </button>
                  <button
                    onClick={() => setTimeFilter('recent')}
                    className={`px-2 py-1 rounded font-mono ${timeFilter === 'recent' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400'}`}
                  >
                    Last 5 Mo
                  </button>
                  <label className="flex items-center gap-1.5 ml-2 cursor-pointer text-slate-300 select-none">
                    <input
                      type="checkbox"
                      checked={showTarget}
                      onChange={(e) => setShowTarget(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <span>Target</span>
                  </label>
                </div>
              )}

              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Power BI Gateway: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Quick KPI Cards Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono">TOTAL REVENUE (YTD)</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl sm:text-2xl font-bold text-white">$672,500</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center">+18.4%</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                <div className="bg-cyan-400 h-1 rounded-full w-[84%]"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono">AVG ACTIVE USERS</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl sm:text-2xl font-bold text-white">4,070 / mo</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center">+12.2%</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                <div className="bg-blue-400 h-1 rounded-full w-[78%]"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono">AVG PIPELINE LATENCY</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl sm:text-2xl font-bold text-white">43.8 ms</span>
                <span className="text-xs font-semibold text-cyan-400 flex items-center">-35% opt</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                <div className="bg-emerald-400 h-1 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono">CLOUD AVAILABILITY</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl sm:text-2xl font-bold text-white">99.98%</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center">AWS Multi-AZ</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                <div className="bg-purple-400 h-1 rounded-full w-[99%]"></div>
              </div>
            </div>
          </div>

          {/* Chart Display Area */}
          <div className="bg-slate-950/80 rounded-xl p-4 sm:p-6 border border-slate-800 min-h-[380px] flex items-center justify-center">
            
            {/* View 1: Revenue & Target Area Chart */}
            {activeView === 'revenue' && (
              <div className="w-full h-[350px]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    Gross Revenue vs Target Trajectory (USD)
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">Simulated Power BI DAX Model</span>
                </div>
                <ResponsiveContainer width="100%" height="90%">
                  <AreaChart data={filteredTrends} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                    <XAxis dataKey="month" stroke="#64748B" fontStyle="mono" fontSize={12} />
                    <YAxis 
                      stroke="#64748B" 
                      fontSize={12} 
                      tickFormatter={(val) => `$${val / 1000}k`} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      name="Actual Revenue ($)" 
                      stroke="#06B6D4" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorRev)" 
                    />
                    {showTarget && (
                      <Area 
                        type="monotone" 
                        dataKey="target" 
                        name="Forecasted Target ($)" 
                        stroke="#8B5CF6" 
                        strokeWidth={2} 
                        strokeDasharray="4 4" 
                        fillOpacity={1} 
                        fill="url(#colorTarget)" 
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* View 2: RFM Customer Segments (Donut Chart + Breakdown) */}
            {activeView === 'rfm' && (
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 h-[330px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={interactiveChartData.rfmSegments}
                        dataKey="count"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={105}
                        paddingAngle={4}
                      >
                        {interactiveChartData.rfmSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomPieTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="md:col-span-5 space-y-2 text-xs">
                  <h4 className="font-semibold text-slate-200 text-sm mb-3">
                    500K+ Transactions Segment Breakdown
                  </h4>
                  {interactiveChartData.rfmSegments.map((seg, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: seg.color }}></span>
                        <span className="text-slate-300 font-medium">{seg.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white font-bold">{seg.count.toLocaleString()}</span>
                        <span className="text-slate-500 ml-1">({seg.percentage}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 3: AWS Cloud Infrastructure Telemetry */}
            {activeView === 'cloud' && (
              <div className="w-full h-[350px]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    AWS Multi-Tier EC2 & RDS Telemetry (24-Hour Cycle)
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">CloudWatch Agent Streaming</span>
                </div>
                <ResponsiveContainer width="100%" height="90%">
                  <LineChart data={interactiveChartData.cloudResourceMetrics} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                    <XAxis dataKey="hour" stroke="#64748B" fontSize={12} />
                    <YAxis stroke="#64748B" fontSize={12} unit="%" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Line 
                      type="monotone" 
                      dataKey="cpuUsage" 
                      name="CPU Utilization %" 
                      stroke="#06B6D4" 
                      strokeWidth={2.5} 
                      dot={{ r: 4 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="memoryUsage" 
                      name="Memory Allocation %" 
                      stroke="#10B981" 
                      strokeWidth={2.5} 
                      dot={{ r: 4 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="latencyMs" 
                      name="API Latency (ms)" 
                      stroke="#F59E0B" 
                      strokeWidth={2} 
                      strokeDasharray="5 5" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* View 4: Skill Competency Radar */}
            {activeView === 'radar' && (
              <div className="w-full h-[350px] flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height="90%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={interactiveChartData.skillRadar}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" stroke="#94A3B8" fontSize={11} />
                    <PolarRadiusAxis stroke="#475569" angle={30} domain={[0, 100]} />
                    <Radar 
                      name="Piyarul's Proficiency" 
                      dataKey="A" 
                      stroke="#06B6D4" 
                      fill="#06B6D4" 
                      fillOpacity={0.4} 
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Balanced profile spanning Analytical Querying, DAX, Python, and Cloud IaC
                </p>
              </div>
            )}

          </div>

          {/* Bottom Insights Footer */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 font-mono gap-2">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              Automated data pipeline refreshes via AWS EventBridge & Power BI Service
            </span>
            <span>Dataset: 500,000+ Cleaned Rows</span>
          </div>

        </div>

      </div>
    </section>
  );
}

// Custom Tooltip for Charts
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-slate-900/95 border border-slate-700 rounded-lg shadow-xl text-xs space-y-1 font-mono">
        <p className="text-slate-300 font-bold border-b border-slate-800 pb-1">{label}</p>
        {payload.map((item, idx) => (
          <p key={idx} style={{ color: item.color }} className="flex justify-between gap-4">
            <span>{item.name}:</span>
            <span className="font-bold">
              {typeof item.value === 'number' && item.name.includes('$')
                ? `$${item.value.toLocaleString()}`
                : item.value}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

function CustomPieTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="p-3 bg-slate-900/95 border border-slate-700 rounded-lg shadow-xl text-xs space-y-1 font-mono">
        <p className="font-bold text-slate-200">{data.name}</p>
        <p className="text-cyan-400">Total Count: <strong className="text-white">{data.value.toLocaleString()}</strong></p>
        <p className="text-slate-400">Percentage: <strong className="text-white">{data.payload.percentage}%</strong></p>
      </div>
    );
  }
  return null;
}
