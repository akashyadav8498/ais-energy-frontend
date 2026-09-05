
import { Signal } from "lucide-react";

export default function DeviceStatusCard() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Device Status</h3>
      <div className="space-y-1.5 text-xs divide-y divide-slate-100">
        <div className="flex justify-between items-center pt-1">
          <span className="text-slate-400 text-[11px]">Connection</span>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">• Online</span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-slate-400 text-[11px]">Signal Strength</span>
          <span className="font-semibold text-slate-700 text-[11px] flex items-center gap-1">
            <Signal className="w-3 h-3 text-emerald-500" /> -62 dBm
          </span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-slate-400 text-[11px]">Battery Level</span>
          <span className="font-semibold text-emerald-600 text-[11px]">92%</span>
        </div>
        <div className="flex justify-between items-start pt-1">
          <span className="text-slate-400 text-[11px]">Last Comm.</span>
          <span className="font-semibold text-slate-700 text-[10px] text-right font-mono">
            20 May 2025
            <br />
            10:24:20 AM
          </span>
        </div>
      </div>
    </div>
  );
}
