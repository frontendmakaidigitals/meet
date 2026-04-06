"use client";
import Hero from "../sections/apparel/hero";
import WhyChooseUs from "../sections/apparel/about";
import { Award, Layers, Building2, Globe } from "lucide-react";
import Image from "next/image";
import Brochure from "../sections/brochure";
import CTASection from "../sections/cta";
import Link from "next/link";
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
        image={"/electronics/banner-2.jpeg"}
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
        <section className="bg-gray-50 py-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <img
                src="/electronics/brochure.png" // replace with your image path
                alt="Personal Electronics"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-primary">Reliable Electronics</span> for
                Everyday Use
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our personal electronic products are designed with durability,
                performance, and ease of use in mind. From power solutions to
                audio devices, each product is engineered to meet modern
                lifestyle and business demands.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ High-quality components</li>
                <li>✔ Energy efficient performance</li>
                <li>✔ Tested for global standards</li>
                <li>✔ Suitable for retail & B2B supply</li>
              </ul>

              <Link href={"/contact"}>
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Brochure
          img={"/electronics/brochure.png"}
          title={
            <h2 className="text-3xl mb-3 font-rubik">
              <span className="text-primary">Personal Electronics </span> for
              Everyday Use
            </h2>
          }
          desc={
            <>
              Discover a range of high-quality personal electronics designed for
              convenience, performance, and durability in daily life. From
              gadgets to smart devices, each product is crafted to enhance
              usability and integrate seamlessly into your lifestyle.
              <br />
              <br />
              The brochure includes product specifications, features,
              compatibility details, and usage guidance to help you select
              electronics that best suit your personal or professional needs.
            </>
          }
          btn={"/electronics/Personal Electronics Brochure.pdf"}
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
              title: "Market Readiness",
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
