// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  backendUrl: string | null;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  navigate: any;

}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
//const ShopContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext);

  // Ensure the context is used within the provider
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const backendUrl = "https://tekprenuers.com/api"
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const value = {
    navigate, token, setToken, backendUrl
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;