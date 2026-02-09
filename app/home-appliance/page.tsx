"use client";
import Hero from "../sections/apparel/hero";
import About from "../sections/apparel/about";
import Image from "next/image";
export default function AparaellPage() {
  const productCategories = [
    {
      title: "Water Heaters",
      image: "/images/water-heaters.jpg", // replace when available
      desc: "Reliable water heating solutions designed for safe, consistent, and efficient hot water supply.",
    },
    {
      title: "Cooking Stoves",
      image: "/images/cooking-stoves.jpg",
      desc: "Durable cooking stoves built to support everyday use in residential and project environments.",
    },
    {
      title: "Refrigerators",
      image: "/images/refrigerators.jpg",
      desc: "Efficient refrigeration solutions designed to support food storage needs across multiple settings.",
    },
    {
      title: "Freezers",
      image: "/images/freezers.jpg",
      desc: "Freezing solutions designed for dependable temperature control and long-term storage requirements.",
    },
    {
      title: "Washers & Dryers",
      image: "/images/washers-dryers.jpg",
      desc: "Washing and drying solutions designed for regular use with a focus on efficiency and ease of operation.",
    },
    {
      title: "Dishwashers",
      image: "/images/dishwashers.jpg",
      desc: "Practical dishwashing solutions designed to support water efficiency and daily cleaning needs.",
    },
    {
      title: "Water Purifiers",
      image: "/images/water-purifiers.jpg",
      desc: "Water purification solutions designed to support clean and safe drinking water requirements.",
    },
  ];
  return (
    <>
      <Hero
        title=" Home Appliances  "
        desc="At Middle East Engineering Technologies , we supply essential home appliances to businesses across global markets. Our focus is simple reliable products and long-term partnerships."
        image="/home-appliance/banner.jpg"
      />
      <div className="relative pb-20">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <div className="py-12">
          <div className="container">
            <h2 className="text-4xl font-baskervville">
              {" "}
              Our Home Appliances Product Range
            </h2>
            <p>
              We supply a wide range of home appliances designed for daily
              living, residential projects, and commercial requirements.
            </p>
            <div className="grid grid-cols-4 gap-6 mt-10">
              {productCategories.map((item, idx) => (
                <div key={idx} className="">
                  <div>
                    <Image src={""} width={300} height={300} alt={""} />
                  </div>
                  <p className="text-lg font-baskervville font-[600]">
                    {item.title}
                  </p>
                  <p className="font-inter mt-1 text-sm">{item.desc}</p>
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
      </div>
    </>
  );
}
