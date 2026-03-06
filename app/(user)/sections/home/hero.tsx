"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const logos = [
    { img: "Nifco-Japan.png" },
    { img: "Heinrich.png" },
    { img: "Indesit.png" },
    { img: "beko.png" },
    { img: "YAMAGO.png" },
    { img: "Ariston.png" },
    { img: "Autolite.png" },
    { img: "jackson-mattress.png" },
    { img: "King-kong.png" },
    { img: "Lucas.png" },
  ];
  return (
    <section className="relative h-[95svh] lg:min-h-[calc(90vh+5rem)] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home/Website-Header.mp4" type="video/mp4" />
        </video>

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-2xl lg:text-[44px] 3xl:text-5xl font-rubik tracking-tight font-[500] text-slate-50 mb-6 leading-tight">
          ENERGY EFFICIENT AND SUSTAINABLE PRODUCTS
          <br />
          <span className="text-yellow-400">BUILT FOR BUSINESSES.</span>
        </h1>

        <p className="text-gray-200 max-w-3xl mx-auto mb-8 lg:text-lg">
          Middle East Engineering Technologies is a B2B Commercial Distribution
          and Trading company based in United Arab Emirates, operating globally
          with regional and international partners. We deal is reliable and
          durable products to ensure our partners are able to serve the
          customers with value for money solutions.
        </p>

        <div className="flex flex-col max-w-2xs mx-auto lg:max-w-lg  sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <button className="bg-primary w-full lg:w-auto text-white uppercase px-6 py-2 rounded-full hover:bg-primary/90 transition font-inter font-semibold">
              Explore our products
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="border w-full lg:w-auto border-yellow-500 text-white px-6 py-2 hover:text-white rounded-full hover:bg-primary  font-inter transition font-semibold">
              TALK TO OUR TEAM
            </button>
          </Link>
        </div>

        {/* Trust Badges */}
        {/* Trust Badges */}
      </div>
    </section>
  );
};

export default Hero;
