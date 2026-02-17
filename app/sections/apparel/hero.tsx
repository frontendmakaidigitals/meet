import Image from "next/image";

type SplitHeroProps = {
  title: string;
  desc: string;
  image: string;

  bgClass?: string;
};

const SplitHero = ({
  title,
  desc,
  image,

  bgClass = "bg-gray-100",
}: SplitHeroProps) => {
  return (
    <section className={`relative pt-28 py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-rubik md:text-5xl font-[400] text-gray-900 leading-tight">
              {title}
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-xl">{desc}</p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full h-[300px] md:w-[380px] md:h-[420px]  overflow-hidden ">
              <Image src={image} alt={title} fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
