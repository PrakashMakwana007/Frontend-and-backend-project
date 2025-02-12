import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 min-h-screen flex flex-col justify-between text-white">
      
      <header className="bg-gradient-to-r from-black to-blue-950 text-yellow-400 py-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold drop-shadow-md">Contact Us</h1>
        <p className="text-xl mt-1 text-white">We would love to hear from you!</p>
      </header>

      
      <section className="px-8 py-12 flex-grow flex items-center justify-center">
        <div className="max-w-lg w-full bg-gray-900 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-yellow-400">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
                required 
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-yellow-400">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
                required 
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-yellow-400">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                rows="4" 
                className="w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
                required 
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-800 transition duration-300 ease-in-out shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
