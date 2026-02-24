import React from "react";
import { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type WhyChooseUsProps = {
  title: string;
  highlightWords?: string[]; // words to highlight
  image: string;
  description: string;
  features: Feature[];
};

const WhyChooseUs = ({
  title,
  highlightWords = [],
  image,
  description,
  features,
}: WhyChooseUsProps) => {
  // Highlight specific words in title
  const renderTitle = () => {
    let words = title.split(" ");

    return words.map((word, i) => {
      const clean = word.replace(/[^a-zA-Z]/g, "");
      const isHighlight = highlightWords.includes(clean);

      return (
        <span key={i} className={isHighlight ? "text-[#c6a622]" : ""}>
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section className="pt-14 pb-1 lg:pt-16 ">
      <div className="container mx-auto px-4 space-y-10">
        {/* ===== HEADING ===== */}
        <h2 className="text-center text-3xl md:text-4xl font-rubik uppercase text-slate-900">
          {renderTitle()}
        </h2>

        {/* ===== IMAGE ===== */}
        <div className="w-full overflow-hidden rounded-sm">
          <img
            src={image}
            alt="Why choose us"
            className="w-full h-[250px] lg:h-[380px] object-cover"
          />
        </div>

        {/* ===== DESCRIPTION ===== */}
        <p className="max-w-4xl mx-auto text-center text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* ===== FEATURES GRID ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={idx}
                className="bg-amber-50/80 shadow border border-amber-100 rounded-xl p-6 space-y-4 hover:shadow-sm transition"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#c6a622] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-rubik text-lg text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
