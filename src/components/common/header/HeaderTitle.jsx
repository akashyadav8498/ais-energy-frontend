import { useLocation } from "react-router-dom";

export default function HeaderTitle() {
  const location = useLocation();

  const getHeaderInfo = () => {
    switch (location.pathname) {
      case "/settings":
        return {
          title: "Settings",
          subtitle: "Home > Settings",
        };
      case "/reports":
        return {
          title: "Reports",
          subtitle: "Generate and download energy reports and analytics",
        };
      case "/locations":
        return {
          title: "Locations",
          subtitle: "Manage and monitor your sites",
        };
      case "/energy-analytics":
        return {
          title: "Energy Analytics",
          subtitle: "Analyze energy consumption and electrical parameters",
        };
      case "/device-details":
      case "/device-detail":
        return {
          title: "Device Detail",
          subtitle: "View technical metrics and hardware data",
        };
      case "/alarms-events":
        return {
          title: "Alarms & Events",
          subtitle: "Monitor and manage all device alarms and system events",
        };
      case "/devices":
        return {
          title: "Devices",
          subtitle: "Manage and monitor all gateways, DCUs and energy meters",
        };
      default:
        return {
          title: "Fleet Dashboard",
          subtitle: "Overall system status and summary",
        };
    }
  };

  const info = getHeaderInfo();

  return (
    <div>
      <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
        {info.title}
      </h1>
      <p className="text-[11px] font-bold text-slate-400 hidden sm:block">
        {info.subtitle}
      </p>
    </div>
  );
}