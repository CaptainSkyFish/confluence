import { useQuery } from "@tanstack/react-query";
import createRoom from "../api/createRoom";

const useCreateRoom = () => {
  useQuery({
    queryKey: ["newRoom"],
    queryFn: createRoom,
  });
};

export default useCreateRoom;
