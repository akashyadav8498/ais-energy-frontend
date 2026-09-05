export const fontData = {
  tabs: [
    "General Settings",
    "Users & Roles",
    "Alert Settings",
    "Device Settings",
    "Billing & Plan",
    "Integrations",
    "Data & Storage",
    "Security",
  ],
  users: [
    { id: 1, name: "Admin User", isYou: true, email: "admin@ariotsolutions.com", role: "Super Admin", roleBg: "bg-purple-100 text-purple-700", access: "Full Access", status: "Active", lastLogin: "20 May 2025 10:24 AM", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
    { id: 2, name: "Operations Manager", isYou: false, email: "ops.manager@ariotsolutions.com", role: "Manager", roleBg: "bg-blue-100 text-blue-700", access: "Manage All", status: "Active", lastLogin: "20 May 2025 09:18 AM", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { id: 3, name: "Site Engineer", isYou: false, email: "engineer@ariotsolutions.com", role: "Engineer", roleBg: "bg-emerald-100 text-emerald-700", access: "Limited Access", status: "Active", lastLogin: "20 May 2025 08:45 AM", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
    { id: 4, name: "Billing User", isYou: false, email: "billing@ariotsolutions.com", role: "Billing", roleBg: "bg-amber-100 text-amber-700", access: "Billing Access", status: "Active", lastLogin: "19 May 2025 06:32 PM", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
    { id: 5, name: "Viewer User", isYou: false, email: "viewer@ariotsolutions.com", role: "Viewer", roleBg: "bg-slate-100 text-slate-700", access: "Read Only", status: "Active", lastLogin: "19 May 2025 05:10 PM", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
  ],
  activityLogs: [
    { id: 1, time: "20 May 2025, 10:24 AM", user: "Admin User", action: "Login", details: "User logged in successfully", ip: "192.168.1.10" },
    { id: 2, time: "20 May 2025, 10:15 AM", user: "Operations Manager", action: "Update Device", details: "Updated configuration of Meter-003", ip: "192.168.1.25" },
    { id: 3, time: "20 May 2025, 09:45 AM", user: "Site Engineer", action: "Acknowledge Alarm", details: "Acknowledged High Power Alert - Meter-002", ip: "192.168.1.18" },
    { id: 4, time: "20 May 2025, 09:20 AM", user: "Billing User", action: "Generate Report", details: "Generated Energy Summary Report", ip: "192.168.1.30" },
    { id: 5, time: "19 May 2025, 06:32 PM", user: "Viewer User", action: "View Dashboard", details: "Viewed Dashboard - Mumbai Site", ip: "192.168.1.22" },
  ]
};