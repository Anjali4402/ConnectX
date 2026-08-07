import axios from "axios";
import Router from "next/router";

export const api = axios.create({
  baseURL: "/",
  withCredentials: true,
});

// Global response interceptor to handle unauthorized errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login page on unauthorized
      if (typeof window !== "undefined") {
        Router.replace("/auth/login");
      }
    }
    return Promise.reject(error);
  }
);
