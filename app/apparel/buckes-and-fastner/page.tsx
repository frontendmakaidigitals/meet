import React from "react";
import Hero from "../../sections/sub-apparel/hero";
import Products from "../../sections/sub-apparel/products";
import Brochure from "@/app/sections/brochure";

import CTASection from "@/app/sections/cta";
import Image from "next/image";

const buckles = [
  {
    label: "BUCKLES",
    subLabel: "Secure fastening solutions for apparel and gear",
    desc: (
      <>
        Middle East Engineering Technologies (MEET) supplies high-quality
        buckles to global companies like NIFCO Japan, a globally recognised
        leader in fastening technology. Our buckles are developed to meet
        international quality standards and are used across a wide range of
        apparel and performance products.
        <br />
        <br />
        Buckles are used to connect straps, adjust fit, and allow quick opening
        and closing in apparel, footwear, bags, and gear. They must be strong,
        easy to use, and reliable even after repeated use.
        <br />
        <br />
        MEET’s buckles are lightweight and durable, making them suitable for
        fashion, outdoor wear, workwear, and performance products. We support
        B2B requirements, including bulk supply, consistent specifications, and
        long-term production needs.
      </>
    ),
    types: [
      {
        id: 1,
        name: "Side Release Buckles",
        usage: "Used in jackets, backpacks, belts, and outdoor sportswear.",
        img: "/apparel/new/Side-Release-Buckles.png",
      },
      {
        id: 2,
        name: "Front Release Buckles",
        usage:
          "Used in safety wear, utility clothing, and industrial workwear belts.",
        img: "/apparel/detail/buckels/front-release-buckle.jpeg",
      },
      {
        id: 3,
        name: "Quick Release Buckles",
        usage: "Used in protective clothing, emergency gear, and outdoor gear.",
        img: "/apparel/detail/buckels/quick-release-buckle.jpg",
      },
      {
        id: 4,
        name: "Slide Buckles",
        usage:
          "Used in clothing straps, bags, and adjustable apparel features.",
        img: "/apparel/detail/buckels/slide-buckles.jpg",
      },
      {
        id: 5,
        name: "Cam Buckles",
        usage: "Used in utility belts, load-holding straps, and outdoor gear.",
        img: "/apparel/detail/buckels/cam-buckle.jpg",
      },
      {
        id: 6,
        name: "Tape Adjusters",
        usage: "Used in jackets, backpacks, and performance apparel.",
        img: "/apparel/detail/buckels/tape-adjuster.jpg",
      },
      {
        id: 7,
        name: "Tape Clips / Belt Clips",
        usage: "Used in belts, workwear, and utility garments.",
        img: "/apparel/detail/buckels/belt-buckle.webp",
      },
      {
        id: 8,
        name: "Lace Guide Buckles",
        usage: "Used in footwear, sports apparel, and technical jackets.",
        img: "/apparel/detail/buckels/lace-guide.jpg",
      },
      {
        id: 9,
        name: "Footwear Buckle & Lace Lock Systems",
        usage:
          "Used in sports shoes, outdoor footwear, and performance footwear.",
        img: "/apparel/detail/buckels/footwear-buckle.jpg",
      },
    ],
    brochure: null, // space for download brochure
    images: [], // reference images
    showCallbackForm: true,
  },
];
const fasteners = [
  {
    label: "FASTENERS",
    subLabel: "Small components that control cords, laces, and attachments",
    desc: (
      <>
        Middle East Engineering Technologies (MEET) also supplies fasteners to
        NIFCO Japan for use in apparel, footwear, and accessory applications.
        These components play a critical role in the function, comfort, and
        finish of everyday and technical products.
        <br />
        <br />
        Fasteners are used to lock cords, guide laces, finish edges, or attach
        small components. Though compact in size, they greatly improve ease of
        use, appearance, and overall product performance.
        <br />
        <br />
        Our fasteners are designed for high-volume B2B production, offering
        reliable quality, precise sizing, and compatibility with a wide range of
        apparel and footwear designs.
      </>
    ),
    types: [
      {
        id: 1,
        name: "Cord Locks / Cord Stoppers",
        usage: "Used in hoodies, jackets, and bags.",
        img: "/apparel/new/Cord-Lock-Lace.jpg",
      },
      {
        id: 2,
        name: "Lace Locks",
        usage: "Used in footwear, sportswear, and outdoor apparel.",
        img: "/apparel/new/Lace-Lock.png",
      },
      {
        id: 3,
        name: "Speed Lacing Locks / Cord Pulley Systems",
        usage: "Used in performance shoes, technical wear, and outdoor gear.",
        img: "/apparel/detail/buckels/speed-lacing-locks.jpg",
      },
      {
        id: 4,
        name: "Cord Ends & Tape Ends",
        usage: "Used in jackets, bags, and drawstring apparel.",
        img: "/apparel/detail/buckels/cord-ends.webp",
      },
      {
        id: 5,
        name: "Lace Hooks & Hooks",
        usage: "Used in footwear, jackets, and utility wear.",
        img: "/apparel/detail/buckels/lace-hooks.gif",
      },
      {
        id: 6,
        name: "Rings & Eyelets",
        usage: "Used in apparel, bags, and accessories.",
        img: "/apparel/detail/buckels/eyelets.jpg",
      },
      {
        id: 7,
        name: "Snaps & Small Fasteners",
        usage: "Used in clothing panels, accessories, and light garments.",
        img: "/apparel/detail/buckels/snaps.jpg",
      },
      {
        id: 8,
        name: "GN Series & Special Fasteners",
        usage:
          "Used in custom designs, technical apparel, and special applications.",
        img: "/apparel/detail/buckels/special-fastners.jpg",
      },
    ],
    brochure: null,
    images: [],
    showCallbackForm: true,
  },
];

interface types {
  id: number;
  name: string;
  usage: string;
  img: string;
}
export type Product = {
  label: string;
  subLabel: string;
  desc: React.ReactNode;
  types: types[];
  brochure: string | null;
  images: string[];
};
const page = () => {
  return (
    <div>
      <Hero
        title="Buckles & Fasteners"
        desc="Secure fastening solutions for apparel and gear"
        image="/apparel/detail/banner.jpg"
        background="/apparel/detail/apparel-bg.jpg"
        partnerLogo={["/partner-logo/Nifco-Japan.png"]}
      />
      <section className="space-y-3 container mt-14  font-inter text-lg text-center">
        <h3>
          Middle East Engineering Technologies{" "}
          <span className="text-primary">
            supplies high-quality buckles to global companies{" "}
          </span>{" "}
          like NIFCO Japan, a globally recognised leader in fastening
          technology. Our buckles are developed to meet international quality
          standards and are used across a wide range of apparel and performance
          products.
          <br />
          Buckles are used to connect straps, adjust fit, and allow quick
          opening and closing in apparel, footwear, bags, and gear. They must be
          strong, easy to use, and reliable even after repeated use. Our buckles
          are <span className="text-primary">lightweight and durable</span>,
          making them suitable for fashion, outdoor wear, workwear, and
          performance products. We support B2B requirements, including bulk
          supply, consistent specifications, and long-term production needs.
        </h3>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-center  text-4xl font-rubik ">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-3">
              We supply a wide range of precision buckles designed for apparel,
              footwear, bags, and performance gear applications.
            </p>
          </div>
          {buckles.map((item, idx) => (
            <div key={idx} className="pb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2">
                {item.types.map((type, idx) => (
                  <div
                    key={idx}
                    className="group relative   rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-md border border-slate-200"
                  >
                    {/* Image Container */}
                    <div className="h-60  flex items-center justify-center p-2">
                      {type.img ? (
                        <img
                          src={type.img}
                          alt={type.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-lg" />
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {type.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container relative h-[300px] lg:h-[450px] overflow-hidden lg:rounded-xl">
          <Image
            src={"/apparel/fasteners.jpg"}
            alt={"fastner"}
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="space-y-3 container mt-10 mb-6 font-inter text-lg text-center">
        <h3>
          Middle East Engineering Technologies{" "}
          <span className="text-primary">
            supplies high-quality buckles to global companies{" "}
          </span>{" "}
          like NIFCO Japan, a globally recognised leader in fastening
          technology. Our buckles are developed to meet international quality
          standards and are used across a wide range of apparel and performance
          products.
          <br />
          Buckles are used to connect straps, adjust fit, and allow quick
          opening and closing in apparel, footwear, bags, and gear. They must be
          strong, easy to use, and reliable even after repeated use. Our buckles
          are <span className="text-primary">lightweight and durable</span>,
          making them suitable for fashion, outdoor wear, workwear, and
          performance products. We support B2B requirements, including bulk
          supply, consistent specifications, and long-term production needs.
        </h3>
      </section>
      <section className="pt-10">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-center  text-4xl font-rubik ">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-3">
              We supply a wide range of fastening systems designed to improve
              fit, function, and durability across apparel and industrial
              products.
            </p>
          </div>
          {fasteners.map((item, idx) => (
            <div key={idx} className=" ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2">
                {item.types.map((type, idx) => (
                  <div
                    key={idx}
                    className="group relative   rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-md border border-slate-200"
                  >
                    {/* Image Container */}
                    <div className="h-60  flex items-center justify-center p-2">
                      {type.img ? (
                        <img
                          src={type.img}
                          alt={type.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-lg" />
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {type.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:mt-10 mb-10">
        <Brochure
          title={
            <h2 className="text-3xl font-rubik mb-5">
              Smart Apparel for{" "}
              <span className="text-primary">Everyday Performance</span>
            </h2>
          }
          desc={
            <>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
              <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
              egestas, ac scelerisque ante pulvinar.
            </>
          }
          btn={"/apparel/NIFCO Apparel Range.pdf"}
        />
      </section>

      <CTASection />
    </div>
  );
};

export default page;
