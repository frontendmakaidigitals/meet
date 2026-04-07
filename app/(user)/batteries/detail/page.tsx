"use client";
import Hero from "../../sections/sub-apparel/hero";
import Products from "../../sections/sub-apparel/products";
import { Download } from "lucide-react";
import Link from "next/link";
import CTASection from "@/app/(user)/sections/cta";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
/* ===============================
   AUTOMOTIVE BATTERIES
================================ */
const automotiveProducts = [
  {
    label: "AUTOMOTIVE BATTERIES",
    subLabel:
      "Automotive Batteries for Two Wheelers, Four Wheelers, and Electric Mobility",
    desc: (
      <>
        Automotive batteries supplied by Middle East Engineering Technologies
        are designed to deliver reliable starting power and stable performance
        for daily mobility needs. We support both conventional vehicles and
        electric mobility applications through trusted brands.
        <br />
        <br />
        Middle East Engineering Technologies supplies high-quality batteries of
        brands like <strong>King Kong, Lucas, and Autolite</strong>. Our
        batteries are developed to meet international quality standards and are
        used across a wide range of products.
      </>
    ),
    types: [
      {
        id: 1,
        name: "Two Wheeler Batteries",
        usage:
          "Compact and durable batteries designed for motorcycles and scooters, offering reliable starting power and long service life.",
        img: "/battery/details/two-wheeler.jpg",
      },
      {
        id: 2,
        name: "Four Wheeler Batteries",
        usage:
          "Automotive batteries designed for passenger cars, delivering consistent cranking power and dependable performance.",
        img: "/battery/details/four-wheeler.jpg",
      },
      {
        id: 3,
        name: "E-Rickshaw Batteries",
        usage:
          "Deep-cycle batteries designed for electric rickshaws, supporting frequent charging and extended daily use.",
        img: "/battery/details/e-rickshaw.jpg",
      },
    ],
    brochure: null,
    images: [],
    showCallbackForm: true,
  },
];

/* ===============================
   ENERGY STORAGE – LEAD ACID
================================ */
const leadAcidProducts = [
  {
    label: "ENERGY STORAGE – LEAD ACID",
    subLabel: "Reliable backup power and renewable energy storage solutions",
    desc: (
      <>
        MEET supplies lead-acid energy storage batteries designed for backup
        power and renewable energy systems. These batteries are known for their
        robustness, cost efficiency, and proven performance.
        <br />
        <br />
        Middle East Engineering Technologies supplies high-quality batteries of
        brands like <strong>King Kong</strong>. Our batteries are developed to
        meet international quality standards and are used across a wide range of
        products.
      </>
    ),
    types: [
      {
        id: 1,
        name: "Inverter Tubular Batteries",
        usage:
          "Designed for home and commercial inverter systems, offering long backup time and stable discharge.",
        img: "/battery/details/inverter-tubular.jpg",
      },
      {
        id: 2,
        name: "Solar Tubular Batteries",
        usage:
          "Built for solar applications, supporting deep discharge cycles and consistent energy storage.",
        img: "/battery/details/solar-tubular.jpg",
      },
    ],
    brochure: null,
    images: [],
    showCallbackForm: true,
  },
];

/* ===============================
   ENERGY STORAGE – LITHIUM
================================ */
const lithiumProducts = [
  {
    label: "ENERGY STORAGE – LITHIUM",
    subLabel: "High-efficiency lithium energy storage solutions",
    desc: (
      <>
        Lithium energy storage solutions supplied by MEET offer compact design,
        high efficiency, and modern power management. These systems are suitable
        for advanced energy storage and smart power applications.
        <br />
        <br />
        Middle East Engineering Technologies supplies high-quality lithium
        batteries of brands like <strong>King Kong</strong>, developed to meet
        international quality standards.
      </>
    ),
    types: [
      {
        id: 1,
        name: "Lithium Inverter Batteries",
        usage:
          "High-efficiency lithium batteries offering faster charging and longer life cycles.",
        img: "/battery/details/lithum.jpg",
      },
      {
        id: 2,
        name: "Wall Mounted Energy Storage Systems",
        usage:
          "Space-saving wall-mounted units designed for residential and commercial energy storage.",
        img: "/battery/details/wall-mounted-2.png",
      },
      {
        id: 3,
        name: "Rack Mounted Energy Storage Systems",
        usage:
          "Scalable rack-mounted systems designed for industrial and large-scale installations.",
        img: "/battery/details/rack-mounted.png",
      },
    ],
    brochure: null,
    images: [],
    showCallbackForm: true,
  },
];

const page = () => {
  return (
    <div>
      {/* Page Hero */}
      <Hero
        title="BATTERIES & ENERGY STORAGE"
        desc="Automotive and energy storage solutions for mobility, backup power, and renewable systems."
        image="/battery/details/banner-2.png"
        background="/battery/details/background.jpg"
        partnerLogo={["/partner-logo/Lucas.png", "/partner-logo/King-kong.png"]}
      />

      {/* Automotive Batteries */}
      <div className="mt-16 space-y-10">
        <section className="">
          <div className="mb-10 text-center space-y-2 container max-w-4xl">
            <h2 className="text-4xl   font-rubik">
              <span className="text-primary">AUTOMOTIVE</span> BATTERIES
            </h2>
            <p className="max-w-2xl mx-auto">
              {" "}
              Battery solutions are built for durability and dependable output,
              making them suitable for daily driving, fleet operations, and
              demanding mobility environments
            </p>
          </div>
          <Products num={1} data={automotiveProducts} />
        </section>

        {/* Lead Acid Energy Storage */}
        <section className="">
          <div className="mb-10 text-center space-y-2 container max-w-4xl">
            <h2 className="text-4xl   font-rubik">
              <span className="text-primary">LEAD ACID </span> ENERGY STORAGE
            </h2>
            <p className="max-w-2xl mx-auto">
              {" "}
              battery solutions are built for durability and dependable output,
              making them suitable for daily driving, fleet operations, and
              demanding mobility environments
            </p>
          </div>
          <Products num={2} data={leadAcidProducts} />
        </section>

        {/* Lithium Energy Storage */}
        <section className=" ">
          <div className="mb-10 text-center space-y-2 container max-w-4xl">
            <h2 className="text-4xl   font-rubik">
              <span className="text-primary">LITHIUM ENERGY </span>
              STORAGE
            </h2>
            <p className="max-w-2xl mx-auto">
              {" "}
              Battery solutions are built for durability and dependable output,
              making them suitable for daily driving, fleet operations, and
              demanding mobility environments
            </p>
          </div>
          <Products num={3} data={lithiumProducts} />
        </section>
      </div>

      <section className="mt-10 mb-20">
        <div className=" bg-[#FCFAF5] py-16">
          <div className="container">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12">
              <div className="h-[400px] bg-white border-gray-300 overflow-hidden rounded-xl border ">
                <img
                  src={"/battery/details/brochure.png"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl mb-3 font-rubik">
                  <span className="text-primary">Smart Energy</span> Storage
                  Batteries for Everyday Performance
                </h2>
                <p>
                  We offer advanced battery solutions that ensure consistent
                  performance, long life, and dependable energy storage. Built
                  to support critical operations, our batteries enable efficient
                  power management across industries.
                </p>

                <div className="lg:flex-row flex-col  flex lg:items-center gap-2 lg:gap-4 ">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="px-5 w-fit hover:bg-primary/80 mt-5 flex items-center gap-2 py-2 bg-primary text-white">
                        <Download />
                        King Kong Brochures
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      {[
                        {
                          label: "King Kong E-Rickshaw Battery Brochure",
                          link: "King Kong E-Rickshaw Battery Brochure.pdf",
                        },
                        {
                          label: "King Kong EV Motorbikes & Scooters",
                          link: "King Kong EV Motorbikes-and-Scooters.pdf",
                        },
                        {
                          label: "King Kong Four Wheeler Battery Brochure",
                          link: "King Kong Four Wheeler Battery Brochure.pdf",
                        },
                        {
                          label:
                            "King Kong Inverter Tall Tubular Battery Brochure",
                          link: "King Kong Inverter Tall Tubular Battery Brochure.pdf",
                        },
                        {
                          label:
                            "King Kong Lithium Tall Tubular Battery Brochure",
                          link: "King Kong Lithium Tall Tubular Battery Brochure.pdf",
                        },
                        {
                          label: "King Kong Solar Tubular Battery Brochure",
                          link: "King Kong Solar Tubular Battery Brochure.pdf",
                        },
                        {
                          label: "King Kong Trucks & Busses Battery Brochure",
                          link: "King Kong Trucks-and-Busses Battery Brochure.pdf",
                        },
                        {
                          label: "King Kong Two Wheeler Battery Brochure",
                          link: "King Kong Two Wheeler Battery Brochure.pdf",
                        },
                        {
                          label:
                            "King Kong Wall & Rack Mounted Lithium Battery Brochure",
                          link: "King Kong Wall-and-Rack Mounted Lithium Battery Brochure.pdf",
                        },
                      ].map((item, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          className="hover:bg-primary/20"
                        >
                          <Link
                            href={`/battery/details/king-kong//${item.link}`}
                            target="_blank"
                            className="w-full"
                          >
                            <button className="flex   items-center text-gray-800 gap-2">
                              <Download />
                              {item.label}
                            </button>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href={
                      "/battery/details/Lucas Four Wheeler Battery Brochure.pdf"
                    }
                    target="_blank"
                  >
                    <button className="px-5 mt-5 flex hover:bg-primary/80 items-center gap-2 py-2 bg-primary text-white">
                      <Download />
                      Lucas Brochure
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default page;
