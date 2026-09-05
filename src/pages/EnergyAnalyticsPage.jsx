import { Info } from "lucide-react";

import { energyConsumptionData, powerTrendData, powerFactorData, phaseDistribution, topMeters, paramComparison, heatmapMatrix, getHeatmapBg } from "../components/energy-analytics/energyData";

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
import { useState } from "react";

export default function EnergyAnalyticsPage() {
  const [timeGranularity, setTimeGranularity] = useState("Day");

  return (
    <div className="space-y-4 pb-8 text-slate-800 p-5">
      {/* 1. Secondary Filter Controls Bar */}
      <AnalyticsFilterBar timeGranularity={timeGranularity} setTimeGranularity={setTimeGranularity} />

      {/* 2. KPI Cards Grid */}
      <AnalyticsKpiGrid />

      {/* 3. Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <EnergyConsumptionChart data={energyConsumptionData} />
        <EnergyDistributionChart data={phaseDistribution} />
      </div>

      {/* 4. Middle Line Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PowerTrendChart data={powerTrendData} />
        <PowerFactorChart data={powerFactorData} />
        <TopMetersList data={topMeters} />
      </div>

      {/* 5. Bottom Analytics Table & Matrix Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ParameterComparisonTable data={paramComparison} />
        <EnergyHeatmap matrix={heatmapMatrix} getBgColor={getHeatmapBg} />
        <EnergySummaryCard />
      </div>

      {/* 6. Footer Info Notice */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-semibold pt-2">
        <Info className="w-3.5 h-3.5" />
        <span>All energy values are based on imported data and may vary slightly from billing values.</span>
      </div>
    </div>
  );
}
