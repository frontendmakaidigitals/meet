import React from "react";

const Vision = () => {
  return (
    <section className="py-10 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-rubik text-center mb-10  lg:mb-16">
            OUR VISION
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
            <div className="hidden z-10 absolute w-4xl lg:grid grid-cols-[1.2fr_.8fr] bottom-5 gap-6 -right-10 items-center">
              <div className="h-[250px]   ">
                <img
                  src="/about/story/img-2.jpg"
                  alt="Modern building"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-lg text-slate-700">
                We present innovation and Technology driven products focusing on
                B2B needs. Supporting companies as they work towards their goal.
                We maintain efficiency so that there is nothing stopping you.
              </p>
            </div>
            <div className="relative h-[230px] lg:h-[700px]">
              <img
                src="/about/story/img-1.jpg"
                alt="Modern building"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Left Side - Text */}
            <div className="space-y-6 lg:py-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our vision is to be a trusted B2B solutions partner for
                businesses across key markets.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We support companies as they move toward better, more efficient
                ways of working. By offering future-ready products, we help
                businesses improve daily operations while being mindful of
                energy use and environmental impact.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                As industries and markets evolve, we remain focused on practical
                solutions that deliver long-term value. Through responsible
                choices and strong partnerships, we aim to help our customers
                grow with confidence and prepare for what comes next.
              </p>
              <p className="text-lg lg:hidden text-slate-700 leading-relaxed">
                We present innovation and Technology driven products focusing on
                B2B needs. Supporting companies as they work towards their goal.
                We maintain efficiency so that there is nothing stopping you.
              </p>
            </div>

            {/* Right Side - Image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
