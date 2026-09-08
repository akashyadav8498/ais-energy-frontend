import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

export default function ProtectedRoute({ requireAdmin = false, children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}
