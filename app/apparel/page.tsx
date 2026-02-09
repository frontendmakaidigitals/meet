import Hero from "../sections/apparel/hero";
import Industries from "../sections/apparel/industries";
import Supplies from "../sections/apparel/supplies";
import About from "../sections/apparel/about";
import OurPartners from "../sections/apparel/our-partners";
import { Zap, Shirt, Footprints, Backpack, ShieldCheck } from "lucide-react";
export default function AparaellPage() {
  const products = [
    {
      img: "/apparel/apparel.jpg",
      label: (
        <h3 className="text-2xl font-baskervville">
          Apparel & Footwear Accessories
        </h3>
      ),
      desc: "High-quality buckles, laces, and trims that improve fit, comfort, and durability across apparel and footwear products.",
      link: "",
    },
    {
      img: "/apparel/cooling-jacket.webp",
      label: <h3 className="text-2xl font-baskervville">Cooling Jackets</h3>,
      desc: "Lightweight air conditioned jackets designed to help regulate body temperature and keep wearers comfortable in demanding work or outdoor conditions.",
      link: "",
    },
  ];
  return (
    <>
      <Hero
        title="Apparel Accessories"
        desc="Middle East Engineering Technologies delivers trusted apparel components and advanced cooling jackets to global clothing brands, manufacturers, and B2B partners."
        image="/apparel/banner.jpg"
      />
      <div className="relative pb-20">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <Supplies
          link={"/apparel/detail"}
          products={products}
          heading="Our Supplies"
        />
        <Industries
          desc="Our apparel solutions include both functional components and cooling workwear designed to improve fit, safety, and comfort in demanding environments."
          items={[
            {
              label: "Outdoor and sportswear",
              icon: Zap,
            },
            {
              label: "Fashion Garments",
              icon: Shirt,
            },
            {
              label: "Footwear",
              icon: Footprints,
            },
            {
              label: "Bags and Backpacks",
              icon: Backpack,
            },
            {
              label: "Safety and Working Clothes",
              icon: ShieldCheck,
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
    </>
  );
}
