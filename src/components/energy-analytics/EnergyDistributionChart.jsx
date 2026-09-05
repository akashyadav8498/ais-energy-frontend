
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function EnergyDistributionChart({ data }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between">
      <h3 className="text-sm font-black text-slate-900 mb-2">Energy Distribution (This Week)</h3>

      <div className="relative h-44 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={3} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center">
          <p className="text-base font-black text-slate-900 leading-none">1,245.60</p>
          <p className="text-[10px] font-bold text-slate-400 mt-1">kWh Total</p>
        </div>
      </div>

      <div className="space-y-2 text-xs font-bold pt-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: item.color }}></span>
              <span className="text-slate-600">{item.name}</span>
            </div>
            <span className="text-slate-800">
              {item.value} kWh ({item.percent})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
