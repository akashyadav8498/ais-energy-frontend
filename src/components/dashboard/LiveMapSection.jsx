import { MapPin, Zap } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const createCustomMarker = (statusColor) => {
  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div style="position:relative;display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
        <span style="position:absolute;width:100%;height:100%;border-radius:50%;background:${statusColor};opacity:0.4;animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></span>
        <span style="position:relative;width:12px;height:12px;border-radius:50%;background:${statusColor};border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35);"></span>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const mapLocations = [
  { name: "Delhi Site",     power: "84.35 kW", lat: 28.6139, lng: 77.209,  status: "#10b981" },
  { name: "Jaipur Site",   power: "42.10 kW", lat: 26.9124, lng: 75.7873, status: "#10b981" },
  { name: "Mumbai Site",   power: "96.40 kW", lat: 19.076,  lng: 72.8777, status: "#10b981" },
  { name: "Pune Site",     power: "31.20 kW", lat: 18.5204, lng: 73.8567, status: "#f59e0b" },
  { name: "Bangalore Site",power: "28.75 kW", lat: 12.9716, lng: 77.5946, status: "#10b981" },
  { name: "Hyderabad Site",power: "25.15 kW", lat: 17.385,  lng: 78.4867, status: "#f59e0b" },
  { name: "Chennai Site",  power: "18.80 kW", lat: 13.0827, lng: 80.2707, status: "#ef4444" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '8px 12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      }}>
        <p style={{ color: '#94a3b8', fontSize: 10, marginBottom: 4, fontFamily: 'var(--font-mono)' }}>{label}</p>
        <p style={{ color: '#60a5fa', fontSize: 13, fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
          {payload[0].value} <span style={{ fontSize: 10, color: '#94a3b8' }}>kW</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function LiveMapSection({ powerData, timeRange, setTimeRange }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* MAP PANEL */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-100">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Live Location Map</span>
        </div>

        {/* Map */}
        <div className="w-full h-60 rounded-xl overflow-hidden z-0 border border-slate-200/80">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
            {mapLocations.map((loc, idx) => (
              <Marker key={idx} position={[loc.lat, loc.lng]} icon={createCustomMarker(loc.status)}>
                <Popup>
                  <div className="font-sans text-xs">
                    <div className="font-extrabold text-slate-900 mb-0.5">{loc.name}</div>
                    <div className="font-bold text-emerald-600 font-mono">{loc.power}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 pt-3 mt-3 border-t border-slate-100">
          <span className="text-slate-700 font-bold">Power Level</span>
          <div className="flex items-center gap-4">
            {[
              { color: '#10b981', label: '> 50 kW' },
              { color: '#f59e0b', label: '20–50 kW' },
              { color: '#ef4444', label: '< 20 kW' },
            ].map(({ color, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* LINE CHART PANEL */}
      <div className="lg:col-span-7 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-amber-100">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">Total Power — All Locations</span>
          </div>

          {/* Time Range Segmented Control */}
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-0.5">
            {["1H", "6H", "1D", "7D", "30D"].map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  timeRange === r
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Area Chart */}
        <div className="w-full flex-1" style={{ minHeight: 230 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={powerData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.22} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="time"
                stroke="#cbd5e1"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: 10 }}
              />
              <YAxis
                stroke="#cbd5e1"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                domain={[0, 600]}
                tick={{ fill: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="power"
                stroke="#2563eb"
                strokeWidth={2.5}
                fill="url(#powerGradient)"
                dot={{ r: 3.5, fill: "#2563eb", strokeWidth: 2.5, stroke: "#fff" }}
                activeDot={{ r: 5, fill: "#2563eb", stroke: "#fff", strokeWidth: 2.5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
