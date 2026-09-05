import React from "react";
import { fontData } from "./settingsData";

export default function SettingsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-1 border-b border-slate-200 overflow-x-auto no-scrollbar mb-6 pb-0.5">
      {fontData.tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap transition-all border-b-2 ${
            activeTab === tab
              ? "border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-lg"
              : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}