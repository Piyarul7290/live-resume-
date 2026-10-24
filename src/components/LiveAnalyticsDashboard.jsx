import React, { useState } from 'react';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { liveChartData } from '../data/portfolioData';
import { 
  TrendingUp, 
  PieChart as PieIcon,
  Activity,
  Layers, 
  BarChart3,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { sound } from './SoundEffects';

export default function LiveAnalyticsDashboard() {
  const [activeView, setActiveView] = useState('revenue');
  const [showTarget, setShowTarget] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all');

  const filteredTrends = timeFilter === 'recent' 
    ? liveChartData.monthlyTrends.slice(5) 
    : liveChartData.monthlyTrends;

  const handleTabChange = (view) => {
    sound.playClick();
    setActiveView(view);
  };

  return (
    <div className="w-full relative p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl shadow-2xl">
      {/* Top Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
        
        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleTabChange('revenue')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeView === 'revenue'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <TrendingUp size={14} />
            <span>Revenue Trajectory</span>
          </button>

          <button
            onClick={() => handleTabChange('rfm')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeView === 'rfm'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <PieIcon size={14} />
            <span>RFM 500k+ Segments</span>
          </button>

          <button
            onClick={() => handleTabChange('cloud')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeView === 'cloud'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Activity size={14} />
            <span>AWS Infrastructure</span>
          </button>

          <button
            onClick={() => handleTabChange('radar')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeView === 'radar'
                ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Layers size={14} />
            <span>Proficiency Radar</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {activeView === 'revenue' && (
            <div className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-xl border border-neutral-800 text-xs font-mono">
              <button
                onClick={() => setTimeFilter('all')}
                className={`px-2 py-0.5 rounded cursor-pointer ${timeFilter === 'all' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-neutral-500'}`}
              >
                10 Mo
              </button>
              <button
                onClick={() => setTimeFilter('recent')}
                className={`px-2 py-0.5 rounded cursor-pointer ${timeFilter === 'recent' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-neutral-500'}`}
              >
                Last 5
              </button>
              <label className="flex items-center gap-1.5 ml-2 cursor-pointer text-neutral-400 select-none">
                <input
                  type="checkbox"
                  checked={showTarget}
                  onChange={(e) => setShowTarget(e.target.checked)}
                  className="rounded bg-neutral-800 border-neutral-700 text-amber-500 focus:ring-0"
                />
                <span>Target</span>
              </label>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Gateway Active</span>
          </div>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 font-mono block">ANNUALIZED SALES</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-display font-bold text-white">$672,500</span>
            <span className="text-xs font-mono font-bold text-emerald-400">+18.4%</span>
          </div>
          <div className="w-full bg-neutral-800 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-amber-500 h-1 rounded-full w-[84%]"></div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 font-mono block">RFM ACTIVE COHORT</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-display font-bold text-white">4,070 / mo</span>
            <span className="text-xs font-mono font-bold text-emerald-400">+12.2%</span>
          </div>
          <div className="w-full bg-neutral-800 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-emerald-500 h-1 rounded-full w-[78%]"></div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 font-mono block">SQL QUERY SPEED</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-display font-bold text-white">43.8 ms</span>
            <span className="text-xs font-mono font-bold text-cyan-400">-35% CTE</span>
          </div>
          <div className="w-full bg-neutral-800 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-cyan-500 h-1 rounded-full w-[95%]"></div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          <span className="text-[10px] text-neutral-400 font-mono block">CLOUD UPTIME</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-display font-bold text-white">99.98%</span>
            <span className="text-xs font-mono font-bold text-purple-400">AWS Multi-AZ</span>
          </div>
          <div className="w-full bg-neutral-800 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-purple-500 h-1 rounded-full w-[99%]"></div>
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="bg-neutral-950/80 rounded-2xl p-4 sm:p-6 border border-neutral-800 min-h-[360px] flex items-center justify-center">
        {activeView === 'revenue' && (
          <div className="w-full h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredTrends} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevAmber" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorTargetCyan" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="month" stroke="#737373" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis stroke="#737373" fontSize={11} fontFamily="JetBrains Mono" tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'JetBrains Mono', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="revenue" name="Actual Net Revenue ($)" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#colorRevAmber)" />
                {showTarget && (
                  <Area type="monotone" dataKey="target" name="Forecasted Target ($)" stroke="#06B6D4" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorTargetCyan)" />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeView === 'rfm' && (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={liveChartData.rfmSegments} dataKey="count" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4}>
                    {liveChartData.rfmSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="md:col-span-5 space-y-2 text-xs font-mono">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                500k+ Transactions RFM Cohorts
              </span>
              {liveChartData.rfmSegments.map((seg, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: seg.color }}></span>
                    <span className="text-neutral-300">{seg.name}</span>
                  </div>
                  <span className="text-white font-bold">{seg.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'cloud' && (
          <div className="w-full h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveChartData.cloudResourceMetrics} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="hour" stroke="#737373" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis stroke="#737373" fontSize={11} fontFamily="JetBrains Mono" unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'JetBrains Mono', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="cpuUsage" name="EC2 CPU Load %" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="memoryUsage" name="RDS Memory Allocation %" stroke="#10B981" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeView === 'radar' && (
          <div className="w-full h-[330px] flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={liveChartData.skillRadar}>
                <PolarGrid stroke="#262626" />
                <PolarAngleAxis dataKey="subject" stroke="#A3A3A3" fontSize={10} fontFamily="JetBrains Mono" />
                <PolarRadiusAxis stroke="#525252" angle={30} domain={[0, 100]} />
                <Radar name="Proficiency" dataKey="A" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.35} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl text-xs space-y-1 font-mono">
        <p className="text-white font-bold border-b border-neutral-800 pb-1">{label}</p>
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
      <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl text-xs space-y-1 font-mono">
        <p className="font-bold text-white">{data.name}</p>
        <p className="text-amber-400">Volume: <strong className="text-white">{data.value.toLocaleString()} records</strong></p>
        <p className="text-neutral-400">Share: <strong className="text-white">{data.payload.percentage}%</strong></p>
      </div>
    );
  }
  return null;
}
