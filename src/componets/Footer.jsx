import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";

function Footer() {
  

  return (
    <footer className="bg-gradient-to-r from-black  to-blue-950 text-white py-6 mt-0 shadow-xl relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <Logo />
        </motion.div>

        <nav className="mt-2 flex justify-center space-x-10 text-lg font-semibold">
          {["/", "/order", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`${
                location.pathname === path ? "text-yellow-400 font-bold" : "text-gray-300"
              } hover:text-yellow-400 transition duration-300`}
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex justify-center space-x-6 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/facebook"
            className="text-blue-500 hover:text-yellow-400 transition duration-300"
          >
            Facebook
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/instagram"
            className="text-pink-500 hover:text-yellow-400 transition duration-300"
          >
            Instagram
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/twitter"
            className="text-blue-400 hover:text-yellow-400 transition duration-300"
          >
            Twitter
          </motion.a>
        </div>

        <p className="mt-4 text-gray-400 text-sm font-light text-center">
          © {new Date().getFullYear()} SHAKTI HOTEL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
