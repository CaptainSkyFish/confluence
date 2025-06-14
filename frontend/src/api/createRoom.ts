import { axiosInstance } from "../config/axiosInstance";
import { BACKEND_URL } from "../config/backendUrl";

const createRoom = async () => {
  const response = await axiosInstance.post(`${BACKEND_URL}api/v1/rooms/create`);
  return response.data;
};

export default createRoom;
