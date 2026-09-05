
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Zap } from "lucide-react";

export default function EnergyConsumptionChart({ data }) {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-100">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Energy Consumption</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-bold">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: '#2563eb' }} />
            <span className="text-slate-500">This Week</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: '#bae6fd' }} />
            <span className="text-slate-500">Last Week</span>
          </div>
          <select className="bg-slate-50 border border-slate-200/80 rounded-lg text-[10px] px-2 py-1 text-slate-600 font-bold outline-none">
            <option>kWh</option>
          </select>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "#94a3b8", fontFamily: 'var(--font-mono)' }} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 11 }} labelStyle={{ color: '#94a3b8' }} itemStyle={{ color: '#e2e8f0' }} cursor={{ fill: 'rgba(37,99,235,0.05)' }} />
            <Bar dataKey="thisWeek" fill="#2563eb" radius={[5, 5, 0, 0]} barSize={20} />
            <Bar dataKey="lastWeek" fill="#bae6fd" radius={[5, 5, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
