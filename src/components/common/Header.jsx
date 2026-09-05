import { useLocation } from "react-router-dom";
import { Menu, X, MapPin, Calendar, RefreshCw, HelpCircle } from "lucide-react";

import HeaderTitle from "./header/HeaderTitle";
import HeaderControlsDashboard from "./header/HeaderControlsDashboard";
import HeaderControlsLocations from "./header/HeaderControlsLocations";
import HeaderUserProfile from "./header/HeaderUserProfile";

export default function Header({ isPulse, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const location = useLocation();
  const path = location.pathname;

  // Header controls for pages with site filter & date pickers
  const isFilterPage =
    path === "/settings" ||
    path === "/reports" ||
    path === "/energy-analytics" ||
    path === "/alarms-events" ||
    path === "/devices" ||
    path.startsWith("/device");

  return (
    <header className="bg-white px-3 sm:px-6 py-2.5 flex items-center justify-between sticky top-0 z-30 gap-2 sm:gap-4 w-full border-b border-slate-200/80 shadow-xs">
      {/* Left side: Toggle + Title */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 lg:hidden focus:outline-none shrink-0 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        <div className="min-w-0 leading-tight">
          <HeaderTitle />
        </div>
      </div>

      {/* Right side: Controls + Profile */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {isFilterPage ? (
          <div className="flex items-center gap-1.5 text-xs">
            {/* Site Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-xl px-2.5 py-1.5 font-bold text-slate-700 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <select className="bg-transparent border-none font-bold text-slate-700 text-[11px] outline-none cursor-pointer">
                <option value="mumbai">Mumbai Site</option>
                <option value="all">All Locations</option>
                <option value="delhi">Delhi Site</option>
                <option value="pune">Pune Site</option>
              </select>
            </div>

            {/* Date Range (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 font-bold text-slate-600 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px]">
                {path === "/settings" ? "14 May – 20 May 2025" : "20 May 2025"}
              </span>
            </div>

            {/* Action Button */}
            {path === "/settings" ? (
              <button
                className="p-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all shadow-sm shrink-0"
                title="Help"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            ) : (
              <button
                className="p-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all shadow-sm shrink-0"
                title="Refresh"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : path === "/locations" ? (
          <HeaderControlsLocations />
        ) : (
          <HeaderControlsDashboard />
        )}

        {/* User Profile */}
        <div className="shrink-0 flex items-center">
          <HeaderUserProfile isPulse={isPulse} />
        </div>
      </div>
    </header>
  );
}