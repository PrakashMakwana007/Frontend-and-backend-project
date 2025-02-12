import React from 'react';
import gujaratithali from '../IMAGE/Gujarati-thli.jpg';
import punjabithali from '../IMAGE/Punjbai.jpeg';
import biriyanispi from '../IMAGE/biranispicy.jpeg';
import hotel from '../IMAGE/hotel2.jpg';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-blue-950 min-h-screen text-white">
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-black to-white text-yellow-400 py-10 text-center shadow-lg">
        <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Shakti Hotel
        </h1>
        <p className="text-2xl mt-3 opacity-80 text-white">
          Delicious Food, Right at Your Doorstep
        </p>
      </header>

      {/* Special Offer Section */}
      <section className="py-12 text-center bg-gray-800">
        <div className="text-xl font-semibold text-yellow-400 mb-4">
          <p>📍 Located at: <span className="text-red-500 font-bold">Rajkot, Near Bus Stand</span></p>
        </div>

        <button className="bg-yellow-500 text-black py-4 px-12 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
          Special Offer: 10% Off on Your First Order! 🎉
        </button>

        <p className="text-xl font-semibold text-yellow-400 mt-6 animate-pulse">
          Order Now & Enjoy Mouthwatering Meals! 🍽️
        </p>
      </section>

      {/* Restaurant Image */}
      <section className="mb-16 px-6">
        <img 
          className="w-full h-[700px] object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-500"
          src={hotel}
          alt="Restaurant" 
        />
      </section>

      {/* Food Items Grid */}
      <section className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {[
          { img: gujaratithali, name: "Gujarati Thali" },
          { img: punjabithali, name: "Punjabi Thali" },
          { img: biriyanispi, name: "Spicy Biryani" }
        ].map((dish, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-b from-blue-950 to-blue-900 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <img 
              className="w-full h-[350px] object-cover rounded-t-xl"
              src={dish.img} 
              alt={dish.name} 
            />
            <div className="p-6 text-center text-white rounded-b-xl">
              <p className="text-2xl font-bold">{dish.name}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;
