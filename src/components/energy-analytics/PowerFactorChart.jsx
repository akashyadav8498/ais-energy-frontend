
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function PowerFactorChart({ data }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-black text-slate-900">Power Factor Trend</h3>
        <select className="bg-slate-50 border border-slate-200 rounded-md text-[11px] px-2 py-0.5 text-slate-600 font-bold">
          <option>PF</option>
        </select>
      </div>
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <XAxis dataKey="date" tickLine={false} tick={{ fontSize: 10, fill: "#64748b" }} />
            <YAxis domain={[0.7, 1.1]} tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "#64748b" }} />
            <Tooltip />
            <Line type="monotone" dataKey="pf" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 3, fill: "#22c55e" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
