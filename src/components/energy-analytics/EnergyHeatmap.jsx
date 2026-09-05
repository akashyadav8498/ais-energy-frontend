

export default function EnergyHeatmap({ matrix, getBgColor }) {
  const days = ["14 May", "15 May", "16 May", "17 May", "18 May", "19 May", "20 May"];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
      <h3 className="text-sm font-black text-slate-900 mb-3">Daily Energy Heatmap (kWh)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-center text-[10px] font-medium border-collapse">
          <thead>
            <tr className="text-slate-400 font-bold border-b border-slate-100">
              <th className="text-left py-1 text-slate-500 font-black">Time / Day</th>
              {days.map((d) => (
                <th key={d} className="py-1 px-1">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white">
            {matrix.map((row) => (
              <tr key={row.time}>
                <td className="text-left font-mono font-bold text-slate-500 text-[9px] py-1.5">{row.time}</td>
                {row.vals.map((v, idx) => (
                  <td key={idx} className="p-0.5">
                    <div className={`py-1.5 rounded-sm text-[10px] ${getBgColor(v)}`}>{v}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mt-3">
        <span>Low</span>
        <div className="h-2 w-36 bg-gradient-to-r from-green-200 via-amber-200 to-red-500 rounded-full"></div>
        <span>High</span>
      </div>
    </div>
  );
}
