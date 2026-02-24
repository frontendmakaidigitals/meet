import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import WhyChooseUs from "../sections/apparel/about";
import { Award, Layers, Building2, Globe } from "lucide-react";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  const products = [
    {
      img: "/apparel/supply1.png",
      label: (
        <h3 className="text-3xl text-primary font-rubik">
          Apparel & Footwear{" "}
          <span className="font-allura text-slate-900 text-4xl">
            Accessories
          </span>
        </h3>
      ),
      desc: "High-quality buckles, laces, trims, and fastening components designed to enhance fit, durability, and overall garment performance. Engineered for apparel brands, footwear manufacturers, and industrial wear producers, these accessories combine functional strength with consistent finishing standards. Suitable for large-scale production while maintaining reliability in demanding environments.",
      link: "/apparel/buckes-and-fastner",
      cardBg: "bg-linear-to-b from-[#FFFDF7] to-[#FFFFFF]",
    },
    {
      img: "/apparel/cooling-jacket.png",
      label: (
        <h3 className="text-3xl font-rubik text-primary">
          Cooling{" "}
          <span className="font-allura text-slate-900 text-4xl">Jackets</span>
        </h3>
      ),
      desc: "Lightweight, air-conditioned jackets developed to regulate body temperature in high-heat and physically demanding conditions. Designed to improve worker comfort, productivity, and safety across industrial, outdoor, and specialized work environments. Built with practical airflow systems that allow extended wear without restricting movement or performance.",
      link: "/apparel/cooling-jacket",
      cardBg: "bg-linear-to-b from-[#EDFCFF] to-[#F7F7F7]",
    },
  ];
  return (
    <>
      <Hero
        titleText=""
        title={
          <h1 className="text-4xl font-rubik md:text-5xl font-[400] text-gray-900 leading-tight tracking-tight">
            Apparel <span className="font-allura text-6xl">Accessories</span>
          </h1>
        }
        desc="Middle East Engineering Technologies  delivers trusted apparel components and advanced cooling jackets to global clothing brands, manufacturers, and B2B partners"
        image="/apparel/banner-2.png"
        background="/apparel/background.jpg"
      />
      <div className="relative pb-20">
        <Supplies
          link={"/apparel/detail"}
          products={products}
          heading={
            <h2 className="text-center text-4xl font-rubik tracking-wide">
              <span className="text-primary">Apparel Solutions</span> at MEET
            </h2>
          }
        />
        <Industries
          image="/apparel/industry.jpg"
          desc="Our apparel solutions include both functional components and cooling workwear designed to improve fit, safety, and comfort in demanding environments. "
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
          ]}
        />
        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET supplies engineered buckles, fasteners, and cooling jackets that meet international quality and performance standards. From precision fastening systems to industrial cooling solutions, the portfolio supports both apparel design functionality and high-performance workwear needs. Every product is selected with durability, consistency, and real-world application in mind, helping global brands maintain reliability across production and performance environments."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Built with carefully selected materials and strict quality standards, ensuring long-term durability and dependable performance across demanding apparel and industrial applications.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A diverse range covering buckles, fastening systems, trims, and cooling jackets designed to meet both functional and aesthetic requirements across multiple segments.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and stable long-term partnerships.",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience across international markets ensures alignment with quality expectations, compliance standards, and commercial requirements of established brands.",
            },
          ]}
        />
      </div>
      <CTASection />
    </>
  );
}
