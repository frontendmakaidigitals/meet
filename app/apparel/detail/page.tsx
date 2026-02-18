import React from "react";
import Hero from "../../sections/sub-apparel/hero";
import Products from "../../sections/sub-apparel/products";
import Brochure from "@/app/sections/brochure";
import Contact from "@/app/sections/home/contact";
import CTASection from "@/app/sections/cta";
const products = [
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

  {
    label: "COOLING JACKETS",
    subLabel: "Advanced cooling wear for hot working environments",
    desc: (
      <>
        Middle East Engineering Technologies (MEET) supplies selected Japanese
        cooling jackets designed to help reduce heat stress and improve comfort
        in hot working environments.
        <br />
        <br />
        These cooling wear products are suitable for industrial, logistics, and
        outdoor work use and are supplied by MEET to B2B clients such as SEFT
        Technologies, Japan.
      </>
    ),
    types: [
      {
        id: 1,
        name: "KU91830 - Cooling Jacket",
        usage:
          "Lightweight construction with breathable design to help reduce heat buildup during extended wear.",
        img: "/apparel/detail/buckels/KU91830.jpg",
      },
      {
        id: 2,
        name: "EK3731 - Fan-Assisted Cooling Jacket",
        usage:
          "Integrated fan system that enhances airflow to actively support body cooling.",
        img: "/apparel/detail/buckels/EK3731.jpg",
      },
      {
        id: 3,
        name: "KU92514 - High-Visibility Cooling Vest",
        usage:
          "High-visibility cooling vest combining safety compliance with heat-relief performance.",
        img: "/apparel/detail/buckels/KU92514.jpg",
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
      />
      <Products data={products} />
      <section className="mt-10 mb-20">
        <Brochure
          title={"Smart Apparel for Everyday Performance"}
          desc={
            "Our apparel range is designed for durability, comfort, and practical use. Crafted with quality materials, it supports demanding work environments while maintaining a modern, professional look suitable for daily operations."
          }
          btn={""}
        />
      </section>

      <CTASection />
    </div>
  );
};

export default page;
