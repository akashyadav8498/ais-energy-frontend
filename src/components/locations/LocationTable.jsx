import { useNavigate } from "react-router-dom";
import { Eye, MoreVertical, ChevronLeft, ChevronRight, LayoutList, LayoutGrid } from "lucide-react";

export default function LocationTable({ data, viewMode, setViewMode }) {
  const navigate = useNavigate();

  const handleNavigateToDetails = (locationId) => {
    navigate(`/device-details?locationId=${locationId}`);
  };

  return (
    <div className="lg:col-span-9 bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-sm font-black text-slate-900">Locations List</h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
            <span>Sort by:</span>
            <select className="bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-xs font-semibold text-slate-700 focus:outline-none">
              <option>Name A-Z</option>
              <option>Power High-Low</option>
              <option>Meters Count</option>
            </select>
          </div>

          <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
            <button onClick={() => setViewMode("list")} className={`p-1 rounded ${viewMode === "list" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400"}`}>
              <LayoutList className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setViewMode("grid")} className={`p-1 rounded ${viewMode === "grid" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400"}`}>
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-wider">
              <th className="py-3 px-4">Location Name</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4 text-center">Gateways</th>
              <th className="py-3 px-4 text-center">DCUs</th>
              <th className="py-3 px-4 text-center">Meters</th>
              <th className="py-3 px-4 text-center">
                Total Power
                <br />
                <span className="text-[9px] font-normal text-slate-400">(kW)</span>
              </th>
              <th className="py-3 px-4 text-center">
                Today's Energy
                <br />
                <span className="text-[9px] font-normal text-slate-400">(kWh)</span>
              </th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Last Update</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {data.map((row) => (
              <tr 
                key={row.id} 
                onClick={() => handleNavigateToDetails(row.id)}
                className="hover:bg-slate-200 transition-colors duration-150 cursor-pointer"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.img}
                      alt={row.name}
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0 bg-slate-100"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&q=80";
                      }}
                    />
                    <div>
                      <div className="font-black text-slate-900">{row.name}</div>
                      <div className="text-[10px] font-bold text-slate-400">{row.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-[11px] text-slate-500 font-semibold whitespace-pre-line leading-relaxed">{row.address}</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">{row.gateways}</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">{row.dcus}</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">{row.meters}</td>
                <td className="py-3 px-4 text-center font-black text-slate-800">{row.power}</td>
                <td className="py-3 px-4 text-center font-black text-slate-800">{row.energy}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${row.statusBg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${row.status === "Online" ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-[10px] text-slate-500 font-medium whitespace-pre-line leading-tight">{row.lastUpdate}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-slate-400">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateToDetails(row.id);
                      }} 
                      className="p-1 hover:text-blue-600 hover:bg-slate-200/60 rounded transition-colors"
                      title="View Device Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      type="button"
                      onClick={(e) => e.stopPropagation()} 
                      className="p-1 hover:text-slate-700 hover:bg-slate-200/60 rounded transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-slate-500">
        <div>Showing 1 to 6 of 12 locations</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-sm shadow-blue-200">1</button>
            <button className="w-7 h-7 rounded-lg border border-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs hover:bg-slate-50">2</button>
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-700 focus:outline-none">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}