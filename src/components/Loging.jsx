import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import appwriteService from "../appwrite/auth"; 
import { Logo, Input, Button } from "./Index";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      console.log("Login clicked");

      const session = await appwriteService.login(data);
      console.log("Login Response:", session);

     
      if (session) {
    
        const currentUser = await appwriteService.getCurrentUser();
        console.log("✅ Current User:", currentUser);

     
        dispatch(authLogin(currentUser));
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError(error?.message || "Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-950">
      <div className="mx-auto w-full max-w-lg bg-white rounded-2xl p-10 shadow-2xl transform transition-all duration-300 hover:scale-105">
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[120px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Welcome Back! 🍽️
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Don't have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-yellow-600 hover:text-yellow-800 transition-all duration-200"
          >
            Sign Up
          </Link>
        </p>
        {error && <div className="text-red-500 text-sm mt-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
          <div>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <Button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-all duration-200"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;