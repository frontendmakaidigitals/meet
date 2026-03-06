import React from "react";
import Hero from "../../sections/sub-apparel/hero";

import Brochure from "@/app/(user)/sections/brochure";

import CTASection from "@/app/(user)/sections/cta";
const jacket = [
  {
    label: "COOLING JACKETS",
    subLabel: "Advanced cooling wear for hot working environments",
    desc: (
      <>
        Middle East Engineering Technologies supplies selected Japanese cooling
        jackets designed to help reduce heat stress and improve comfort in hot
        working environments.
        <br />
        <br />
        These cooling wear products are suitable for industrial, logistics, and
        outdoor work use and are supplied by MEET to B2B clients such as SEFT
        Technologies, Japan.
      </>
    ),
    types: [
      {
        id: 1,
        name: "KU91830 - Cooling Jacket",
        usage:
          "Lightweight construction with breathable design to help reduce heat buildup during extended wear.",
        img: "/apparel/cooling-jacket/KU91830.jpg",
      },
      {
        id: 2,
        name: "EK3731 - Fan-Assisted Cooling Jacket",
        usage:
          "Integrated fan system that enhances airflow to actively support body cooling.",
        img: "/apparel/cooling-jacket/EK3731.jpg",
      },
      {
        id: 3,
        name: "KU92514 - High-Visibility Cooling Vest",
        usage:
          "High-visibility cooling vest combining safety compliance with heat-relief performance.",
        img: "/apparel/cooling-jacket/KU92514.jpg",
      },
    ],
    brochure: null,
    images: [],
    showCallbackForm: true,
  },
];

interface types {
  id: number;
  name: string;
  usage: string;
  img: string;
}
export type Product = {
  label: string;
  subLabel: string;
  desc: React.ReactNode;
  types: types[];
  brochure: string | null;
  images: string[];
};
const page = () => {
  return (
    <div>
      <Hero
        title="Cooling Jackets"
        desc="Safety and comfort solutions for workers"
        image="/apparel/cooling-jacket/banner-1.png"
        background="/apparel/detail/apparel-bg.jpg"
        partnerLogo={["/partner-logo/zippkool.png"]}
      />
      <section className="space-y-3 container mt-10 mb-6 font-inter text-lg text-center">
        <h3>
          <span className="text-primary font-semibold">
            Middle East Engineering Technologies
          </span>{" "}
          supplies and services advanced cooling jackets also known as{" "}
          <span className="text-primary font-semibold">
            Air-Conditioned Jacket
          </span>{" "}
          to entities operating in{" "}
          <span className="text-primary font-semibold">
            high-temperature and demanding work environments
          </span>
          . Designed to meet{" "}
          <span className="text-primary font-semibold">
            international performance standards
          </span>
          , these jackets are developed in Japan, with{" "}
          <span className="text-primary font-semibold">51 Patents</span> mainly
          focused on improving{" "}
          <span className="text-primary font-semibold">
            worker comfort, safety, and productivity
          </span>{" "}
          across industrial and outdoor applications.
          <br />
          <br />
          Cooling jackets help{" "}
          <span className="text-primary font-semibold">
            regulate body temperature
          </span>{" "}
          by circulating air within the garment, reducing{" "}
          <span className="text-primary font-semibold">heat stress</span> during
          prolonged exposure to high temperatures. They are especially valuable
          in{" "}
          <span className="text-primary font-semibold">
            construction, manufacturing, logistics, and outdoor operations
          </span>{" "}
          where overheating can impact performance. Lightweight, durable, and
          easy to integrate into workwear programs, these solutions support{" "}
          <span className="text-primary font-semibold">
            bulk B2B supply requirements, consistent specifications, and
            long-term operational needs
          </span>
          .
        </h3>
      </section>
      <section className="pt-14">
        <div className="container">
          <div className="mb-8 space-y-4">
            <h2 className="text-center  text-4xl font-rubik ">
              <span className="text-primary">Our</span> Products
            </h2>
            <p className="text-center max-w-2xl mx-auto">
              We supply a wide range of cooling jackets designed for
              high-temperature environments and demanding work conditions.
            </p>
          </div>
          {jacket.map((item, idx) => (
            <div key={idx} className=" ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2">
                {item.types.map((type, idx) => (
                  <div
                    key={idx}
                    className="group relative   rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-md border border-slate-200"
                  >
                    {/* Image Container */}
                    <div className="h-60  flex items-center justify-center p-2">
                      {type.img ? (
                        <img
                          src={type.img}
                          alt={type.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-lg" />
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {type.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="lg:mt-14 mb-10">
        <Brochure
          img={"/apparel/cooling-jacket/brochure-2.png"}
          title={
            <h2 className="text-3xl font-rubik mb-5">
              Smart Cooling Jackets for{" "}
              <span className="text-primary">Everyday Performance</span>
            </h2>
          }
          desc={
            <>
              Discover lightweight, air-conditioned cooling jackets engineered
              to regulate body temperature and improve comfort in physically
              demanding conditions. Designed for industrial, outdoor, and
              high-temperature work settings, these jackets support
              productivity, mobility, and worker safety without compromising
              performance.
              <br />
              The brochure provides detailed information on airflow systems,
              material construction, practical applications, and usage benefits
              to help you select the right cooling solution for your operational
              needs.
            </>
          }
          btn={"/apparel/Hikari-Cooling-Jacket.pdf"}
        />
      </section>

      <CTASection />
    </div>
  );
};

export default page;
