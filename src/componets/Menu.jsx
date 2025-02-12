import React from "react";
import { useDispatch } from "react-redux";
import { addToOrder } from '../store/orderSLice'; 
import dakbati from '../IMAGE/dalbati.jpeg';
import panirtika from '../IMAGE/Paneer-Tikka.jpg';
import chholebhature from '../IMAGE/chhole.jpg';
import alooparotha from '../IMAGE/alooop.jpeg';
import vegbir from '../IMAGE/biranispicy.jpeg';
import palakpanir from '../IMAGE/palakpanir.jpg';
import dosa from '../IMAGE/dosa.jpeg';
import daltadka from '../IMAGE/dal tadka.jpg';
import pavbhaji from '../IMAGE/Punjbai.jpeg';
import malikofta from '../IMAGE/malikofta.jpg';
import mixveg from '../IMAGE/mixveg.jpeg';
import gulab from '../IMAGE/gulabjamun.jpeg';
import manchuryam from '../IMAGE/vegmanchu.jpg';
import panermasala from '../IMAGE/panierbuuter.jpeg';
import kadai from '../IMAGE/kadi punir.jpeg';

const menuItems = [
  { name: "Dal Baati", description: "Traditional Rajasthani dish.", price: "₹250", img: dakbati, special: true },
  { name: "Paneer Tikka", description: "Marinated paneer grilled to perfection.", price: "₹200", img: panirtika },
  { name: "Chole Bhature", description: "Spicy chickpeas served with fluffy bhature.", price: "₹180", img: chholebhature },
  { name: "Aloo Paratha", description: "Stuffed paratha with spicy potato filling.", price: "₹100", img: alooparotha },
  { name: "Vegetable Biryani", description: "Aromatic basmati rice cooked with veggies.", price: "₹220", img: vegbir },
  { name: "Palak Paneer", description: "Spinach gravy with soft paneer cubes.", price: "₹210", img: palakpanir },
  { name: "Masala Dosa", description: "South Indian crepe with potato filling.", price: "₹120", img: dosa },
  { name: "Pav Bhaji", description: "Spicy mashed vegetables with soft bread.", price: "₹150", img: pavbhaji },
  { name: "Malai Kofta", description: "Rich curry with creamy koftas.", price: "₹240", img: malikofta, special: true },
  { name: "Mix Veg", description: "Seasonal veggies cooked in mild spices.", price: "₹160", img: mixveg },
  { name: "Gulab Jamun", description: "Delicious sweet dumplings.", price: "₹80", img: gulab },
  { name: "Veg Manchurian", description: "Fried veggie balls in tangy sauce.", price: "₹180", img: manchuryam },
  { name: "Paneer Butter Masala", description: "Creamy tomato-based curry.", price: "₹230", img: panermasala, special: true },
  { name: "Kadai Paneer", description: "Paneer cooked with bell peppers.", price: "₹220", img: kadai },
  { name: "Dal Tadka", description: "Yellow dal tempered with spices.", price: "₹150", img: daltadka }
];

function Menu() {
  const dispatch = useDispatch();

  const handleAddToOrder = (item) => {
    dispatch(addToOrder(item));
    toast.success(`${item.name} added to cart! 🛒`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center text-blue-950 mb-12 shadow-md drop-shadow-lg">
        Our Delicious Menu 🍽️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div 
            key={item.name} 
            className={`p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 
            ${item.special ? 'border-yellow-500 bg-yellow-100' : 'border-gray-300 bg-white'} hover:shadow-xl`}
          >
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-lg mb-6 transition-all duration-300 ease-in-out hover:opacity-80"
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">{item.price}</span>
              <button
                onClick={() => handleAddToOrder(item)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
