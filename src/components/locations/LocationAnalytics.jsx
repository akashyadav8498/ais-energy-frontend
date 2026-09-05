import { ChevronRight } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function LocationAnalytics({ statusOverviewData, topPowerLocations }) {
  return (
    <div className="lg:col-span-3 space-y-5">
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
        <h3 className="text-xs font-black text-slate-900 mb-2">Location Status Overview</h3>

        <div className="relative w-40 h-40 mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={statusOverviewData} innerRadius={48} outerRadius={64} paddingAngle={3} dataKey="value">
                {statusOverviewData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-black text-slate-900">12</span>
            <span className="text-[10px] font-bold text-slate-400">Total</span>
          </div>
        </div>

        <div className="mt-2 space-y-2 text-xs font-bold border-t border-slate-100 pt-3">
          {statusOverviewData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-600">{item.name}</span>
              </div>
              <div className="text-slate-900 font-black">
                {item.value} <span className="text-[10px] text-slate-400 font-normal">({item.percentage})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm space-y-3">
        <h3 className="text-xs font-black text-slate-900">Top Locations by Power</h3>

        <div className="space-y-2.5">
          {topPowerLocations.map((item) => (
            <div key={item.rank} className="flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="text-slate-400 text-[11px] font-mono">{item.rank}</span>
                <span>{item.name}</span>
              </div>
              <span className="text-emerald-600 font-black">{item.power}</span>
            </div>
          ))}
        </div>

        <button className="w-full text-center text-xs font-bold text-blue-600 hover:underline flex items-center justify-center gap-1 pt-2 border-t border-slate-100">
          View All Analytics
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
