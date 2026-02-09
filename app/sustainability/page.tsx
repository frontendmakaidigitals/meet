import React from "react";
import Hero from "../sections/about.tsx/hero";
import Contact from "../sections/home/contact";

const page = () => {
  return (
    <div>
      <Hero
        title="SUSTAINABILITY"
        desc="Middle East Engineering Technologies (MEET) is a global B2B trading and solutions company. We work with trusted international partners to supply practical products that support business growth while encouraging responsible use of resources"
        image="/about/hero.jpg"
      />

      {/* Section 1 - Two Column Grid */}
      <section className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="space-y-4 md:space-y-6">
            <p className="text-center bg-[#FAF4F5] rounded-lg text-base md:text-lg p-6 md:p-8 text-gray-600">
              Our purpose is to help businesses access practical and reliable
              products that support long-term growth.
            </p>
            <div className="h-64 md:h-[400px] lg:h-[500px] bg-gray-200 rounded" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl lg:text-4xl p-6 md:p-8 rounded-lg text-center lg:text-end font-baskervville">
              Let's Talk About <br /> Sustainability
            </h2>
            <p className="text-gray-700 rounded-lg p-6 md:p-8 text-base md:text-lg bg-[#FAF4F5]">
              We aim to bridge the gap between innovation and real-world use by
              offering solutions that improve efficiency, reduce operating
              costs, and support responsible use of resources.
            </p>
            <div className="h-64 md:h-[350px] lg:h-[450px] bg-gray-200 rounded" />
          </div>
        </div>
      </section>

      {/* Section 2 - Planet Responsibility */}
      <section className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-4xl font-baskervville">
              Our Planet. <br /> Our Responsibility.
            </h3>

            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              Our vision is to be a trusted B2B solutions partner for businesses
              across key markets.
              <br />
              <br />
              We support companies as they move toward better, more efficient
              ways of working. By offering future-ready products, we help
              businesses improve daily operations while being mindful of energy
              use and environmental impact.
              <br />
              <br />
              As industries and markets evolve, we remain focused on practical
              solutions that deliver long-term value. Through responsible
              choices and strong partnerships, we aim to help our customers grow
              with confidence and prepare for what comes next.
            </p>

            <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg" />
              <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg" />
              <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg" />
            </div>
          </div>

          <div className="h-64 md:h-96 lg:h-full min-h-[400px] bg-gray-200 rounded" />
        </div>
      </section>

      {/* Section 3 - Grid Cards */}
      <section className="container mx-auto pb-10 md:pb-14 pt-6 px-4">
        <h3 className="text-4xl text-center font-baskervville mb-6 md:mb-10">
          Sustainability & Responsibility
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {/* Highlight Card */}
          <div className="bg-[#EFFFED] flex justify-center items-center flex-col p-6 md:p-8 rounded-xl md:col-span-2">
            <h4 className="text-xl md:text-2xl font-inter mb-3 md:mb-4 text-center sm:text-left">
              Power a Brighter Future with Solar Innovation
            </h4>
            <p className="text-gray-700 text-base md:text-lg">
              By offering future-ready products, we help businesses improve
              daily operations while being mindful of energy use and
              environmental impact.
            </p>
          </div>

          {/* Image cards */}
          <div className="h-[250px] lg:h-auto lg:aspect-square bg-gray-200 rounded-xl" />
          <div className="h-[250px] lg:h-auto lg:aspect-square bg-gray-200 rounded-xl" />
          <div className="h-[250px] lg:h-auto lg:aspect-square bg-gray-200 rounded-xl" />
          <div className="h-[250px] lg:h-auto lg:aspect-square bg-gray-200 rounded-xl" />

          {/* Quote Card */}
          <div className="bg-gray-700 flex justify-center items-center sm:col-span-2 md:col-span-2 text-white p-4 md:p-6 rounded-xl">
            <div className="bg-slate-50 p-6 md:p-10 rounded-lg text-black w-full">
              <p className="text-base md:text-lg">
                By offering future-ready products, we help businesses improve
                daily operations while being mindful of energy use and
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Final Statement */}
      <section className="container mx-auto py-12 md:py-24 text-center px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-wider md:tracking-widest font-baskervville uppercase mb-6 md:mb-8">
          Sustainability & Responsibility
        </h3>

        {/* Large Visual Block */}
        <div className="mx-auto max-w-5xl h-64 md:h-[350px] lg:h-[450px] bg-gray-200 rounded-2xl mb-6 md:mb-10" />

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg px-4">
          MEET serves industrial and commercial customers across multiple
          regions through a diversified portfolio. Our offerings include apparel
          accessories designed for durability, cooling jacket technology that
          improves worker comfort in high-temperature environments, electric
          bikes and scooters that support cleaner mobility, and power and
          automotive batteries for energy storage and backup needs.
          <br />
          <br />
          By working closely with manufacturers and solution providers, we
          ensure reliable supply, consistent quality, and products suited to
          regional market requirements.
        </p>
      </section>

      <Contact color={"bg-[#FAF3F4]"} />
    </div>
  );
};

export default page;
