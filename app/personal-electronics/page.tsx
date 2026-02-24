"use client";
import Hero from "../sections/apparel/hero";
import WhyChooseUs from "../sections/apparel/about";
import { Award, Layers, Building2, Globe } from "lucide-react";
import Image from "next/image";
import Brochure from "../sections/brochure";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  const productCategories = [
    {
      title: "Wireless Portable Speakers",
      image: "/electronics/speaker.png",
      desc: "Portable speakers designed for strong sound output, durability, and easy transport. Suitable for personal use, promotions, and retail markets.",
      brochure: null,
    },
    {
      title: "Wireless Earbuds",
      image: "/electronics/tws.png",
      desc: "Compact and lightweight earbuds designed for clear audio, daily use, and portability. Suitable for retail, gifting, and bulk distribution programs.",
      brochure: null,
    },
    {
      title: "Wireless Headphones",
      image: "/electronics/headphone.png",
      desc: "Over-ear and on-ear wireless headphones designed for comfort, extended use, and stable connectivity across work and leisure environments.",
      brochure: null,
    },
    {
      title: "Power Banks",
      image: "/electronics/power-bank.png",
      desc: "Reliable power banks designed to support fast charging and extended device usage for travel, work, and emergency needs.",
      brochure: null,
    },
    {
      title: "Adapters",
      image: "/electronics/adapters.png",
      desc: "Essential charging and connectivity accessories designed for compatibility, durability, and regular daily use across devices.",
      brochure: null,
    },
    {
      title: "Cables",
      image: "/electronics/cables.png",
      desc: "Essential charging and connectivity accessories designed for compatibility, durability, and regular daily use across devices.",
      brochure: null,
    },
  ];

  return (
    <>
      <Hero
        logo={["/partner-logo/Heinrich.png"]}
        dark
        titleText=""
        title={
          <h1 className="text-4xl font-rubik lg:text-5xl font-[400] text-gray-100 leading-tight tracking-tight">
            Personal{" "}
            <span className="font-allura text-5xl lg:text-6xl">
              Electronics
            </span>
          </h1>
        }
        desc="Middle East Engineering Technologies  supplies essential personal electronic devices designed for everyday use, retail distribution, and bulk business requirements.
We focus on reliable products, consistent quality, and long-term B2B partnerships across global markets."
        image="/electronics/banner-2.png"
        background="/electronics/background.jpg"
      />
      <section className="container text-lg font-inter text-center mt-20 mb-2 space-y-4">
        <p>
          Our personal electronic devices are selected for{" "}
          <span className="text-primary font-semibold">reliability</span>,{" "}
          <span className="text-primary font-semibold">ease of use</span>, and{" "}
          <span className="text-primary font-semibold">
            consistent performance
          </span>{" "}
          in both residential and commercial applications. From daily-use
          gadgets to professional tools, each product is engineered to meet{" "}
          <span className="text-primary font-semibold">
            practical requirements
          </span>{" "}
          while delivering{" "}
          <span className="text-primary font-semibold">
            long-term durability
          </span>
          .
        </p>

        <p>
          Built for practical use across various environments, these electronics
          combine{" "}
          <span className="text-primary font-semibold">functional design</span>,{" "}
          <span className="text-primary font-semibold">
            dependable performance
          </span>
          , and{" "}
          <span className="text-primary font-semibold">safe operation</span>.
          They are ideal for homes, offices, and professional settings,
          providing{" "}
          <span className="text-primary font-semibold">trusted solutions</span>{" "}
          that support{" "}
          <span className="text-primary font-semibold">
            everyday efficiency
          </span>{" "}
          and <span className="text-primary font-semibold">productivity</span>.
        </p>
      </section>
      <div className="relative lg:pb-16">
        <div className="py-12 ">
          <div className="container">
            <h2 className="text-4xl text-center max-w-3xl mx-auto font-rubik">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="mt-2 text-center max-w-3xl mx-auto">
              We supply a wide range of home appliances designed for daily
              living, residential projects, and commercial requirements.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7">
              {productCategories.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-300 p-4 rounded-xl bg-white"
                >
                  <div className="h-[240px] relative">
                    <Image
                      src={item.image}
                      fill
                      alt={""}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg text-center mt-4 font-rubik font-[600]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Brochure
          title={
            <h2 className="text-3xl font-rubik mb-5">
              Smart Personal Electronics for{" "}
              <span className="text-primary">Everyday Performance</span>
            </h2>
          }
          desc={
            <>
              Explore personal electronic devices built for durability,
              usability, and consistent everyday performance. Designed for
              modern consumer needs, these products deliver practical
              functionality across retail and commercial applications.
              <br />
              <br />
              The brochure provides product specifications, usage guidance,
              performance details, and compatibility information to help you
              choose the right electronics solutions for daily use.
            </>
          }
          btn={""}
        />
        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET supplies reliable personal electronics that meet international quality and performance standards. From daily-use devices to professional tools, our portfolio supports consistent functionality, durability, and efficiency. Every product is selected with usability, longevity, and dependable performance in mind, helping global partners deliver trusted technology solutions."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Built with carefully selected components and strict quality standards, ensuring long-term reliability, safe operation, and dependable performance across everyday and professional applications.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A diverse range covering personal electronics such as smart devices, accessories, and daily-use tools designed to meet both functional and usability requirements across multiple segments.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and stable long-term partnerships for retailers and corporate clients",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality expectations, compliance standards, and commercial requirements of established brands and businesses.",
            },
          ]}
        />
      </div>
      <div className="mt-16 lg:mt-0">
        <CTASection />
      </div>
    </>
  );
}
