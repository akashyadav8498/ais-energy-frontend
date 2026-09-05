
import { Maximize2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { voltageTrendData } from "./mockData";

export default function VoltageTrendChart() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2 flex flex-col justify-between sm:col-span-2 md:col-span-1">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Voltage Trend</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <Maximize2 className="w-3 h-3" />
        </button>
      </div>
      <div className="flex items-center gap-2 text-[9px] font-semibold text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> L1
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> L2
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> L3
        </span>
      </div>
      <div className="h-24 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={voltageTrendData}>
            <XAxis dataKey="time" tick={{ fontSize: 8 }} stroke="#cbd5e1" />
            <YAxis tick={{ fontSize: 8 }} domain={[380, 460]} stroke="#cbd5e1" />
            <Tooltip contentStyle={{ fontSize: "10px", borderRadius: "6px" }} />
            <Line type="monotone" dataKey="l1" stroke="#3b82f6" strokeWidth={1.2} dot={false} />
            <Line type="monotone" dataKey="l2" stroke="#22c55e" strokeWidth={1.2} dot={false} />
            <Line type="monotone" dataKey="l3" stroke="#f59e0b" strokeWidth={1.2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
