
import { ChevronRight } from "lucide-react";

export default function EnergySummaryCard() {
  const summaryItems = [
    { label: "Today (20 May 2025)", val: "24.35 kWh" },
    { label: "Yesterday (19 May 2025)", val: "24.80 kWh" },
    { label: "This Week", val: "1,245.60 kWh" },
    { label: "Last Week", val: "1,110.00 kWh" },
    { label: "This Month (May)", val: "3,560.40 kWh" },
    { label: "Last Month (Apr)", val: "3,210.25 kWh" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-black text-slate-900 mb-4">Energy Summary</h3>
        <div className="space-y-3 text-xs font-bold">
          {summaryItems.map((item, i) => (
            <div key={i} className="flex justify-between pb-2 border-b border-slate-100">
              <span className="text-slate-500">{item.label}</span>
              <span className="text-slate-900">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="text-blue-600 text-xs font-bold flex items-center justify-end gap-1 mt-4 hover:underline">
        <span>View Detailed Report</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
