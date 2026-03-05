import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import { Award, Layers, Building2, Globe } from "lucide-react";
import WhyChooseUs from "../sections/apparel/about";
import CTASection from "../sections/cta";
import Brochure from "../sections/brochure";
export default function AparaellPage() {
  const products = [
    {
      img: "/battery/automitve-batt.png",
      label: <h3 className="text-2xl font-rubik">Automotive Batteries</h3>,
      desc: "High-performance automotive batteries designed to deliver reliable starting power and consistent energy output across passenger vehicles and commercial fleets. Built for durability and long service life, these batteries support demanding driving conditions while meeting international quality standards for safety and performance.",
      link: "/batteries/detail",
    },
    {
      img: "/battery/lead-acid-1.png",
      label: (
        <h3 className="text-2xl font-rubik">Energy Storage – Lead Acid</h3>
      ),
      desc: "Lead acid energy storage systems developed for dependable backup power and industrial applications. Designed for stability, cost efficiency, and long operational cycles, these solutions are suitable for backup systems, telecom infrastructure, and commercial energy storage requirements.",
      link: "/batteries/detail",
    },
    {
      img: "/battery/lithium-battery.png",
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
            Battery{" "}
            <span className="font-allura text-5xl lg:text-6xl">Solutions</span>
          </h1>
        }
        desc="Middle East Engineering Technologies is a B2B supplier of automotive batteries and energy storage solutions, serving mobility, backup power, and renewable energy applications across regional and global markets."
        image={
          typeof window !== "undefined" && window.innerWidth >= 1024
            ? "/battery/banner-3.png"
            : "/battery/banner-3.png"
        }
        background="/battery/background.jpg"
      />
      <div className="relative pb-5">
        <Supplies
          link={"/batteries/detail"}
          products={products}
          heading={
            <h2 className="text-center text-4xl font-rubik tracking-wide">
              <span className="text-primary">Battery Solutions</span> at MEET
            </h2>
          }
        />
        <section className="mt-10 mb-20">
          <Brochure
            img={"/battery/brochure.png"}
            title={
              <h2 className="text-3xl mb-3 font-rubik">
                <span className="text-primary">Smart Energy</span> Storage
                Batteries for Everyday Performance
              </h2>
            }
            desc={
              "We offer advanced battery solutions that ensure consistent performance, long life, and dependable energy storage. Built to support critical operations, our batteries enable efficient power management across industries."
            }
            btn={""}
          />
        </section>
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
          description="MEET delivers advanced power and automotive batteries that meet international quality and performance benchmarks. From reliable energy storage systems to high-efficiency backup solutions, the portfolio supports automotive, industrial, and commercial power demands. Each product is developed with durability, safety, and real-world performance in focus, enabling global brands to maintain reliability across distribution, installation, and end-use environments"
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Manufactured using advanced cell technology, high-grade materials, and controlled production processes to ensure long-term durability, safety, and dependable performance across automotive, industrial, and energy storage applications.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A comprehensive portfolio of automotive, industrial, and backup power batteries designed to meet diverse capacity, voltage, and performance requirements across multiple sectors and operating conditions.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Streamlined sourcing, coordinated production, and structured distribution systems that ensure consistent availability, scalable volumes, and strong long-term business partnerships.",
            },
            {
              icon: Globe,
              title: "Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality standards, safety compliance requirements, and the commercial expectations of established brands and distributors.",
            },
          ]}
        />
      </div>
      <div className="mt-14 lg:mt-14">
        <CTASection />
      </div>
    </>
  );
}
