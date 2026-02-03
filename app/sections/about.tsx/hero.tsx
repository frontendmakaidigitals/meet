import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[calc(70vh)] lg:min-h-[calc(100vh-5rem)] relative flex">
      <div className="container relative z-10 flex flex-col justify-center pb-20">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-4xl font-baskervville mb-6">ABOUT US</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Middle East Engineering Technologies (MEET) is a global B2B trading
            and solutions company. We work with trusted international partners
            to supply practical products that support business growth while
            encouraging responsible use of resources.
          </p>
        </div>

        {/* RIGHT IMAGE */}
      </div>
      <div className="absolute right-0 bottom-0 h-full w-full">
        <img
          src="/about/hero.jpg"
          alt="Green leaves"
          className="w-full h-full object-cover object-bottom rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
