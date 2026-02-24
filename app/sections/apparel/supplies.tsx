import Image from "next/image";
import Link from "next/link";

type SuppliesProps = {
  link: string;
  products: any[];
  heading: React.ReactNode;
  cardBg?: string;
};

const Supplies = ({ link, products, heading }: SuppliesProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 space-y-12">
        {/* ===== SECTION HEADING ===== */}
        {heading}

        <div className="space-y-8">
          {products.map((product, index) => {
            const isEven = index % 2 === 0; // 0,2,4...

            return (
              <div
                key={index}
                className={`rounded-3xl border border-gray-400 overflow-hidden ${product.cardBg}`}
              >
                <div className="grid lg:grid-cols-2 items-center gap-10 p-8 md:p-14">
                  {/* ===== IMAGE ===== */}
                  <div
                    className={`relative flex items-center justify-center
                    ${isEven ? "lg:order-1" : "lg:order-2"}
                    order-1`}
                  >
                    <div className="relative w-full h-[320px]">
                      <Image
                        fill
                        src={product.img}
                        alt="Product Image"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* ===== CONTENT ===== */}
                  <div
                    className={`space-y-5
                    ${isEven ? "lg:order-2" : "lg:order-1"}
                    order-2`}
                  >
                    {product.label}

                    <p className="text-slate-600 leading-relaxed ">
                      {product.desc}
                    </p>

                    <Link
                      href={product.link}
                      className="inline-block bg-primary text-white text-sm font-medium px-7 py-3 rounded-full hover:opacity-90 transition"
                    >
                      VIEW MORE
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Supplies;
