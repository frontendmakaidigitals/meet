"use client";

export default function CTASection() {
  return (
    <section className=" max-w-sm lg:max-w-6xl mx-auto overflow-hidden mb-20">
      <div className="container flex flex-col justify-center items-center py-20 relative  text-center">
        <div className="absolute w-full h-full ">
          <video loop muted className="w-full object-cover h-full">
            <source src={"/home/hero.mp4"} type="video/mp4" />
          </video>
        </div>
        {/* Eyebrow */}
        <p className="text-2xl relative tracking-wide text-yellow-500 mb-3">
          Let’s <span className="font-allura">build</span>&nbsp; the right
          solution together.
        </p>

        {/* Main copy */}
        <h2 className="text-xl relative md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Connect with our team to explore reliable engineering products
          tailored to your business and market needs.
        </h2>

        {/* CTA Button */}
        <button className="px-10 relative py-3 max-w-lg border border-yellow-500 text-yellow-500 text-xs tracking-widest uppercase rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-300">
          Get in touch
        </button>
      </div>
    </section>
  );
}
