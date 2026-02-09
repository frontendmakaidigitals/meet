import React from "react";
import Link from "next/link";
const Supplies = ({
  products,
  heading,
  link,
}: {
  products: any[];
  heading: string;
  link: string;
}) => {
  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-4xl font-baskervville mb-8">{heading}</h2>
        <div className="space-y-24 w-full">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="grid items-center grid-cols-1 lg:grid-cols-2 gap-5"
            >
              <div className="w-full h-[350px] bg-white border border-slate-300/40">
                <img
                  src={product.img}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  {product.label}
                  <p className=" text-gray-500">{product.desc}</p>
                </div>
                <Link href={link} className="  font-medium">
                  <button className="px-5 py-2 bg-yellow-500 text-slate-50">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-5 py-2 bg-yellow-400 text-black ">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Supplies;
