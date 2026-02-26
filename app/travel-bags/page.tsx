import Hero from "../sections/apparel/hero";
import Image from "next/image";
import Brochure from "../sections/brochure";
import WhyChooseUs from "../sections/apparel/about";
import { Award, Layers, Building2, Globe } from "lucide-react";
import CTASection from "../sections/cta";
export default function AparaellPage() {
  return (
    <>
      <Hero
        logo={["/partner-logo/YAMAGO.png"]}
        titleText=""
        title={
          <h1 className="text-4xl font-rubik lg:text-5xl font-[400] text-gray-800 leading-tight tracking-tight">
            Travel Bags
            <span className="font-allura text-5xl lg:text-6xl"> & </span>Luggage
          </h1>
        }
        desc="At Middle East Engineering Technologies , we supply travel bags and luggage designed for durability, functionality, and everyday travel needs. We work closely with B2B partners to support consistent quality and long-term supply across global markets."
        image={
          typeof window !== "undefined" && window.innerWidth >= 1024
            ? "/travel-bags/banner.png"
            : "/travel-bags/mobile-banner.png"
        }
        background="/travel-bags/background.jpg"
      />
      <section className="container text-lg font-inter text-center mt-20 mb-2 space-y-4">
        <p>
          Our travel bags and luggage are designed for{" "}
          <span className="text-primary font-semibold">durability</span>,{" "}
          <span className="text-primary font-semibold">functionality</span>, and{" "}
          <span className="text-primary font-semibold">
            long-lasting performance
          </span>{" "}
          across personal, corporate, and commercial travel. From backpacks to
          rolling suitcases, each product is built to withstand{" "}
          <span className="text-primary font-semibold">frequent use</span> while
          keeping belongings{" "}
          <span className="text-primary font-semibold">
            organized and protected
          </span>
          .
        </p>

        <p>
          Engineered for practical use in diverse conditions, these bags combine{" "}
          <span className="text-primary font-semibold">robust materials</span>,{" "}
          <span className="text-primary font-semibold">
            secure construction
          </span>
          , and{" "}
          <span className="text-primary font-semibold">
            user-friendly design
          </span>
          . They are ideal for{" "}
          <span className="text-primary font-semibold">business travel</span>,{" "}
          <span className="text-primary font-semibold">leisure</span>, and{" "}
          <span className="text-primary font-semibold">logistics</span>,
          providing{" "}
          <span className="text-primary font-semibold">reliable solutions</span>{" "}
          for{" "}
          <span className="text-primary font-semibold">
            daily and long-distance journeys
          </span>
          .
        </p>
      </section>
      <div className="relative lg:pb-20 ">
        <div className="container py-20">
          <div className="rounded-xl bg-linear-to-b from-amber-50 to-white grid grid-cols-1 items-center gap-9 lg:grid-cols-2 border border-gray-300 p-8">
            <div>
              <h2 className="text-4xl font-rubik">
                {" "}
                Our Travel <span className="text-primary">
                  Bags & Luggage
                </span>{" "}
                Product Range
              </h2>
              <p className="mt-5 mb-3">
                MEET supply travel bags designed for personal travel, retail
                distribution, and project-based requirements.
              </p>

              <p>
                Durable travel bags designed for comfort, storage efficiency,
                and repeated use. Suitable for short trips, daily travel, and
                general luggage needs, with a focus on strong materials and
                functional design.
              </p>
            </div>

            <div className="relative h-[260px] lg:h-[350px]">
              <Image
                fill
                src={"/travel-bags/trave-bags.png"}
                className="object-contain"
                alt={""}
              />
            </div>
          </div>
        </div>

        <section className="">
          <Brochure
            title={
              <h2 className="text-3xl font-rubik mb-5">
                <span className="text-primary">Smart Travel Bags</span> for
                Everyday Performance
              </h2>
            }
            desc={
              <>
                Discover travel bags and luggage designed to withstand long
                journeys while maintaining strength, organization, and
                functionality. Built for frequent travel and diverse
                environments, these products combine practical design with
                long-lasting performance.
                <br />
                <br />
                The brochure includes product specifications, material insights,
                storage capacity details, and travel-ready features to help you
                select the right luggage solutions for business or leisure.
              </>
            }
            btn={"/travel-bags/Yamago-Brochure.pdf"}
          />
        </section>

        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET supplies durable travel bags and luggage that meet international quality and performance standards. From business travel to long-distance journeys, our portfolio supports practical storage, easy portability, and lasting reliability. Every product is selected with strength, organization, and usability in mind, helping global partners maintain convenience and protection across travel needs."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Built with carefully selected materials and strict quality standards, ensuring long-lasting durability, reliable protection, and dependable performance across demanding travel conditions.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A diverse range covering backpacks, suitcases, and travel accessories designed to meet both functional and practical requirements across multiple segments.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and stable long-term partnerships for travel retailers and corporate clients.",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality expectations, compliance standards, and commercial requirements of established brands and businesses.",
            },
          ]}
        />
      </div>
      <div className="mt-16 lg:mt-0">
        <CTASection />
      </div>
    </>
  );
}
