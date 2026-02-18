import React from "react";
import Image from "next/image";

type PartnerItem = {
  image: string;
  alt: string;
  className?: string;
};

type OurPartnersProps = {
  title?: string;
  highlight?: string;
  desc?: string[];
  partners: PartnerItem[];
};

const OurPartners = ({
  title = "Our Successful Partners",
  highlight = "Successful Partners",
  desc = [],
  partners,
}: OurPartnersProps) => {
  const parts = title.split(highlight);

  return (
    <section className="pb-16">
      <div className="container">
        {/* Heading */}
        <h2 className="text-4xl font-rubik mb-5">
          {parts[0]}
          <span className="text-primary">{highlight}</span>
          {parts[1]}
        </h2>

        {/* Description */}
        {desc.map((text, idx) => (
          <p key={idx} className="mb-3 max-w-4xl">
            {text}
          </p>
        ))}

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 h-[600px] lg:h-[400px] gap-1 overflow-hidden rounded-2xl mt-10">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`relative w-full h-full ${partner.className ?? ""}`}
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
