import { useState, useEffect } from "react";
import { RefreshCw, Info } from "lucide-react";

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
    <div className="p-5 space-y-4">
      {/* Live Data Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-black text-slate-700 tracking-wide uppercase">
            Real-Time Overview
          </span>
          <span className="live-indicator text-[9px]">
            <span className="status-dot-live" style={{ width: 6, height: 6, minWidth: 6 }} />
            Auto-refresh: 4s
          </span>
        </div>
        <div className="text-[10px] font-semibold text-slate-400 font-mono">
          Asia/Kolkata (IST) · {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>

      <KpiCards totalPower={totalPower} todaysEnergy={todaysEnergy} />

      <LiveMapSection powerData={powerData} timeRange={timeRange} setTimeRange={setTimeRange} />

      <EnergyConnectivity todaysEnergy={todaysEnergy} />

      <TrendsAndEvents locations={locations} events={events} />

      {/* Footer Notice */}
      <div
        className="flex items-center justify-center gap-1.5 text-[10px] font-semibold pb-2 pt-1"
        style={{ color: '#94a3b8' }}
      >
        <Info className="w-3.5 h-3.5" />
        All timestamps are in Asia/Kolkata (IST). Data refreshes automatically every 4 seconds.
      </div>
    </div>
  );
}
