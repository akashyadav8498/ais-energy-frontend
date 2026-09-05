
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function RecentEventsBar() {
  const events = [
    { time: "10:24:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
    { time: "10:19:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
    { time: "10:14:20 AM", type: "warning", title: "Voltage Unbalance", sub: "Unbalance: 2.1%" },
    { time: "10:09:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
    { time: "10:04:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Recent Events</h2>
        <button className="text-xs font-semibold text-blue-600 hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {events.map((evt, idx) => (
          <div key={idx} className="bg-slate-50/70 border border-slate-200/70 rounded-lg p-2 flex items-center gap-2">
            {evt.type === "success" ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />}
            <div className="min-w-0">
              <div className="text-[9px] font-semibold text-slate-400 font-mono">{evt.time}</div>
              <div className="text-xs font-bold text-slate-800 truncate">{evt.title}</div>
              <div className="text-[9px] text-slate-500 truncate">{evt.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
