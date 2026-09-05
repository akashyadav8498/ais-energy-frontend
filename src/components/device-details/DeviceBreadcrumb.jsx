import { MapPin, ChevronDown, Calendar } from "lucide-react";

export default function DeviceBreadcrumb() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-sm">
      <div className="space-y-1">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-none">Device Detail</h1>
        <div className="text-[11px] sm:text-xs text-slate-400 font-medium flex flex-wrap items-center gap-1 sm:gap-1.5">
          <span>Home</span> &gt; <span>Locations</span> &gt; <span>Mumbai Site</span> &gt; <span>Gateway-02</span> &gt; <span>DCU-021</span> &gt;{" "}
          <span className="text-slate-700 font-semibold">Meter-003</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="truncate max-w-[100px] sm:max-w-none">Mumbai Site</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        </div>

        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 shadow-sm">
          <span>20 May 2025</span>
          <span className="text-slate-300">|</span>
          <span className="font-mono text-xs">10:24:35 AM</span>
          <Calendar className="w-3.5 h-3.5 text-slate-400 ml-0.5 shrink-0" />
        </div>
      </div>
    </div>
  );
}
