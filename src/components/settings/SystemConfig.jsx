import { Globe, Calendar, Clock, Gauge, UserCheck, Moon, ListOrdered, Settings } from "lucide-react";

export default function SystemConfig() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">System Configuration</h2>
      <div className="space-y-2.5 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">Language</span>
          </div>
          <span className="font-bold text-slate-800">English (EN)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-medium">Date Format</span>
          </div>
          <span className="font-bold text-slate-800">DD MMM YYYY</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-medium">Time Format</span>
          </div>
          <span className="font-bold text-slate-800">12 Hour (hh:mm AM/PM)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Gauge className="w-3.5 h-3.5" />
            <span className="font-medium">Measurement Unit</span>
          </div>
          <span className="font-bold text-slate-800">Metric (kWh, kW, V, A)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">Timezone</span>
          </div>
          <span className="font-bold text-slate-800">(GMT+05:30) Asia/Kolkata</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <UserCheck className="w-3.5 h-3.5" />
            <span className="font-medium">Auto Logout</span>
          </div>
          <span className="font-bold text-slate-800">30 Minutes</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <Moon className="w-3.5 h-3.5" />
            <span className="font-medium">Theme</span>
          </div>
          <span className="font-bold text-slate-800">Light</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <ListOrdered className="w-3.5 h-3.5" />
            <span className="font-medium">Rows Per Page</span>
          </div>
          <span className="font-bold text-slate-800">10</span>
        </div>

        <button className="mt-3 flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-blue-600 transition-colors shadow-2xs cursor-pointer">
          <Settings className="w-3.5 h-3.5 text-blue-600" />
          <span>Edit Configuration</span>
        </button>
      </div>
    </div>
  );
}
