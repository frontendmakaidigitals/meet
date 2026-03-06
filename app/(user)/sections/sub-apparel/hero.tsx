import React from "react";
import Image from "next/image";

type HeroProps = {
  title: string;
  desc?: string;
  image: string;
  height?: string;
  background: string;
  partnerLogo?: string[];
};

const Hero = ({ title, desc, image, background, partnerLogo }: HeroProps) => {
  return (
    <section className="pt-26 px-4 lg:px-0 relative">
      <Image src={background} alt="Background" fill className="object-cover" />
      <div
        className={`relative container overflow-hidden rounded-2xl flex items-end justify-center pb-18 h-[50dvh] lg:h-[80dvh]`}
      >
        {/* Background Image */}
        <Image src={image} alt={title} fill priority className="object-cover" />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 w-full h-full" />

        {/* Content */}
        <div className="relative z-10 text-slate-50 text-center max-w-3xl px-4">
          <h1 className="text-3xl md:text-5xl font-rubik font-[500]">
            {title}
          </h1>
          {desc && <p className="text-md md:text-xl mt-3 opacity-90">{desc}</p>}
        </div>
      </div>
      {partnerLogo && (
        <div className=" relative py-10 flex justify-center items-center space-x-4">
          <h3 className="text-xl font-rubik font-[400]">Our Brand partners</h3>
          <div className="flex flex-wrap items-center gap-4">
            {partnerLogo.map((logo, index) => (
              <div
                key={index}
                className="size-18 flex justify-center items-center bg-white rounded-full"
              >
                <Image src={logo} alt="Partner Logo" width={100} height={50} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
