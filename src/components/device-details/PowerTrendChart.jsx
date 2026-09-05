
import { ChevronDown, Maximize2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { powerTrendData } from "./mockData";

export default function PowerTrendChart() {
  return (
    <div className="md:col-span-12 xl:col-span-6 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Power Trend (Today)</h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-[10px] text-slate-600 font-medium">
            <span>Today</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-0.5 bg-blue-500"></span> Active (kW)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-0.5 bg-emerald-500"></span> Reactive (kVAr)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-0.5 bg-amber-500"></span> Apparent (kVA)
        </span>
      </div>

      <div className="h-40 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={powerTrendData}>
            <XAxis dataKey="time" tick={{ fontSize: 8 }} stroke="#cbd5e1" />
            <YAxis tick={{ fontSize: 8 }} domain={[0, 10]} stroke="#cbd5e1" />
            <Tooltip contentStyle={{ fontSize: "10px", borderRadius: "6px" }} />
            <Line type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={1.5} dot={{ r: 2 }} />
            <Line type="monotone" dataKey="reactive" stroke="#22c55e" strokeWidth={1.5} dot={{ r: 2 }} />
            <Line type="monotone" dataKey="apparent" stroke="#f59e0b" strokeWidth={1.5} dot={{ r: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
