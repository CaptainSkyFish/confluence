import { useMutation } from "@tanstack/react-query";
import useToast from "../hooks/useToast";
import createRoom, { createRoomPayload } from "../api/createRoom";
import axios from "axios";

const useCreateRoom = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (payload: createRoomPayload) => createRoom(payload),
    onSuccess: (data) => {
      showToast(`Room ${data.roomName} created successfully!`, "success");
      //todo: open room automatically
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.errMes ?? "Unknown error";
        showToast(errorMsg, "error");
      } else {
        showToast("Unexpected error", "error");
      }
    },
  });
};

export default useCreateRoom;
