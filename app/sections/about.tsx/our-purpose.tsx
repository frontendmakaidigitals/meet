import React from "react";
import Image from "next/image";

const OurPurpose = () => {
  return (
    <section className="py-16 lg:py-5 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[.7fr_1.5fr] gap-6 lg:gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Purpose Card */}
            <div className="bg-[#FAF4F5] rounded-xl w-full p-6 text-base lg:text-lg text-center lg:text-left">
              <p className="text-gray-800 leading-relaxed">
                Our purpose is to help businesses access practical and reliable
                products that support long-term growth.
              </p>
            </div>

            {/* Left Image */}
            <div className="relative w-full h-[260px] lg:h-[420px] rounded-xl overflow-hidden">
              <Image
                src="/about/purpose/img-2.jpg"
                alt="Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl text-center font-rubik text-black tracking-wide">
              OUR PURPOSE
            </h2>

            {/* Description Box */}
            <div className="bg-[#F8EFEF] w-full rounded-2xl p-6">
              <p className="text-gray-800 text-base lg:text-lg text-center leading-relaxed">
                We aim to bridge the gap between innovation and real-world use
                by offering solutions that improve efficiency, reduce operating
                costs, and support responsible use of resources.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[280px] lg:h-[440px] rounded-xl overflow-hidden">
              <Image
                src="/about/purpose/img-1.jpg"
                alt="Connected ideas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
