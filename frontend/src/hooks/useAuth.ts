import { jwtDecode } from "jwt-decode";
import getCookie from "../utils/getCookie";

export default function useAuth() {
  const token = getCookie("jwt");

  if (!token) return null;
  try {
    return jwtDecode<{ userId: string; username: string }>(token);
  } catch {
    return null;
  }
}
