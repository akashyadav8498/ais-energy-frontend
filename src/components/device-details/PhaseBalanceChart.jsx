
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { phaseBalanceData } from "./mockData";

export default function PhaseBalanceChart() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2 flex flex-col justify-between">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Phase Balance</h3>
      <div className="h-24 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={phaseBalanceData}>
            <XAxis dataKey="phase" tick={{ fontSize: 8 }} stroke="#cbd5e1" />
            <YAxis tick={{ fontSize: 8 }} domain={[0, 100]} stroke="#cbd5e1" />
            <Bar dataKey="value" radius={[3, 3, 0, 0]}>
              {phaseBalanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-[10px] font-semibold text-center text-emerald-600 bg-emerald-50/80 py-1 rounded-md border border-emerald-100">Balance: 99%</div>
    </div>
  );
}
