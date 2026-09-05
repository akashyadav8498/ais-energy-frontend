import { getStatusBadge } from "./deviceHelper";

export default function GatewaysStatusTable({ data }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
      <h3 className="text-sm font-black text-slate-900">Gateways Status</h3>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-[11px] border-collapse min-w-[280px]">
          <thead>
            <tr className="border-b border-slate-200 font-bold text-slate-400">
              <th className="pb-2">Gateway</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Connected DCUs</th>
              <th className="pb-2">Meters</th>
              <th className="pb-2 text-right">Last Seen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {data.map((gw, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="py-2 font-bold text-slate-800">{gw.gateway}</td>
                <td className="py-2">
                  <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] ${getStatusBadge(gw.status)}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    {gw.status}
                  </span>
                </td>
                <td className="py-2 font-mono text-slate-600 font-bold">{gw.connectedDCUs}</td>
                <td className="py-2 font-mono text-slate-600 font-bold">{gw.meters}</td>
                <td className="py-2 font-mono text-slate-400 text-right">{gw.lastSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
