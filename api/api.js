import axios from "axios";
// const accessToken = sessionStorage.getItem("accessToken");
//process.env.REACT_APP_BUSINESS_API

export const MovieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    "content-type": "application/json",
  },
});

MovieApi.interceptors.request.use(
  async (config) => {
    // const accessToken = sessionStorage.getItem("accessToken");
    // config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
