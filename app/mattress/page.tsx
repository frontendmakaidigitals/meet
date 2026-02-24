import Hero from "../sections/apparel/hero";
import WhyChooseUs from "../sections/apparel/about";
import Brochure from "../sections/brochure";
import CTASection from "../sections/cta";
import { Award, Layers, Building2, Globe } from "lucide-react";
import Industries from "../sections/apparel/industries";
export default function AparaellPage() {
  return (
    <>
      <Hero
        logo={["/partner-logo/jackson-mattress.png"]}
        titleText=""
        title={
          <h1 className="text-4xl font-rubik md:text-5xl font-[400] text-black leading-tight tracking-tight">
            Sleep & <span className="font-allura text-6xl">Beddings</span>
          </h1>
        }
        desc="At Middle East Engineering Technologies , we supply sleep and bedding products designed to improve comfort, support, and everyday sleep quality. We work with B2B partners across global markets, focusing on reliable products and long-term supply relationships.
"
        image="/mattress/banner.png"
        background="/mattress/background.jpg"
      />

      <section className="text-center container font-inter mt-14 mb-2">
        <p>
          Our sleep and bedding solutions are designed to meet comfort
          expectations, durability standards, and operational needs across
          residential and commercial projects. From foam and spring mattresses
          to hybrid designs, each product is crafted to provide consistent
          support and long-term performance.
        </p>
        <p>
          Built for practical use in diverse environments, these mattresses
          combine ergonomic design, premium materials, and reliable comfort.
          They are ideal for homes, hotels, and commercial spaces, providing
          dependable solutions that support restful sleep and daily use.
        </p>
      </section>
      <div className="relative lg:pb-20">
        <div className="container mx-auto py-16 px-4">
          {/* Heading */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl text-center font-rubik mb-4">
              Our Sleep & Beddings Product Range
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              We supply American engineered mattresses designed to support body
              comfort, proper posture, and long-lasting performance, guarded
              with a warranty.
            </p>
          </div>

          {/* Content Row */}
          <div className="grid border bg-linear-to-b from-[#FFFDF7] to-[#FFFFFF] p-4 rounded-xl border-gray-400 md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[360px] rounded-lg overflow-hidden ">
              <img
                src="/mattress/mattresses.png"
                alt="Mattresses"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-inter font-semibold mb-4">
                Mattresses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality mattresses designed to improve sleep comfort and
                body support. Suitable for homes, hospitality projects, and bulk
                supply, with a focus on internal structure, material quality,
                and long-term shape retention
              </p>
            </div>

            {/* Right Image */}
          </div>
        </div>
        <Brochure
          title={
            <h2 className="text-3xl mb-3 font-rubik">
              <span className="text-primary">Smart Mattresses </span> for
              Everyday use
            </h2>
          }
          desc={
            <>
              Explore high-quality mattresses designed for lasting comfort,
              support, and durability across residential, hospitality, and
              commercial environments. Built with premium materials and
              ergonomic construction, they balance long-term usability with
              practical design.
              <br />
              <br />
              The brochure provides product specifications, firmness options,
              material details, and application guidance to help you choose
              mattresses suited to your specific needs.
            </>
          }
          btn={""}
        />
        <WhyChooseUs
          title="WHY GLOBAL LEADERS WORK WITH US"
          highlightWords={["GLOBAL", "LEADERS"]}
          image="/apparel/why-choose.jpg"
          description="MEET supplies high-quality mattresses that meet international comfort, durability, and safety standards. From residential bedrooms to hospitality and commercial spaces, our portfolio supports consistent sleep quality and long-term performance. Every product is selected with ergonomic design, resilience, and reliable support in mind, helping global partners maintain comfort and satisfaction across projects."
          features={[
            {
              icon: Award,
              title: "Trusted Quality",
              desc: "Built with carefully selected materials and strict quality standards, ensuring long-term durability, proper support, and dependable comfort across demanding residential and commercial environments.",
            },
            {
              icon: Layers,
              title: "Wide Product Coverage",
              desc: "A diverse range covering foam, spring, and hybrid mattresses designed to meet both comfort and support requirements across multiple applications.",
            },
            {
              icon: Building2,
              title: "Reliable B2B Supply",
              desc: "Structured sourcing and coordinated production processes that support consistent availability, scalable volumes, and long-term partnerships for residential, hospitality, and commercial projects.",
            },
            {
              icon: Globe,
              title: "Global Market Readiness",
              desc: "Experience serving international markets ensures alignment with global quality expectations, compliance standards, and commercial requirements of established brands and businesses.",
            },
          ]}
        />
        <div className="mt-16 mb-10 lg:my-0!">
          <Industries
            image="/apparel/industry.jpg"
            desc="MEET supplies sleep and bedding products to a wide range of B2B clients, including:"
            items={[
              {
                label: "Mattress and bedding brands",
              },
              {
                label: "Distributors and wholesalers",
              },
              {
                label: "Hotels and hospitality projects",
              },
              {
                label: "Residential and housing developments",
              },
            ]}
          />
        </div>
      </div>
      <CTASection />
    </>
  );
}
