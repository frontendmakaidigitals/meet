import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = ({
  className,
  src = "/Logo/logo.png",
}: {
  className?: string;
  src?: string;
}) => {
  return (
    <Link href={"/"}>
      <Image
        className={`${className}`}
        src={src}
        alt="logo"
        width={130}
        height={130}
      />
    </Link>
  );
};

export default Logo;
