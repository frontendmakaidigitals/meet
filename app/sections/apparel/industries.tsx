import React from "react";

type IndustryItem = {
  label: string;
};

type IndustriesProps = {
  title?: string;
  highlightWord?: string;
  desc?: string;
  items: IndustryItem[];
  image: string;
};

const Industries = ({
  title = "Industries and Applications",
  highlightWord = "and",
  desc,
  items,
  image,
}: IndustriesProps) => {
  const [first, second] = title.split(` ${highlightWord} `);

  return (
    <section className="pt-0 pb-10 lg:py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== LEFT — IMAGE ===== */}
          <div className="w-full h-[250px] lg:h-[540px] rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Industries"
              className="w-full h-full object-cover "
            />
          </div>

          {/* ===== RIGHT — CONTENT ===== */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-rubik uppercase text-slate-900 leading-tight">
              {first} <span className="text-[#c6a622]">{highlightWord}</span>{" "}
              {second}
            </h2>

            {/* Description */}
            {desc && (
              <p className="text-slate-600 leading-relaxed max-w-lg">{desc}</p>
            )}

            {/* List */}
            <div className="space-y-4 pt-2">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  {/* Number Circle */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c6a622] text-white text-sm font-medium">
                    {idx + 1}
                  </div>

                  {/* Label */}
                  <p className="text-slate-800 font-medium text-sm md:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
