import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from './Login/ForgotPassword';
import Signup from './Login/Signup';
import VerifyCode from './Login/VerifyCode';
import ResetPassword from './Login/ResetPassword';
import AuthLayout from './Layout/AuthLayout';
import Home from './Components/Home/Home';
import Templates from './Components/Templates/Templates';
import TemplateDetails from './Components/Templates/TemplateDetails';
import Pricing from './Components/Pricing/Pricing';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-Password" element={<ForgotPassword />} />
        <Route path="verify-code" element={<VerifyCode />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="template" element={<Templates />} />
      <Route path="template/:templatePath" element={<TemplateDetails />} /> 
      <Route path="pricing" element={<Pricing />} />
      <Route path='learn' element={<Learn />}/>
      <Route path='about' element={<About />}/>

      {/* Redirect unknown routes to Login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </>
  )
);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
