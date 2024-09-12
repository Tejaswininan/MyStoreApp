import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { FaRegCreditCard, FaShippingFast } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";

const CheckoutPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    // Check if all shipping fields are filled
    for (const key in shippingInfo) {
      if (shippingInfo[key] === "") return false;
    }
    // Check if all payment fields are filled
    for (const key in paymentInfo) {
      if (paymentInfo[key] === "") return false;
    }
    return true;
  };

  const handleOrder = () => {
    if (validateForm()) {
      // Logic for processing order
      alert("Order placed successfully!");
      clearCart();
    } else {
      alert("Please fill in all the details.");
    }
  };

  return (
    <div className="checkout-page container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Order Summary */}
        <div className="order-summary bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
            <FaShippingFast className="text-green-500 mr-3" />
            Order Summary
          </h2>
          <ul className="mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center border-b pb-4 mb-4"
              >
                <div className="ml-4 flex-1">
                  <p className="text-lg font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x ${item.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-2xl font-bold text-gray-900 border-t pt-4">
            Total: ${total.toFixed(2)}
          </div>
        </div>

        {/* Shipping and Payment Details */}
        <div className="checkout-details bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
            <FaShippingFast className="text-blue-500 mr-3" />
            Shipping Details
          </h2>
          <form className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={shippingInfo.name}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={shippingInfo.city}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={shippingInfo.postalCode}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={shippingInfo.country}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
            />
          </form>

          <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
            <FaRegCreditCard className="text-purple-500 mr-3" />
            Payment Details
          </h2>
          <form>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={paymentInfo.cardNumber}
              onChange={(e) => handleInputChange(e, setPaymentInfo)}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={paymentInfo.expiryDate}
              onChange={(e) => handleInputChange(e, setPaymentInfo)}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={paymentInfo.cvv}
              onChange={(e) => handleInputChange(e, setPaymentInfo)}
            />
          </form>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row lg:justify-between items-center">
        <Link
          to="/cart"
          className="text-gray-700 flex items-center underline mb-4 lg:mb-0 hover:text-blue-500"
        >
          <BsArrowLeftCircle className="text-blue-500 mr-2" />
          Back to Cart
        </Link>
        <Link
          to="/"
          className="text-gray-700 flex items-center underline mb-4 lg:mb-0 hover:text-blue-500"
        >
          <BsArrowLeftCircle className="text-blue-500 mr-2" />
          Back to Home
        </Link>
        <button
          onClick={handleOrder}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
