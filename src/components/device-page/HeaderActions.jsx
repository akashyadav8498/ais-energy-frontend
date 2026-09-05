import { Plus, Download } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <button className="bg-blue-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer">
        <Plus className="w-4 h-4" />
        <span>Add Device</span>
      </button>
      <button className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-slate-50 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer">
        <Download className="w-3.5 h-3.5 text-slate-500" />
        <span>Import Devices</span>
      </button>
    </div>
  );
}
