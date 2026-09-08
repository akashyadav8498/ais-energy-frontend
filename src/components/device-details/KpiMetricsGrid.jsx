import React, { memo } from "react";
import { Zap, Radio, Activity, HardDrive } from "lucide-react";

const KpiMetricsGrid = memo(function KpiMetricsGrid({ metrics }) {
  const cards = [
    {
      label: "Voltage (L-L)",
      value: metrics?.voltage?.val ? `${metrics.voltage.val} ${metrics.voltage.unit}` : "415.2 V",
      trend: metrics?.voltage?.trend || "+0.8%",
      trendType: metrics?.voltage?.trendType || "up",
      sub: metrics?.voltage?.sub || "Avg",
      icon: Zap,
      borderColor: "border-l-blue-500",
      iconBg: "bg-blue-50 border-blue-100 text-blue-600",
    },
    {
      label: "Current",
      value: metrics?.current?.val || "18.62",
      unit: metrics?.current?.unit ? ` ${metrics.current.unit}` : "",
      trend: metrics?.current?.trend || "+1.2%",
      trendType: metrics?.current?.trendType || "up",
      sub: metrics?.current?.sub || "Avg",
      icon: Radio,
      borderColor: "border-l-emerald-500",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
    },
    {
      label: "Active Power",
      value: metrics?.activePower?.val || "7.68",
      unit: metrics?.activePower?.unit ? ` ${metrics.activePower.unit}` : "",
      trend: metrics?.activePower?.trend || "-0.5%",
      trendType: metrics?.activePower?.trendType || "down",
      sub: metrics?.activePower?.sub || "Avg",
      icon: Zap,
      borderColor: "border-l-amber-500",
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
    },
    {
      label: "Power Factor",
      value: metrics?.powerFactor?.val || "0.98",
      trend: metrics?.powerFactor?.trend || "+0.1%",
      trendType: metrics?.powerFactor?.trendType || "up",
      sub: metrics?.powerFactor?.sub || "",
      icon: Activity,
      borderColor: "border-l-purple-500",
      iconBg: "bg-purple-50 border-purple-100 text-purple-600",
    },
    {
      label: "Frequency",
      value: metrics?.frequency?.val || "50.02",
      trend: metrics?.frequency?.trend || "",
      trendType: metrics?.frequency?.trendType || "neutral",
      sub: metrics?.frequency?.sub || "Hz ≈ 0.",
      icon: Activity,
      borderColor: "border-l-teal-500",
      iconBg: "bg-teal-50 border-teal-100 text-teal-600",
    },
    {
      label: "Total Energy",
      value: metrics?.totalEnergy?.val ? `${metrics.totalEnergy.val} ${metrics.totalEnergy.unit}` : "1,245.60 kWh",
      trend: metrics?.totalEnergy?.trend || "+2.3%",
      trendType: metrics?.totalEnergy?.trendType || "up",
      sub: metrics?.totalEnergy?.sub || "Import",
      icon: HardDrive,
      borderColor: "border-l-orange-500",
      iconBg: "bg-orange-50 border-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {cards.map((card, idx) => {
        const IconComp = card.icon;
        const isUp = card.trendType === "up";
        const isDown = card.trendType === "down";

        return (
          <div
            key={idx}
            className={`bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex items-center gap-2.5 border-l-[3.5px] ${card.borderColor} min-w-0 h-full`}
          >
            {/* Left Icon Badge */}
            <div
              className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${card.iconBg}`}
            >
              <IconComp className="w-4 h-4" />
            </div>

            {/* Right Value & Details */}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 truncate leading-tight">
                {card.label}
              </p>
              <p className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight truncate font-mono tabular-nums mt-0.5">
                {card.value}
                {card.unit && <span className="text-xs font-normal text-slate-500">{card.unit}</span>}
              </p>
              <div className="flex items-center gap-1 text-[10px] truncate mt-0.5">
                {card.trend && (
                  <span
                    className={`font-semibold inline-flex items-center tabular-nums ${
                      isUp ? "text-emerald-600" : isDown ? "text-rose-600" : "text-slate-500"
                    }`}
                  >
                    {isUp && "↑ "}
                    {isDown && "↓ "}
                    {card.trend}
                  </span>
                )}
                {card.sub && (
                  <span className="text-slate-400 font-medium">
                    {card.trend ? `(${card.sub})` : card.sub}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default KpiMetricsGrid;
