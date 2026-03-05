import React from "react";
const Products = ({ data, num }: { data: any; num?: number }) => {
  return (
    <section className="">
      <div className="container">
        {data.map((item: any, idx: number) => (
          <div key={idx} className="pb-5">
            <div
              className={` ${num === 2 ? "flex flex-col lg:flex-row justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} gap-6 md:gap-2`}
            >
              {item.types.map((type: any, idx: number) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md border border-slate-200"
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
