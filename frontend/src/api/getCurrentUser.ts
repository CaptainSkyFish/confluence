import { axiosInstance } from "../config/axiosInstance";

const getCurrentUser = async () => {
  console.log("Frontend sees:", import.meta.env.VITE_BACKEND_URL);
  console.log("Frontend sees:", process.env.VITE_BACKEND_URL);
  const response = await axiosInstance.get("/api/v1/users/me");
  if (response.status === 401) return null;
  return response.data;
};

export default getCurrentUser;
