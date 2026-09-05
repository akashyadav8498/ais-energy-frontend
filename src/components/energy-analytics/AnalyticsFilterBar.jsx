import { Download, SlidersHorizontal } from "lucide-react";

export default function AnalyticsFilterBar({ timeGranularity, setTimeGranularity }) {
  return (
    <div className="bg-white rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 mt-5 border border-slate-200/80 shadow-xs">
      {/* Left: Filter Dropdowns */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px]">
        <div className="flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[10px] font-bold text-slate-400">Filters:</span>
        </div>

        {[
          { label: "Gateway", options: ["Gateway-02"] },
          { label: "DCU",     options: ["All DCUs"] },
          { label: "Meter",   options: ["All Meters"] },
        ].map(({ label, options }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-400">{label}</span>
            <select
              className="bg-slate-50 border border-slate-200/80 font-bold rounded-xl px-2.5 py-1.5 outline-none text-slate-700 text-[11px] shadow-xs cursor-pointer focus:border-blue-500"
            >
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>

      {/* Right: Granularity + Actions */}
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        {/* Time Granularity Segmented Control */}
        <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-0.5">
          {["15 Min", "Hour", "Day", "Week", "Month"].map((item) => (
            <button
              key={item}
              onClick={() => setTimeGranularity(item)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                timeGranularity === item
                  ? "bg-white text-blue-600 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-bold transition-all shadow-xs cursor-pointer">
          + Apply
        </button>

        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-[11px] font-bold transition-all cursor-pointer">
          <Download className="w-3.5 h-3.5" />
          Export
        </button>
      </div>
    </div>
  );
}
