// src/services/authService.ts
import { apiRequest } from "../utils/AuthServicesTwo";

interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  fullName: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

// Login function
export const AuthLogin = async (
  loginData: LoginData
): Promise<LoginResponse> => {
  console.log("Sending login request with data:", loginData);
  const response = await apiRequest<LoginResponse>(
    "post",
    "user/login",
    loginData
  );

  if (response.token && response.user) {
    localStorage.setItem("authToken", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    console.log("Token and user data stored in localStorage");
  } else if (response.token) {
    localStorage.setItem("authToken", response.token);
    console.warn("Token stored, but user data is missing in the response");
  }

  return response;
};

// Logout function
export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  console.log("User logged out and data cleared from localStorage");
};
