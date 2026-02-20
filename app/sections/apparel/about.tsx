import Image from "next/image";

type AboutItem = {
  label: string;
  desc: string;
};

type AboutSectionProps = {
  title: string;
  highlight?: string;
  image: string;
  items: AboutItem[];
};

const AboutSection = ({
  title,
  highlight,
  image,
  items,
}: AboutSectionProps) => {
  const renderTitle = () => {
    if (!highlight) return title;

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="font-rubik text-center lg:text-start mb-5 text-4xl uppercase tracking-wider">
          {renderTitle()}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden md:h-[550px]">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-2">
                  <div className="w-4 h-4 border border-primary rotate-45" />
                </div>
                <div>
                  <h3 className="text-2xl text-primary mb-3">{item.label}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
