import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import About from "../sections/apparel/about";
import OurPartners from "../sections/apparel/our-partners";
import Contact from "../sections/home/contact";
import CTASection from "../sections/cta";
import {
  Store, // for Retail and private label distribution
  Gift, // for Corporate gifting and promotions
  Plane,
  Briefcase,
  Package,
  ShoppingCart,
} from "lucide-react";
export default function EngineeringTechnologiesPage() {
  const products = [
    {
      img: "/ev/scooter.png",
      label: <h3 className="text-2xl font-rubik"> EV Scooters </h3>,
      desc: " EV scooters are made for easy, everyday movement, especially in cities.",
      link: "/electric-vehicle/detail",
    },
    {
      img: "/ev/bike.png",
      label: <h3 className="text-2xl font-rubik">EV Bikes</h3>,
      desc: " EV bikes are designed for longer distances and stronger performance.",
      link: "/electric-vehicle/detail",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="EV Scooters & EV Bikes by King Kong"
        desc="At Middle East Engineering Technologies.  We help businesses around the world move towards cleaner and smarter transportation. We supply electric scooters and electric bikes under the King Kong brand, working closely with experienced manufacturers to deliver reliable EV solutions for global markets"
        image="/ev/banner.png"
      />

      <div className="relative lg:pb-20">
        {/* Background Accent */}
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />

        {/* Product Range */}
        <Supplies
          link={"/electric-vehicle/detail"}
          heading="Our Electric Vehicle Products"
          products={products}
        />

        {/* Who is this for */}
        <Industries
          desc="Our electronics portfolio supports brands, distributors, and project buyers looking for practical, well-built devices that meet daily consumer and commercial needs."
          items={[
            {
              label: "Retail and private label distribution",
              icon: Store,
            },
            {
              label: "Corporate gifting and promotions",
              icon: Gift,
            },
            {
              label: "Travel and mobility use",
              icon: Plane,
            },
            {
              label: "Office and everyday personal use",
              icon: Briefcase,
            },
            {
              label: "Project-based and bulk supply needs",
              icon: Package,
            },
            {
              label: "E-commerce and online marketplace sales",
              icon: ShoppingCart,
            },
          ]}
        />

        {/* Why MEET */}
        <About
          title="Why Businesses Choose MEET"
          highlight="MEET"
          image="/apparel/team.jpg"
          items={[
            {
              label: "Trusted Quality",
              desc: "We work with established manufacturers to ensure products meet international quality standards and performance expectations.",
            },
            {
              label: "Wide Variety",
              desc: "Our electronics range supports multiple categories and specifications, allowing flexibility for different markets and project needs.",
            },
            {
              label: "Reliable Supply",
              desc: "MEET manages sourcing, coordination, and delivery to support consistent and scalable B2B supply requirements.",
            },
          ]}
        />

        {/* Partners */}
        <OurPartners
          desc={[
            "Middle East Engineering Technologies (MEET) collaborates with experienced manufacturing partners to deliver reliable personal electronics for global B2B markets.",
            "These partnerships support quality consistency, scalable supply, and long-term business relationships.",
          ]}
          partners={[
            {
              image: "/partners/nifco.jpg",
              alt: "NIFCO Japan",
              className: "row-span-2 col-span-2",
            },
            {
              image: "/partners/seft.jpg",
              alt: "SEFT Technologies",
            },
            {
              image: "/partners/manufacturing.png",
              alt: "Manufacturing Partner",
            },
            {
              image: "/partners/global-business.jpg",
              alt: "Global Partner",
              className: "col-span-2",
            },
          ]}
        />
      </div>
      <CTASection />
    </>
  );
}
