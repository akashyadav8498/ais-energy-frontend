import { useState } from "react";
import {
  Zap,
  IndianRupee,
  Activity,
  Gauge,
  CheckCircle2,
  Bell,
  Download,
  FileText,
  FileSpreadsheet,
  FileCode,
  Printer,
  Calendar,
  ChevronDown,
  RefreshCw,
  Clock,
  User,
  MapPin,
  Layers,
  ArrowRight,
  Info,
  Server,
  Cpu,
  AlertTriangle,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from "recharts";

// Mock Data
const reportTypes = [
  { id: "energy", name: "Energy Summary", desc: "Overall energy consumption", icon: Zap },
  { id: "meter", name: "Meter Wise", desc: "Energy by individual meters", icon: Cpu },
  { id: "device", name: "Device Performance", desc: "Performance & availability", icon: Server },
  { id: "alarm", name: "Alarm Summary", desc: "Alarms and events report", icon: AlertTriangle },
  { id: "billing", name: "Billing Report", desc: "Billing & consumption report", icon: IndianRupee },
  { id: "custom", name: "Custom Report", desc: "Create custom reports", icon: SlidersHorizontal },
];

const kpiMetrics = [
  {
    title: "TOTAL ENERGY",
    value: "1,245.60 kWh",
    subtext: "+ 12.5% vs last week",
    subtextColor: "text-emerald-600",
    icon: Zap,
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "TOTAL COST",
    value: "₹ 12,456.00",
    subtext: "+ 10.8% vs last week",
    subtextColor: "text-emerald-600",
    icon: IndianRupee,
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    title: "PEAK DEMAND",
    value: "96.40 kW",
    subtext: "18 May 2025, 06:15 PM",
    subtextColor: "text-slate-400 font-normal",
    icon: Activity,
    iconBg: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    title: "AVG POWER FACTOR",
    value: "0.98",
    subtext: "+ 0.02 vs last week",
    subtextColor: "text-emerald-600",
    icon: Gauge,
    iconBg: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "ACTIVE METERS",
    value: "282 / 320",
    subtext: "88.1% Active",
    subtextColor: "text-slate-500 font-medium",
    icon: CheckCircle2,
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    title: "TOTAL ALARMS",
    value: "107",
    subtext: "8 Critical",
    subtextColor: "text-rose-600 font-bold",
    icon: Bell,
    iconBg: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

const energyTableData = [
  { date: "14 May 2025", energy: "1,120.00", cost: "11,200.00", peak: "85.60", pf: "0.97" },
  { date: "15 May 2025", energy: "1,045.30", cost: "10,453.00", peak: "78.20", pf: "0.98" },
  { date: "16 May 2025", energy: "1,090.40", cost: "10,904.00", peak: "80.10", pf: "0.98" },
  { date: "17 May 2025", energy: "1,230.20", cost: "12,302.00", peak: "93.10", pf: "0.99" },
  { date: "18 May 2025", energy: "1,410.50", cost: "14,105.00", peak: "96.40", pf: "0.98" },
  { date: "19 May 2025", energy: "1,150.10", cost: "11,501.00", peak: "82.30", pf: "0.97" },
  { date: "20 May 2025", energy: "1,111.10", cost: "11,111.00", peak: "79.60", pf: "0.97" },
];

const chartData = [
  { day: "14 May", current: 1120, lastWeek: 1050 },
  { day: "15 May", current: 1045, lastWeek: 990 },
  { day: "16 May", current: 1090, lastWeek: 1100 },
  { day: "17 May", current: 1230, lastWeek: 1180 },
  { day: "18 May", current: 1410, lastWeek: 1300 },
  { day: "19 May", current: 1150, lastWeek: 1120 },
  { day: "20 May", current: 1111, lastWeek: 1080 },
];

const topLocations = [
  { name: "Mumbai Site", energy: "2,456.80", share: "30.1%" },
  { name: "Delhi Site", energy: "1,856.40", share: "22.7%" },
  { name: "Pune Site", energy: "1,432.20", share: "17.6%" },
  { name: "Bangalore Site", energy: "1,268.10", share: "15.5%" },
  { name: "Hyderabad Site", energy: "1,144.10", share: "14.1%" },
];

const topMeters = [
  { name: "Meter-003", location: "Mumbai Site", energy: "268.40", share: "3.3%" },
  { name: "Meter-001", location: "Mumbai Site", energy: "245.80", share: "3.0%" },
  { name: "Meter-005", location: "Pune Site", energy: "210.35", share: "2.6%" },
  { name: "Meter-002", location: "Delhi Site", energy: "198.70", share: "2.4%" },
  { name: "Meter-006", location: "Bangalore Site", energy: "122.35", share: "1.5%" },
];

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState("energy");
  const [selectedRange, setSelectedRange] = useState("This Week");
  const [scheduleEnabled, setScheduleEnabled] = useState(true);

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 p-4 font-sans space-y-4">
      {/* 1. TOP HEADER & MAIN ACTION BUTTONS */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 leading-tight">Reports</h1>
          <p className="text-xs text-slate-500">Generate and download energy reports and analytics</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Quick Range Selector */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wide">Quick Range</span>
            {["Today", "Yesterday", "This Week", "Last Week", "This Month", "Custom"].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  selectedRange === range ? "bg-blue-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>Generate Report</span>
          </button>

          <button className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-slate-50 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer">
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </button>
        </div>
      </div>

      {/* 2. SELECT REPORT TYPE CARDS */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-900">Select Report Type</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {reportTypes.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selectedReport === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedReport(item.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                  isSelected ? "bg-white border-blue-500 ring-2 ring-blue-500/10 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${isSelected ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className={`text-xs font-bold truncate ${isSelected ? "text-blue-600" : "text-slate-800"}`}>{item.name}</h4>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. FILTERS BAR */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Location</label>
          <select className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500">
            <option>All Locations</option>
            <option>Mumbai Site</option>
            <option>Delhi Site</option>
            <option>Pune Site</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Gateway</label>
          <select className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500">
            <option>All Gateways</option>
            <option>Gateway-01</option>
            <option>Gateway-02</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">DCU</label>
          <select className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500">
            <option>All DCUs</option>
            <option>DCU-021</option>
            <option>DCU-022</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Meter</label>
          <select className="w-full mt-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500">
            <option>All Meters</option>
            <option>Meter-001</option>
            <option>Meter-002</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Date Range</label>
          <div className="relative mt-1">
            <input
              type="text"
              readOnly
              value="14 May 2025 - 20 May 2025"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg pl-8 pr-2.5 py-1.5 outline-none"
            />
            <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>
      </div>

      {/* 4. KPI SUMMARY METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {kpiMetrics.map((metric, idx) => {
          const IconComp = metric.icon;
          return (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${metric.iconBg}`}>
                <IconComp className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">{metric.title}</p>
                <p className="text-base font-black text-slate-900 leading-tight truncate">{metric.value}</p>
                <p className={`text-[10px] font-semibold truncate ${metric.subtextColor}`}>{metric.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. MAIN SECTION: TABLE & CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Energy Summary Table */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-900">
                Energy Summary <span className="text-slate-400 font-normal">(14 May 2025 - 20 May 2025)</span>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400">
                    <th className="py-2 px-1">Date</th>
                    <th className="py-2 px-1">Energy (kWh)</th>
                    <th className="py-2 px-1">Cost (₹)</th>
                    <th className="py-2 px-1">Peak Demand (kW)</th>
                    <th className="py-2 px-1">Avg Power Factor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700 text-[11px]">
                  {energyTableData.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-1 font-bold text-slate-800">{row.date}</td>
                      <td className="py-2 px-1 font-mono">{row.energy}</td>
                      <td className="py-2 px-1 font-mono">{row.cost}</td>
                      <td className="py-2 px-1 font-mono">{row.peak}</td>
                      <td className="py-2 px-1 font-mono">{row.pf}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-slate-200 font-bold text-slate-900 text-xs">
                    <td className="py-2.5 px-1">Total / Average</td>
                    <td className="py-2.5 px-1 font-mono">8,157.60</td>
                    <td className="py-2.5 px-1 font-mono">81,576.00</td>
                    <td className="py-2.5 px-1 font-mono">96.40</td>
                    <td className="py-2.5 px-1 font-mono">0.98</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Energy Consumption Trend Chart & Download Options */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-900">Energy Consumption Trend</h3>
              <div className="flex items-center gap-3 text-[10px] font-bold">
                <div className="flex items-center gap-1 text-blue-600">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
                  <span>This Week (kWh)</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <span className="w-2.5 h-0.5 bg-blue-400 rounded-xs border-dashed border-t"></span>
                  <span>Last Week (kWh)</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-full text-[10px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: "#e2e8f0" }} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: "8px", color: "#fff", fontSize: "11px" }} />
                  <Bar dataKey="current" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20} />
                  <Line type="monotone" dataKey="lastWeek" stroke="#60a5fa" strokeDasharray="3 3" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Action Buttons for Export */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
            <h4 className="text-xs font-bold text-slate-900 mb-2">Download Report</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer">
                <FileText className="w-4 h-4 text-rose-600" />
                <span>PDF Report</span>
              </button>
              <button className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Excel Report</span>
              </button>
              <button className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer">
                <FileCode className="w-4 h-4 text-purple-600" />
                <span>CSV Report</span>
              </button>
              <button className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer">
                <Printer className="w-4 h-4 text-blue-600" />
                <span>Print Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 6. BOTTOM SECTION: BREAKDOWNS & SCHEDULE REPORT */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4">
        {/* Top Locations */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 mb-3">Top Locations by Energy</h3>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-400">
                  <th className="pb-2">Location</th>
                  <th className="pb-2">Energy (kWh)</th>
                  <th className="pb-2 text-right">% Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-[11px] text-slate-700">
                {topLocations.map((loc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2 font-bold text-slate-800">{loc.name}</td>
                    <td className="py-2 font-mono">{loc.energy}</td>
                    <td className="py-2 font-mono text-right">{loc.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1 pt-2 border-t border-slate-100 cursor-pointer">
            <span>View Location Report</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Top Meters */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 mb-3">Top Meters by Energy</h3>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-400">
                  <th className="pb-2">Meter Name</th>
                  <th className="pb-2">Location</th>
                  <th className="pb-2">Energy (kWh)</th>
                  <th className="pb-2 text-right">% Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-[11px] text-slate-700">
                {topMeters.map((mtr, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2 font-bold text-slate-800">{mtr.name}</td>
                    <td className="py-2 text-slate-500">{mtr.location}</td>
                    <td className="py-2 font-mono">{mtr.energy}</td>
                    <td className="py-2 font-mono text-right">{mtr.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1 pt-2 border-t border-slate-100 cursor-pointer">
            <span>View Meter Report</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Report Summary Details & Schedule Form */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-4">
          <div>
            <h3 className="text-xs font-bold text-slate-900 mb-3">Report Summary</h3>
            <div className="space-y-2 text-xs font-medium text-slate-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <FileText className="w-3.5 h-3.5" />
                  Report Type
                </span>
                <span className="font-bold text-slate-800">Energy Summary</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  Time Period
                </span>
                <span className="font-bold text-slate-800">14 May 2025 - 20 May 2025</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  Locations
                </span>
                <span className="font-bold text-slate-800">All Locations</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Layers className="w-3.5 h-3.5" />
                  Total Devices
                </span>
                <span className="font-bold text-slate-800">342</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Generated On
                </span>
                <span className="font-bold text-slate-800">20 May 2025 10:25 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <User className="w-3.5 h-3.5" />
                  Generated By
                </span>
                <span className="font-bold text-slate-800">Admin User</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Schedule Report Form */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Schedule Report</h4>
                <p className="text-[10px] text-slate-400">Automate and receive reports on email</p>
              </div>
              <button
                onClick={() => setScheduleEnabled(!scheduleEnabled)}
                className={`w-9 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${scheduleEnabled ? "bg-blue-600 justify-end" : "bg-slate-300 justify-start"}`}
              >
                <span className="w-4 h-4 bg-white rounded-full shadow-xs"></span>
              </button>
            </div>

            {scheduleEnabled && (
              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Frequency</label>
                    <select className="w-full mt-0.5 bg-slate-50 border border-slate-200 rounded-lg p-1.5 font-bold text-slate-700 outline-none">
                      <option>Weekly</option>
                      <option>Daily</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Day</label>
                    <select className="w-full mt-0.5 bg-slate-50 border border-slate-200 rounded-lg p-1.5 font-bold text-slate-700 outline-none">
                      <option>Monday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Time</label>
                    <select className="w-full mt-0.5 bg-slate-50 border border-slate-200 rounded-lg p-1.5 font-bold text-slate-700 outline-none">
                      <option>09:00 AM</option>
                      <option>12:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400">Email Recipients</label>
                  <input type="text" placeholder="Enter email addresses" className="w-full mt-0.5 bg-slate-50 border border-slate-200 text-xs rounded-lg p-1.5 outline-none font-medium" />
                  <p className="text-[9px] text-slate-400 mt-0.5">Separate multiple emails with comma</p>
                </div>

                <button className="w-full bg-blue-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs cursor-pointer">Save Schedule</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 7. INFO FOOTER */}
      <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3 flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
          <Info className="w-3.5 h-3.5" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900">About Reports</h4>
          <p className="text-[11px] font-medium text-slate-600 mt-0.5">Reports are generated based on device data and may vary slightly from billing values. All times are in your local timezone.</p>
        </div>
      </div>
    </div>
  );
}
