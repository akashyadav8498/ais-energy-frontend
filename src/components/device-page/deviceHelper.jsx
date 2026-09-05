import { Server, Cpu, Zap, Radio } from "lucide-react";

export const getTypeBadge = (type) => {
  switch (type) {
    case "Gateway":
      return "bg-blue-50 text-blue-600 border border-blue-100";
    case "DCU":
      return "bg-purple-50 text-purple-600 border border-purple-100";
    case "Meter":
      return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    default:
      return "bg-slate-50 text-slate-600";
  }
};

export const getStatusBadge = (status) => {
  switch (status) {
    case "Online":
      return "bg-emerald-50 text-emerald-600 font-bold";
    case "Warning":
      return "bg-amber-50 text-amber-600 font-bold";
    case "Offline":
      return "bg-rose-50 text-rose-600 font-bold";
    default:
      return "bg-slate-50 text-slate-600";
  }
};

export const getDeviceIcon = (type) => {
  switch (type) {
    case "Gateway":
      return <Server className="w-5 h-5 text-blue-600" />;
    case "DCU":
      return <Cpu className="w-5 h-5 text-purple-600" />;
    case "Meter":
      return <Zap className="w-5 h-5 text-emerald-600" />;
    default:
      return <Radio className="w-5 h-5 text-slate-600" />;
  }
};
