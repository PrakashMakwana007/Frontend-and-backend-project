import React, { useState } from "react";

const CheckoutPage = () => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  const generateRandomInfo = () => {
    const names = ["Jayesh(Tepu)", "Vishal", "Lalo", "Panthil", "Chando", "Pathu", "Daso"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPhone = Math.floor(1000000000 + Math.random() * 9000000000);
    return { name: randomName, phone: randomPhone };
  };

  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handlePayment = () => {
    if (address && location) {
      setPaymentInProgress(true);

      setTimeout(() => {
        setPaymentInProgress(false);
        setPaymentSuccess(true);
        setOrderDetails(generateRandomInfo());
      }, 4000);
    } else {
      alert("Please fill out the address and location!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-lg">
        {paymentInProgress ? (
          <div className="flex flex-col items-center">
            <img
              src=""
              alt="Payment in progress"
              className="w-40 mb-4"
            />
            <p className="text-xl font-semibold text-gray-700 animate-pulse">
              Processing Payment...
            </p>
          </div>
        ) : paymentSuccess ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              ✅ Payment Successful!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Your order has been placed successfully.
              <p>
                And  its come in 30 mni !!
              </p>
            </p>
            <div className="bg-green-100 p-4 rounded-md shadow-md">
              <p className="text-lg font-semibold">Order Details:</p>
              <ul className="list-none mt-2">
                <li className="text-gray-700">
                  <span className="font-bold">👤 Name:</span> {orderDetails.name}
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">📞 Phone:</span> {orderDetails.phone}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Checkout 🛒
            </h1>
            <form className="space-y-6">
              {/* Address Field */}
              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  🏠 Address:
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Enter your address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              {/* Location Field */}
              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  📍 Location:
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="Enter your location"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              {/* Payment Button */}
              <button
                type="button"
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 
                rounded-lg font-bold text-lg hover:scale-105 transition transform duration-300 shadow-md"
              >
                🚀 Proceed to Payment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
