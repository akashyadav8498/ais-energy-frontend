import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LOCATIONS_DATA } from "../components/locations/mockLocationsData";

// Sub-components import
import DeviceBreadcrumb from "../components/device-details/DeviceBreadcrumb";
import DeviceHierarchy from "../components/device-details/DeviceHierarchy";
import DeviceInfoCard from "../components/device-details/DeviceInfoCard";
import MeterHeader from "../components/device-details/MeterHeader";
import KpiMetricsGrid from "../components/device-details/KpiMetricsGrid";
import RealtimeParamsTable from "../components/device-details/RealtimeParamsTable";
import PowerTrendChart from "../components/device-details/PowerTrendChart";
import EnergyPieChart from "../components/device-details/EnergyPieChart";
import PhaseBalanceChart from "../components/device-details/PhaseBalanceChart";
import VoltageTrendChart from "../components/device-details/VoltageTrendChart";
import DeviceStatusCard from "../components/device-details/DeviceStatusCard";
import EnergySummaryCard from "../components/device-details/EnergySummaryCard";
import DeviceActionsCard from "../components/device-details/DeviceActionsCard";
import RecentEventsBar from "../components/device-details/RecentEventsBar";

export default function DeviceDetailsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationIdFromUrl = searchParams.get("locationId");
  const meterIdFromUrl = searchParams.get("meterId");

  // 1. Resolve Active Location
  const currentLocation = useMemo(() => {
    return (
      LOCATIONS_DATA.find((loc) => loc.id === locationIdFromUrl) ||
      LOCATIONS_DATA[0]
    );
  }, [locationIdFromUrl]);

  // 2. Derive Default First Meter ID
  const defaultFirstMeterId = useMemo(() => {
    return currentLocation?.gateways?.[0]?.dcus?.[0]?.meters?.[0]?.id || null;
  }, [currentLocation]);

  // 3. Active Selected Meter ID (URL param -> Local selection -> Default first meter)
  const [manualSelectedMeterId, setManualSelectedMeterId] = useState(null);
  const activeMeterId = meterIdFromUrl || manualSelectedMeterId || defaultFirstMeterId;

  // 4. Resolve Active Meter Object
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

  // Handlers
  const handleLocationChange = (newLocationId) => {
    setManualSelectedMeterId(null);
    setSearchParams({ locationId: newLocationId });
  };

  const handleMeterSelect = (meterId) => {
    setManualSelectedMeterId(meterId);
  };

  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-[#F8FAFC] min-h-screen space-y-4 text-slate-800 font-sans max-w-[1920px] mx-auto">
      {/* 1. TOP HEADER BREADCRUMB */}
      <DeviceBreadcrumb 
        locations={LOCATIONS_DATA}
        currentLocation={currentLocation}
        onLocationChange={handleLocationChange}
      />

      {/* 2. MAIN GRID LAYOUT */}
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT COLUMN: Hierarchy & Device Info */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4">
          <DeviceHierarchy 
            location={currentLocation}
            selectedMeterId={activeMeterId}
            onSelectMeter={handleMeterSelect}
          />
          <DeviceInfoCard meter={currentMeter} />
        </div>

        {/* CENTER MAIN SECTION */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-6 space-y-4">
          <MeterHeader meter={currentMeter} />
          <KpiMetricsGrid metrics={currentMeter?.metrics} />

          {/* MIDDLE GRID: Real-Time Parameters + Power Trend */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <RealtimeParamsTable realTimeParams={currentMeter?.realTimeParams} />
            <PowerTrendChart meter={currentMeter} />
          </div>

          {/* BOTTOM ROW: Energy Import/Export, Phase Balance & Voltage Trend */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <EnergyPieChart meter={currentMeter} />
            <PhaseBalanceChart meter={currentMeter} />
            <VoltageTrendChart meter={currentMeter} />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 lg:col-span-12 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
          <DeviceStatusCard deviceInfo={currentMeter?.deviceInfo} />
          <div className="space-y-4">
            <EnergySummaryCard meter={currentMeter} />
            <DeviceActionsCard meter={currentMeter} />
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: RECENT EVENTS BAR */}
      <RecentEventsBar />
    </div>
  );
}