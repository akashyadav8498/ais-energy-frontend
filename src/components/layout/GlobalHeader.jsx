import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Zap, RefreshCw, Bell, ChevronDown, LogOut } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../utils/auth";

export default function GlobalHeader({
  isPulse = false,
  isMobileMenuOpen = false,
  setIsMobileMenuOpen = () => {},
}) {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown on outside click
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

  const formattedDate = currentTime.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <header className="bg-white px-3 sm:px-6 py-2.5 flex items-center justify-between sticky top-0 z-30 gap-2 sm:gap-4 w-full border-b border-slate-200/80 shadow-xs">
      {/* ================= LEFT SIDE: Branding / Logo ================= */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 lg:hidden focus:outline-none shrink-0 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group select-none">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20 bg-linear-to-br from-blue-600 to-indigo-600 transition-transform group-hover:scale-105">
            <Zap className="w-4.5 h-4.5 text-white fill-white stroke-none" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-black text-sm tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors truncate">
              AR IOT SOLUTIONS
            </div>
            <div className="text-[9px] font-bold tracking-wide text-blue-600 truncate">
              Smart Energy. Smarter Future.
            </div>
          </div>
        </Link>
      </div>

      {/* ================= RIGHT SIDE ONLY: Status, Live Clock, Notifications, User Profile ================= */}
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        {/* Live Date & Time Clock */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 font-bold text-slate-600 text-[11px] shadow-sm">
          <span className="hidden md:inline text-slate-500">{formattedDate}</span>
          <span className="text-slate-200 hidden md:inline">|</span>
          <span className="font-mono text-[11px] text-slate-700">{formattedTime}</span>
          <RefreshCw
            className={`w-3 h-3 text-slate-400 ${isPulse ? "animate-spin text-blue-500" : ""}`}
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            className="p-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all shadow-sm cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
          </button>
          <span className="badge-live absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            8
          </span>
        </div>

        {/* User Avatar / Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
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
              <span className="font-bold text-slate-800 text-[11px] leading-tight truncate max-w-[120px]">
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
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="px-4 py-2.5 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-800 truncate">{displayName}</p>
                <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                    {user?.role || "user"}
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Online
                  </span>
                </div>
              </div>

              <div className="p-1">
                {user?.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5 text-blue-500" />
                    <span>Admin Console</span>
                  </Link>
                )}

                <button
                  type="button"
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
    </header>
  );
}
