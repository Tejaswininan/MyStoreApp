import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // State to manage success message
  const [successMessage, setSuccessMessage] = useState("");

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  const handleAddToCart = (product) => {
    addToCart(product, product.id);
    setSuccessMessage("Your item has been added to the cart.");
    // Optionally, clear the success message after a delay
    setTimeout(() => setSuccessMessage(""), 500); // Clear after 3 seconds
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <div className="flex items-center">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-primary py-4 px-8 text-white"
              >
                Add to Cart
              </button>
              {successMessage && (
                <span className="ml-4 text-green-500 font-medium">
                  {successMessage}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
