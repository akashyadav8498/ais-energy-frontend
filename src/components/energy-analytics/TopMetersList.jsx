import { ChevronRight, HardDrive } from "lucide-react";

export default function TopMetersList({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-emerald-100">
            <HardDrive className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Top Meters by Energy</span>
        </div>

        {/* Column header */}
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-slate-100">
          <span>Meter</span>
          <span>kWh (This Week)</span>
        </div>

        <div className="space-y-3">
          {data.map((m, i) => (
            <div key={m.name} className="flex items-center gap-2">
              <span
                className="text-[9px] font-black w-4 text-center shrink-0"
                style={{ color: i === 0 ? '#f59e0b' : i === 1 ? '#94a3b8' : '#cd7c56' }}
              >
                #{i + 1}
              </span>
              <span className="text-[10px] font-bold text-slate-700 w-20 shrink-0">{m.name}</span>
              <div className="flex-1">
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 bg-linear-to-r from-emerald-500 to-teal-400"
                    style={{ width: `${m.pct}%` }}
                  />
                </div>
              </div>
              <span className="text-[10px] font-black font-mono text-slate-800 w-14 text-right shrink-0">
                {m.val.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="inline-flex items-center justify-center gap-1.5 py-1.5 mt-3 w-full bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-[10px] font-bold transition-all cursor-pointer">
        <span>View All Meters</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
