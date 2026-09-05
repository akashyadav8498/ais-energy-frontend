import { Bell, Zap, Wifi } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const donutDataEnergy = [
  { name: "This Month", value: 73245.6,  color: "#3b82f6" },
  { name: "This Week",  value: 18542.2,  color: "#10b981" },
  { name: "Today",      value: 6842.35,  color: "#f59e0b" },
];

const donutDataConn = [
  { name: "Online",  value: 1247, color: "#10b981" },
  { name: "Offline", value: 33,   color: "#ef4444" },
];

export default function EnergyConnectivity({ todaysEnergy }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* ENERGY CONSUMPTION DONUT */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-100">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Energy Consumption</span>
        </div>

        <div className="flex items-center gap-4 mt-1">
          <div className="relative w-28 h-28 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutDataEnergy}
                  innerRadius={32}
                  outerRadius={48}
                  paddingAngle={3}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {donutDataEnergy.map((entry, i) => (
                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-xs font-black text-slate-900 leading-none">{todaysEnergy}</span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5">kWh Today</span>
            </div>
          </div>

          <div className="space-y-2.5 flex-1">
            {[
              { label: "This Month", value: "73,245.60 kWh", color: "#3b82f6" },
              { label: "This Week",  value: "18,542.20 kWh", color: "#10b981" },
              { label: "Today",      value: `${todaysEnergy} kWh`,   color: "#f59e0b" },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-[10px] font-semibold text-slate-400">{label}</span>
                </div>
                <div className="text-[11px] font-black text-slate-800 ml-3.5">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEVICE CONNECTIVITY */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-emerald-100">
            <Wifi className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Device Connectivity</span>
        </div>

        <div className="flex items-center gap-4 mt-1">
          <div className="relative w-28 h-28 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutDataConn}
                  innerRadius={32}
                  outerRadius={48}
                  paddingAngle={3}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {donutDataConn.map((entry, i) => (
                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-sm font-black text-slate-900 leading-none">1,280</span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
            </div>
          </div>

          <div className="space-y-3 flex-1">
            {[
              { label: "Online",  value: "1,247", pct: "97.4%", color: "#10b981" },
              { label: "Offline", value: "33",    pct: "2.6%",  color: "#ef4444" },
            ].map(({ label, value, pct, color }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
                <div>
                  <div className="text-[9px] font-semibold text-slate-400">{label}</div>
                  <div className="text-[11px] font-black text-slate-800">
                    {value}
                    <span className="text-[9px] font-semibold text-slate-400 ml-1">({pct})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVE ALARMS */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-rose-100">
            <Bell className="w-3.5 h-3.5 text-rose-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Active Alarms</span>
        </div>

        <div className="flex items-center gap-4 mt-1">
          {/* Alarm count circle */}
          <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center shrink-0 bg-rose-50 border-2 border-rose-200 shadow-xs">
            <Bell className="w-5 h-5 text-rose-500 mb-0.5 animate-pulse" />
            <span className="text-2xl font-black text-rose-600 leading-none">8</span>
            <span className="text-[9px] font-bold text-rose-400">Active</span>
          </div>

          {/* Severity breakdown */}
          <div className="space-y-2 flex-1">
            {[
              { label: "Critical", count: 3, color: "text-rose-600",   dot: "bg-rose-500" },
              { label: "Major",    count: 3, color: "text-orange-500", dot: "bg-orange-500" },
              { label: "Minor",    count: 2, color: "text-amber-500",  dot: "bg-amber-500" },
              { label: "Info",     count: 0, color: "text-blue-500",   dot: "bg-blue-400" },
            ].map(({ label, count, color, dot }) => (
              <div key={label} className="flex items-center justify-between">
                <span className={`flex items-center gap-1.5 text-[10px] font-bold ${color}`}>
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  {label}
                </span>
                <span className="text-[11px] font-black text-slate-800">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
