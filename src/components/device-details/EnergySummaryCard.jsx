import React, { memo } from "react";
import { Calendar, FileText, BarChart2, HardDrive } from "lucide-react";

const EnergySummaryCard = memo(function EnergySummaryCard({ meter }) {
  const summary = meter?.energySummary || {
    today: "24.35 kWh",
    thisWeek: "168.75 kWh",
    thisMonth: "1,245.60 kWh",
    totalLife: "15,680.25 kWh",
  };

  const devInfo = meter?.deviceInfo || {
    meterId: "MTR-003",
    model: "AR-3P-CT-100A",
    serialNo: "AR2025MTR0003",
    ctRating: "100A",
    vtRating: "440V",
    firmware: "v1.2.8",
  };

  const summaryItems = [
    { label: "Today", val: summary.today, icon: Calendar, color: "text-blue-500" },
    { label: "This Week", val: summary.thisWeek, icon: FileText, color: "text-emerald-500" },
    { label: "This Month", val: summary.thisMonth, icon: BarChart2, color: "text-purple-500" },
    { label: "Total (Life)", val: summary.totalLife, icon: HardDrive, color: "text-amber-500" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 flex flex-col justify-between h-full">
      {/* 1. Upper Section: Energy Summary */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-900 tracking-tight">
          Energy Summary
        </h3>

        <div className="space-y-1.5 text-xs">
          {summaryItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-between py-0.5"
              >
                <span className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px]">
                  <IconComp className={`w-3.5 h-3.5 ${item.color}`} />
                  {item.label}
                </span>
                <span className="font-bold text-slate-900 text-xs font-mono tabular-nums">
                  {item.val}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Divider */}
      <div className="border-t border-slate-100 my-1" />

      {/* 2. Lower Section: Device Information */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-900 tracking-tight">
          Device Information
        </h3>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
          <div>
            <span className="text-slate-400 block text-[10px] font-medium">Meter ID</span>
            <span className="font-bold text-slate-800 font-mono tabular-nums">{devInfo.meterId || "MTR-003"}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] font-medium">CT Rating</span>
            <span className="font-bold text-slate-800 font-mono tabular-nums">{devInfo.ctRating || "100A"}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] font-medium">Model</span>
            <span className="font-bold text-slate-800 truncate block">{devInfo.model || "AR-3P-CT-100A"}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] font-medium">VT Rating</span>
            <span className="font-bold text-slate-800 font-mono tabular-nums">{devInfo.vtRating || "440V"}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] font-medium">Serial No.</span>
            <span className="font-bold text-slate-800 font-mono text-[10px] truncate block tabular-nums">{devInfo.serialNo || "AR2025MTR0003"}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] font-medium">Firmware</span>
            <span className="font-bold text-slate-800 font-mono tabular-nums">{devInfo.firmware || "v1.2.8"}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EnergySummaryCard;
