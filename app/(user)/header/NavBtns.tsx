import Link from "next/link";


const NavBtns = ({ textColor }: { textColor: string }) => {
  return (
    <div className="flex items-center gap-3">
      <Link href={"/careers"}>
        <button
          className={` ${textColor} border-r hover:text-white px-6 py-2 hover:border-primary hover:rounded-full hover:bg-primary transition-all duration-300 font-medium`}
        >
          Careers
        </button>
      </Link>
      <Link href={"/contact"}>
        <button className=" text-white bg-primary px-6 py-2 rounded-full hover:bg-primary transition font-medium">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default NavBtns;
