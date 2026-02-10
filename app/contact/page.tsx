import React from "react";
import Contact from "../sections/home/contact";
const page = () => {
  return (
    <>
      <section className="relative pt-20  min-h-[400px] w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={"/contact/banner.jpg"}
          alt={"banner"}
        />
      </section>
      <section>
        <Contact color={'bg-white'} />
      </section>
    </>
  );
};

export default page;
