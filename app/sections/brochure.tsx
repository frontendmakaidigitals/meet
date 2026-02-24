import { Download } from "lucide-react";
const Brochure = ({
  title,
  desc,
  btn,
}: {
  title: React.ReactNode;
  desc: React.ReactNode;
  btn: string;
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
            <button className="px-5 mt-5 flex items-center gap-2 py-2 bg-primary text-white">
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
