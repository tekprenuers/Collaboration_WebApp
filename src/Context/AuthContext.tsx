// import React, {
//   createContext,
//   useState,
//   useEffect,
//   ReactNode,
//   useContext,
// } from "react";
// import { AuthLogin, logout as performLogout } from "../Services/authLoginn"; // Renamed logout to avoid conflicts
// import { signup } from "../Services/authService";
// import { apiRequest } from "../utils/AuthServicesTwo";

// // Define user type
// interface User {
//   id: number;
//   email: string;
//   fullName: string;
// }

// // Define context type
// interface AuthContextType {
//   user: User | null;
//   token: string | null;
//   login: (email: string, password: string) => Promise<void>;
//   register: (
//     email: string,
//     phone: string,
//     fullName: string,
//     password: string
//   ) => Promise<void>;
//   logout: () => void;
// }

// // Create context
// export const AuthContext = createContext<AuthContextType | undefined>(
//   undefined
// );

// // ✅ Custom Hook for using AuthContext
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // Auth Provider Component
// export const AuthProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(
//     localStorage.getItem("authToken")
//   );

//   // Fetch user data when token changes
//   useEffect(() => {
//     if (token) {
//       apiRequest<User>("get", "user/profile")
//         .then((userData) => setUser(userData))
//         .catch(() => {
//           setUser(null);
//           localStorage.removeItem("authToken");
//         });
//     }
//   }, [token]);

//   useEffect(() => {
//     // ✅ Check localStorage for user data on mount
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//     // ✅ Check localStorage for token
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);


//   useEffect(() => {
//     console.log("Auth state changed, user:", user);
//   }, [user]);


//   // Login function
// const login = async (email: string, password: string) => {
//   const response = await AuthLogin({ email, password });
//   if (response.token) {
//     setToken(response.token);
//     localStorage.setItem("authToken", response.token);
//     setUser(response.user || null);
//     localStorage.setItem("user", JSON.stringify(response.user)); // ✅ Store user in localStorage
//     console.log("User logged in:", response.user); // Debug log
//   }
// };


//   // Register function
//   const register = async (
//     email: string,
//     phone: string,
//     fullName: string,
//     password: string
//   ) => {
//     try {
//       const response = await signup({ email, phone, fullName, password });

//       if (response?.token && response?.user) {
//         setToken(response.token);
//         localStorage.setItem("authToken", response.token);
//         setUser({
//           id: response.user.id,
//           email: response.user.email,
//           fullName: response.user.fullName,
//         }); // Ensure user object matches the expected structure
//       }
//     } catch (error) {
//       console.error("Signup failed:", error);
//       throw error; // Rethrow error for handling in the component
//     }
//   };

//   // Logout function
//   const handleLogout = () => {
//     performLogout(); // Call the actual logout function
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("authToken"); // Ensure token is removed
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, token, login, register, logout: handleLogout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };







import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { AuthLogin, logout as performLogout } from "../Services/authLoginn"; // Renamed logout to avoid conflicts
import { signup } from "../Services/authService";
import { apiRequest } from "../utils/AuthServicesTwo";

// Define user type
interface User {
  id: number;
  email: string;
  fullName: string;
}

// Define context type
interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    phone: string,
    fullName: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

// Create context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// ✅ Custom Hook for using AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );

  // ✅ Load user and token from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("authToken");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // ✅ Fetch user data when token changes
  useEffect(() => {
    if (token) {
      apiRequest<User>("get", "user/profile")
        .then((userData) => {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData)); // Ensure latest user data is stored
        })
        .catch(() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("authToken");
          localStorage.removeItem("user");
        });
    }
  }, [token]);

  // ✅ Login function
  const login = async (email: string, password: string) => {
    const response = await AuthLogin({ email, password });
    if (response.token) {
      setToken(response.token);
      setUser(response.user || null);
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("user", JSON.stringify(response.user)); // Store user in localStorage
      console.log("User logged in:", response.user);
    }
  };

  // ✅ Register function
  const register = async (
    email: string,
    phone: string,
    fullName: string,
    password: string
  ) => {
    try {
      const response = await signup({ email, phone, fullName, password });

      if (response?.token && response?.user) {
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  // ✅ Logout function
  const handleLogout = () => {
    performLogout();
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
