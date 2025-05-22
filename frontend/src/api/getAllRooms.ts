import { BACKEND_URL } from "../config/backendUrl";
import { axiosInstance } from "../config/axiosInstance";

const getAllRooms = async () => {
  const response = await axiosInstance.get(`${BACKEND_URL}/api/v1/rooms/all`);
  return response.data;
};

export default getAllRooms;
