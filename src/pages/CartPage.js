import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, total, clearCart, itemAmount } = useContext(CartContext);

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700 mb-4">
            Your cart is empty
          </p>
          <Link
            to="/"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Cart Summary
            </h2>
            <div className="flex justify-between mb-4 border-b pb-4 border-gray-200">
              <span className="text-gray-700">Total Items:</span>
              <span className="text-gray-900 font-medium">{itemAmount}</span>
            </div>
            <div className="flex justify-between mb-6 border-b pb-4 border-gray-200">
              <span className="text-gray-700">Total Price:</span>
              <span className="text-gray-900 font-medium">
                ${parseFloat(total).toFixed(2)}
              </span>
            </div>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white w-full py-3 rounded-lg mb-4 hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-green-600 text-white w-full py-3 rounded-lg text-center block mb-4 hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/"
              className="text-black w-full py-3 text-center block bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
