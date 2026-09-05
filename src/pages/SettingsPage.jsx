import React, { useState } from "react";
import SettingsTabs from "../components/settings/SettingsTabs";
import ProfileInfo from "../components/settings/ProfileInfo";
import SystemConfig from "../components/settings/SystemConfig";
import UsersRolesTable from "../components/settings/UsersRolesTable";
import ActivityLogTable from "../components/settings/ActivityLogTable";
import QuickActions from "../components/settings/QuickActions";
import PlanUsage from "../components/settings/PlanUsage";
import NotificationPreferences from "../components/settings/NotificationPreferences";
import NeedHelpCard from "../components/settings/NeedHelpCard";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General Settings");

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 p-4 sm:p-6 font-sans">
      {/* Settings Navigation Tabs */}
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center Main Content (8 Columns) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileInfo />
            <SystemConfig />
          </div>
          <UsersRolesTable />
          <ActivityLogTable />
        </div>

        {/* Right Sidebar Content (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <QuickActions />
          <PlanUsage />
          <NotificationPreferences />
          <NeedHelpCard />
        </div>
      </div>
    </div>
  );
}