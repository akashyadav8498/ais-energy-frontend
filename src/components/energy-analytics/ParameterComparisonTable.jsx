
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ParameterComparisonTable({ data }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
      <h3 className="text-sm font-black text-slate-900 mb-3">Parameter Comparison (Average)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-[10px] font-black text-slate-400 uppercase">
              <th className="py-2">Parameter</th>
              <th className="py-2">This Week (Avg)</th>
              <th className="py-2">Last Week (Avg)</th>
              <th className="py-2 text-right">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
            {data.map((row) => (
              <tr key={row.param} className="hover:bg-slate-50">
                <td className="py-2 text-slate-800">{row.param}</td>
                <td className="py-2">{row.current}</td>
                <td className="py-2 text-slate-400">{row.last}</td>
                <td className="py-2 text-right">
                  <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm text-[10px] ${row.isUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                    {row.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {row.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
