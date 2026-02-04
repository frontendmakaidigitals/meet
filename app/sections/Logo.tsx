import React from "react";
import Image from "next/image";
const Logo = ({
  className,
  src = "/Logo/logo.png",
}: {
  className?: string;
  src?: string;
}) => {
  return (
    <Image
      className={`${className}`}
      src={src}
      alt="logo"
      width={130}
      height={130}
    />
  );
};

export default Logo;
