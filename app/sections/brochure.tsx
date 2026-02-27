"use client";
import { Download } from "lucide-react";
import Link from "next/link";

const Brochure = ({
  title,
  desc,
  btn,
  multi,
  donwloadLink,
}: {
  multi?: boolean;
  title: React.ReactNode;
  desc: React.ReactNode;
  btn: string;
  donwloadLink?: { label: string; link: string }[];
}) => {
  return (
    <section className=" bg-[#FCFAF5] py-16">
      <div className="container">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12">
          <div className="h-[400px] bg-white border-gray-300 overflow-hidden rounded-xl border ">
            <img
              src={"/brochure.png"}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            {title}
            {desc}
            {multi ? (
              <div className="flex flex-wrap items-center gap-4">
                {donwloadLink?.map((item, idx) => (
                  <Link key={idx} href={item.link} target="_blank">
                    <button className="px-5 text-sm lg:text-md mt-5 flex items-center gap-2 py-2 bg-primary text-white">
                      <Download />
                      {item.label}
                    </button>
                  </Link>
                ))}
              </div>
            ) : (
              <Link href={btn} target="_blank">
                <button className="px-5 mt-5 flex items-center gap-2 py-2 bg-primary text-white">
                  <Download />
                  Download Brochure
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
