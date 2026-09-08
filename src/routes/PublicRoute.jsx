import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

export default function PublicRoute({ children }) {
  const user = getCurrentUser();

  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}
