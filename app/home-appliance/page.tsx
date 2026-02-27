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
            Home{" "}
            <span className="font-allura text-5xl lg:text-6xl">Appliances</span>
          </h1>
        }
        logo={[
          "/partner-logo/Indesit.png",
          "/partner-logo/beko.png",
          "/partner-logo/Ariston.png",
        ]}
        desc="At Middle East Engineering Technologies , we supply essential home appliances to businesses across global markets. Our focus is simple reliable products and long-term partnerships."
        image={
          typeof window !== "undefined" && window.innerWidth >= 1024
            ? "/home-appliance/banner.jpeg"
            : "/home-appliance/banner.jpeg"
        }
        background="/home-appliance/bg.jpg"
        titleText=""
      />

      <section className="container font-inter text-center mt-20 mb-2">
        <p className="text-lg">
          Our home appliances are designed for{" "}
          <span className="text-primary font-medium">efficiency</span>,{" "}
          <span className="text-primary font-medium">reliability</span>, and{" "}
          <span className="text-primary font-medium">everyday convenience</span>{" "}
          across residential, commercial, and project-based applications. From{" "}
          <span className="text-primary font-medium">refrigerators</span> and{" "}
          <span className="text-primary font-medium">dishwashers</span> to{" "}
          <span className="text-primary font-medium">washers</span>,{" "}
          <span className="text-primary font-medium">dryers</span>, and{" "}
          <span className="text-primary font-medium">water heaters</span>, each
          product is engineered to simplify daily routines while delivering{" "}
          <span className="text-primary font-medium">
            consistent performance
          </span>{" "}
          and{" "}
          <span className="text-primary font-medium">long-term durability</span>
          .
        </p>

        <p className="mt-4">
          Built for practical use in diverse environments, these appliances
          combine{" "}
          <span className="text-primary font-medium">energy efficiency</span>,{" "}
          <span className="text-primary font-medium">safety</span>, and{" "}
          <span className="text-primary font-medium">
            user-friendly functionality
          </span>
          . They are ideal for modern homes, offices, and commercial spaces,
          providing{" "}
          <span className="text-primary font-medium">dependable solutions</span>{" "}
          that support daily living and operational needs.
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
            multi
            donwloadLink={[
              {
                label: "Ariston Brochure",
                link: "/home-appliance/Ariston-Catalouge.pdf",
              },
              {
                label: "Beko Brochure",
                link: "/home-appliance/beko.pdf",
              },
            ]}
            desc={
              <>
                Discover essential home appliances designed for efficiency,
                durability, and everyday convenience. From refrigerators and
                dishwashers to washers, dryers, and water heaters.
                <br />
                <br />
                The brochure outlines product specifications, energy efficiency
                ratings, installation guidance, and operational tips to help you
                select appliances that meet performance and reliability
                requirements.
              </>
            }
            btn={"/home-appliance/Ariston-Catalouge.pdf"}
          />
        </section>
        <Industries
          image="/apparel/industry.jpg"
          desc="MEET supplies home appliances to a wide range of B2B clients, including:"
          items={[
            {
              label: "Appliance brands and private labels",
            },
            {
              label: "Distributors and wholesalers",
            },
            {
              label: " Retail chains",
            },
            {
              label: "Real estate and housing projects",
            },
            {
              label: "Hospitality and serviced apartments",
            },
            {
              label: "Government and institutional buyers",
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
              desc: "Reliable B2B Supply Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and long-term partnerships for project and commercial supply needs.",
            },
            {
              icon: Globe,
              title: "Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality expectations, compliance standards, and commercial requirements of established brands and businesses.",
            },
          ]}
        />
      </div>
      <div className="mt-16 lg:mt-16">
        <CTASection />
      </div>
    </>
  );
}
