import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function DeviceHealthChart({ data }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
      <h3 className="text-sm font-black text-slate-900 mb-3">Device Health (This Week)</h3>

      <div className="flex items-center justify-between gap-2">
        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={34} outerRadius={48} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-center">
            <p className="text-sm font-black text-slate-900 leading-none">90.1%</p>
            <p className="text-[9px] font-bold text-slate-400 mt-0.5">Healthy</p>
          </div>
        </div>

        <div className="space-y-2 text-xs font-bold flex-1 min-w-0 pl-1">
          {data.map((item) => (
            <div key={item.name} className="flex items-start justify-between gap-1">
              <div className="flex items-center gap-1.5 min-w-0 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-600 text-[11px] leading-tight truncate">{item.name}</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-slate-900 font-mono text-[11px] font-bold leading-tight">{item.value}</div>
                <div className="text-[10px] font-semibold text-slate-400 leading-tight">{item.percent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
