import { axiosInstance } from "../config/axiosInstance";

const leaveRoom = (roomId: string) => {
  const response = axiosInstance.post(`/api/v1/rooms/leave/${roomId}`);
  return response.data;
};

export default leaveRoom;
