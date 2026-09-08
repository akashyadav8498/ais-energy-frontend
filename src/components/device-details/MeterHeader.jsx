import React, { memo } from "react";
import { Cpu, MoreVertical } from "lucide-react";

const MeterHeader = memo(function MeterHeader({ meter }) {
  const meterName = meter?.name || "Meter-003";
  const model = meter?.model || "AR-3P-CT-100A";
  const serial = meter?.serialNo || "AR2025MTR0003";
  const dcu = meter?.dcuName || "DCU-021";
  const gateway = meter?.gatewayName || "Gateway-02";
  const isOnline = (meter?.status || "Online") === "Online";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-2xs flex items-center justify-between gap-4">
      {/* Left: Icon & Device Info */}
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Device Icon Badge */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
          <Cpu className="w-5 h-5" />
        </div>

        {/* Text & Meta */}
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate">
              {meterName}
            </h2>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 shrink-0 ${
                isOnline
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOnline ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>

          <div className="text-[11px] text-slate-400 font-medium flex flex-wrap items-center gap-x-2.5 gap-y-0.5 mt-0.5">
            <span>
              Model: <strong className="text-slate-700 font-bold">{model}</strong>
            </span>
            <span className="text-slate-300">|</span>
            <span>
              Serial: <strong className="text-slate-700 font-bold font-mono">{serial}</strong>
            </span>
            <span className="text-slate-300">|</span>
            <span>
              DCU: <strong className="text-slate-700 font-bold">{dcu}</strong>
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="hidden sm:inline">
              Gateway: <strong className="text-slate-700 font-bold">{gateway}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Right: Actions / Menu */}
      <div className="shrink-0">
        <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});

export default MeterHeader;
