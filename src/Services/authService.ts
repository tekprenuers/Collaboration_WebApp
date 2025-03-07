import axios from "axios";

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

// Base URL (replace with actual backend URL)
const API_BASE_URL = "https://tekprenuers.com/api";

// Signup function with console logs for debugging
export const signup = async (userData: SignupData): Promise<SignupResponse> => {
  console.log("Sending signup request with data:", userData); // Log user data

  try {
    const response = await axios.post<SignupResponse>(
      `${API_BASE_URL}/user/signup`,
      userData
    );
    console.log("Signup success! Response:", response.data); // Log success response
    return response.data;
  } catch (error: any) {
    console.error("Signup failed! Full error:", error);

    if (error.response) {
      console.log("Error Response Data:", error.response.data);
      console.log("Error Response Status:", error.response.status);
      console.log("Error Response Headers:", error.response.headers);
    } else if (error.request) {
      console.log("No response received. Request details:", error.request);
    } else {
      console.log("Error Message:", error.message);
    }

    throw error.response?.data || { message: "Signup failed" }; // Handles errors
  }
};
