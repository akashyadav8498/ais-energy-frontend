import React, { memo } from "react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import PageHeaderCard from "../layout/PageHeaderCard";

const DeviceBreadcrumb = memo(function DeviceBreadcrumb({
  locations = [],
  currentLocation,
  currentMeter,
  onLocationChange,
}) {
  const locationName = currentLocation?.name || "Delhi Site";
  const gatewayName = currentMeter?.gatewayName || "Gateway-02";
  const dcuName = currentMeter?.dcuName || "DCU-021";
  const meterName = currentMeter?.name || "Meter-003";

  return (
    <div className="space-y-3">
      {/* 1. Global Page Header Card */}
      <PageHeaderCard
        title="Device Detail"
        subtitle="Monitor real-time data, configuration and performance metrics for your device."
        actions={
          <>
            {/* Location Selector */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <select
                value={currentLocation?.id || "DEL-001"}
                onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
                className="bg-transparent border-none outline-none font-bold text-slate-700 text-xs cursor-pointer pr-1"
              >
                {locations.length > 0 ? (
                  locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))
                ) : (
                  <option value="DEL-001">Delhi Site</option>
                )}
              </select>
            </div>

            {/* Live Date Time Display */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>20 May 2025</span>
              <span className="text-slate-300">|</span>
              <span className="font-mono text-xs text-slate-700 tabular-nums">10:24:35 AM</span>
              <Calendar className="w-3.5 h-3.5 text-slate-400 ml-0.5 shrink-0" />
            </div>
          </>
        }
      />

      {/* 2. Breadcrumb Navigation Bar */}
      <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-2xs flex items-center gap-1.5 text-xs text-slate-500 font-medium overflow-x-auto">
        <span className="hover:text-slate-900 cursor-pointer transition-colors">Home</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="hover:text-slate-900 cursor-pointer transition-colors">Locations</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="hover:text-slate-900 cursor-pointer transition-colors">{locationName}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="hover:text-slate-900 cursor-pointer transition-colors">{gatewayName}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="hover:text-slate-900 cursor-pointer transition-colors">{dcuName}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-900 font-bold">{meterName}</span>
      </div>
    </div>
  );
});

export default DeviceBreadcrumb;
