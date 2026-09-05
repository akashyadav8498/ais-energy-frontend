
import { History, Download, Terminal } from "lucide-react";

export default function DeviceActionsCard() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-1.5">
        <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm">
          <History className="w-3.5 h-3.5 text-blue-600 shrink-0" /> View History
        </button>
        <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm">
          <Download className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Download Data
        </button>
        <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Device Logs
        </button>
      </div>
    </div>
  );
}
