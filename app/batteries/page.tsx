import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import About from "../sections/apparel/about";
import OurPartners from "../sections/apparel/our-partners";
import { Car, Bike, Zap, Home, Sun, Factory } from "lucide-react";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  const products = [
    {
      img: "/battery/automotive-battery.jpg",
      label: (
        <h3 className="text-2xl font-baskervville">Automotive Batteries</h3>
      ),
      desc: "High-performance batteries designed for two-wheelers, four-wheelers, and electric mobility application.",
      link: "",
    },
    {
      img: "/battery/lead-acid-battery.webp",
      label: (
        <h3 className="text-2xl font-baskervville">
          Energy Storage – Lead Acid
        </h3>
      ),
      desc: "Durable lead-acid battery solutions for inverters and solar systems requiring long life and stable output.",
      link: "",
    },
    {
      img: "/battery/lithium-ion.jpg",
      label: (
        <h3 className="text-2xl font-baskervville">Energy Storage – Lithium</h3>
      ),
      desc: "Modern lithium-based energy storage systems designed for compact design, high efficiency, and advanced power management.",
      link: "",
    },
  ];
  return (
    <>
      <Hero
        title="BATTERIES "
        desc="Middle East Engineering Technologies is a B2B supplier of automotive batteries and energy storage solutions, serving mobility, backup power, and renewable energy applications across regional and global markets."
        image="/battery/banner.jpg"
      />
      <div className="relative pb-20">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <Supplies
          link={"/batteries/detail"}
          products={products}
          heading="Battery Solutions at MEET"
        />
        <Industries
          desc="MEET’s battery solutions are used across multiple sectors where reliable power is essential:
"
          items={[
            {
              label: "Automotive and mobility",
              icon: Car,
            },
            {
              label: "Two-wheelers and cars",
              icon: Bike,
            },
            {
              label: "Electric rickshaws and EVs",
              icon: Zap,
            },
            {
              label: "Home and Commercial backup",
              icon: Home,
            },
            {
              label: "Solar energy systems",
              icon: Sun,
            },
            {
              label: "Industrial projects",
              icon: Factory,
            },
          ]}
        />
        <About
          title="Why Global Leaders Work with Us"
          highlight="Global Leaders"
          image="/apparel/team.jpg"
          items={[
            {
              label: "Trusted Quality",
              desc: "MEET supplies engineered buckles, fasteners, and cooling jackets that meet international quality and performance standards.",
            },
            {
              label: "Wide Product Coverage",
              desc: "From plastic buckles and fastening systems to industrial cooling jackets, our portfolio supports both apparel design and workwear performance needs.",
            },
            {
              label: "Reliable B2B Supply",
              desc: "We manage sourcing, quality checks, and delivery to support smooth production and long-term supply requirements.",
            },
          ]}
        />
        <OurPartners
          desc={[
            "Middle East Engineering Technologies (MEET) works with globally recognised companies such as NIFCO, Japan, and SEFT Technologies, Japan manufacturing leaders known for their innovation and technical expertise.",
            "These collaborations reflect our commitment to quality, consistency, and long-term B2B partnerships.",
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
