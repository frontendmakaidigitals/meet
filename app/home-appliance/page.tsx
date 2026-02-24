"use client";
import Hero from "../sections/apparel/hero";
import { Award, Layers, Building2, Globe } from "lucide-react";
import Image from "next/image";
import Brochure from "../sections/brochure";
import WhyChooseUs from "../sections/apparel/about";
import CTASection from "../sections/cta";
import Industries from "../sections/apparel/industries";
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
        title={
          <h1 className="text-4xl font-rubik md:text-5xl font-[400] text-gray-900 leading-tight tracking-tight">
            Home <span className="font-allura text-6xl">Appliances</span>
          </h1>
        }
        logo={["/partner-logo/Indesit.png", "/partner-logo/beko.png", "/partner-logo/Ariston.png"]}
        desc="At Middle East Engineering Technologies , we supply essential home appliances to businesses across global markets. Our focus is simple reliable products and long-term partnerships."
        image="/home-appliance/banner.png"
        background="/home-appliance/bg.jpg"
        titleText=""
      />

      <section className="container font-inter text-center mt-20 mb-2">
        <p>
          Our home appliances are designed for efficiency, reliability, and
          everyday convenience across residential, commercial, and project-based
          applications. From refrigerators and dishwashers to washers, dryers,
          and water heaters, each product is engineered to simplify daily
          routines while delivering consistent performance and long-term
          durability.
        </p>
        <p>
          Built for practical use in diverse environments, these appliances
          combine energy efficiency, safety, and user-friendly functionality.
          They are ideal for modern homes, offices, and commercial spaces,
          providing dependable solutions that support daily living and
          operational needs..
        </p>
      </section>
      <div className="relative  ">
        <div className="pt-16 ">
          <div className="container ">
            <h2 className="text-4xl text-center max-w-4xl mx-auto font-rubik">
              {" "}
              Our <span className="text-primary">Home Appliances</span> Product
              Range
            </h2>
            <p className="max-w-3xl mx-auto text-center mt-2">
              We supply a wide range of home appliances designed for daily
              living, residential projects, and commercial requirements.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
              {productCategories.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-300 rounded-xl p-4"
                >
                  <div className="h-[230px] lg:h-[300px] overflow-hidden ">
                    <Image
                      src={item.image}
                      width={300}
                      className="object-contain w-full h-full"
                      height={300}
                      alt={""}
                    />
                  </div>
                  <p className="text-lg text-center font-rubik mt-4 font-[500]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className=" lg:mt-12">
          <Brochure
            title={
              <h2 className="text-3xl font-rubik mb-5">
                Smart Home Appliances for{" "}
                <span className="text-primary">Everyday Performance</span>
              </h2>
            }
            desc={
              <>
                Discover essential home appliances designed for efficiency,
                durability, and everyday convenience. From refrigerators and
                dishwashers to washers, dryers, and water heaters, these
                products support residential, commercial, and project-based
                needs.
                <br />
                <br />
                The brochure outlines product specifications, energy efficiency
                ratings, installation guidance, and operational tips to help you
                select appliances that meet performance and reliability
                requirements.
              </>
            }
            btn={""}
          />
        </section>
        <Industries
          image="/apparel/industry.jpg"
          desc="Our apparel solutions include both functional components and cooling workwear designed to improve fit, safety, and comfort in demanding environments."
          items={[
            {
              label: "Outdoor and sportswear",
            },
            {
              label: "Fashion Garments",
            },
            {
              label: "Footwear",
            },
            {
              label: "Bags and Backpacks",
            },
            {
              label: "Safety and Working Clothes",
            },
            {
              label: "Apparel Accessories",
            },
          ]}
        />
        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET supplies high-quality home appliances that meet international performance and safety standards. From refrigerators and dishwashers to washers, dryers, and water heaters, our portfolio supports both residential and commercial applications. Every product is selected with reliability, efficiency, and long-term performance in mind, helping global partners maintain consistent results across projects and operations."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Built with carefully selected materials and strict quality standards, ensuring long-term durability, safe operation, and dependable performance across demanding residential and commercial environments.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A diverse range covering refrigerators, dishwashers, washers, dryers, and water heaters, designed to meet both functional requirements and energy efficiency standards across multiple applications.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and long-term partnerships for project and commercial supply needs.",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality expectations, compliance standards, and commercial requirements of established brands and businesses.",
            },
          ]}
        />
      </div>
      <div className="mt-16 lg:mt-5">
        <CTASection />
      </div>
    </>
  );
}
