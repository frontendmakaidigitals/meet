import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import WhyChooseUs from "../sections/apparel/about";
import CTASection from "../sections/cta";
import { Award, Layers, Building2, Globe } from "lucide-react";
export default function EngineeringTechnologiesPage() {
  const products = [
    {
      img: "/ev/scooter.png",
      label: <h3 className="text-3xl font-rubik"> EV Scooters </h3>,
      desc: " Efficient electric scooters developed for last-mile delivery, corporate fleets, and commercial mobility solutions. Designed for reliability, ease of use, and practical daily operation, these scooters offer consistent performance, low operating costs, and environmentally friendly transport. Built to handle frequent use without compromising safety, comfort, or efficiency.",
      link: "/electric-vehicle/detail",
      cardBg: "bg-linear-to-b from-[#FFFDF7] to-[#FFFFFF]",
    },
    {
      img: "/ev/bike.png",
      label: <h3 className="text-3xl font-rubik">EV Bikes</h3>,
      desc: " High-performance electric bikes designed for reliable urban commuting, fleet operations, and commercial mobility. Engineered for B2B partners, delivery services, and corporate fleets, these bikes combine durable construction, efficient battery performance, and low maintenance requirements. Ideal for daily use in demanding environments while supporting cleaner and cost-effective transportation.",

      link: "/electric-vehicle/detail",
      cardBg: "bg-linear-to-b from-[#FFFDF7] to-[#FFFFFF]",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        dark
        titleText=""
        title={
          <h1 className="text-4xl font-rubik lg:text-5xl font-[400] text-gray-100 leading-tight tracking-tight">
            EV Scooters{" "}
            <span className="font-allura text-5xl lg:text-6xl">&</span> EV Bikes
            by King Kong
          </h1>
        }
        desc="Middle East Engineering Technologies delivers reliable electric scooters and bikes to global fleet operators, commercial partners, and B2B mobility clients."
        image="/ev/banner-4.png"
        background="/ev/background.jpg"
      />

      <div className="relative lg:pb-12">
        {/* Product Range */}
        <Supplies
          link={"/electric-vehicle/detail"}
          heading={
            <h2 className="text-4xl font-rubik text-center">
              Our <span className="text-blue-500">Electric Vehicle </span>{" "}
              Products
            </h2>
          }
          products={products}
        />

        {/* Who is this for */}
        <Industries
          image="/apparel/industry.jpg"
          desc="Our electric scooters and bikes are supplied for many real-world uses, including:
"
          items={[
            {
              label: "Urban commuting solutions",
            },
            {
              label: "Delivery and logistics companies",
            },
            {
              label: "Corporate and industrial facilities",
            },
            {
              label: "Residential communities and campuses",
            },
            {
              label: "Shared and rental mobility services",
            },
            {
              label: "Government and institutional projects",
            },
          ]}
        />

        {/* Why MEET */}
        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET supplies high-performance electric bikes and scooters that meet international quality and reliability standards. From efficient battery-powered mobility solutions to durable, low-maintenance vehicles, the portfolio supports both commercial operations and urban transport needs. Every product is selected with durability, consistency, and real-world performance in mind, helping global partners maintain reliability across fleet and daily-use applications."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Built with carefully selected components and strict quality standards, ensuring long-term durability and dependable performance across demanding urban, commercial, and industrial mobility environments.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A diverse range covering buckles, fasteners, trims, and cooling jackets.A diverse range covering electric bikes and scooters designed to meet both functional performance and operational efficiency requirements across multiple mobility segments.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and long-term partnerships with corporate, fleet, and commercial clients.",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience across international markets ensures alignment with quality expectations, compliance standards, and commercial requirements of established fleet operators and mobility partners.",
            },
          ]}
        />

        {/* Partners */}
      </div>
      <div className="mt-16 lg:mt-0">
        <CTASection />
      </div>
    </>
  );
}
