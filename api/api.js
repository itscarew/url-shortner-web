import axios from "axios";

export const UrlApi = axios.create({
  baseURL: "https://olas-url-shortener.onrender.com/shortenUrl",
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
