import React from "react";

const Heading = () => {
  return (
    <section className="h-[800px] bg-heading bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3"></div>Fresh Finds
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            Unleash Your Style with Our New Collection
            <br />
          </h1>
          <a
            href="#products" // Use href instead of Link for smooth scrolling
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            See What's New
          </a>

          <a
            href="/register" // Use href instead of Link for smooth scrolling
            className="self-start font-semibold "
          >
            Sign Up for Exclusive Offers and News
          </a>
        </div>
      </div>
    </section>
  );
};

export default Heading;
