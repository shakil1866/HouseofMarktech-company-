import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <img
        className="w-full h-[540px] object-cover"
        src="./hero2.png"
        alt="Hero Image"
      />

      {/* Overlay for Icons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center">
          {/* Chat with Us */}
          <div className="flex flex-col items-center bg-gray-800 sm:bg-white border rounded-xl p-4 shadow-lg">
            <img className="w-12 sm:w-16" src="./chat.png" alt="Chat Icon" />
            <h3 className="text-sm font-semibold text-white sm:text-black">
              Talk with Us
            </h3>
          </div>

          {/* Talk Sure Us */}
          <div className="flex flex-col items-center bg-gray-800 sm:bg-white border rounded-xl p-4 shadow-lg">
            <img className="w-12 sm:w-16" src="./lock.png" alt="Lock Icon" />
            <h3 className="text-sm font-semibold text-white sm:text-black">
              Talk Sure Us
            </h3>
          </div>

          {/* Phone Support */}
          <div className="flex flex-col items-center bg-gray-800 sm:bg-white border rounded-xl p-4 shadow-lg">
            <img className="w-12 sm:w-16" src="./phone.png" alt="Phone Icon" />
            <h3 className="text-sm font-semibold text-white sm:text-black">
              Talk with Us
            </h3>
          </div>

          {/* Book for Puja */}
          <div className="flex flex-col items-center bg-gray-800 sm:bg-white border rounded-xl p-4 shadow-lg">
            <img className="w-12 sm:w-16" src="./puja.png" alt="Puja Icon" />
            <h3 className="text-sm font-semibold text-white sm:text-black">
              Book for Puja
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
