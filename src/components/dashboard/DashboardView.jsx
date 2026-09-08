import { useState, useEffect } from "react";
import { RefreshCw, Info, MapPin, Calendar } from "lucide-react";

import PageHeaderCard from "../layout/PageHeaderCard";
import KpiCards from "./KpiCards";
import LiveMapSection from "./LiveMapSection";
import EnergyConnectivity from "./EnergyConnectivity";
import TrendsAndEvents from "./TrendsAndEvents";

const initialPowerData = [
  { time: "09:24", power: 310 },
  { time: "09:35", power: 340 },
  { time: "09:45", power: 420 },
  { time: "09:55", power: 410 },
  { time: "10:05", power: 390 },
  { time: "10:15", power: 480 },
  { time: "10:24", power: 428.75 },
];

const initialLocations = [
  { name: "Mumbai Site", power: 96.4, color: "bg-emerald-500", barWidth: "96%" },
  { name: "Delhi Site", power: 84.35, color: "bg-emerald-500", barWidth: "84%" },
  { name: "Jaipur Site", power: 42.1, color: "bg-amber-500", barWidth: "42%" },
  { name: "Pune Site", power: 31.2, color: "bg-amber-500", barWidth: "31%" },
  { name: "Bangalore Site", power: 28.75, color: "bg-amber-500", barWidth: "28%" },
  { name: "Hyderabad Site", power: 25.15, color: "bg-amber-500", barWidth: "25%" },
  { name: "Chennai Site", power: 18.8, color: "bg-red-500", barWidth: "18%" },
];

const initialEvents = [
  { id: 1, time: "10:24:12 AM", msg: "Meter MTR-0123 is back online", site: "Mumbai Site", type: "success" },
  { id: 2, time: "10:23:41 AM", msg: "High Power Alert: 65.2 kW", site: "Delhi Site", type: "warning" },
  { id: 3, time: "10:22:18 AM", msg: "DCU DCU-045 Offline", site: "Pune Site", type: "danger" },
  { id: 4, time: "10:21:05 AM", msg: "Energy Data Updated", site: "Hyderabad Site", type: "success" },
  { id: 5, time: "10:20:33 AM", msg: "Low PF Alert: 0.78", site: "Jaipur Site", type: "warning" },
];

export default function DashboardView({ isPulse, setIsPulse }) {
  const [timeRange, setTimeRange] = useState("1H");
  const [powerData, setPowerData] = useState(initialPowerData);
  const [totalPower, setTotalPower] = useState(428.75);
  const [todaysEnergy, setTodaysEnergy] = useState(6842.35);
  const [locations, setLocations] = useState(initialLocations);
  const [events] = useState(initialEvents);
  const [selectedSite, setSelectedSite] = useState("all");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulse(true);
      setTimeout(() => setIsPulse(false), 500);

      const delta = (Math.random() - 0.48) * 5;
      const nextPower = parseFloat((totalPower + delta).toFixed(2));
      setTotalPower(nextPower);

      setTodaysEnergy((prev) => parseFloat((prev + Math.random() * 0.03).toFixed(2)));

      setPowerData((prev) => {
        const now = new Date();
        const timeStr = now.toTimeString().split(" ")[0].substring(0, 5);
        return [...prev.slice(1), { time: timeStr, power: nextPower }];
      });

      setLocations((prev) =>
        prev.map((loc) => {
          const varP = Math.max(10, loc.power + (Math.random() - 0.5) * 2);
          return {
            ...loc,
            power: parseFloat(varP.toFixed(2)),
            barWidth: `${Math.min(100, Math.round((varP / 100) * 100))}%`,
          };
        }),
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPower, setIsPulse]);

  return (
    <div className="p-4 sm:p-6 space-y-4">
      {/* 1. Standardized Horizontal Page Header Card */}
      <PageHeaderCard
        title="Fleet Dashboard"
        subtitle="Overall system status, energy monitoring, and asset summary"
        actions={
          <>
            {/* Site Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-bold text-slate-700 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <select
                value={selectedSite}
                onChange={(e) => setSelectedSite(e.target.value)}
                className="bg-transparent border-none font-bold text-slate-700 text-xs outline-none cursor-pointer"
              >
                <option value="all">All Locations</option>
                <option value="mumbai">Mumbai Site</option>
                <option value="delhi">Delhi Site</option>
                <option value="pune">Pune Site</option>
                <option value="bangalore">Bangalore Site</option>
              </select>
            </div>

            {/* Date Range */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-600 shadow-2xs text-xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px]">20 May 2025</span>
            </div>

            {/* Live Auto-Refresh Badge */}
            <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-xl px-3 py-2 text-xs font-bold shadow-2xs">
              <span className="status-dot-live" style={{ width: 6, height: 6, minWidth: 6 }} />
              <span>Auto-refresh: 4s</span>
            </div>
          </>
        }
      />

      {/* 2. KPI Cards */}
      <KpiCards totalPower={totalPower} todaysEnergy={todaysEnergy} />

      {/* 3. Live Map and Power Trend Section */}
      <LiveMapSection powerData={powerData} timeRange={timeRange} setTimeRange={setTimeRange} />

      {/* 4. Energy Connectivity */}
      <EnergyConnectivity todaysEnergy={todaysEnergy} />

      {/* 5. Trends & Events */}
      <TrendsAndEvents locations={locations} events={events} />
    </div>
  );
}
