"use client";
import Hero from "../sections/apparel/hero";
import About from "../sections/apparel/about";
import Image from "next/image";
import Brochure from "../sections/brochure";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  const productCategories = [
    {
      title: "Water Heaters",
      image: "/home-appliance/water-heater.png", // replace when available
      desc: "Reliable water heating solutions designed for safe, consistent, and efficient hot water supply.",
    },
    {
      title: "Cooking Stoves",
      image: "/home-appliance/cooking-top.png",
      desc: "Durable cooking stoves built to support everyday use in residential and project environments.",
    },

    {
      title: "Freezers",
      image: "/home-appliance/refridgerator.png",
      desc: "Freezing solutions designed for dependable temperature control and long-term storage requirements.",
    },
    {
      title: "Washers & Dryers",
      image: "/home-appliance/washing-machine.png",
      desc: "Washing and drying solutions designed for regular use with a focus on efficiency and ease of operation.",
    },
    {
      title: "Dishwashers",
      image: "/home-appliance/dishwasher.png",
      desc: "Practical dishwashing solutions designed to support water efficiency and daily cleaning needs.",
    },
    {
      title: "Multi-Function Microwave Oven",
      image: "/home-appliance/oven.png",
      desc: "Engineered for speed and convenience, our microwave ovens provide fast heating, defrosting, and cooking with precise power control.",
    },
  ];
  return (
    <>
      <Hero
        title=" Home Appliances  "
        desc="At Middle East Engineering Technologies , we supply essential home appliances to businesses across global markets. Our focus is simple reliable products and long-term partnerships."
        image="/home-appliance/banner.jpg"
      />
      <div className="relative  ">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <div className="pt-12 ">
          <div className="container">
            <h2 className="text-4xl font-rubik">
              {" "}
              Our Home Appliances Product Range
            </h2>
            <p>
              We supply a wide range of home appliances designed for daily
              living, residential projects, and commercial requirements.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {productCategories.map((item, idx) => (
                <div key={idx} className="">
                  <div className="h-[230px] lg:h-[300px] overflow-hidden ">
                    <Image
                      src={item.image}
                      width={300}
                      className="object-contain w-full h-full"
                      height={300}
                      alt={""}
                    />
                  </div>
                  <p className="text-lg font-rubik mt-4 font-[500]">
                    {item.title}
                  </p>
                  <p className="font-inter mt-1 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <About
          title="Why Global Leaders Work with Us"
          highlight="Global Leaders"
          image="/apparel/team.jpg"
          items={[
            {
              label: "Trusted Quality",
              desc: "MEET supplies engineered buckles, fasteners, and cooling jackets that meet international quality and performance standards.",
            },
            {
              label: "Wide Product Coverage",
              desc: "From plastic buckles and fastening systems to industrial cooling jackets, our portfolio supports both apparel design and workwear performance needs.",
            },
            {
              label: "Reliable B2B Supply",
              desc: "We manage sourcing, quality checks, and delivery to support smooth production and long-term supply requirements.",
            },
          ]}
        />
        <section className=" lg:my-10 lg:mb-20">
          <Brochure
            title={"Smarter Appliances for Modern Living"}
            desc={
              "Our home appliances combine innovation with efficiency to simplify everyday life. Designed for reliability and reduced energy consumption, they deliver comfort while supporting responsible resource use."
            }
            btn={""}
          />
        </section>
        <CTASection />
      </div>
    </>
  );
}
