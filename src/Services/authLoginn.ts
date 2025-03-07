// src/services/authService.ts
import { apiRequest } from "../utils/AuthServicesTwo";

// Define the user data type
interface SignupData {
  email: string;
  phone: string;
  fullName: string;
  password: string;
}

// Define the expected API response type
interface SignupResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: number;
    email: string;
    fullName: string;
  };
}

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: number;
    email: string;
    fullName: string;
  };
}


// Login function
export const AuthLogin = async (loginData: LoginData): Promise<LoginResponse> => {
  console.log("Sending login request with data:", loginData);
  const response = await apiRequest<LoginResponse>("post", "user/login", loginData);

  if (response.token) {
    localStorage.setItem("authToken", response.token);
    console.log("Token stored in localStorage");
  }

  return response;
};

// Logout function
export const logout = () => {
  localStorage.removeItem("authToken");
  console.log("User logged out and token removed");
};