import { BACKEND_URL } from "../config/backendUrl";
import { axiosInstance } from "../config/axiosInstance";

const checkHealth = async () => {
  const response = await axiosInstance.get(`${BACKEND_URL}/api/health`);
  return response.data;
};

export default checkHealth;
