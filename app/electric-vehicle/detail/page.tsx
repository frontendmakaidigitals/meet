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
import Brochure from "@/app/sections/brochure";
import { BadgeCheck } from "lucide-react";
import CTASection from "@/app/sections/cta";
const page = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Partnered with globally recognized manufacturers like NIFCO Japan and SEFT Technologies",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Years of experience in B2B trading and solutions across multiple industries",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Smooth support and claim settlement with responsive customer service",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Cost-effective B2B pricing with bulk supply options",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Strong international partnerships ensuring reliable supply chains",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description:
        "Rigorous quality standards and consistent product specifications",
    },
  ];
  return (
    <div>
      <Hero
        title="EV Mobility Solutions"
        desc="Electric bikes and scooters designed for clean, efficient, and reliable everyday transportation."
        image="/ev/details/banner.png"
      />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-baskervville mb-4">
                EV Bikes
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our EV bikes are built for people and businesses that need
                strong, clean, and reliable transportation. They are a smart
                choice for daily use while helping reduce pollution and fuel
                dependency.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
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
            <div className="h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/ev/details/bike.png"
                alt="EV Bike"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* EV SCOOTERS SECTION */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image (Reversed Order) */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Main Product Image */}
            <div className="h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg">
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
              <h2 className="text-4xl md:text-5xl font-baskervville mb-4">
                EV Scooters
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our EV scooters are designed for easy movement and everyday
                tasks. They are simple to use, cost-effective, and better for
                the environment.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
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

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-baskervville mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Middle East Engineering Technologies (MEET) is your trusted
              partner for high-quality industrial and commercial solutions. We
              bridge the gap between global innovation and regional business
              needs.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-full rounded-3xl overflow-hidden shadow order-2 lg:order-1">
              <Image
                src="/ev/details/why-choose.png"
                fill
                alt="MEET - Middle East Engineering Technologies team and facilities"
                className="object-cover"
              />
            </div>

            {/* Right - Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-20">
        <Brochure
          title={"Driving the Future of Electric Mobility"}
          desc={
            "Our electric mobility solutions support cleaner transportation through reliable, energy-efficient vehicles and infrastructure. Designed to reduce emissions and operating costs, they help businesses move toward a more sustainable future."
          }
          btn={""}
        />
      </section>
      <CTASection />
    </div>
  );
};

export default page;
