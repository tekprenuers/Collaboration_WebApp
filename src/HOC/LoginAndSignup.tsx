// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext"; // Import useAuth

// const LoginAndSignup: React.FC = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Get the logged-in user from AuthContext


//   console.log("User state in LoginAndSignup.tsx:", user);
//   if (!user ) {
//     console.log("User not found, showing Login/Signup");
//   } else {
//     console.log("User logged in, hiding Login/Signup", user);
//     return null;
//   }

//   // Hide component if user is logged in
//   if (user) return null;

//   return (
//     <div className="sticky bottom-0 w-full bg-green-900 p-5 flex flex-col items-center space-y-4 shadow-md md:hidden lg:hidden max-w-[1600px] mx-auto">
//       <button
//         onClick={() => navigate("/login")}
//         className="hover:text-[#ff5733] text-[#000000] text-2xl font-medium"
//       >
//         Login
//       </button>
//       <button
//         onClick={() => navigate("/signup")}
//         className="bg-[#0B2F59] text-white w-85 px-4 py-3 rounded-xl"
//       >
//         <h1 className="text-xl">Sign Up Free</h1>
//       </button>
//     </div>
//   );
// };

// export default LoginAndSignup;






import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Import useAuth

const LoginAndSignup: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the logged-in user from AuthContext

  console.log("User state in LoginAndSignup.tsx:", user);

  if (user) {
    console.log("User logged in, hiding Login/Signup", user);
    return null; // Hide the component if user is logged in
  }

  console.log("User not found, showing Login/Signup");

  return (
    <div className="sticky bottom-0 w-full bg-green-900 p-5 flex flex-col items-center space-y-4 shadow-md md:hidden lg:hidden max-w-[1600px] mx-auto">
      <button
        onClick={() => navigate("/login")}
        className="hover:text-[#ff5733] text-[#000000] text-2xl font-medium"
      >
        Login
      </button>
      <button
        onClick={() => navigate("/signup")}
        className="bg-[#0B2F59] text-white w-85 px-4 py-3 rounded-xl"
      >
        <h1 className="text-xl">Sign Up Free</h1>
      </button>
    </div>
  );
};

export default LoginAndSignup;
