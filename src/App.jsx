import './App.css';
import React, { useState, useEffect } from 'react';
import { Header, Footer } from './components/Index';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import appwriteService from './appwrite/auth';
import { login, logout } from './store/authSlice'; 

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await appwriteService.getCurrentUser();
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("❌ Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);

  return loading ? (
    
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
      <p className="ml-4 text-gray-600 font-semibold">Loading...</p>
    </div>
  ) : (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-gray-100 via-gray-300 to-gray-500 text-gray-900">
      <Header />


      <main className="flex-grow w-full px-6 py-12 bg-gradient-to-r from-black to-blue-950">
      <div className="max-w mx-auto bg-blue-800  rounded-2xl shadow-xl p-8 border ">
      <Outlet />
    </div>
    </main> 
      <Footer />
    </div>
  );
}

export default App;
