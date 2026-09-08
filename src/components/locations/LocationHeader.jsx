import React from "react";
import { Search, ChevronDown, Plus, Download } from "lucide-react";
import PageHeaderCard from "../layout/PageHeaderCard";

export default function LocationHeader({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <PageHeaderCard
      title="Locations"
      subtitle="Manage and monitor all your locations"
      actions={
        <>
          {/* Search Input */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-60">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search location..."
              className="bg-transparent text-xs text-slate-700 outline-none w-full placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              <span>{statusFilter || "All Status"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Add Location Button */}
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Location</span>
          </button>

          {/* Export Button */}
          <button
            type="button"
            className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export</span>
          </button>
        </>
      }
    />
  );
}