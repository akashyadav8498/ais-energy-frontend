
import { MapPin } from "lucide-react";

export default function HeaderControlsDashboard() {
  return (
    <>
      <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-bold text-slate-700">
        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span className="truncate max-w-[100px] lg:max-w-none">All Locations</span>
      </div>

      <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5 font-black text-[10px] sm:text-[11px]">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="hidden xs:inline">Live Data</span>
      </div>
    </>
  );
}
