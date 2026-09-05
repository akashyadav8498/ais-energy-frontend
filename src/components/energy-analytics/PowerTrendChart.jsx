import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp } from "lucide-react";

export default function PowerTrendChart({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-amber-100">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Power Trend</span>
        </div>
        <select className="bg-slate-50 border border-slate-200/80 rounded-lg text-[10px] px-2 py-1 text-slate-600 font-bold outline-none">
          <option>kW</option>
        </select>
      </div>

      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -28, bottom: 0 }}>
            <defs>
              <linearGradient id="powerTrendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8" }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: 'var(--font-mono)' }} />
            <Tooltip
              contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 10 }}
              labelStyle={{ color: '#94a3b8' }}
              itemStyle={{ color: '#60a5fa' }}
              cursor={{ stroke: 'rgba(37,99,235,0.2)', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="power"
              stroke="#2563eb"
              strokeWidth={2}
              fill="url(#powerTrendGrad)"
              dot={{ r: 3, fill: "#2563eb", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
