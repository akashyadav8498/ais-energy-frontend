
import { RefreshCw, Settings, MoreVertical } from "lucide-react";

export default function MeterHeader() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Meter-003</h2>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
          </span>
        </div>
        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium gap-x-2 gap-y-1 mt-1 flex flex-wrap items-center">
          <span>
            Model: <strong className="text-slate-700">AR-3P-CT-100A</strong>
          </span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span>
            Serial: <strong className="text-slate-700">AR2025MTR0003</strong>
          </span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span>
            DCU: <strong className="text-slate-700">DCU-021</strong>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
        <button className="px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-xs font-semibold text-slate-700 flex items-center gap-1 hover:bg-slate-50 shadow-sm">
          <RefreshCw className="w-3.5 h-3.5 text-slate-500" /> <span className="hidden xs:inline">Refresh</span>
        </button>
        <button className="px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-xs font-semibold text-slate-700 flex items-center gap-1 hover:bg-slate-50 shadow-sm">
          <Settings className="w-3.5 h-3.5 text-slate-500" /> <span className="hidden xs:inline">Settings</span>
        </button>
        <button className="p-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 hover:text-slate-700 shadow-sm">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
