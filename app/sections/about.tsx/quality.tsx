import React from "react";

const Quality = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container px-6">
        <div className="relative">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-rubik mb-6 text-center lg:text-left">
            QUALITY POLICY
          </h2>

          {/* Divider */}
          <div className="w-full hidden lg:block h-px bg-black/40  mb-12 lg:mb-16 lg:absolute lg:top-20" />

          <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
            {/* LEFT – TEXT */}
            <div className="max-w-xl space-y-5 text-center lg:text-left">
              <p className="text-lg lg:text-xl text-gray-800">
                Quality is{" "}
                <span className="font-allura text-yellow-600 mx-1">
                  central
                </span>{" "}
                to everything we do.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                We carefully select products and technologies that meet strict
                quality and performance standards. By working closely with
                trusted manufacturers, we ensure consistent supply, dependable
                performance, and solutions that deliver real value over time.
                Our commitment to quality also includes responsible sourcing and
                a focus on products that support efficiency, safety, and
                long-term sustainability.
              </p>
            </div>

            {/* RIGHT – IMAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="h-[240px] sm:h-[300px] lg:h-[370px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/about/quality/img-1.jpg"
                  alt="Modern kitchen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 (offset only on desktop) */}
              <div className="h-[240px] sm:h-[300px] lg:h-[370px] rounded-2xl overflow-hidden shadow-sm lg:mt-16">
                <img
                  src="/about/quality/img-2.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
