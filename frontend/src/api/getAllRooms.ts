import axios from "axios";
import { BACKEND_URL } from "../config";

const getAllRooms = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/v1/rooms/all`);
  return response.data;
};

export default getAllRooms;
