import Hero from "../sections/apparel/hero";
import About from "../sections/apparel/about";
import Image from "next/image";
import Brochure from "../sections/brochure";
import OurPartners from "../sections/apparel/our-partners";
import Contact from "../sections/home/contact";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  return (
    <>
      <Hero
        title="Travel Bags & Luggage"
        desc="At Middle East Engineering Technologies , we supply travel bags and luggage designed for durability, functionality, and everyday travel needs. We work closely with B2B partners to support consistent quality and long-term supply across global markets. "
        image="/travel-bags/banner-2.png"
      />
      <div className="relative pb-20">
        <div className="lg:w-md  h-full absolute bg-[#FFFAEC] -z-10" />
        <div className="container grid grid-cols-1 items-center gap-9 lg:grid-cols-2 py-20">
          <div>
            <h2 className="text-4xl font-rubik">
              {" "}
              Our Travel Bags & Luggage Product Range
            </h2>
            <p className="mt-5 mb-3">
              MEET supply travel bags designed for personal travel, retail
              distribution, and project-based requirements.
            </p>

            <p>
              Durable travel bags designed for comfort, storage efficiency, and
              repeated use. Suitable for short trips, daily travel, and general
              luggage needs, with a focus on strong materials and functional
              design.
            </p>
          </div>

          <div className="relative h-[350px]">
            <Image
              fill
              src={"/travel-bags/trave-bags.webp"}
              className="object-contain"
              alt={""}
            />
          </div>
        </div>

        <section className="mt-10 mb-20">
          <Brochure
            title={"Travel Solutions Built for Every Journey"}
            desc={
              "Our travel bags are designed for durability, functionality, and style. With smart storage and robust construction, they support both business and personal travel with ease and reliability."
            }
            btn={""}
          />
        </section>

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
