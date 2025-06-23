import { axiosInstance } from "../config/axiosInstance";

const getCurrentUser = async () => {
  const response = await axiosInstance.get("/api/v1/users/me");
  return response.data;
};

export default getCurrentUser;
