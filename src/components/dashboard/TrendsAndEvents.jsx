import { MapPin, TrendingUp, Clock } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

const energyTrendData = [
  { date: "14 May", energy: 4500 },
  { date: "15 May", energy: 5200 },
  { date: "16 May", energy: 5800 },
  { date: "17 May", energy: 6300 },
  { date: "18 May", energy: 6600 },
  { date: "19 May", energy: 7100 },
  { date: "20 May", energy: 8000 },
];

const barColors = [
  "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10, padding: '8px 12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      }}>
        <p style={{ color: '#94a3b8', fontSize: 10, marginBottom: 3 }}>{label}</p>
        <p style={{ color: '#60a5fa', fontSize: 13, fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
          {payload[0].value.toLocaleString()} <span style={{ fontSize: 10, color: '#94a3b8' }}>kWh</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function TrendsAndEvents({ locations, events }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* POWER BY LOCATION */}
      <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-100">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Power by Location</span>
          <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-[9px] font-bold text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="space-y-3">
          {locations.map((loc, idx) => {
            const pct = parseFloat(loc.barWidth);
            const gradClass = pct >= 50
              ? "bg-linear-to-r from-emerald-500 to-teal-400"
              : pct >= 20
              ? "bg-linear-to-r from-amber-500 to-amber-300"
              : "bg-linear-to-r from-rose-500 to-rose-400";
            return (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] font-bold text-slate-700">{loc.name}</span>
                  <span className="text-[10px] font-bold font-mono text-slate-800">
                    {loc.power} kW
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${gradClass}`}
                    style={{ width: loc.barWidth }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ENERGY TREND */}
      <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-purple-100">
            <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Energy Trend (7 Days)</span>
        </div>

        <div className="flex-1" style={{ minHeight: 175 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={energyTrendData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="date"
                stroke="#cbd5e1"
                fontSize={9}
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#94a3b8', fontSize: 9 }}
              />
              <YAxis
                stroke="#cbd5e1"
                fontSize={9}
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: 9 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(37,99,235,0.05)' }} />
              <Bar dataKey="energy" radius={[5, 5, 0, 0]} maxBarSize={36}>
                {energyTrendData.map((_, i) => (
                  <Cell key={i} fill={barColors[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="text-[9px] text-slate-400 text-center font-bold pt-2 mt-1 border-t border-slate-100">
          Daily Energy Consumption (kWh)
        </div>
      </div>

      {/* RECENT EVENTS */}
      <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-amber-100">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Recent Events</span>
          </div>
          <button className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-[10px] font-bold transition-all cursor-pointer">
            View All
          </button>
        </div>

        <div className="space-y-1.5">
          {events.map((evt) => {
            const borderBgClass =
              evt.type === "success" ? "bg-emerald-50/50 border-l-emerald-500"
              : evt.type === "warning" ? "bg-amber-50/50 border-l-amber-500"
              : "bg-rose-50/50 border-l-rose-500";
            return (
              <div
                key={evt.id}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl border-l-[3px] ${borderBgClass}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-slate-800 truncate">{evt.msg}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] font-semibold text-slate-500 font-mono">
                      {evt.time}
                    </span>
                    <span className="text-[9px] font-bold text-blue-500">· {evt.site}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
