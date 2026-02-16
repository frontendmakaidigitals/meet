"use client";
import Hero from "../sections/apparel/hero";
import About from "../sections/apparel/about";
import Image from "next/image";
import Brochure from "../sections/brochure";
import Contact from "../sections/home/contact";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  const productCategories = [
    {
      title: "Wireless Earbuds",
      image: "/electronics/tws.jpg",
      desc: "Compact and lightweight earbuds designed for clear audio, daily use, and portability. Suitable for retail, gifting, and bulk distribution programs.",
      brochure: null,
    },
    {
      title: "Wireless Headphones",
      image: "/electronics/headphone.jpg",
      desc: "Over-ear and on-ear wireless headphones designed for comfort, extended use, and stable connectivity across work and leisure environments.",
      brochure: null,
    },
    {
      title: "Wireless Portable Speakers",
      image: "/electronics/speaker.jpg",
      desc: "Portable speakers designed for strong sound output, durability, and easy transport. Suitable for personal use, promotions, and retail markets.",
      brochure: null,
    },
    {
      title: "Power Banks",
      image: "/electronics/power-bank.jpg",
      desc: "Reliable power banks designed to support fast charging and extended device usage for travel, work, and emergency needs.",
      brochure: null,
    },
    {
      title: "Cables & Adapters",
      image: "/electronics/adpaters.jpg",
      desc: "Essential charging and connectivity accessories designed for compatibility, durability, and regular daily use across devices.",
      brochure: null,
    },
  ];

  return (
    <>
      <Hero
        title=" Personal Electronics  "
        desc="Middle East Engineering Technologies  supplies essential personal electronic devices designed for everyday use, retail distribution, and bulk business requirements. We focus on reliable products, consistent quality, and long-term B2B partnerships across global markets."
        image="/electronics/banner.jpeg"
      />
      <div className="relative pb-20">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <div className="py-12">
          <div className="container">
            <h2 className="text-4xl font-baskervville">
              {" "}
              Our Home Appliances Product Range
            </h2>
            <p className="mt-2">
              We supply a wide range of home appliances designed for daily
              living, residential projects, and commercial requirements.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-7">
              {productCategories.map((item, idx) => (
                <div key={idx} className="">
                  <div className="h-[240px] relative">
                    <Image
                      src={item.image}
                      fill
                      alt={""}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-lg mt-2 font-baskervville font-[600]">
                    {item.title}
                  </p>
                  <p className="font-inter mt-1 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Brochure
          title={"Technology That Powers Everyday Life"}
          desc={
            "Our electronics portfolio delivers dependable performance through practical, user-focused technology. Built to meet modern demands, our products support efficiency, connectivity, and long-term value."
          }
          btn={""}
        />
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
      <CTASection />
    </>
  );
}
