import axios from "axios";
import store from "../store";

const appAxios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer: ${access_token}`,
  // },
});
appAxios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,

  };
  return config;
});

export default appAxios;
