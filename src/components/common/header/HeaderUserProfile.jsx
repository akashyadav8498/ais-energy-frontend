import { RefreshCw, Bell, ChevronDown } from "lucide-react";

export default function HeaderUserProfile({ isPulse }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      {/* Live Clock */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 font-bold text-slate-600 text-[11px] shadow-sm">
        <span className="hidden xl:inline text-slate-500">20 May 2025</span>
        <span className="text-slate-200 hidden xl:inline">|</span>
        <span className="font-mono text-[11px] text-slate-700">10:24:35 AM</span>
        <RefreshCw
          className={`w-3 h-3 text-slate-400 ${isPulse ? "animate-spin" : ""}`}
        />
      </div>

      {/* Notification Bell */}
      <div className="relative">
        <button
          className="p-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all shadow-sm"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
        </button>
        <span
          className="badge-live absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
        >
          8
        </span>
      </div>

      {/* User Avatar / Profile */}
      <div
        className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-2 py-1.5 cursor-pointer hover:bg-slate-100 transition-all shadow-sm"
      >
        <div
          className="w-7 h-7 rounded-lg text-white font-black flex items-center justify-center text-[11px] shrink-0 shadow-sm"
          style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
        >
          A
        </div>
        <div className="hidden md:flex flex-col">
          <span className="font-bold text-slate-800 text-[11px] leading-tight">Admin User</span>
          <span className="text-[9px] text-slate-400 font-medium leading-tight">Super Admin</span>
        </div>
        <ChevronDown className="w-3 h-3 text-slate-400 hidden md:block" />
      </div>
    </div>
  );
}
