import React, { memo } from "react";
import { Signal } from "lucide-react";

const DeviceStatusCard = memo(function DeviceStatusCard({ deviceInfo }) {
  const isOnline = (deviceInfo?.status || "Online") === "Online";
  const connection = deviceInfo?.connection || (isOnline ? "Online" : "Offline");
  const signalStrength = deviceInfo?.signalStrength || "-62 dBm";
  const batteryLevel = deviceInfo?.batteryLevel || "92%";
  const lastComm = deviceInfo?.lastUpdated || "20 May 2025 10:24:20 AM";
  const uptime = deviceInfo?.uptime || "2d 14h 35m";

  const parts = lastComm.split(" ");
  let datePart = parts.slice(0, 3).join(" ");
  let timePart = parts.slice(3).join(" ");
  if (!timePart) {
    datePart = "20 May 2025";
    timePart = "10:24:20 AM";
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-900 tracking-tight">
          Device Status
        </h3>
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ${
            isOnline
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : "bg-red-50 text-red-600 border border-red-200"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isOnline ? "bg-emerald-500" : "bg-red-500"
            }`}
          />
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {/* Status Details */}
      <div className="space-y-2.5 text-xs divide-y divide-slate-100 flex-1 flex flex-col justify-around pt-1">
        <div className="flex justify-between items-center pt-1.5 first:pt-0">
          <span className="text-slate-400 font-medium text-[11px]">Connection</span>
          <span className="text-emerald-600 font-bold text-xs">{connection}</span>
        </div>

        <div className="flex justify-between items-center pt-1.5">
          <span className="text-slate-400 font-medium text-[11px]">Signal Strength</span>
          <span className="text-emerald-600 font-bold text-xs flex items-center gap-1 tabular-nums">
            <Signal className="w-3.5 h-3.5 text-emerald-500" /> {signalStrength}
          </span>
        </div>

        <div className="flex justify-between items-center pt-1.5">
          <span className="text-slate-400 font-medium text-[11px]">Battery Level</span>
          <span className="text-slate-800 font-bold text-xs font-mono tabular-nums">{batteryLevel}</span>
        </div>

        <div className="flex justify-between items-start pt-1.5">
          <span className="text-slate-400 font-medium text-[11px]">Last Communication</span>
          <span className="text-slate-800 font-semibold text-[11px] text-right font-mono tabular-nums leading-tight">
            {datePart}
            <br />
            <span className="text-slate-500 text-[10px]">{timePart}</span>
          </span>
        </div>

        <div className="flex justify-between items-center pt-1.5">
          <span className="text-slate-400 font-medium text-[11px]">Uptime</span>
          <span className="text-slate-800 font-bold text-xs font-mono tabular-nums">{uptime}</span>
        </div>
      </div>
    </div>
  );
});

export default DeviceStatusCard;
