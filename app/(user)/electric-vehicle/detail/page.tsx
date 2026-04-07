"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Download } from "lucide-react";
import Hero from "../../sections/sub-apparel/hero";

import { BadgeCheck } from "lucide-react";

import CTASection from "@/app/(user)/sections/cta";
const page = () => {
  return (
    <div>
      <Hero
        title="EV Mobility Solutions"
        desc="Electric bikes and scooters designed for clean, efficient, and reliable everyday transportation."
        image="/ev/details/banner.png"
        background="/ev/details/background.jpg"
        partnerLogo={["/partner-logo/King-kong.png"]}
      />
      <section className="container mx-auto px-4 mt-10 lg:mt-0 py-8 md:py-24">
        <div className="grid border border-gray-300 rounded-xl p-8 bg-gradient-to-b from-amber-50 to-white grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className=" lg:space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-rubik mb-4">EV Bikes</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our EV bikes are built for people and businesses that need
                strong, clean, and reliable transportation. They are a smart
                choice for daily use while helping reduce pollution and fuel
                dependency.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Electric power with smooth performance",
                  "Strong and durable structure",
                  "Comfortable for longer rides",
                  "Lower maintenance than fuel bikes",
                  "Supports cleaner cities and air",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <BadgeCheck className="w-6 h-6 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="h-[300px] lg:h-[500px]  rounded-3xl overflow-hidden">
              <img
                src="/ev/details/bike.png"
                alt="EV Bike"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* EV SCOOTERS SECTION */}
      <section className="container mx-auto px-4 py-8 lg:py-0 ">
        <div className="grid border border-gray-300 rounded-xl p-8 bg-gradient-to-b from-blue-50 to-white grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image (Reversed Order) */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Main Product Image */}
            <div className="h-[300px] lg:h-[500px]  overflow-hidden">
              <img
                src="/ev/details/scooter.png"
                alt="EV Scooter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - Content (Reversed Order) */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-rubik mb-4">EV Scooters</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our EV scooters are designed for easy movement and everyday
                tasks. They are simple to use, cost-effective, and better for
                the environment.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Quiet and clean electric motor",
                  "Easy handling and compact design",
                  "Perfect for short distances",
                  "Low running and maintenance costs",
                  "Environment-friendly transportation",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <BadgeCheck className="w-6 h-6 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-20">
        <div className=" bg-[#FCFAF5] py-16">
          <div className="container">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12">
              <div className="h-[400px] bg-white border-gray-300 overflow-hidden rounded-xl border ">
                <img
                  src={"/ev/details/brochure-2.jpeg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl mb-3 font-rubik">
                  <span className="text-primary">Electric Vehicles</span> for
                  Smart & Reliable Mobility
                </h2>

                <p>
                  We offer innovative electric vehicle solutions designed for
                  efficient, eco-friendly, and reliable transportation. Built to
                  meet the demands of modern mobility, our EVs deliver smooth
                  performance, reduced emissions, and cost-effective
                  operation—making them ideal for both personal and commercial
                  use.
                </p>

                <div className="lg:flex-row flex-col flex lg:items-center gap-2 lg:gap-4">
                  <Link
                    href="/battery/details/king-kong/King Kong EV Motorbikes -andScooters.pdf"
                    target="_blank"
                  >
                    <button className="px-5 mt-5 flex hover:bg-primary/80 items-center gap-2 py-2 bg-primary text-white">
                      <Download />
                      King Kong EV Brochure
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
