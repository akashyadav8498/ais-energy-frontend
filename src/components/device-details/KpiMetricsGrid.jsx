
import { Activity, Zap, HardDrive } from "lucide-react";

export default function KpiMetricsGrid() {
  const kpis = [
    { label: "Voltage (L-L)", val: "415.2", unit: "V", icon: Activity, color: "text-blue-500", sub: "Avg" },
    { label: "Current", val: "18.62", unit: "A", icon: Activity, color: "text-emerald-500", sub: "Avg" },
    { label: "Active Power", val: "7.68", unit: "kW", icon: Zap, color: "text-amber-500" },
    { label: "Power Factor", val: "0.98", unit: "", icon: Activity, color: "text-purple-500", sub: "Avg" },
    { label: "Frequency", val: "50.02", unit: "Hz", icon: Activity, color: "text-teal-500" },
    { label: "Total Energy", val: "1,245.60", unit: "kWh", icon: HardDrive, color: "text-amber-600", sub: "Import" },
  ];

  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 xl:grid-cols-6 gap-2">
      {kpis.map((kpi, i) => {
        const IconComp = kpi.icon;
        return (
          <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-2.5 shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-tight truncate">{kpi.label}</div>
            <div className="flex flex-col mt-1 min-w-0">
              <div className="flex items-center gap-1">
                <IconComp className={`w-3.5 h-3.5 ${kpi.color} shrink-0`} />
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono tracking-tight truncate">{kpi.val}</span>
              </div>
              {kpi.unit && (
                <span className="text-[9px] font-bold text-slate-500 pl-4 leading-none">
                  {kpi.unit} {kpi.sub ? `(${kpi.sub})` : ""}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
