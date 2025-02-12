import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromOrder, clearOrder } from "../store/orderSLice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.order.orders);
  const totalAmount = useSelector((state) => state.order.totalAmount);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-4xl text-white">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-yellow-400 drop-shadow-lg">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-300 text-xl font-semibold mb-6">
              Your cart is empty 😞
            </p>
            <button
              onClick={() => navigate("/order")}
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
            >
              🍽️ Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center bg-gray-700 p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {item.name}
                    </h2>
                    <p className="text-gray-300">
                      ₹{item.price} x {item.quantity} ={" "}
                      <span className="font-bold text-yellow-300">
                        ₹{item.price * item.quantity}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromOrder(item.name))}
                    className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all duration-300 shadow-md"
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 text-3xl font-semibold text-center text-yellow-400">
              Total:{" "}
              <span className="text-yellow-300 font-extrabold">
                ₹{totalAmount}
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-4">
              <button
                onClick={() => dispatch(clearOrder())}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
              >
                🗑️ Clear Cart
              </button>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
              >
                ✅ Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
