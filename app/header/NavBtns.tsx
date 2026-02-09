import Link from "next/link";
import React from "react";

const NavBtns = ({ textColor }: { textColor: string }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        className={` ${textColor} border-r px-6 py-2  hover:rounded-full hover:bg-yellow-500 transition-all duration-300 font-medium`}
      >
        Careers
      </button>
      <Link href={"/contact"}>
        <button className=" text-black bg-primary px-6 py-2 rounded-full hover:bg-yellow-500 transition font-medium">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default NavBtns;
