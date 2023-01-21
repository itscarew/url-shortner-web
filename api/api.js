import axios from "axios";

export const UrlApi = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "content-type": "application/json",
  },
});

UrlApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
