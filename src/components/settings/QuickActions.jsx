import React from "react";
import { Database, RotateCcw, RefreshCw, Trash2, Mail, MessageSquare, Code, Webhook } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { label: "Backup Data", icon: Database },
    { label: "Restore Data", icon: RotateCcw },
    { label: "System Update", icon: RefreshCw },
    { label: "Clear Cache", icon: Trash2 },
    { label: "Email Settings", icon: Mail },
    { label: "SMS Settings", icon: MessageSquare },
    { label: "API Settings", icon: Code },
    { label: "Webhook Settings", icon: Webhook },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map((act) => {
          const IconComponent = act.icon;
          return (
            <button
              key={act.label}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 rounded-lg text-xs font-bold text-slate-700 transition-colors"
            >
              <IconComponent className="w-4 h-4 text-blue-600" />
              <span>{act.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}