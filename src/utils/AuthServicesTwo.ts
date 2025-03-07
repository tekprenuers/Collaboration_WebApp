// src/utils/apiUtils.ts
import axios, { AxiosError, AxiosResponse } from "axios";

const API_BASE_URL = "https://tekprenuers.com/api";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized access. Redirecting to login...");
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

// Generic function for making API requests
export const apiRequest = async <T>(
  method: "get" | "post" | "put" | "delete",
  endpoint: string,
  data?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.error("API Error Response:", axiosError.response.data);
      throw axiosError.response.data;
    } else if (axiosError.request) {
      console.error("No response received:", axiosError.request);
      throw { message: "No response received from the server" };
    } else {
      console.error("API Error:", axiosError.message);
      throw { message: axiosError.message };
    }
  }
};