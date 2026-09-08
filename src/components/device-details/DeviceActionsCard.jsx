import React, { memo } from "react";
import { RotateCcw, Download, FileText, Settings } from "lucide-react";

const DeviceActionsCard = memo(function DeviceActionsCard() {
  const actions = [
    { label: "View History", icon: RotateCcw },
    { label: "Download Data", icon: Download },
    { label: "Device Logs", icon: FileText },
    { label: "Configure Device", icon: Settings },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 flex flex-col justify-between h-full">
      <h3 className="text-xs font-bold text-slate-900 tracking-tight">
        Quick Actions
      </h3>

      <div className="space-y-2 flex-1 flex flex-col justify-between pt-1">
        {actions.map((action, idx) => {
          const IconComp = action.icon;
          return (
            <button
              key={idx}
              className="w-full bg-white border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 text-slate-700 hover:text-blue-700 font-semibold text-xs py-2 px-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer"
            >
              <IconComp className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default DeviceActionsCard;
