import axios from "axios";
import { BACKEND_URL } from "../config/backendUrl";

const getAllRooms = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/v1/rooms/all`);
  return response.data;
};

export const checkHealth = async () => {
  const response2 = await axios.get(`${BACKEND_URL}/api/health`)
  return response2.data;
}
export default getAllRooms;
