export const energyConsumptionData = [
  { date: "14 May", thisWeek: 1120, lastWeek: 1045 },
  { date: "15 May", thisWeek: 1180, lastWeek: 1060 },
  { date: "16 May", thisWeek: 1090, lastWeek: 980 },
  { date: "17 May", thisWeek: 1230, lastWeek: 1140 },
  { date: "18 May", thisWeek: 1410, lastWeek: 1250 },
  { date: "19 May", thisWeek: 1320, lastWeek: 1150 },
  { date: "20 May", thisWeek: 1246, lastWeek: 1110 },
];

export const powerTrendData = [
  { date: "14 May", power: 68.2 },
  { date: "15 May", power: 72.4 },
  { date: "16 May", power: 65.1 },
  { date: "17 May", power: 78.3 },
  { date: "18 May", power: 96.4 },
  { date: "19 May", power: 82.6 },
  { date: "20 May", power: 74.5 },
];

export const powerFactorData = [
  { date: "14 May", pf: 0.95 },
  { date: "15 May", pf: 0.96 },
  { date: "16 May", pf: 0.94 },
  { date: "17 May", pf: 0.97 },
  { date: "18 May", pf: 0.99 },
  { date: "19 May", pf: 0.98 },
  { date: "20 May", pf: 0.98 },
];

export const phaseDistribution = [
  { name: "Phase-1", value: 422.6, percent: "33.9%", color: "#22c55e" },
  { name: "Phase-2", value: 411.35, percent: "33.0%", color: "#2563eb" },
  { name: "Phase-3", value: 411.65, percent: "33.1%", color: "#f59e0b" },
];

export const topMeters = [
  { name: "Meter-003", val: 268.4, pct: 100 },
  { name: "Meter-001", val: 245.8, pct: 88 },
  { name: "Meter-005", val: 210.35, pct: 76 },
  { name: "Meter-002", val: 198.7, pct: 70 },
  { name: "Meter-006", val: 122.35, pct: 44 },
];

export const paramComparison = [
  { param: "Voltage L-L (V)", current: "415.2", last: "414.1", change: "+0.27%", isUp: true },
  { param: "Current (A)", current: "18.62", last: "17.35", change: "+7.32%", isUp: true },
  { param: "Active Power (kW)", current: "78.25", last: "71.80", change: "+8.98%", isUp: true },
  { param: "Reactive Power (kVAr)", current: "12.45", last: "13.60", change: "-8.46%", isUp: false },
  { param: "Power Factor", current: "0.98", last: "0.96", change: "+2.08%", isUp: true },
  { param: "Frequency (Hz)", current: "50.02", last: "50.01", change: "+0.02%", isUp: true },
];

export const heatmapMatrix = [
  { time: "00:00 - 04:00", vals: [45, 40, 42, 48, 46, 44, 47] },
  { time: "04:00 - 08:00", vals: [78, 82, 76, 85, 88, 80, 83] },
  { time: "08:00 - 12:00", vals: [162, 155, 148, 160, 168, 156, 158] },
  { time: "12:00 - 16:00", vals: [198, 210, 188, 205, 218, 200, 205] },
  { time: "16:00 - 20:00", vals: [245, 260, 232, 268, 290, 252, 248] },
  { time: "20:00 - 24:00", vals: [192, 188, 174, 192, 200, 188, 185] },
];

export const getHeatmapBg = (v) => {
  if (v < 60) return "bg-green-200 text-slate-800";
  if (v < 100) return "bg-lime-300 text-slate-800";
  if (v < 170) return "bg-amber-200 text-slate-800";
  if (v < 230) return "bg-orange-300 text-slate-900 font-semibold";
  return "bg-red-500 text-white font-bold";
};
