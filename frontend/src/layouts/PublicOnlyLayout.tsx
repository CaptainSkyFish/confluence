import { Navigate, Outlet, useLocation } from "react-router-dom";
import getCookie from "../utils/getCookie";
import { useMemo } from "react";

export default function PublicOnlyLayout() {
  const location = useLocation();

  const token = useMemo(()=> getCookie("jwt"),[]) 

  if (token) {
    return <Navigate to="/me" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
