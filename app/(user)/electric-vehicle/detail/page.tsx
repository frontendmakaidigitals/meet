import Image from "next/image";
import Hero from "../../sections/sub-apparel/hero";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
} from "lucide-react";
import Brochure from "@/app/(user)/sections/brochure";
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
        partnerLogo={["/partner-logo/King-kong.png", "/partner-logo/Lucas.png"]}
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
        <Brochure
          img={"/ev/details/brochure-2.jpeg"}
          title={
            <h2 className="text-3xl font-rubik mb-5">
              <span className="text-primary">Smart Electronic Vehicle</span> for{" "}
              Everyday Performance
            </h2>
          }
          desc={
            <>
              Explore engineered electric scooters built to deliver dependable
              last-mile transport, low operating costs, and consistent
              performance across commercial and corporate fleets. Designed for
              frequent use in urban environments, these scooters combine
              durability, ease of handling, and practical design for reliable
              daily operation.
              <br />
              <br />
              The brochure includes product specifications, battery performance,
              charging guidance, load capacity, and operational tips to help you
              choose the right EV scooter solutions for B2B and commercial
              mobility projects.
            </>
          }
          btn={""}
        />
      </section>
      <CTASection />
    </div>
  );
};

export default page;
