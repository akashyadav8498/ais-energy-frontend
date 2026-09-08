import { useState } from "react";
import { Plus, Download, Search } from "lucide-react";
import PageHeaderCard from "../components/layout/PageHeaderCard";
import KpiSummaryCards from "../components/device-page/KpiSummaryCards";
import DevicesTableSection from "../components/device-page/DevicesTableSection";
import DevicesByTypeChart from "../components/device-page/DevicesByTypeChart";
import DeviceHealthChart from "../components/device-page/DeviceHealthChart";
import GatewaysStatusTable from "../components/device-page/GatewaysStatusTable";
import QuickActions from "../components/device-page/QuickActions";
import InfoFooter from "../components/device-page/InfoFooter";

import {
  devicesListData,
  devicesByTypeData,
  healthGaugeData,
  gatewaysStatusData,
} from "../components/device-page/devicesData";

export default function DevicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full max-w-[1700px] mx-auto p-4 sm:p-6 space-y-4 pb-8 text-slate-800">
      {/* 1. Standardized Horizontal Page Header Card */}
      <PageHeaderCard
        title="Devices"
        subtitle="Manage and monitor all gateways, DCUs and energy meters"
        actions={
          <>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Device</span>
            </button>
            <button
              type="button"
              className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl hover:bg-slate-50 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Import Devices</span>
            </button>
          </>
        }
      />

      {/* 2. Top KPI Summary Cards */}
      <KpiSummaryCards />

      {/* 3. Main Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Section (Table & Pagination) */}
        <div className="lg:col-span-3">
          <DevicesTableSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            devicesData={devicesListData}
          />
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
