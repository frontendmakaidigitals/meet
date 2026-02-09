import React from "react";
import {
  // for Safety and Working Clothes
  LucideIcon,
} from "lucide-react";

type IndustryItem = {
  icon?: LucideIcon;
  label: string;
};

type IndustriesProps = {
  title?: string;
  highlightWord?: string;
  desc?: string;
  items: IndustryItem[];
  iconBgClass?: string;
};

const Industries = ({
  title = "Industries and Applications",
  highlightWord = "and",
  desc,
  items,
  iconBgClass = "bg-primary ",
}: IndustriesProps) => {
  const [first, second] = title.split(` ${highlightWord} `);

  return (
    <section>
      <div className="container border border-slate-500/20 bg-white py-10 rounded-3xl">
        {/* Heading */}
        <h2 className="text-4xl text-center uppercase font-baskervville">
          {first} <span className="text-primary">{highlightWord}</span> {second}
        </h2>

        {/* Description */}
        {desc && (
          <p className="text-center max-w-3xl mx-auto mt-4 text-gray-600 px-4">
            {desc}
          </p>
        )}

        {/* Grid */}
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex bg-slate-100 rounded-lg p-3 items-start gap-4"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgClass}`}
              >
                {item.icon && (
                  <item.icon className="w-6 h-6 text-gray-50" strokeWidth={2} />
                )}
              </div>
              <h3 className="text-lg font-medium pt-2">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
