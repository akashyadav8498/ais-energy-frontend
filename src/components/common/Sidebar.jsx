import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MapPin,
  Cpu,
  BarChart3,
  Bell,
  HardDrive,
  FileText,
  Settings,
  CheckCircle2,
  Zap,
  X,
  Wifi,
  Database,
} from "lucide-react";

const navItems = [
  { label: "Dashboard",        path: "/",                icon: LayoutDashboard },
  { label: "Locations",        path: "/locations",       icon: MapPin },
  { label: "Device Detail",    path: "/device-details",  icon: Cpu },
  { label: "Energy Analytics", path: "/energy-analytics", icon: BarChart3 },
  { label: "Alarms & Events",  path: "/alarms-events",   icon: Bell },
  { label: "Devices",          path: "/devices",         icon: HardDrive },
  { label: "Reports",          path: "/reports",         icon: FileText },
  { label: "Settings",         path: "/settings",        icon: Settings },
];

const statusItems = [
  { label: "Cloud Connection", value: "Connected", icon: Wifi },
  { label: "Data Receiving",   value: "Active",    icon: Database },
  { label: "MQTT Broker",      value: "Connected", icon: Zap },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 lg:hidden bg-slate-900/50 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-60 flex flex-col justify-between shrink-0 h-full bg-white border-r border-slate-200/80 shadow-xs transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Navigation Section Header with Mobile Close */}
          <div className="px-4 pt-4 pb-2 flex items-center justify-between shrink-0">
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">
              Navigation
            </span>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-lg transition-colors text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Close Sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 relative tracking-wide ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-bold border-l-3 border-blue-600 rounded-l-none"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer Status Panel */}
        <div className="p-3 shrink-0 border-t border-slate-200/80">
          {/* System Status Card */}
          <div className="rounded-xl p-3 mb-3 bg-emerald-50/70 border border-emerald-200/80">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] font-bold text-emerald-800">
                System Status
              </span>
              <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200/60">
                All OK
              </span>
            </div>

            {statusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-1"
                >
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
                    <Icon className="w-3 h-3 text-slate-400" />
                    {item.label}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 font-mono">
                    <span className="status-dot-live" />
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-[9px] font-medium text-center pt-1 text-slate-400">
            © 2026 AR IoT Solutions. All Rights Reserved.
          </div>
        </div>
      </aside>
    </>
  );
}
