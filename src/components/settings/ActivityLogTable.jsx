import { ChevronRight } from "lucide-react";
import { fontData } from "./settingsData";

export default function ActivityLogTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
        Recent Activity Log
      </h2>
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase text-[10px]">
            <tr>
              <th className="py-2.5 px-3">Time</th>
              <th className="py-2.5 px-3">User</th>
              <th className="py-2.5 px-3">Action</th>
              <th className="py-2.5 px-3">Details</th>
              <th className="py-2.5 px-3">IP Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
            {fontData.activityLogs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-mono text-[10px] text-slate-500">{log.time}</td>
                <td className="py-2.5 px-3 font-bold text-slate-800">{log.user}</td>
                <td className="py-2.5 px-3 font-semibold text-slate-700">{log.action}</td>
                <td className="py-2.5 px-3 text-slate-500">{log.details}</td>
                <td className="py-2.5 px-3 font-mono text-[10px] text-slate-400">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-3">
        <button className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700">
          <span>View Full Activity Log</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}