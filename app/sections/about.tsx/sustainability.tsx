import React from "react";
import Link from "next/link";
const Sustainability = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-rubik mb-12 tracking-wide">
            SUSTAINABILITY & RESPONSIBILITY
          </h2>

          {/* Image */}
          <div className="w-full rounded-3xl overflow-hidden mb-10">
            <img
              src="/about/sustainability/img.jpg"
              alt="Sustainability"
              className="w-full h-[250px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Intro line */}
          <p className="italic text-gray-700 mb-6">
            Sustainability is part of our daily decisions, from product
            selection to supplier partnerships.
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            We support energy-efficient technologies, cleaner mobility
            solutions, and responsible sourcing practices that help businesses
            reduce their environmental impact without affecting performance.
          </p>

          {/* CTA */}
          <Link href={"/sustainability"}>
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-sm hover:bg-yellow-600 transition">
              Learn more about our approach
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
