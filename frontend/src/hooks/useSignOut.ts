import { useMutation } from "@tanstack/react-query";
import signOut from "../api/signOut";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";

const useSignOut = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/");
      showToast("Logged Out Successfully!", "success");
    },
  });
};
export default useSignOut;
