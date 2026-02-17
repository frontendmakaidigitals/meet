"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cards = [
    {
      id: 0,
      image: "/transport.jpg",
      leftText: "Global B2B solutions partner",
      rightText: null,
    },
    {
      id: 1,
      image: "/quality.jpg",
      leftText: "Quality products built for everyday use",
      rightText: null,
    },
    {
      id: 2,
      image: "/multi-category.jpg",
      leftText: "Multi category products",
      rightText: null,
    },
    {
      id: 3,
      image: "/durable.jpg",
      leftText: null,
      rightText: "Durable quality products",
    },
    {
      id: 4,
      image: "/communication.jpg",
      leftText: null,
      rightText: "Impactful approach and communication",
    },
    {
      id: 5,
      image: "/transparent.jpg",
      leftText: null,
      rightText: "Transparent, reliable processes",
    },
  ];

  const leftItems = cards.filter((card) => card.leftText);
  const rightItems = cards.filter((card) => card.rightText);

  const randomTilt = (index: number, intensity = 4) => {
    const seed = Math.sin(index * 9999) * 10000;
    return (seed - Math.floor(seed)) * intensity * 2 - intensity;
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const rotateZ = randomTilt(index, 4);

    if (diff === 0) {
      return {
        transform: `
        translateX(0)
        translateY(0)
        rotateZ(0deg)
        scale(1)
      `,
        zIndex: 30,
        opacity: 1,
      };
    }

    if (diff === 1) {
      return {
        transform: `
        translateX(0)
        translateY(20px)
        rotateZ(${rotateZ}deg)
        scale(0.95)
      `,
        zIndex: 29,
        opacity: 0.8,
      };
    }

    if (diff === 2) {
      return {
        transform: `
        translateX(0)
        translateY(40px)
        rotateZ(${rotateZ}deg)
        scale(0.9)
      `,
        zIndex: 28,
        opacity: 0.6,
      };
    }

    if (diff > 2) {
      return {
        transform: `
        translateX(0)
        translateY(60px)
        rotateZ(${rotateZ}deg)
        scale(0.85)
      `,
        zIndex: 30 - diff,
        opacity: 0,
      };
    }

    return {
      transform: `
      translateX(${diff * 8}px)
      translateY(${Math.abs(diff) * 8}px)
      rotateZ(${rotateZ}deg)
      scale(${1 - Math.abs(diff) * 0.05})
    `,
      zIndex: 30 + diff,
      opacity: 0,
    };
  };

  useEffect(() => {
    if (isDesktop) return;

    const cardsEls = cardsRef.current.filter(Boolean);
    const contentWrapper = contentWrapperRef.current;
    const section = sectionRef.current;

    if (!contentWrapper || !section || cardsEls.length === 0) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Set all cards to start BELOW viewport (hidden)
    cardsEls.forEach((card, i) => {
      gsap.set(card, {
        y: 600, // Start below the container
        opacity: 1,
        zIndex: i,
        scale: 0.95,
      });
    });

    // Create scroll trigger with pinning - pin the entire content wrapper
    ScrollTrigger.create({
      trigger: contentWrapper,
      start: "top top",
      end: `+=${cardsEls.length * 500}`,
      pin: contentWrapper,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cardsEls.length;

        cardsEls.forEach((card, i) => {
          // Each card takes up a portion of the scroll
          const cardStartProgress = i / totalCards;
          const cardEndProgress = (i + 1) / totalCards;

          // Calculate individual card progress
          let cardProgress = 0;
          if (progress >= cardStartProgress && progress <= cardEndProgress) {
            cardProgress =
              (progress - cardStartProgress) /
              (cardEndProgress - cardStartProgress);
          } else if (progress > cardEndProgress) {
            cardProgress = 1;
          }

          // Animate card sliding up
          const startY = 600;
          const endY = 0;
          const currentY = startY - (startY - endY) * cardProgress;

          gsap.set(card, {
            y: currentY,
            opacity: cardProgress > 0 ? 1 : 0,
            scale: 0.95 + 0.05 * cardProgress,
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white lg:py-24"
    >
      <div
        ref={contentWrapperRef}
        className="container mx-auto px-6 pt-24 lg:pt-0"
      >
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-4 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-rubik tracking-wide mb-6">
            WHY CHOOSE <span className="text-primary">US</span>
          </h2>

          <p className="text-lg text-gray-600 mb-4">
            A simple approach, built around real business needs.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We focus on products that are reliable, and made to perform in
            everyday working conditions.
          </p>
        </div>

        {/* Content */}
        <div className="lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
          {/* Left list */}
          <div ref={leftTextRef} className="hidden lg:block space-y-6">
            {leftItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(item.id)}
                className={`flex items-start gap-3 cursor-pointer transition-all duration-300 p-3 rounded-lg ${
                  activeIndex === item.id
                    ? "text-amber-500 bg-amber-50"
                    : "text-gray-700 hover:text-amber-500 hover:bg-gray-50"
                }`}
              >
                <span className="text-xl mt-0.5">◇</span>
                <span className="text-base font-medium">{item.leftText}</span>
              </div>
            ))}
          </div>

          {/* Center - Stacking Cards */}
          {/* Center - Stacking Cards */}
          <div className="flex justify-center items-center lg:py-0 mt-8">
            <div
              ref={cardsContainerRef}
              className="relative w-[280px] h-[380px]"
              style={{ perspective: "1000px" }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="absolute inset-0 will-change-transform"
                  style={isDesktop ? getCardStyle(index) : undefined}
                  onClick={() =>
                    isDesktop &&
                    setActiveIndex((activeIndex + 1) % cards.length)
                  }
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                    <img
                      src={`/home/why-choose/img-${index + 1}.png`}
                      alt={card.leftText || card.rightText || ""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right list */}
          <div ref={rightTextRef} className="hidden lg:block space-y-6">
            {rightItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(item.id)}
                className={`flex items-start gap-3 cursor-pointer transition-all duration-300 p-3 rounded-lg ${
                  activeIndex === item.id
                    ? "text-primary bg-yellow-50"
                    : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
                }`}
              >
                <span className="text-xl ">◇</span>
                <span className="text-base font-medium">{item.rightText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
