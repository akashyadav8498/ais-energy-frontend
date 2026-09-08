import { useState } from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import Sidebar from "../common/Sidebar";
import Footer from "./Footer";

export default function AppLayout({ isPulse = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{
        background: "var(--app-bg, #F4F6F9)",
        fontFamily: "var(--font-sans)",
        color: "#1e293b",
      }}
    >
      {/* 1. Global Top Header (Branding on left, Live Clock/Notifications/Profile on right) */}
      <GlobalHeader
        isPulse={isPulse}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* 2. Main Section: Sidebar + Page Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar Navigation */}
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Scrollable Content Container (Page Content + Footer) */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <div className="flex-1">
            <Outlet />
          </div>

          {/* Common Global Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
