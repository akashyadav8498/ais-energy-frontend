
import { Search, ChevronDown, Plus, Download } from "lucide-react";

export default function HeaderControlsLocations() {
  return (
    <div className="flex items-center gap-2">
      {/* Search Bar */}
      <div className="hidden lg:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 w-64">
        <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <input type="text" placeholder="Search location..." className="bg-transparent text-xs text-slate-700 outline-none w-full placeholder:text-slate-400 font-medium" />
      </div>

      {/* Filter Dropdown */}
      <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700 cursor-pointer">
        <span>All Status</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
      </div>

      {/* Add Location Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs">
        <Plus className="w-3.5 h-3.5" />
        <span>Add Location</span>
      </button>

      {/* Export Button */}
      <button className="hidden sm:flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs px-3 py-1.5 rounded-lg transition-colors shadow-xs">
        <Download className="w-3.5 h-3.5 text-slate-500" />
        <span>Export</span>
      </button>
    </div>
  );
}
