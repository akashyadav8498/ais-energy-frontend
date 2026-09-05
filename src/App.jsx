import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";

import DashboardPage from "./pages/DashboardPage";
import LocationsPage from "./pages/LocationsPage";
import DeviceDetailPage from "./pages/DeviceDetailsPage";
import EnergyAnalyticsPage from "./pages/EnergyAnalyticsPage";
import AlarmsEventsPage from "./pages/AlarmsEventsPage";
import DevicesPage from "./pages/DevicesPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const [isPulse] = useState(false);
  // Mobile menu ke sidebar show/hide ke liye state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--app-bg)', fontFamily: 'var(--font-sans)', color: '#1e293b' }}>
      {/* Sidebar - Mobile Toggle Props */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header - Mobile Menu Toggle Props */}
        <Header isPulse={isPulse} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

        {/* Declarative Client Routing */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/device-details" element={<DeviceDetailPage />} />
          <Route path="/energy-analytics" element={<EnergyAnalyticsPage />} />
          <Route path="/alarms-events" element={<AlarmsEventsPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          {/* Fallback to Dashboard on undefined route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
