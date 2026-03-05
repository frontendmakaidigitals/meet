import React from "react";

const Banner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="text-9xl">🧳</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              TRAVEL BAGS &{" "}
              <span className="italic text-yellow-600">LUGGAGE</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Spacious and durable luggage that travels long distances,
              withstanding every journey.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition font-medium">
                Learn More
              </button>
              <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
