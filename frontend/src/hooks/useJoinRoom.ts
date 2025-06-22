import { useMutation } from "@tanstack/react-query";
import joinRoom from "../api/joinRoom";

const useJoinRoom = () => {
  return useMutation({
    mutationFn: (roomId: string) => joinRoom(roomId),
  });
};

export default useJoinRoom;
