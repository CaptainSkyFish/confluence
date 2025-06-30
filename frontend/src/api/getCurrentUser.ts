import { axiosInstance } from "../config/axiosInstance";

const getCurrentUser = async () => {
  const response = await axiosInstance.get("/api/v1/users/me");
  console.log("Frontend sees:", import.meta.env.VITE_BACKEND_URL);
  if (response.status === 401) return null;
  return response.data;
};

export default getCurrentUser;
