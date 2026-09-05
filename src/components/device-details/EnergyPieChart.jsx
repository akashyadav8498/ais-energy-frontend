
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { energyPieData } from "./mockData";

export default function EnergyPieChart() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Energy Import/Export</h3>
      <div className="relative w-24 h-24 mx-auto my-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={energyPieData} innerRadius={28} outerRadius={40} paddingAngle={2} dataKey="value">
              {energyPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-xs font-bold text-slate-900 leading-tight">1,291.2</span>
          <span className="text-[8px] font-medium text-slate-400">kWh</span>
        </div>
      </div>
      <div className="space-y-1 text-[10px] font-semibold border-t border-slate-100 pt-1.5">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Import
          </span>
          <span className="text-slate-800 font-mono">1,245.6 kWh</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Export
          </span>
          <span className="text-slate-800 font-mono">45.6 kWh</span>
        </div>
      </div>
    </div>
  );
}
