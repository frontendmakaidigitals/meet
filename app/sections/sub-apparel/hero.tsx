import React from "react";
import Image from "next/image";

type HeroProps = {
  title: string;
  desc?: string;
  image: string;
  height?: string;
};

const Hero = ({ title, desc, image }: HeroProps) => {
  return (
    <section className="mt-26 px-4 lg:px-0">
      <div
        className={`relative container overflow-hidden rounded-2xl flex items-end justify-center pb-18 h-[50dvh] lg:h-[80dvh]`}
      >
        {/* Background Image */}
        <Image src={image} alt={title} fill priority className="object-cover" />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 w-full h-full" />

        {/* Content */}
        <div className="relative z-10 text-slate-50 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
          {desc && <p className="text-lg md:text-xl mt-3 opacity-90">{desc}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
