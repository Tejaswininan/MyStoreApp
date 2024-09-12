import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          <div
            className="absolute bottom-4 right-4 group-hover:right-4 bg-cyan-100/60 p-3 flex flex-row 
  items-center justify-between gap-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
          >
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-blue-600 w-10 h-10 rounded-full">
                <BsPlus className="text-2xl" />
              </div>
            </button>

            <Link
              to={`/product/${id}`}
              className="w-10 h-10  flex justify-center items-center text-blue-600 drop-shadow-lg rounded-full"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold"> $ {price}</div>
      </div>
    </div>
  );
};

export default Product;
