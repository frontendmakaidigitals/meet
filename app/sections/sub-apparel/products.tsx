import React from "react";
import type { Product } from "@/app/apparel/detail/page";
const Products = ({ data, num }: { data: Product[]; num?: number }) => {
  return (
    <section className="py-16">
      <div className="container">
        {data.map((item, idx) => (
          <div key={idx} className="pb-5">
            <h2 className="text-4xl font-rubik mb-6">
              <span className="font-inter">{num ? num : idx + 1}.</span>{" "}
              {item.label}
            </h2>
            <div className="mt-4 mb-8 text-gray-700">{item.desc}</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {item.types.map((type, idx) => (
                <div
                  key={idx}
                  className="group relative  rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-md border border-transparent hover:border-slate-300"
                >
                  {/* Image Container */}
                  <div className="h-60  flex items-center justify-center p-2">
                    {type.img ? (
                      <img
                        src={type.img}
                        alt={type.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-lg" />
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {type.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
