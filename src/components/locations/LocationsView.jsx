import { useState } from "react";
import { Building2, Cpu, Activity, HardDrive, Zap, Info } from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationSummaryCards from "./LocationSummaryCards";
import LocationTable from "./LocationTable";
import LocationAnalytics from "./LocationAnalytics";

const summaryCards = [
  { title: "TOTAL LOCATIONS", val: "12", sub: "Active Locations", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "TOTAL GATEWAYS", val: "28", sub: <><span className="text-emerald-600">Online: 26</span> &nbsp; <span className="text-slate-400">Offline: 2</span></>, icon: Cpu, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "TOTAL DCUS", val: "146", sub: <><span className="text-emerald-600">Online: 134</span> &nbsp; <span className="text-slate-400">Offline: 12</span></>, icon: Activity, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "TOTAL METERS", val: "1,280", sub: <><span className="text-emerald-600">Online: 1,247</span> &nbsp; <span className="text-slate-400">Offline: 33</span></>, icon: HardDrive, color: "text-teal-600", bg: "bg-teal-50" },
  { title: "TOTAL POWER", val: "428.75 kW", sub: "All Locations (Live)", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
  { title: "TODAY'S ENERGY", val: "6,842.35 kWh", sub: "All Locations", icon: Zap, color: "text-blue-500", bg: "bg-blue-50" },
];

const locationsTableData = [
  { id: "DEL-001", name: "Delhi Site", address: "Sector 62, Noida\nUttar Pradesh, 201309", gateways: 3, dcus: 12, meters: 120, power: "84.35 kW", energy: "1,240.50 kWh", status: "Online", statusBg: "bg-emerald-50 text-emerald-700 border-emerald-200", lastUpdate: "20 May 2025\n10:24 AM", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&auto=format&fit=crop&q=80" },
  { id: "MUM-002", name: "Mumbai Site", address: "Andheri East\nMumbai, Maharashtra", gateways: 2, dcus: 8, meters: 80, power: "96.40 kW", energy: "1,520.80 kWh", status: "Online", statusBg: "bg-emerald-50 text-emerald-700 border-emerald-200", lastUpdate: "20 May 2025\n10:24 AM", img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=150&auto=format&fit=crop&q=80" },
  { id: "PUN-003", name: "Pune Site", address: "Hinjewadi Phase 2\nPune, Maharashtra", gateways: 1, dcus: 5, meters: 50, power: "31.20 kW", energy: "510.30 kWh", status: "Online", statusBg: "bg-emerald-50 text-emerald-700 border-emerald-200", lastUpdate: "20 May 2025\n10:24 AM", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80" },
  { id: "BLR-004", name: "Bangalore Site", address: "Whitefield\nBangalore, Karnataka", gateways: 2, dcus: 10, meters: 96, power: "78.60 kW", energy: "1,120.70 kWh", status: "Online", statusBg: "bg-emerald-50 text-emerald-700 border-emerald-200", lastUpdate: "20 May 2025\n10:24 AM", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=150&auto=format&fit=crop&q=80" },
  { id: "HYD-005", name: "Hyderabad Site", address: "Gachibowli\nHyderabad, Telangana", gateways: 1, dcus: 6, meters: 60, power: "45.25 kW", energy: "760.40 kWh", status: "Online", statusBg: "bg-emerald-50 text-emerald-700 border-emerald-200", lastUpdate: "20 May 2025\n10:24 AM", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&auto=format&fit=crop&q=80" },
  { id: "CHN-006", name: "Chennai Site", address: "OMR, Thoraipakkam\nChennai, Tamil Nadu", gateways: 1, dcus: 4, meters: 40, power: "28.80 kW", energy: "430.25 kWh", status: "Warning", statusBg: "bg-amber-50 text-amber-700 border-amber-200", lastUpdate: "20 May 2025\n10:24 AM", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&auto=format&fit=crop&q=80" },
];

const statusOverviewData = [
  { name: "Online", value: 9, percentage: "75%", color: "#10b981" },
  { name: "Warning", value: 2, percentage: "16.7%", color: "#f59e0b" },
  { name: "Offline", value: 1, percentage: "8.3%", color: "#ef4444" },
];

const topPowerLocations = [
  { rank: "1.", name: "Mumbai Site", power: "96.40 kW" },
  { rank: "2.", name: "Delhi Site", power: "84.35 kW" },
  { rank: "3.", name: "Bangalore Site", power: "78.60 kW" },
  { rank: "4.", name: "Hyderabad Site", power: "45.25 kW" },
  { rank: "5.", name: "Pune Site", power: "31.20 kW" },
];

export default function LocationsView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="p-6 space-y-5 bg-[#F4F6F9] min-h-screen">
      <LocationHeader 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        statusFilter={statusFilter} 
        setStatusFilter={setStatusFilter} 
      />

      <LocationSummaryCards summaryCards={summaryCards} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <LocationTable 
          data={locationsTableData} 
          viewMode={viewMode} 
          setViewMode={setViewMode} 
        />
        <LocationAnalytics 
          statusOverviewData={statusOverviewData} 
          topPowerLocations={topPowerLocations} 
        />
      </div>

      <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 flex items-start gap-3 text-xs text-slate-600">
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-slate-900 block mb-0.5">About Locations</span>
          Locations help you organize your installations. Each location can have multiple gateways, DCUs and energy meters.
        </div>
      </div>
    </div>
  );
}