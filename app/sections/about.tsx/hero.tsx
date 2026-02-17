import Link from "next/link";
import React from "react";

interface HeroProps {
  title: string;
  desc: string;
  image: string;
}

const Hero = ({ title, desc, image }: HeroProps) => {
  return (
    <section className="min-h-[calc(70vh)] lg:min-h-[calc(100vh-5rem)] relative flex">
      {" "}
      <div className="container relative z-10 flex flex-col justify-center pb-20">
        {" "}
        {/* LEFT CONTENT */}{" "}
        <div className="max-w-2xl">
          {" "}
          <h1 className="text-4xl lg:text-4xl font-rubik mb-6">
            {title}{" "}
          </h1>{" "}
          <p className="text-gray-700 text-lg leading-relaxed"> {desc} </p>{" "}
        </div>{" "}
        {/* RIGHT IMAGE */}{" "}
      </div>{" "}
      <div className="absolute right-0 bottom-0 h-full w-full">
        {" "}
        <img
          src={image}
          alt="Green leaves"
          className="w-full h-full object-cover object-bottom rounded-2xl"
        />{" "}
      </div>{" "}
    </section>
  );
};

export default Hero;
