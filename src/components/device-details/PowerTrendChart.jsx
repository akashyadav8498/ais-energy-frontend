import React, { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const defaultTrendData = [
  { time: "00:00", active: 6.8, reactive: 0.9, apparent: 7.0 },
  { time: "02:00", active: 6.9, reactive: 0.6, apparent: 7.8 },
  { time: "04:00", active: 6.6, reactive: 0.7, apparent: 7.5 },
  { time: "06:00", active: 7.4, reactive: 0.6, apparent: 8.2 },
  { time: "08:00", active: 7.6, reactive: 0.7, apparent: 8.6 },
  { time: "10:00", active: 7.8, reactive: 0.6, apparent: 8.2 },
  { time: "12:00", active: 7.5, reactive: 0.7, apparent: 8.1 },
  { time: "14:00", active: 7.2, reactive: 0.6, apparent: 7.8 },
  { time: "16:00", active: 7.3, reactive: 0.7, apparent: 7.9 },
  { time: "18:00", active: 7.9, reactive: 0.8, apparent: 8.5 },
  { time: "20:00", active: 8.1, reactive: 0.8, apparent: 8.8 },
  { time: "22:00", active: 7.4, reactive: 0.7, apparent: 8.0 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white text-[10px] rounded-lg p-2.5 shadow-xl border border-slate-700 space-y-1 pointer-events-none">
        <p className="font-bold text-slate-300 font-mono">{label}</p>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Active Power
          </span>
          <span className="font-bold font-mono text-white tabular-nums">
            {payload.find((p) => p.dataKey === "active")?.value || 0} kW
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Reactive Power
          </span>
          <span className="font-bold font-mono text-white tabular-nums">
            {payload.find((p) => p.dataKey === "reactive")?.value || 0} kVAr
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Apparent Power
          </span>
          <span className="font-bold font-mono text-white tabular-nums">
            {payload.find((p) => p.dataKey === "apparent")?.value || 0} kVA
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const PowerTrendChart = memo(function PowerTrendChart({ meter }) {
  const chartData = meter?.powerTrendData || defaultTrendData;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 h-full flex flex-col justify-between">
      {/* Card Header & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="text-xs font-bold text-slate-900 tracking-tight">
          Power Trend (Today)
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" /> Active Power (kW)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Reactive Power (kVAr)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Apparent Power (kVA)
          </span>
        </div>
      </div>

      {/* Chart Container with Stable Height */}
      <div className="h-48 w-full min-w-0" style={{ minHeight: "192px" }}>
        <ResponsiveContainer width="100%" height="100%" debounce={50}>
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              stroke="#cbd5e1"
              tickLine={false}
              axisLine={{ stroke: "#e2e8f0" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              domain={[0, 15]}
              ticks={[0, 5, 10, 15]}
              stroke="#cbd5e1"
              tickLine={false}
              axisLine={{ stroke: "#e2e8f0" }}
            />
            <Tooltip content={<CustomTooltip />} isAnimationActive={false} />
            <Line
              type="monotone"
              dataKey="apparent"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 2.5, fill: "#f59e0b", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="active"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 2.5, fill: "#3b82f6", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="reactive"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 2.5, fill: "#10b981", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

export default PowerTrendChart;
