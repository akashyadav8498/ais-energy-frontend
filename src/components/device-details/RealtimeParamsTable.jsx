import React, { memo } from "react";

const defaultParams = [
  { param: "Voltage (V)", l1: "414.8", l2: "415.6", l3: "415.2", avg: "415.2" },
  { param: "Current (A)", l1: "18.40", l2: "18.75", l3: "18.72", avg: "18.62" },
  { param: "Active Power (kW)", l1: "2.52", l2: "2.58", l3: "2.58", avg: "7.68" },
  { param: "Reactive Power (kVAr)", l1: "0.42", l2: "0.44", l3: "0.43", avg: "1.29" },
  { param: "Apparent Power (kVA)", l1: "2.55", l2: "2.62", l3: "2.61", avg: "7.78" },
  { param: "Power Factor", l1: "0.99", l2: "0.98", l3: "0.98", avg: "0.98" },
  { param: "Frequency (Hz)", l1: "50.01", l2: "50.02", l3: "50.03", avg: "50.02" },
];

const RealtimeParamsTable = memo(function RealtimeParamsTable({ realTimeParams }) {
  const rows = realTimeParams && realTimeParams.length > 0 ? realTimeParams : defaultParams;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 flex flex-col justify-between h-full">
      <h3 className="text-xs font-bold text-slate-900 tracking-tight">
        Phase Values (Live)
      </h3>

      <div className="overflow-x-auto -mx-1 flex-1 flex flex-col justify-between">
        <table className="w-full text-left border-collapse min-w-[270px] table-fixed">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
              <th className="pb-2 pl-1 w-[40%]">PARAMETER</th>
              <th className="pb-2 text-center w-[15%]">L1</th>
              <th className="pb-2 text-center w-[15%]">L2</th>
              <th className="pb-2 text-center w-[15%]">L3</th>
              <th className="pb-2 text-right pr-1 w-[15%]">AVG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 text-[11px] font-medium">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-1.5 pl-1 font-semibold text-slate-800 text-[11px] truncate">
                  {row.param}
                </td>
                <td className="py-1.5 text-center font-mono text-slate-600 text-[10px] tabular-nums">
                  {row.l1 || row.p1}
                </td>
                <td className="py-1.5 text-center font-mono text-slate-600 text-[10px] tabular-nums">
                  {row.l2 || row.p2}
                </td>
                <td className="py-1.5 text-center font-mono text-slate-600 text-[10px] tabular-nums">
                  {row.l3 || row.p3}
                </td>
                <td className="py-1.5 text-right pr-1 font-mono font-bold text-slate-900 text-[11px] tabular-nums">
                  {row.avg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default RealtimeParamsTable;
