import { Search, Filter, Eye, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { getTypeBadge, getStatusBadge, getDeviceIcon } from "./deviceHelper";

export default function DevicesTableSection({ activeTab, setActiveTab, searchQuery, setSearchQuery, devicesData }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between min-h-[580px] w-full">
      <div>
        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
          {/* Category Tabs */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-bold text-slate-500 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-1 transition-colors whitespace-nowrap cursor-pointer ${activeTab === "all" ? "text-blue-600 font-black border-b-2 border-blue-600" : "hover:text-slate-800"}`}
            >
              All Devices
            </button>
            <button
              onClick={() => setActiveTab("gateways")}
              className={`pb-1 transition-colors whitespace-nowrap cursor-pointer ${activeTab === "gateways" ? "text-blue-600 font-black border-b-2 border-blue-600" : "hover:text-slate-800"}`}
            >
              Gateways
            </button>
            <button
              onClick={() => setActiveTab("dcus")}
              className={`pb-1 transition-colors whitespace-nowrap cursor-pointer ${activeTab === "dcus" ? "text-blue-600 font-black border-b-2 border-blue-600" : "hover:text-slate-800"}`}
            >
              DCUs
            </button>
            <button
              onClick={() => setActiveTab("meters")}
              className={`pb-1 transition-colors whitespace-nowrap cursor-pointer ${activeTab === "meters" ? "text-blue-600 font-black border-b-2 border-blue-600" : "hover:text-slate-800"}`}
            >
              Energy Meters
            </button>
          </div>

          {/* Controls Right */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Status Selector */}
            <select className="bg-slate-50 border border-slate-200 font-bold rounded-lg px-2.5 py-1.5 outline-none text-slate-700">
              <option>All Status</option>
              <option>Online</option>
              <option>Warning</option>
              <option>Offline</option>
            </select>

            {/* Types Selector */}
            <select className="bg-slate-50 border border-slate-200 font-bold rounded-lg px-2.5 py-1.5 outline-none text-slate-700">
              <option>All Types</option>
              <option>Gateway</option>
              <option>DCU</option>
              <option>Meter</option>
            </select>

            {/* Search Box */}
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="Search device..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-40 bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 outline-none text-xs font-medium focus:bg-white focus:border-blue-500 transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5" />
            </div>

            {/* Filter Button */}
            <button className="bg-slate-50 border border-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg hover:bg-slate-100 flex items-center gap-1 shadow-xs transition-colors cursor-pointer">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Devices Table Container with overflow for smaller viewports */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400">
                <th className="py-2.5 px-2">Device Name</th>
                <th className="py-2.5 px-2">Device ID</th>
                <th className="py-2.5 px-2">Type</th>
                <th className="py-2.5 px-2">Location / Parent</th>
                <th className="py-2.5 px-2">Status</th>
                <th className="py-2.5 px-2">Signal</th>
                <th className="py-2.5 px-2">Last Seen</th>
                <th className="py-2.5 px-2">Firmware</th>
                <th className="py-2.5 px-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {devicesData.map((row, idx) => (
                <tr key={`${row.id}-${idx}`} className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-100 shrink-0">{getDeviceIcon(row.type)}</div>
                      <div>
                        <div className="font-bold text-slate-900">{row.name}</div>
                        <div className="text-[10px] text-slate-400">{row.subName}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-2.5 px-2 font-mono text-slate-600 font-bold">{row.deviceId}</td>

                  <td className="py-2.5 px-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${getTypeBadge(row.type)}`}>{row.type}</span>
                  </td>

                  <td className="py-2.5 px-2">
                    <div className="font-bold text-slate-800">{row.location}</div>
                    {row.subLocation && <div className="text-[10px] text-slate-400">{row.subLocation}</div>}
                  </td>

                  <td className="py-2.5 px-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] ${getStatusBadge(row.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {row.status}
                    </span>
                  </td>

                  <td className="py-2.5 px-2">
                    {row.signal !== "-" ? (
                      <div className="flex items-center gap-1 font-mono text-slate-600 font-bold">
                        <div className="flex items-end gap-0.5 h-3">
                          <span className={`w-0.5 h-1 rounded-xs ${row.signalBars >= 1 ? "bg-emerald-500" : "bg-slate-200"}`}></span>
                          <span className={`w-0.5 h-1.5 rounded-xs ${row.signalBars >= 2 ? "bg-emerald-500" : "bg-slate-200"}`}></span>
                          <span className={`w-0.5 h-2 rounded-xs ${row.signalBars >= 3 ? "bg-emerald-500" : "bg-slate-200"}`}></span>
                          <span className={`w-0.5 h-2.5 rounded-xs ${row.signalBars >= 4 ? "bg-emerald-500" : "bg-slate-200"}`}></span>
                        </div>
                        <span className="text-[11px] ml-1">{row.signal}</span>
                      </div>
                    ) : (
                      <span className="text-slate-400 font-bold">-</span>
                    )}
                  </td>

                  <td className="py-2.5 px-2">
                    <div className="font-bold text-slate-800">{row.lastSeen}</div>
                    <div className={`text-[10px] font-mono ${row.status === "Offline" ? "text-rose-500 font-semibold" : row.status === "Warning" ? "text-amber-500 font-semibold" : "text-slate-400"}`}>
                      {row.subLastSeen}
                    </div>
                  </td>

                  <td className="py-2.5 px-2 font-mono text-slate-500 font-bold">{row.firmware}</td>

                  <td className="py-2.5 px-2">
                    <div className="flex items-center justify-center gap-1.5">
                      <button className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-4 border-t border-slate-100 mt-4 font-semibold">
        <div>Showing 1 to 10 of 342 devices</div>

        <div className="flex items-center gap-1">
          <button className="p-1 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-400 disabled:opacity-50 cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 bg-blue-600 text-white rounded-lg font-bold cursor-pointer">1</button>
          <button className="w-7 h-7 hover:bg-slate-100 text-slate-700 rounded-lg font-bold cursor-pointer">2</button>
          <button className="w-7 h-7 hover:bg-slate-100 text-slate-700 rounded-lg font-bold cursor-pointer">3</button>
          <span className="px-1 text-slate-400">...</span>
          <button className="w-7 h-7 hover:bg-slate-100 text-slate-700 rounded-lg font-bold cursor-pointer">35</button>
          <button className="p-1 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 cursor-pointer">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none font-bold text-slate-700">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}
