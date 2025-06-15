import { Navigate, Outlet, useLocation } from "react-router-dom";
import getCookie from "../utils/getCookie";

export default function PrivateOnlyLayout() {
  const location = useLocation();
  const token = getCookie("jwt");

  if (!token) {
    <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
