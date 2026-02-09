import Hero from "../sections/apparel/hero";
import About from "../sections/apparel/about";
import Brochure from "../sections/brochure";
import Contact from "../sections/home/contact";
export default function AparaellPage() {
  return (
    <>
      <Hero
        title="Sleep & Beddings  "
        desc="At Middle East Engineering Technologies , we supply sleep and bedding products designed to improve comfort, support, and everyday sleep quality. We work with B2B partners across global markets, focusing on reliable products and long-term supply relationships. "
        image="/mattress/banner.jpg"
      />
      <div className="relative pb-20">
        <div className="lg:w-md h-full absolute bg-[#FFFAEC] -z-10" />
        <div className="container mx-auto py-16 px-4">
          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-baskervville mb-4">
              Our Sleep & Beddings Product Range
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We supply American engineered mattresses designed to support body
              comfort, proper posture, and long-lasting performance, guarded
              with a warranty.
            </p>
          </div>

          {/* Content Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[360px] rounded-lg overflow-hidden bg-gray-200">
              <img
                src="/mattress/mattresses.jpg"
                alt="Mattresses"
                className="w-full h-full object-cover"
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
                and long-term shape retention.
              </p>
            </div>

            {/* Right Image */}
          </div>
        </div>
        <Brochure
          title={"Comfort Designed for Better Rest"}
          desc={
            "Our mattresses are crafted to provide long-lasting comfort and support. Using quality materials and thoughtful design, they promote healthy sleep and enhanced well-being for everyday use."
          }
          btn={""}
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

      </div>
        <Contact />
    </>
  );
}
