import React, { useState } from "react";
import { HelpCircle, Save } from "lucide-react";
import PageHeaderCard from "../components/layout/PageHeaderCard";
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
    <div className="min-h-screen text-slate-800 p-4 sm:p-6 font-sans space-y-5">
      {/* 1. Standardized Horizontal Page Header Card */}
      <PageHeaderCard
        title="Settings"
        subtitle="Manage system configuration, user access controls, and organization preferences"
        actions={
          <>
            <button
              type="button"
              className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Documentation</span>
            </button>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </>
        }
      />

      {/* 2. Settings Navigation Tabs */}
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Main Grid Layout */}
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