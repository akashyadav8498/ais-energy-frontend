import { useState } from "react";
import DashboardView from "../components/dashboard/DashboardView";

export default function DashboardPage() {
  const [isPulse, setIsPulse] = useState(false);

  return <DashboardView isPulse={isPulse} setIsPulse={setIsPulse} />;
}
