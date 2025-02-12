import React from "react";
import appwriteService from "../appwrite/auth"; 
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice"; 

function Logoutbtn() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await appwriteService.logout(); 
      dispatch(logout()); 
      console.log(" Logout successful");
    } catch (error) {
      console.error(" Logout failed:", error); 
    }
  };

  return (
    <button
      className="px-6 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logoutbtn;
