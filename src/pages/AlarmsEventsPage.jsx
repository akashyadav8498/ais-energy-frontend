import React, { useState } from "react";
import { Bell, AlertTriangle, AlertCircle, Info as InfoIcon, CheckCircle2, Search, Download, Eye, MoreVertical, ChevronLeft, ChevronRight, Filter, TrendingDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// --- Mock Data ---
const severityDistribution = [
  { name: "Critical", value: 8,  percent: "7.9%",  color: "#ef4444" },
  { name: "Major",    value: 14, percent: "13.9%", color: "#f97316" },
  { name: "Minor",    value: 23, percent: "22.8%", color: "#eab308" },
  { name: "Info",     value: 56, percent: "55.4%", color: "#3b82f6" },
];

const alarmsTrendData = [
  { date: "14 May", critical: 2, major: 9,  minor: 20, info: 32 },
  { date: "15 May", critical: 4, major: 10, minor: 22, info: 38 },
  { date: "16 May", critical: 1, major: 8,  minor: 18, info: 42 },
  { date: "17 May", critical: 3, major: 11, minor: 21, info: 38 },
  { date: "18 May", critical: 2, major: 12, minor: 24, info: 41 },
  { date: "19 May", critical: 1, major: 9,  minor: 19, info: 34 },
  { date: "20 May", critical: 2, major: 10, minor: 21, info: 37 },
];

const alarmsLogData = [
  { id:1,  time:"20 May 2025", subTime:"10:24:12 AM", severity:"Critical", alarm:"High Power Alert",      details:"Power exceeded threshold (> 10 kW)",     device:"Meter-003", subDevice:"(CT-100A)", location:"Mumbai Site", subLocation:"DCU-021",    status:"Active",       duration:"00:15:32" },
  { id:2,  time:"20 May 2025", subTime:"09:48:05 AM", severity:"Critical", alarm:"Voltage Unbalance",     details:"Unbalance: 2.1% (> 2 %)",                device:"Meter-001", subDevice:"(CT-100A)", location:"Mumbai Site", subLocation:"DCU-021",    status:"Active",       duration:"00:51:39" },
  { id:3,  time:"20 May 2025", subTime:"08:35:42 AM", severity:"Major",    alarm:"Current High",          details:"Phase-2 Current: 28.5 A",                device:"Meter-002", subDevice:"(CT-100A)", location:"Mumbai Site", subLocation:"DCU-021",    status:"Active",       duration:"01:12:18" },
  { id:4,  time:"20 May 2025", subTime:"07:19:33 AM", severity:"Major",    alarm:"Power Factor Low",      details:"PF: 0.82 (< 0.85 )",                    device:"Meter-005", subDevice:"(CT-100A)", location:"Pune Site",   subLocation:"DCU-005",    status:"Active",       duration:"02:28:45" },
  { id:5,  time:"20 May 2025", subTime:"06:40:11 AM", severity:"Minor",    alarm:"Communication Delay",   details:"No data received for 10 minutes",        device:"Meter-006", subDevice:"(CT-100A)", location:"Bangalore Site", subLocation:"DCU-010", status:"Acknowledged", duration:"00:20:11" },
  { id:6,  time:"19 May 2025", subTime:"11:05:22 PM", severity:"Info",     alarm:"Device Online",         details:"Device came online",                    device:"DCU-021",   subDevice:"",         location:"Mumbai Site", subLocation:"Gateway-02", status:"Cleared",      duration:"-" },
  { id:7,  time:"19 May 2025", subTime:"10:55:12 PM", severity:"Info",     alarm:"Data Updated",          details:"Configuration updated successfully",     device:"Meter-003", subDevice:"",         location:"Mumbai Site", subLocation:"DCU-021",    status:"Cleared",      duration:"-" },
  { id:8,  time:"19 May 2025", subTime:"09:12:33 PM", severity:"Minor",    alarm:"Battery Low",           details:"Battery level: 22%",                    device:"DCU-005",   subDevice:"",         location:"Pune Site",   subLocation:"Gateway-01", status:"Cleared",      duration:"01:05:44" },
  { id:9,  time:"19 May 2025", subTime:"08:14:10 PM", severity:"Info",     alarm:"System Backup",         details:"Daily configuration backup completed",   device:"Gateway-02",subDevice:"",         location:"Mumbai Site", subLocation:"Main Panel", status:"Cleared",      duration:"-" },
  { id:10, time:"19 May 2025", subTime:"07:30:00 PM", severity:"Major",    alarm:"Over Voltage Alert",    details:"Voltage crossed 440V threshold",         device:"Meter-004", subDevice:"(CT-100A)", location:"Delhi Site",  subLocation:"DCU-003",   status:"Cleared",      duration:"00:45:12" },
];

const kpiCards = [
  { label:"Critical Alarms", value:"8",   sub:"Immediate Action", icon:Bell,          colorText:"text-rose-600",   iconBg:"bg-rose-100",    borderAccent:"border-l-rose-500",   subColor:"text-rose-500" },
  { label:"Major Alarms",    value:"14",  sub:"Needs Attention",  icon:AlertTriangle, colorText:"text-orange-500", iconBg:"bg-orange-100",  borderAccent:"border-l-orange-500", subColor:"text-orange-400" },
  { label:"Minor Alarms",    value:"23",  sub:"Monitor",          icon:AlertCircle,   colorText:"text-amber-500",  iconBg:"bg-amber-100",   borderAccent:"border-l-amber-500",  subColor:"text-slate-400" },
  { label:"Info Events",     value:"56",  sub:"Informational",    icon:InfoIcon,      colorText:"text-blue-600",   iconBg:"bg-blue-100",    borderAccent:"border-l-blue-500",   subColor:"text-blue-500" },
  { label:"All Cleared",     value:"128", sub:"This Week",        icon:CheckCircle2,  colorText:"text-emerald-600",iconBg:"bg-emerald-100", borderAccent:"border-l-emerald-500",subColor:"text-emerald-500" },
];

export default function AlarmsEventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "Critical": return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200";
      case "Major":    return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-200";
      case "Minor":    return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200";
      case "Info":     return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200";
      default:         return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":       return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200";
      case "Acknowledged": return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200";
      case "Cleared":      return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200";
      default:             return "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200";
    }
  };

  return (
    <div className="space-y-4 pb-8 text-slate-800 p-5">

      {/* 1. KPI Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {kpiCards.map(({ label, value, sub, icon: Icon, colorText, iconBg, borderAccent, subColor }) => (
          <div
            key={label}
            className={`bg-white rounded-2xl p-4 flex items-center gap-3.5 border border-slate-200/80 border-l-[4px] ${borderAccent} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
          >
            <div className={`w-11 h-11 rounded-xl ${iconBg} ${colorText} flex items-center justify-center shrink-0`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 leading-none mb-1">{label}</p>
              <p className="text-2xl font-black text-slate-900 leading-none mb-1">{value}</p>
              <p className={`text-[9px] font-bold ${subColor}`}>{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* Left: Alarms Table */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col gap-4">

          {/* Table Header Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm font-black text-slate-900">Alarms &amp; Events Log</h2>
            <div className="flex flex-wrap items-center gap-2">

              <select className="bg-slate-50 border border-slate-200/80 font-bold rounded-xl px-3 py-1.5 outline-none text-[11px] text-slate-700 shadow-sm cursor-pointer">
                <option>All Status</option>
                <option>Active</option>
                <option>Acknowledged</option>
                <option>Cleared</option>
              </select>

              <select className="bg-slate-50 border border-slate-200/80 font-bold rounded-xl px-3 py-1.5 outline-none text-[11px] text-slate-700 shadow-sm cursor-pointer">
                <option>All Severity</option>
                <option>Critical</option>
                <option>Major</option>
                <option>Minor</option>
                <option>Info</option>
              </select>

              <select className="bg-slate-50 border border-slate-200/80 font-bold rounded-xl px-3 py-1.5 outline-none text-[11px] text-slate-700 shadow-sm cursor-pointer">
                <option>All Devices</option>
                <option>Meter-001</option>
                <option>Meter-002</option>
                <option>Meter-003</option>
              </select>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search alarm or device..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-50 border border-slate-200/80 rounded-xl pl-8 pr-3 py-1.5 text-[11px] font-medium w-44 transition-colors"
                  style={{ outline: 'none' }}
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Export Button */}
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-bold transition-all shadow-xs cursor-pointer">
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[11px]">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Time</th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Severity</th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Alarm / Event</th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Device</th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Location</th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Status</th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">Duration</th>
                  <th className="px-3 py-2.5 text-center text-[10px] font-bold text-slate-400 tracking-wider uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {alarmsLogData.map((row) => (
                  <tr key={row.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                    <td className="px-3 py-2.5 align-middle">
                      <div className="font-bold text-slate-800 text-[11px]">{row.time}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5 font-mono">{row.subTime}</div>
                    </td>
                    <td className="px-3 py-2.5 align-middle">
                      <span className={getSeverityBadge(row.severity)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1" />
                        {row.severity}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 align-middle">
                      <div className="font-bold text-slate-900 text-[11px]">{row.alarm}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{row.details}</div>
                    </td>
                    <td className="px-3 py-2.5 align-middle">
                      <div className="font-bold text-slate-800 text-[11px]">{row.device}</div>
                      {row.subDevice && (
                        <div className="text-[9px] text-slate-400 font-mono">{row.subDevice}</div>
                      )}
                    </td>
                    <td className="px-3 py-2.5 align-middle">
                      <div className="font-bold text-slate-800 text-[11px]">{row.location}</div>
                      <div className="text-[9px] text-slate-400 font-mono">{row.subLocation}</div>
                    </td>
                    <td className="px-3 py-2.5 align-middle">
                      <span className={getStatusBadge(row.status)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1" />
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 align-middle font-bold text-slate-600 text-[11px] font-mono">
                      {row.duration}
                    </td>
                    <td className="px-3 py-2.5 align-middle">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 pt-3 font-semibold border-t border-slate-100">
            <div className="text-[10px] font-bold text-slate-400">Showing 1–10 of 101 entries</div>

            <div className="flex items-center gap-1">
              <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-400 disabled:opacity-40 transition-colors cursor-pointer">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`w-7 h-7 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                    p === 1 ? "bg-blue-600 text-white shadow-xs" : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="px-1 text-slate-400 text-[11px]">…</span>
              <button className="w-7 h-7 rounded-lg text-[11px] font-bold hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer">13</button>
              <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-slate-400 font-bold">Rows per page:</span>
              <select className="bg-slate-50 border border-slate-200/80 rounded-lg px-2 py-1 outline-none font-bold text-slate-700 text-[10px]">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right: Charts & Filters */}
        <div className="space-y-4">

          {/* Donut Chart */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
            <h3 className="text-[11px] font-black text-slate-900 mb-3 uppercase tracking-wide">Alarms by Severity</h3>
            <div className="flex items-center gap-3">
              <div className="relative w-32 h-32 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={severityDistribution}
                      cx="50%" cy="50%"
                      innerRadius={38} outerRadius={56}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {severityDistribution.map((e, i) => (
                        <Cell key={i} fill={e.color} strokeWidth={0} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <p className="text-xl font-black text-slate-900 leading-none">101</p>
                  <p className="text-[9px] font-bold text-slate-400 mt-0.5">Total</p>
                </div>
              </div>

              <div className="space-y-2 flex-1">
                {severityDistribution.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
                      <span className="text-[10px] font-bold text-slate-600">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-black text-slate-900 font-mono">
                      {item.value}
                      <span className="text-[9px] font-semibold text-slate-400 ml-1">({item.percent})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trend Line Chart */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
            <h3 className="text-[11px] font-black text-slate-900 mb-2 uppercase tracking-wide">Alarms Trend (This Week)</h3>

            <div className="flex items-center justify-between gap-3 flex-wrap text-[9px] font-bold mb-2">
              {[
                { label: "Critical", color: "#ef4444" },
                { label: "Major",    color: "#f97316" },
                { label: "Minor",    color: "#eab308" },
                { label: "Info",     color: "#3b82f6" },
              ].map(({ label, color }) => (
                <span key={label} className="flex items-center gap-1" style={{ color }}>
                  <span className="w-3 h-0.5 rounded inline-block" style={{ background: color }} />
                  {label}
                </span>
              ))}
            </div>

            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={alarmsTrendData} margin={{ top: 2, right: 2, left: -28, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 8, fill: "#94a3b8" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 8, fill: "#94a3b8" }} />
                  <Tooltip
                    contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 10 }}
                    labelStyle={{ color: '#94a3b8' }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Line type="monotone" dataKey="critical" stroke="#ef4444" strokeWidth={1.5} dot={{ r: 2, strokeWidth: 0 }} />
                  <Line type="monotone" dataKey="major"    stroke="#f97316" strokeWidth={1.5} dot={{ r: 2, strokeWidth: 0 }} />
                  <Line type="monotone" dataKey="minor"    stroke="#eab308" strokeWidth={1.5} dot={{ r: 2, strokeWidth: 0 }} />
                  <Line type="monotone" dataKey="info"     stroke="#3b82f6" strokeWidth={1.5} dot={{ r: 2, strokeWidth: 0 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-wide">Quick Filters</h3>
            <div className="space-y-1.5">
              {[
                { id: "active", label: "Active Alarms",   count: 22,  badgeBg: "bg-rose-50 text-rose-600 border border-rose-200" },
                { id: "unack",  label: "Unacknowledged",  count: 22,  badgeBg: "bg-orange-50 text-orange-600 border border-orange-200" },
                { id: "today",  label: "Today's Alarms",  count: 12,  badgeBg: "bg-amber-50 text-amber-600 border border-amber-200" },
                { id: "week",   label: "This Week",       count: 101, badgeBg: "bg-blue-50 text-blue-600 border border-blue-200" },
              ].map(({ id, label, count, badgeBg }) => (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                    activeFilter === id
                      ? "bg-blue-50 border border-blue-200 text-blue-700 shadow-xs"
                      : "bg-slate-50 border border-transparent text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{label}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeBg}`}>{count}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setActiveFilter("all")}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 w-full bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-[11px] font-bold transition-all cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info Bar */}
      <div className="rounded-2xl p-4 flex items-start gap-3 bg-blue-500/5 border border-blue-500/15">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-blue-600 shadow-xs shadow-blue-500/30">
          <InfoIcon className="w-4 h-4 text-white" />
        </div>
        <div>
          <h4 className="text-[11px] font-black text-slate-900">About Alarms</h4>
          <p className="text-[10px] font-medium text-slate-500 mt-0.5">
            Alarms are generated based on configured thresholds and device health parameters. Critical alarms require immediate attention to prevent downtime.
          </p>
        </div>
      </div>
    </div>
  );
}
