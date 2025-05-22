import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errMes = error?.response?.data?.errMes ?? "Something went wrong.";
    showToast(errMes, "error");
    return Promise.reject(error);
  },
);
