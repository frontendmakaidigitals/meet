import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import { Award, Layers, Building2, Globe } from "lucide-react";
import WhyChooseUs from "../sections/apparel/about";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  const products = [
    {
      img: "/battery/automotive-battery.png",
      label: <h3 className="text-2xl font-rubik">Automotive Batteries</h3>,
      desc: "High-performance automotive batteries designed to deliver reliable starting power and consistent energy output across passenger vehicles and commercial fleets. Built for durability and long service life, these batteries support demanding driving conditions while meeting international quality standards for safety and performance.",
      link: "/batteries/detail",
    },
    {
      img: "/battery/lead-acid-battery.png",
      label: (
        <h3 className="text-2xl font-rubik">Energy Storage – Lead Acid</h3>
      ),
      desc: "Lead acid energy storage systems developed for dependable backup power and industrial applications. Designed for stability, cost efficiency, and long operational cycles, these solutions are suitable for backup systems, telecom infrastructure, and commercial energy storage requirements.",
      link: "/batteries/detail",
    },
    {
      img: "/battery/lithium-ion.png",
      label: <h3 className="text-2xl font-rubik">Energy Storage – Lithium</h3>,
      desc: "Advanced lithium energy storage solutions engineered for high efficiency, lightweight performance, and longer lifecycle operation. Ideal for renewable integration, commercial backup, and modern energy systems that require faster charging, greater energy density, and scalable power solutions.",
      link: "/batteries/detail",
    },
  ];
  return (
    <>
      <Hero
        dark
        layer
        titleText=""
        title={
          <h1 className="text-4xl font-rubik md:text-5xl font-[400] text-gray-100 leading-tight tracking-tight">
            Battery <span className="font-allura text-6xl">Solutions</span>
          </h1>
        }
        desc="Middle East Engineering Technologies is a B2B supplier of automotive batteries and energy storage solutions, serving mobility, backup power, and renewable energy applications across regional and global markets."
        image="/battery/banner.png"
        background="/battery/background.jpg"
      />
      <div className="relative pb-5">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <Supplies
          link={"/batteries/detail"}
          products={products}
          heading={
            <h2 className="text-center text-4xl font-rubik tracking-wide">
              <span className="text-primary">Battery Solutions</span> at MEET
            </h2>
          }
        />
        <Industries
          image="/apparel/industry.jpg"
          desc="Our battery solutions are designed to deliver dependable power across industries where performance, safety, and long-term reliability are essential."
          items={[
            {
              label: "Automotive and mobility",
            },
            {
              label: "Two-wheelers and passenger vehicles",
            },
            {
              label: "Electric vehicles and e-rickshaws",
            },
            {
              label: "Home and commercial backup systems",
            },
            {
              label: "Solar and industrial energy projects",
            },
          ]}
        />
        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET delivers engineered buckles, fasteners, and cooling jackets that meet international quality and performance benchmarks. From precision fastening systems to advanced cooling solutions, the portfolio supports both apparel functionality and high-performance workwear demands. Each product is developed with durability, consistency, and real-world application in focus, enabling global brands to maintain reliability across production, supply, and end-use environments.
."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Manufactured using carefully selected materials and controlled quality processes to ensure long-term durability and dependable performance in demanding apparel and industrial applications.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A comprehensive portfolio of buckles, fastening systems, trims, and cooling jackets designed to meet both technical performance needs and aesthetic requirements across diverse segments.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Streamlined sourcing and coordinated production systems that ensure consistent availability, scalable volumes, and strong long-term business partnerships.",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality standards, compliance requirements, and the commercial expectations of established brands.",
            },
          ]}
        />
      </div>
      <div className="mt-14 lg:mt-0">
        <CTASection />
      </div>
    </>
  );
}
