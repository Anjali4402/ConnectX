import axios, { AxiosError } from "axios";
import Router from "next/router";

// axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

// Global response interceptor to handle unauthorized errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Redirect to login page on unauthorized
      if (typeof window !== "undefined") {
        // Router.replace("/login");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

// **GET request method**
export const _get = async (url: string, params = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      params,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { message: "An unexpected error occurred" };
  }
};

// **POST request method**
export const _post = async (url: string, data = {}) => {
  try {
    // const token = await _getToken();
    const response = await axiosInstance.post(url, data, {
      // headers: { Authorization: token },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error.response?.data ?? new Error(error.message || "Network error");
    }
    throw new Error("An unexpected error occurred");
  }
};

// upload files
export const _postBlobCSV = async (url: string, data = {}) => {
  // const token = await _getToken();
  return await axiosInstance
    .post(url, data, {
      headers: {
        // Authorization: `${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      throw err.response?.data;
    });
};

// **PUT request method**
export const _put = async (url: string, data = {}) => {
  // const token = await _getToken();
  return await axiosInstance
    .put(
      url,
      data,
      // { headers: { Authorization: `${token}` } }
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      throw err.response?.data;
    });
};

// **DELETE request method**
export const _delete = async (
  url: string,
  payload?: Record<string, unknown>,
) => {
  // const token = await _getToken();
  return await axiosInstance
    .delete(url, {
      // headers: { Authorization: `${token}` },
      ...(payload && { data: payload }), // only add if payload exists
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response?.data;
    });
};

// **PATCH request method**
export const _patch = async (url: string, data = {}) => {
  // const token = await _getToken();

  return await axiosInstance
    .patch(
      url,
      data,
      //  { headers: { Authorization: `${token}` } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response?.data;
    });
};

// BLOB file
export const _blob = async (url: string, params = {}) => {
  try {
    // const token = await _getToken();

    const response = await axiosInstance.get(url, {
      // headers: { Authorization: token },
      responseType: "blob",
      params,
    });

    return response.data; // always blob on success
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        message: error.response?.data || "Download failed",
      };
    }

    return { success: false, message: "Unexpected error" };
  }
};
