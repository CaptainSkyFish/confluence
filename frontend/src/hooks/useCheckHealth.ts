import { useQuery } from "@tanstack/react-query";
import { checkHealth } from "../api/getAllRooms";

export const useCheckHealth = () => {
  return useQuery({
    queryKey: ["health"],
    queryFn: checkHealth,
  });
};
