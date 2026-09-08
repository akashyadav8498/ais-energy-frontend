import { useState, useRef, useEffect } from "react";
import { RefreshCw, Bell, ChevronDown, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../../utils/auth";

export default function HeaderUserProfile({ isPulse }) {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsDropdownOpen(false);
    navigate("/login");
  };

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";
  const displayName = user?.name || "User";
  const displayRole = user?.role === "admin" ? "Super Admin" : "User";

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

      {/* User Avatar / Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-2 py-1.5 cursor-pointer hover:bg-slate-100 transition-all shadow-sm select-none"
        >
          <div
            className="w-7 h-7 rounded-lg text-white font-black flex items-center justify-center text-[11px] shrink-0 shadow-sm"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            {initial}
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="font-bold text-slate-800 text-[11px] leading-tight">
              {displayName}
            </span>
            <span className="text-[9px] text-slate-400 font-medium leading-tight">
              {displayRole}
            </span>
          </div>
          <ChevronDown
            className={`w-3 h-3 text-slate-400 hidden md:block transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="px-4 py-2 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-800 truncate">{displayName}</p>
              <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
              <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
                {user?.role || "user"}
              </span>
            </div>

            <div className="p-1">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-rose-500" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
