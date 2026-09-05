export const powerTrendData = [
  { time: "00:00", active: 6.8, reactive: 0.9, apparent: 7.0 },
  { time: "02:00", active: 6.9, reactive: 0.6, apparent: 7.8 },
  { time: "04:00", active: 6.6, reactive: 0.7, apparent: 7.5 },
  { time: "06:00", active: 7.4, reactive: 0.6, apparent: 8.2 },
  { time: "08:00", active: 7.6, reactive: 0.7, apparent: 8.6 },
  { time: "10:00", active: 6.8, reactive: 0.5, apparent: 7.5 },
];

export const voltageTrendData = [
  { time: "00:00", l1: 415.6, l2: 414.8, l3: 415.2 },
  { time: "02:00", l1: 416.0, l2: 415.0, l3: 414.5 },
  { time: "04:00", l1: 415.0, l2: 414.2, l3: 413.8 },
  { time: "06:00", l1: 415.8, l2: 414.9, l3: 414.0 },
  { time: "08:00", l1: 416.5, l2: 415.5, l3: 414.8 },
  { time: "10:00", l1: 415.2, l2: 414.5, l3: 415.0 },
];

export const energyPieData = [
  { name: "Import", value: 1245.6, color: "#22c55e" },
  { name: "Export", value: 45.6, color: "#ef4444" },
];

export const phaseBalanceData = [
  { phase: "Phase-1", value: 98, fill: "#3b82f6" },
  { phase: "Phase-2", value: 100, fill: "#22c55e" },
  { phase: "Phase-3", value: 99, fill: "#f59e0b" },
];

export const realtimeParams = [
  { param: "Voltage (V)", p1: "415.6", p2: "414.8", p3: "415.2", avg: "415.2" },
  { param: "Current (A)", p1: "18.40", p2: "18.75", p3: "18.72", avg: "18.62" },
  { param: "Active Power (kW)", p1: "2.52", p2: "2.58", p3: "2.58", avg: "7.68" },
  { param: "Reactive Power (kVAr)", p1: "0.42", p2: "0.44", p3: "0.43", avg: "1.29" },
  { param: "Apparent Power (kVA)", p1: "2.55", p2: "2.62", p3: "2.61", avg: "7.78" },
  { param: "Power Factor", p1: "0.99", p2: "0.98", p3: "0.98", avg: "0.98" },
  { param: "Frequency (Hz)", p1: "50.01", p2: "50.02", p3: "50.03", avg: "50.02" },
];