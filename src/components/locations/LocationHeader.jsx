
import { Search, ChevronDown, Plus, Download } from "lucide-react";

export default function LocationHeader({ searchTerm, setSearchTerm, selectedStatus, setSelectedStatus }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-xs mb-4">
      {/* Page Context */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
          Locations
        </h1>
        <p className="text-xs text-slate-400 font-bold mt-2">
          Manage and monitor all your locations
        </p>
      </div>

      {/* Control Actions */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-full sm:w-60">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search location..."
            className="bg-transparent text-xs text-slate-700 outline-none w-full placeholder:text-slate-400 font-medium"
          />
        </div>

        <button className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 transition-colors">
          <span>{selectedStatus || "All Status"}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs">
          <Plus className="w-4 h-4" />
          <span>Add Location</span>
        </button>

        <button className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-xs">
          <Download className="w-3.5 h-3.5 text-slate-500" />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
}