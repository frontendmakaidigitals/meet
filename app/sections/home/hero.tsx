import Image from "next/image";
import React from "react";

const Hero = () => {
  const logos = [
    { img: "google.png" },
    { img: "amazon.png" },
    { img: "X.avif" },
    { img: "dell.png" },
  ];
  return (
    <section className="relative min-h-[calc(100dvh)] lg:min-h-[calc(100vh+5rem)] flex items-end pb-28 justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-3xl lg:text-[40px] font-baskervville font-[400] text-white mb-6 leading-tight">
          SMART PRODUCTS AND PRACTICAL
          <br />
          SOLUTIONS.{" "}
          <span className="text-yellow-400">BUILT FOR BUSINESSES.</span>
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-8 lg:text-lg">
          Middle East Engineering Technologies (MEET) is a B2B trading and
          solutions company based in Dubai, working globally. We bring reliable
          products and technologies that help businesses work better, save
          energy, and grow responsibly.
        </p>

        <div className="flex flex-col max-w-2xs mx-auto lg:max-w-lg  sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary w-full lg:w-auto text-white uppercase px-6 py-2 rounded-full hover:bg-yellow-500 transition font-inter font-semibold">
            Explore our products
          </button>
          <button className="border w-full lg:w-auto border-yellow-500 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black font-inter transition font-semibold">
            TALK TO OUR TEAM
          </button>
        </div>

        {/* Trust Badges */}
        {/* Trust Badges */}
        <div className="mt-28 hidden lg:flex w-full justify-between items-center text-white">
          <p className="text-sm text-start shrink-0">
            <span className="text-primary">85%</span> of Fortune 100 companies
            <br />
            choose Meet
          </p>

          {/* Logo loop container */}
          <div className="relative overflow-hidden w-[420px]">
            <div className="flex items-center gap-8 animate-logo-loop">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="size-14 bg-white p-2 rounded-full shrink-0"
                >
                  <Image
                    src={`/home/hero-brand-logo/${logo.img}`}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
