import axios from "axios";
import useToastStore from "../store/toastStore";

export const axiosInstance = axios.create({
  baseURL: `https://confluence-be4-hgf9drewcucyg9ct.centralindia-01.azurewebsites.net`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errMes = error?.response?.data?.errMes ?? "Something went wrong.";
    useToastStore.getState().showToast(errMes, "error");
    return Promise.reject(error);
  },
);
