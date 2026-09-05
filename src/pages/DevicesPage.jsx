import { useState } from "react";
import HeaderActions from "../components/device-page/HeaderActions";
import KpiSummaryCards from "../components/device-page/KpiSummaryCards";
import DevicesTableSection from "../components/device-page/DevicesTableSection";
import DevicesByTypeChart from "../components/device-page/DevicesByTypeChart";
import DeviceHealthChart from "../components/device-page/DeviceHealthChart";
import GatewaysStatusTable from "../components/device-page/GatewaysStatusTable";
import QuickActions from "../components/device-page/QuickActions";
import InfoFooter from "../components/device-page/InfoFooter";

import { devicesListData, devicesByTypeData, healthGaugeData, gatewaysStatusData } from "../components/device-page/devicesData";

export default function DevicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full max-w-[1600px] mx-auto p-3 sm:p-4 space-y-4 pb-8 text-slate-800">
      {/* 1. Header Actions */}
      <HeaderActions />

      {/* 2. Top KPI Summary Cards */}
      <KpiSummaryCards />

      {/* 3. Main Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Section (Table & Pagination) */}
        <div className="lg:col-span-3">
          <DevicesTableSection activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} devicesData={devicesListData} />
        </div>

        {/* Right Section (Charts & Quick Controls) */}
        <div className="space-y-4 lg:col-span-1">
          <DevicesByTypeChart data={devicesByTypeData} />
          <DeviceHealthChart data={healthGaugeData} />
          <GatewaysStatusTable data={gatewaysStatusData} />
          <QuickActions />
        </div>
      </div>

      {/* 4. Footer Info Notice */}
      <InfoFooter />
    </div>
  );
}
