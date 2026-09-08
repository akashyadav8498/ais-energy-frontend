import React, { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { LOCATIONS_DATA } from "../components/locations/mockLocationsData";

// Sub-components import
import DeviceBreadcrumb from "../components/device-details/DeviceBreadcrumb";
import DeviceHierarchy from "../components/device-details/DeviceHierarchy";
import MeterHeader from "../components/device-details/MeterHeader";
import KpiMetricsGrid from "../components/device-details/KpiMetricsGrid";
import PowerTrendChart from "../components/device-details/PowerTrendChart";
import DeviceStatusCard from "../components/device-details/DeviceStatusCard";
import RealtimeParamsTable from "../components/device-details/RealtimeParamsTable";
import EnergyPieChart from "../components/device-details/EnergyPieChart";
import EnergySummaryCard from "../components/device-details/EnergySummaryCard";
import DeviceActionsCard from "../components/device-details/DeviceActionsCard";
import RecentEventsBar from "../components/device-details/RecentEventsBar";

export default function DeviceDetailsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationIdFromUrl = searchParams.get("locationId");
  const meterIdFromUrl = searchParams.get("meterId");

  const [activeTab, setActiveTab] = useState("Real-time Data");
  const [timeRange, setTimeRange] = useState("Live");

  const tabs = [
    "Real-time Data",
    "Energy Analytics",
    "Phase Analysis",
    "Power Quality",
    "Configuration",
    "Logs",
  ];

  const timeRanges = ["Live", "1H", "6H", "1D", "7D", "30D"];

  // 1. Resolve Active Location (Delhi Site by default)
  const currentLocation = useMemo(() => {
    return (
      LOCATIONS_DATA.find((loc) => loc.id === locationIdFromUrl) ||
      LOCATIONS_DATA[0]
    );
  }, [locationIdFromUrl]);

  // 2. Derive Default First Meter
  const defaultFirstMeterId = useMemo(() => {
    return currentLocation?.gateways?.[0]?.dcus?.[0]?.meters?.[0]?.id || "MTR-DEL-001";
  }, [currentLocation]);

  // 3. Active Selected Meter ID
  const [manualSelectedMeterId, setManualSelectedMeterId] = useState(null);
  const activeMeterId = meterIdFromUrl || manualSelectedMeterId || defaultFirstMeterId;

  // 4. Resolve Active Meter Object from Full Hierarchy
  const currentMeter = useMemo(() => {
    if (!currentLocation?.gateways) return null;
    for (const gw of currentLocation.gateways) {
      for (const dcu of gw.dcus || []) {
        const m = dcu.meters?.find((meter) => meter.id === activeMeterId);
        if (m) return m;
      }
    }
    return currentLocation.gateways?.[0]?.dcus?.[0]?.meters?.[0] || null;
  }, [currentLocation, activeMeterId]);

  // Stable Memoized Handlers
  const handleLocationChange = useCallback((newLocationId) => {
    setManualSelectedMeterId(null);
    setSearchParams({ locationId: newLocationId });
  }, [setSearchParams]);

  const handleMeterSelect = useCallback((meterId) => {
    setManualSelectedMeterId(meterId);
  }, []);

  return (
    <div className="p-3 sm:p-4 lg:p-5 bg-[#F8FAFC] min-h-screen space-y-3.5 text-slate-800 font-sans max-w-[1920px] mx-auto">
      {/* 1. TOP HEADER & BREADCRUMB */}
      <DeviceBreadcrumb
        locations={LOCATIONS_DATA}
        currentLocation={currentLocation}
        currentMeter={currentMeter}
        onLocationChange={handleLocationChange}
      />

      {/* 2. MAIN 2-COLUMN GRID LAYOUT */}
      <div className="grid grid-cols-12 gap-3.5 items-start">
        {/* LEFT COLUMN: Device Hierarchy */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-3.5 lg:sticky lg:top-2">
          <DeviceHierarchy
            location={currentLocation}
            selectedMeterId={activeMeterId}
            onSelectMeter={handleMeterSelect}
          />
        </div>

        {/* RIGHT MAIN COLUMN: Selected Device Details */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-3.5 min-w-0">
          {/* Selected Device Identity / Header */}
          <MeterHeader meter={currentMeter} />

          {/* 6 Key KPI Electrical Metrics */}
          <KpiMetricsGrid metrics={currentMeter?.metrics} />

          {/* Tab Navigation & Timeframe Pill Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            {/* Left Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors duration-100 cursor-pointer ${
                    activeTab === tab
                      ? "bg-blue-50 text-blue-600 border border-blue-200 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Right Time Range Pills */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg self-start sm:self-auto">
              {timeRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors duration-100 cursor-pointer ${
                    timeRange === range
                      ? "bg-blue-600 text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 font-medium"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Area with Stable Min-Height to eliminate layout shift */}
          <div className="space-y-3.5 min-h-[500px]">
            {/* Charts & Status Row (Power Trend + Device Status) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
              <div className="lg:col-span-8 min-w-0 h-full">
                <PowerTrendChart meter={currentMeter} />
              </div>
              <div className="lg:col-span-4 min-w-0 h-full">
                <DeviceStatusCard deviceInfo={currentMeter?.deviceInfo} />
              </div>
            </div>

            {/* Bottom 4-Card Grid (Phase Values + Energy Donut + Energy Summary/Info + Quick Actions) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-3.5 items-stretch">
              <div className="xl:col-span-4 min-w-0 h-full">
                <RealtimeParamsTable realTimeParams={currentMeter?.realTimeParams} />
              </div>
              <div className="xl:col-span-3 min-w-0 h-full">
                <EnergyPieChart meter={currentMeter} />
              </div>
              <div className="xl:col-span-3 min-w-0 h-full">
                <EnergySummaryCard meter={currentMeter} />
              </div>
              <div className="xl:col-span-2 min-w-0 h-full">
                <DeviceActionsCard />
              </div>
            </div>

            {/* Recent Events Row */}
            <RecentEventsBar events={currentMeter?.events} />
          </div>
        </div>
      </div>
    </div>
  );
}