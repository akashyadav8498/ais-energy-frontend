
import { realtimeParams } from "./mockData";

export default function RealtimeParamsTable() {
  return (
    <div className="md:col-span-12 xl:col-span-6 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Real-time Parameters</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs min-w-[300px]">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase text-[9px]">
              <th className="pb-1.5">Parameter</th>
              <th className="pb-1.5 text-center">P-1</th>
              <th className="pb-1.5 text-center">P-2</th>
              <th className="pb-1.5 text-center">P-3</th>
              <th className="pb-1.5 text-center">Avg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 text-[10px] font-medium">
            {realtimeParams.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/80">
                <td className="py-1 font-semibold">{row.param}</td>
                <td className="py-1 text-center font-mono">{row.p1}</td>
                <td className="py-1 text-center font-mono">{row.p2}</td>
                <td className="py-1 text-center font-mono">{row.p3}</td>
                <td className="py-1 text-center font-mono font-bold text-slate-900">{row.avg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
