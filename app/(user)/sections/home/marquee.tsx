"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
  { img: "Nifco-Japan.png" },
  { img: "Heinrich.png" },
  { img: "Indesit.png" },
  { img: "beko.png" },
  { img: "YAMAGO.png" },
  { img: "Ariston.png" },
  { img: "Autolite.png" },
  { img: "jackson-mattress.png" },
  { img: "King-kong.png" },
  { img: "Lucas.png" },
];

export default function InfiniteMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout/images
    requestAnimationFrame(() => {
      const width = track.scrollWidth / 2;

      tweenRef.current = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -width,
          duration: 30, // slower = smoother
          ease: "none",
          repeat: -1,
        },
      );
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);
  const handleMouseEnter = () => tweenRef.current?.timeScale(0.2);
  const handleMouseLeave = () => tweenRef.current?.timeScale(1);

  const allLogos = [...logos, ...logos];

  return (
    <div className=" flex flex-col pt-14 pb-18 items-center justify-center font-sans">
      {/* Label */}
      <p className="text-gray-800 text-4xl lg:text-4xl xl:text-5xl text-center font-rubik tracking-right uppercase mb-8 font-normal">
        <span className="text-primary">Trusted</span> by <br /> industry leaders
      </p>

      {/* Marquee wrapper */}
      <div
        className="relative w-full overflow-hidden mt-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex items-center w-max will-change-transform"
        >
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="marquee-item will-change-transform relative flex items-center justify-center px-12 h-[72px]"
            >
              {/* Divider */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-white" />
              )}

              <img
                src={`/partner-logo/${logo.img}`}
                alt={logo.img.replace(/\.[^/.]+$/, "")}
                className=" size-40  object-contain transition duration-300 ease-in-out cursor-default "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
