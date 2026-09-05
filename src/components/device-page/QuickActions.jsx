import { Server, Cpu, Zap, UploadCloud } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
      <h3 className="text-sm font-black text-slate-900">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold text-slate-600">
        <button className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-pointer">
          <Server className="w-5 h-5 text-blue-600 mb-1" />
          <span>Add Gateway</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-colors cursor-pointer">
          <Cpu className="w-5 h-5 text-purple-600 mb-1" />
          <span>Add DCU</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-colors cursor-pointer">
          <Zap className="w-5 h-5 text-emerald-600 mb-1" />
          <span>Add Meter</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
          <UploadCloud className="w-5 h-5 text-slate-500 mb-1" />
          <span>Bulk Import</span>
        </button>
      </div>
    </div>
  );
}