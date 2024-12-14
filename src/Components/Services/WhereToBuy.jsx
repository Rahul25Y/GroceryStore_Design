import React from "react";
import mapImg from "../../assets/world-map.png";

function WhereToBuy() {
  return (
    <div className="container my-36 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 data-aos="fade-up" className="text-4xl font-bold font-serif text-dark leading-tight">
            Where to buy our products?
          </h1>
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full sm:w-[120px] px-4 py-2 border rounded-md shadow-sm"
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full sm:w-[120px] px-4 py-2 border rounded-md shadow-sm"
              data-aos="fade-up"
            />
          </div>
          <button data-aos="fade-up" className="primary-btn px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300 w-[350px]">
            Search
          </button>
        </div>

        {/* Map Section */}
        <div className="md:col-span-2">
          <img
            src={mapImg}
            alt="World Map"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default WhereToBuy;
