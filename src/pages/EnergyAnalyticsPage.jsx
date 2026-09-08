import { useState } from "react";
import { Info, MapPin, Calendar, Download } from "lucide-react";

import PageHeaderCard from "../components/layout/PageHeaderCard";
import {
  energyConsumptionData,
  powerTrendData,
  powerFactorData,
  phaseDistribution,
  topMeters,
  paramComparison,
  heatmapMatrix,
  getHeatmapBg,
} from "../components/energy-analytics/energyData";

import AnalyticsFilterBar from "../components/energy-analytics/AnalyticsFilterBar";
import AnalyticsKpiGrid from "../components/energy-analytics/AnalyticsKpiGrid";
import EnergyConsumptionChart from "../components/energy-analytics/EnergyConsumptionChart";
import EnergyDistributionChart from "../components/energy-analytics/EnergyDistributionChart";
import PowerTrendChart from "../components/energy-analytics/PowerTrendChart";
import PowerFactorChart from "../components/energy-analytics/PowerFactorChart";
import TopMetersList from "../components/energy-analytics/TopMetersList";
import ParameterComparisonTable from "../components/energy-analytics/ParameterComparisonTable";
import EnergyHeatmap from "../components/energy-analytics/EnergyHeatmap";
import EnergySummaryCard from "../components/energy-analytics/EnergySummaryCard";

export default function EnergyAnalyticsPage() {
  const [timeGranularity, setTimeGranularity] = useState("Day");
  const [selectedSite, setSelectedSite] = useState("mumbai");

  return (
    <div className="space-y-4 pb-8 text-slate-800 p-4 sm:p-6">
      {/* 1. Standardized Horizontal Page Header Card */}
      <PageHeaderCard
        title="Energy Analytics"
        subtitle="Analyze energy consumption, peak demand trends, and electrical parameters"
        actions={
          <>
            {/* Site Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-bold text-slate-700 shadow-2xs text-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <select
                value={selectedSite}
                onChange={(e) => setSelectedSite(e.target.value)}
                className="bg-transparent border-none font-bold text-slate-700 text-xs outline-none cursor-pointer"
              >
                <option value="mumbai">Mumbai Site</option>
                <option value="delhi">Delhi Site</option>
                <option value="pune">Pune Site</option>
                <option value="all">All Locations</option>
              </select>
            </div>

            {/* Date Range */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-600 shadow-2xs text-xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px]">20 May 2025</span>
            </div>

            {/* Export Button */}
            <button
              type="button"
              className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Export</span>
            </button>
          </>
        }
      />

      {/* 2. Secondary Filter Controls Bar */}
      <AnalyticsFilterBar
        timeGranularity={timeGranularity}
        setTimeGranularity={setTimeGranularity}
      />

      {/* 3. KPI Cards Grid */}
      <AnalyticsKpiGrid />

      {/* 4. Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <EnergyConsumptionChart data={energyConsumptionData} />
        <EnergyDistributionChart data={phaseDistribution} />
      </div>

      {/* 5. Middle Line Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PowerTrendChart data={powerTrendData} />
        <PowerFactorChart data={powerFactorData} />
        <TopMetersList data={topMeters} />
      </div>

      {/* 6. Bottom Analytics Table & Matrix Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ParameterComparisonTable data={paramComparison} />
        <EnergyHeatmap matrix={heatmapMatrix} getBgColor={getHeatmapBg} />
        <EnergySummaryCard />
      </div>

      {/* 7. Footer Info Notice */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-semibold pt-2">
        <Info className="w-3.5 h-3.5" />
        <span>
          All energy values are based on imported data and may vary slightly from billing values.
        </span>
      </div>
    </div>
  );
}
