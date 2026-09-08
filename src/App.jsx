import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import LocationsPage from "./pages/LocationsPage";
import DeviceDetailPage from "./pages/DeviceDetailsPage";
import EnergyAnalyticsPage from "./pages/EnergyAnalyticsPage";
import AlarmsEventsPage from "./pages/AlarmsEventsPage";
import DevicesPage from "./pages/DevicesPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

export default function App() {
  const [isPulse] = useState(false);

  return (
    <Routes>
      {/* 1. PUBLIC ROUTE: Login Page (Accessible only when NOT logged in) */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      {/* 2. ADMIN ONLY ROUTE */}
      <Route element={<ProtectedRoute requireAdmin={true} />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* 3. PROTECTED DASHBOARD ROUTES (Wrapped in unified AppLayout with GlobalHeader, Sidebar, PageHeaderCard & Footer) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout isPulse={isPulse} />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/device-details" element={<DeviceDetailPage />} />
          <Route path="/energy-analytics" element={<EnergyAnalyticsPage />} />
          <Route path="/alarms-events" element={<AlarmsEventsPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* 4. Fallback on undefined route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}