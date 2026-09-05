import React from "react";
import { Sparkles } from "lucide-react";

export default function PlanUsage() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Plan & Usage</h2>
        <a href="#details" className="text-[11px] font-bold text-blue-600 hover:underline">
          View Details
        </a>
      </div>

      <div className="space-y-3.5 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-medium">Current Plan</span>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 font-bold rounded-md text-[10px]">Professional Plan</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-medium">Valid Till</span>
          <span className="font-bold text-slate-800">31 Dec 2025</span>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-semibold mb-1">
            <span className="text-slate-500">Devices</span>
            <span className="text-slate-800">342 / 500</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: "68.4%" }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-semibold mb-1">
            <span className="text-slate-500">Data Storage</span>
            <span className="text-slate-800">128 GB / 200 GB</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: "64%" }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-semibold mb-1">
            <span className="text-slate-500">API Calls</span>
            <span className="text-slate-800">78,500 / 100,000</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full" style={{ width: "78.5%" }}></div>
          </div>
        </div>

        <button className="w-full mt-2 flex items-center justify-center gap-1.5 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 rounded-lg text-xs font-bold transition-colors">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Upgrade Plan</span>
        </button>
      </div>
    </div>
  );
}
