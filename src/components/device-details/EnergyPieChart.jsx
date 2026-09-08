import React, { memo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EnergyPieChart = memo(function EnergyPieChart({ meter }) {
  const importKwh = meter?.energyImportExport?.importKwh || "1,245.6";
  const exportKwh = meter?.energyImportExport?.exportKwh || "45.6";
  const importPct = meter?.energyImportExport?.importPct || "96.5%";
  const exportPct = meter?.energyImportExport?.exportPct || "3.5%";
  const totalKwh = meter?.energyImportExport?.totalKwh || "1,291.2";

  const data = [
    { name: "Import", value: parseFloat(importKwh.replace(/,/g, "")) || 1245.6, color: "#10b981" },
    { name: "Export", value: parseFloat(exportKwh.replace(/,/g, "")) || 45.6, color: "#ef4444" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 flex flex-col justify-between h-full">
      <h3 className="text-xs font-bold text-slate-900 tracking-tight">
        Energy Import/Export (Today)
      </h3>

      {/* Donut Container with Fixed Aspect/Dimension */}
      <div className="relative w-32 h-32 mx-auto my-1 flex items-center justify-center flex-1" style={{ minHeight: "128px" }}>
        <ResponsiveContainer width="100%" height="100%" debounce={50}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={56}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-sm font-black text-slate-900 leading-tight font-mono tabular-nums">
            {totalKwh}
          </span>
          <span className="text-[9px] font-bold text-slate-400">kWh</span>
        </div>
      </div>

      {/* Legend Rows */}
      <div className="space-y-1.5 text-xs border-t border-slate-100 pt-2.5">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Import
          </span>
          <span className="text-slate-900 font-bold font-mono text-[11px] tabular-nums">
            {importKwh} kWh <span className="text-slate-400 font-normal text-[10px]">({importPct})</span>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
            <span className="w-2 h-2 rounded-full bg-red-500" /> Export
          </span>
          <span className="text-slate-900 font-bold font-mono text-[11px] tabular-nums">
            {exportKwh} kWh <span className="text-slate-400 font-normal text-[10px]">({exportPct})</span>
          </span>
        </div>
      </div>
    </div>
  );
});

export default EnergyPieChart;
