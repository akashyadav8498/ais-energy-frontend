import { Plus, Edit2, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { fontData } from "./settingsData";

export default function UsersRolesTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs">
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Users & Roles</h2>
        <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs transition-colors shrink-0">
          <Plus className="w-3.5 h-3.5" />
          <span>Add User</span>
        </button>
      </div>

      {/* Table Container with Smooth Horizontal Scroll */}
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-xs min-w-[650px]">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase text-[10px]">
            <tr>
              <th className="py-2.5 px-3">User Name</th>
              <th className="py-2.5 px-3">Email</th>
              <th className="py-2.5 px-3">Role</th>
              <th className="py-2.5 px-3">Access Level</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3">Last Login</th>
              <th className="py-2.5 px-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium whitespace-nowrap">
            {fontData.users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-2">
                    <img src={u.avatar} alt={u.name} className="w-6 h-6 rounded-full object-cover shrink-0" />
                    <span className="font-bold text-slate-900">{u.name}</span>
                    {u.isYou && <span className="px-1.5 py-0.5 text-[9px] font-bold bg-blue-100 text-blue-600 rounded-md">You</span>}
                  </div>
                </td>
                <td className="py-2.5 px-3 text-slate-500">{u.email}</td>
                <td className="py-2.5 px-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${u.roleBg}`}>{u.role}</span>
                </td>
                <td className="py-2.5 px-3">{u.access}</td>
                <td className="py-2.5 px-3">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {u.status}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-slate-500 font-mono text-[10px]">{u.lastLogin}</td>
                <td className="py-2.5 px-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-slate-400">
                    <button className="p-1 hover:text-slate-600 hover:bg-slate-100 rounded">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1 hover:text-slate-600 hover:bg-slate-100 rounded">
                      <MoreVertical className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 text-xs text-slate-500">
        <span className="text-center sm:text-left text-[11px]">Showing 1 to 5 of 18 users</span>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1">
            <button className="p-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="px-2.5 py-0.5 bg-blue-600 text-white font-bold rounded text-[11px]">1</button>
            <button className="px-2.5 py-0.5 border border-slate-200 rounded hover:bg-slate-50 text-[11px]">2</button>
            <button className="px-2.5 py-0.5 border border-slate-200 rounded hover:bg-slate-50 text-[11px]">3</button>
            <button className="px-2.5 py-0.5 border border-slate-200 rounded hover:bg-slate-50 text-[11px]">4</button>
            <button className="p-1 border border-slate-200 rounded hover:bg-slate-50">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Rows per page:</span>
            <select className="border border-slate-200 rounded px-1.5 py-0.5 bg-white font-bold text-slate-700 outline-none">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
