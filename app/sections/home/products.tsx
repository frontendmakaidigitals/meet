import Link from "next/link";
import Image from "next/image";
const Products = () => {
  const productList = [
    {
      label: <h2 className="text-3xl text-black font-rubik">APPAREL</h2>,
      desc: "Apparel accessories like Fasteners, Buckles and cooling jackets are built to improve comfort and safety in demanding work environments.",
      img: (
        <div className="max-h-[350px] w-lg overflow-hidden">
          <Image
            src={"/home/products/straps.png"}
            alt={""}
            width={500}
            height={500}
            className="object-contain w-full h-full rotate-90"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#FFFDF7] to-[#FFFFFF]",
      class: "lg:col-span-2",
      link: "/apparel",
    },
    {
      label: (
        <h2 className="text-3xl text-black font-rubik">
          EV <span className="font-allura">Vehicles</span>
        </h2>
      ),
      desc: "Supplying electric scooters and bikes designed for daily business use. These solutions support cleaner transport and lower running costs.",
      img: (
        <div className="relative w-full  h-[250px] mx-auto flex items-end justify-center">
          <Image
            src={"/home/products/ev.png"}
            alt={""}
            width={500}
            height={500}
            className="object-contain object-bottom w-full h-full"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#F7F7F7] to-[#F7F7F7]",
      class: "col-span-1",
      link: "/electric-vehicle",
    },
    {
      label: (
        <h2 className="text-3xl font-rubik text-black">Batteries</h2>
      ),
      desc: "From automotive batteries to energy storage systems, we provide dependable power for mobility, backup, and daily operations.",
      img: (
        <div className="relative w-full  overflow-hidden h-[250px] mx-auto flex items-end justify-center">
          <Image
            src={"/home/products/batteries.png"}
            alt={""}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#FFEDEE] to-[#F7F7F7]",
      class: "col-span-1",
      link: "/batteries",
    },
    {
      label: (
        <h2 className="text-3xl font-rubik text-black">
          Home <span className="font-allura">Appliances</span>
        </h2>
      ),
      desc: "Quality mattresses designed to support comfort, rest, and long-term use across residential and commercial needs.",
      img: (
        <div className="relative w-full overflow-hidden  h-[250px] max-h-[250px] flex items-end justify-center">
          <Image
            src="/home/products/home-appliance.png"
            alt="Home appliances"
            fill
            priority
            className="object-contain w-full h-full"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#F7F7F7] to-[#F7F7F7]",
      class: "col-span-1",
      link: "/home-appliance",
    },
    {
      label: (
        <h2 className="text-3xl font-rubik text-black">
          Sleep <span className="font-allura">&</span> Beddings
        </h2>
      ),
      desc: "Quality mattresses designed to support comfort, rest, and long-term use across residential and commercial needs.",
      img: (
        <div className="relative w-full overflow-hidden  h-[250px] max-h-[250px] flex items-end justify-center">
          <Image
            src={"/home/products/sleep-and-beddings.png"}
            alt={""}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#FFEDEE] to-[#F7F7F7]",
      class: "col-span-1",
      link: "/matress",
    },
    {
      label: (
        <h2 className="text-3xl font-rubik text-black">
          Personal <span className="font-allura">Electronics devices</span>
        </h2>
      ),
      desc: "Reliable personal electronics designed for everyday use, built to last long.",
      img: (
        <div className="relative w-full h-[300px] mx-auto flex items-end justify-center">
          <Image
            src={"/home/products/personal-electronics.png"}
            alt={""}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#FFEDEE] to-[#F7F7F7]",
      class: "lg:col-span-2",
      link: "/personal-electorincs",
    },
    {
      label: (
        <h2 className="text-3xl font-rubik text-black">
          Travel Bags <span className="font-allura">&</span> Luggage
        </h2>
      ),
      desc: "Spacious and durable luggage that travels long distances withstanding every environment.",
      img: (
        <div className="relative w-full h-[300px] mx-auto flex items-end justify-center">
          <Image
            src={"/home/products/bags.png"}
            alt={""}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      ),
      bgColor: "bg-linear-to-b from-[#B3A287] to-[#F7F7F7]",
      class: "lg:col-span-2",
      link: "/travel-bags",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-rubik text-black mb-4">
          OUR INNOVATIVE <span className="text-yellow-400">PRODUCT RANGE</span>
        </h2>

        <p className="text-gray-600">
          Solutions engineered to solve real business challenges and scale
          <br />
          with growth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7">
          {productList.map((product, idx) => {
            const isWide = product.class.includes("col-span-2");

            return (
              <div
                key={idx}
                className={`${product.bgColor} ${product.class} p-8`}
              >
                {isWide ? (
                  /* ===================== WIDE CARD ===================== */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* IMAGE – top on mobile, right on desktop */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end mb-6 md:mb-0">
                      {product.img}
                    </div>

                    {/* TEXT */}
                    <div className="order-2 md:order-1 text-left">
                      <div className="mb-3">{product.label}</div>

                      <p className="max-w-md text-sm text-black mb-5">
                        {product.desc}
                      </p>

                      <div className="flex gap-4 text-sm">
                        <button className="px-5 py-1.5 bg-primary rounded-full text-white">
                          Learn more
                        </button>
                        <button className="px-5 py-1.5 rounded-full text-black border border-primary">
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ===================== NORMAL CARD ===================== */
                  <div className="flex flex-col items-center text-center">
                    {/* IMAGE – top on mobile */}
                    <div className="order-1 lg:hidden w-full flex justify-center mb-4">
                      {product.img}
                    </div>

                    {/* LABEL */}
                    <div className="order-2 mb-2">{product.label}</div>

                    {/* DESCRIPTION */}
                    <p className="order-3 max-w-md text-sm text-black mb-4">
                      {product.desc}
                    </p>

                    {/* CTA */}
                    <div className="order-4 flex gap-4 text-sm">
                      <Link href={"/"}>
                        <button className="px-5 py-1.5 bg-primary text-white rounded-full">
                          Learn more
                        </button>
                      </Link>
                      <button className="px-5 py-1.5 rounded-full text-black border border-yellow-600">
                        Buy now
                      </button>
                    </div>
                    <div className=" lg:order-4  w-full hidden lg:flex justify-center mb-4">
                      {product.img}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
