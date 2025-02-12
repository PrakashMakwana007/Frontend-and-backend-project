import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../componets/Index";
import { logout } from "../store/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ORDER", path: "/order" },
    { name: "CART", path: "/cart" },
    { name: "CONTECT", path: "/contact" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-black  to-blue-950 text-white shadow-lg py-5">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <Logo />
          <Link to="/">
            <h1 className="text-2xl font-extrabold tracking-wide text-yellow-400 hover:text-yellow-300 transition duration-300">
              SHAKTI HOTEL
            </h1>
          </Link>
        </div>

        
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 px-3 py-1 rounded-lg 
                ${isActive ? "text-red-500 bg-gray-900" : "hover:text-yellow-400 hover:bg-gray-800"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          {authStatus ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-red-400 transition shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-yellow-500 text-black px-5 py-2 rounded-full text-lg font-semibold hover:bg-yellow-400 transition shadow-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
