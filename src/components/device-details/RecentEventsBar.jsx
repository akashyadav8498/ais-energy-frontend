import React, { memo } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const RecentEventsBar = memo(function RecentEventsBar({ events }) {
  const defaultEvents = [
    { time: "10:24:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
    { time: "10:19:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
    { time: "10:14:20 AM", type: "warning", title: "Voltage Unbalance", sub: "Unbalance: 2.1%" },
    { time: "10:09:20 AM", type: "success", title: "Data Updated", sub: "All parameters normal" },
  ];

  const displayEvents = events && events.length > 0 ? events : defaultEvents;

  return (
    <div className="space-y-2.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold text-slate-900 tracking-tight">
          Recent Events
        </h2>
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
          View All
        </button>
      </div>

      {/* Events Grid (4 items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {displayEvents.slice(0, 4).map((evt, idx) => {
          const isWarning = evt.type === "warning" || evt.type === "alert";
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs flex items-center gap-3"
            >
              {isWarning ? (
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-slate-400 font-mono font-medium tabular-nums">
                  {evt.time}
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">
                  {evt.title}
                </div>
                <div className="text-[10px] text-slate-500 truncate">
                  {evt.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default RecentEventsBar;
