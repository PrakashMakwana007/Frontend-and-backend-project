import React from 'react';
import gujaratithali from '../IMAGE/Gujarati-thli.jpg';
import punjabithali from '../IMAGE/Punjbai.jpeg';
import biriyanispi from '../IMAGE/biranispicy.jpeg';
import hotel from '../IMAGE/hotel2.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-blue-950 min-h-screen text-white">
      
      <header className="bg-gradient-to-r from-black to-white text-yellow-400 py-10 text-center shadow-lg">
        <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Shakti Hotel
        </h1>
        <p className="text-2xl mt-3 opacity-80 text-white">
          Delicious Food, Right at Your Doorstep
        </p>
      </header>

      <section className="py-12 text-center bg-gray-800">
        <div className="text-xl font-semibold text-yellow-400 mb-4">
          <p>📍 Located at: <span className="text-red-500 font-bold">Rajkot, Near Bus Stand</span></p>
        </div>
        
        <motion.div 
          className="bg-yellow-500 text-black py-4 px-12 rounded-full inline-block text-lg font-bold shadow-lg cursor-pointer hover:bg-yellow-600 transition duration-300"
          whileHover={{ scale: 1.03 }}>
          Special Offer: 10% Off on Your First Order! 🎉
        </motion.div>
        <p className="text-xl font-semibold text-yellow-400 mt-6 animate-pulse">
          Order Now & Enjoy Mouthwatering Meals! 🍽️
        </p>
      </section>

      <section className="mb-16">
        <img 
          className="w-full h-[700px] object-cover rounded-lg shadow-2xl transition-all duration-500"
          src={hotel}
          alt="Restaurant" 
        />
      </section>

      <section className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {[
          { img: gujaratithali, name: "Gujarati Thali" },
          { img: punjabithali, name: "Punjabi Thali" },
          { img: biriyanispi, name: "Spicy Biryani" }
        ].map((dish, index) => (
          <motion.div 
            key={index} 
            className="bg-gradient-to-b from-blue-950 to-blue-900 rounded-xl shadow-xl overflow-hidden transition duration-500 hover:shadow-2xl"
            whileHover={{ scale: 1.03 }}>
            <img 
              className="w-full h-[350px] object-cover rounded-t-xl"
              src={dish.img} 
              alt={dish.name} 
            />
            <div className="p-6 text-center text-white rounded-b-xl">
              <p className="text-2xl font-bold">{dish.name}</p>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default Home;
