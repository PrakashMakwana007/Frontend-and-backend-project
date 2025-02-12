import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import appwriteService from "../appwrite/auth"; 
import { Logo, Input, Button } from "./Index";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      const user = await appwriteService.createAccount(data);
      console.log(" Signup Response:", user);

      if (user) {
        const currentUser = await appwriteService.getCurrentUser();
        console.log(" Current User:", currentUser);
        dispatch(authLogin(currentUser));
        navigate("/");
      }
    } catch (error) {
      console.error(" Signup Error:", error);
      setError(error?.message || "There was an error signing up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-950">
      <div className="mx-auto w-full max-w-lg bg-white rounded-2xl p-10 shadow-2xl transform transition-all duration-300 hover:scale-101 ">
       
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[120px]">
            <Logo width="100%" />
          </span>
        </div>
     
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Create Your Account 🍽️
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-yellow-600 hover:text-yellow-800 transition-all duration-200"
          >
            Log In
          </Link>
        </p>
        {error && <div className="text-red-500 text-sm mt-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit(signup)} className="mt-8 space-y-6">
         
          <div>
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

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
              placeholder="Create your password"
              className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

         
          <div>
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

         
          <Button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-all duration-200"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
