import { BACKEND_URL } from "../config/backendUrl";
import { axiosInstance } from "../config/axiosInstance";

const getUserRooms = async () => {
  const response = await axiosInstance.get(`${BACKEND_URL}/api/v1/rooms/myrooms`);
  return response.data;
};

export default getUserRooms;
