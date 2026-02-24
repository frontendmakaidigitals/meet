import Image from "next/image";

type SplitHeroProps = {
  title: React.ReactNode;
  titleText: string;
  desc: string;
  image: string;
  bgClass?: string;
  background: string;
  logo?: string[];
  dark?: boolean;
  layer?: boolean;
};

const SplitHero = ({
  title,
  titleText,
  desc,
  image,
  bgClass = "bg-gray-100",
  background,
  logo,
  dark = false,
  layer = false,
}: SplitHeroProps) => {
  return (
    <section className={`relative pt-28 py-20 ${bgClass}`}>
      {layer && (
        <div className="absolute inset-0 w-full h-full bg-black/40 z-10" />
      )}

      <Image src={background} alt="Background" fill className="object-cover" />

      <div className="container z-10 relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          {/* ===== IMAGE — Top on mobile ===== */}
          <div className="relative w-full h-[250px] lg:h-[450px] order-1 md:order-2">
            <Image
              src={image}
              alt={titleText}
              fill
              className="object-contain w-full h-full"
            />
          </div>

          {/* ===== TEXT ===== */}
          <div className="space-y-1 lg:space-y-4 order-2 md:order-1">
            <div className={`${dark ? "text-white" : "text-gray-900"}`}>
              {title}
            </div>

            <p
              className={`${
                dark ? "text-gray-200" : "text-gray-600"
              } mt-6 text-lg leading-relaxed max-w-xl`}
            >
              {desc}
            </p>

            <button className="px-14 mt-4 bg-primary text-white rounded-full py-3">
              {logo && (
                <div className="lg:flex absolute hidden bottom-0 left-5 items-center gap-4">
                  <h3
                    className={`font-rubik ${!dark ? "text-black" : "text-white"}`}
                  >
                    Our Successful partners
                  </h3>

                  <div className="flex items-center gap-2">
                    {logo.map((logo, index) => (
                      <div
                        key={index}
                        className="size-16 bg-white flex justify-center items-center p-1 rounded-full"
                      >
                        <Image
                          src={logo}
                          alt="Partner Logo"
                          width={100}
                          height={50}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
