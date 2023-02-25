import axios from "axios";
import { BASE_URL } from "../constants";
const appAxios = axios.create({
  baseURL: BASE_URL,
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
