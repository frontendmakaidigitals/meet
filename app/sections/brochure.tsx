import { Download } from "lucide-react";
const Brochure = ({
  title,
  desc,
  btn,
}: {
  title: string;
  desc: string;
  btn: string;
}) => {
  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-[300px]">
            <img
              src={"/brochure-image.png"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-baskervville mb-8">{title}</h2>
            <p className="text-gray-600 mb-8">{desc}</p>
            <button className="px-5 flex items-center gap-2 py-2 bg-primary text-white">
              <Download />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
