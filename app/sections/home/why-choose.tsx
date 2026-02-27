"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Playfair_Display, DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"] });

// ── DATA ──
const CARDS = [
  {
    id: 0,
    image: "/home/why-choose/Why Choose Us 1.jpg",
    label: "Multiple category Products",
    side: "left" as const,
  },
  {
    id: 1,
    image: "/home/why-choose/Why Choose Us 2.jpg",
    label: "Quality products built for everyday use",
    side: "left" as const,
  },
  {
    id: 2,
    image: "/home/why-choose/Why Choose Us 3.jpg",
    label: "Region based Products and Pricing",
    side: "left" as const,
  },
  {
    id: 3,
    image: "/home/why-choose/Why Choose Us 4.jpg",
    label: "Extended Warranty on Products",
    side: "right" as const,
  },
  {
    id: 4,
    image: "/home/why-choose/Why Choose Us 5.jpg",
    label: "Strong global sourcing and supply network",
    side: "right" as const,
  },
  {
    id: 5,
    image: "/home/why-choose/Why Choose Us 6.jpg",
    label: "Practical approach, clear communication",
    side: "right" as const,
  },
];

const TILTS = [2.1, -3.4, 1.8, -2.7, 3.2, -1.5];

function getCardStyle(pos: number, tilt: number): React.CSSProperties {
  if (pos === 0)
    return {
      transform: "translateY(0) rotate(0deg) scale(1)",
      opacity: 1,
      zIndex: 20,
    };
  if (pos === 1)
    return {
      transform: `translateY(18px) rotate(${tilt}deg) scale(0.96)`,
      opacity: 0.85,
      zIndex: 19,
    };
  if (pos === 2)
    return {
      transform: `translateY(34px) rotate(${-tilt}deg) scale(0.92)`,
      opacity: 0.6,
      zIndex: 18,
    };
  if (pos === 3)
    return {
      transform: `translateY(48px) rotate(${tilt * 0.6}deg) scale(0.88)`,
      opacity: 0.3,
      zIndex: 17,
    };
  return {
    transform: "translateY(60px) scale(0.84)",
    opacity: 0,
    zIndex: 16 - pos,
  };
}

// ── DESKTOP LIST ITEM ──
interface ListItemProps {
  label: string;
  active: boolean;
  align: "left" | "right";
  onClick: () => void;
  isLarge?: boolean;
}

function ListItem({ label, active, align, onClick, isLarge }: ListItemProps) {
  const [hovered, setHovered] = useState(false);
  const isHighlighted = active || hovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: align === "right" ? "row-reverse" : "row",
        alignItems: "flex-start",
        padding: isLarge ? "18px 20px" : "14px 16px",
        borderRadius: 12,
        cursor: "pointer",
        border: "none",
        background: isHighlighted ? "#FDF8EE" : "transparent",
        textAlign: align,
        width: "100%",
        transform: hovered
          ? align === "right"
            ? "translateX(-4px)"
            : "translateX(4px)"
          : "translateX(0)",
        transition: "background 0.3s ease, transform 0.3s ease",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: isLarge ? 10 : 8,
          height: isLarge ? 10 : 8,
          background: isHighlighted ? "#C9A84C" : "#E8D08A",
          transform: `rotate(45deg) scale(${isHighlighted ? 1.3 : 1})`,
          marginRight: align === "left" ? (isLarge ? 18 : 14) : 0,
          marginLeft: align === "right" ? (isLarge ? 18 : 14) : 0,
          marginTop: 7,
          transition: "background 0.3s ease, transform 0.3s ease",
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontSize: isLarge ? "1.2rem" : undefined,
          fontWeight: isHighlighted ? 500 : 400,
          color: isHighlighted ? "#1A1612" : "#3D3530",
          lineHeight: 1.4,
          transition: "color 0.3s ease",
        }}
        className={!isLarge ? "text-md lg:text-lg" : undefined}
      >
        {label}
      </span>
    </button>
  );
}

// ── MOBILE LIST ITEM ──
function MobileListItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 14px",
        borderRadius: 12,
        cursor: "pointer",
        border: `1px solid ${active ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
        background: active ? "#FDF8EE" : "transparent",
        width: "100%",
        textAlign: "left",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: 7,
          height: 7,
          background: active ? "#C9A84C" : "#E8D08A",
          transform: `rotate(45deg) scale(${active ? 1.2 : 1})`,
          transition: "background 0.3s ease, transform 0.3s ease",
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontSize: 13,
          fontWeight: active ? 500 : 400,
          color: active ? "#1A1612" : "#3D3530",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </button>
  );
}

// ── MAIN COMPONENT ──
export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 900);
      setIsLarge(w >= 1400);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const nextCard = useCallback(() => {
    setActive((prev) => (prev + 1) % CARDS.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextCard, 3200);
  }, [nextCard]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleSetActive = (idx: number) => {
    setActive(idx);
    resetTimer();
  };

  const handleStackClick = () => {
    setActive((prev) => (prev + 1) % CARDS.length);
    resetTimer();
  };

  const leftItems = CARDS.filter((c) => c.side === "left");
  const rightItems = CARDS.filter((c) => c.side === "right");

  // Card dimensions scale with screen size
  const cardW = isMobile ? 240 : isLarge ? 360 : 280;
  const cardH = isMobile ? 320 : isLarge ? 480 : 370;

  // ── SHARED: CARD STACK ──
  const CardStack = (
    <div
      onClick={handleStackClick}
      style={{
        position: "relative",
        width: cardW,
        height: cardH,
        cursor: "pointer",
        perspective: "1000px",
      }}
    >
      {CARDS.map((card, i) => {
        const pos =
          (((i - active) % CARDS.length) + CARDS.length) % CARDS.length;
        const tilt = TILTS[i % TILTS.length];
        const cardStyle = getCardStyle(pos, tilt);

        return (
          <div
            key={card.id}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: isLarge ? 32 : 24,
              overflow: "hidden",
              border: `${isLarge ? 8 : 6}px solid #FEFCF8`,
              boxShadow:
                pos === 0
                  ? "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1), 0 0 0 1px rgba(201,168,76,0.3)"
                  : "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
              transition:
                "transform 0.55s cubic-bezier(0.34,1.26,0.64,1), opacity 0.45s ease, box-shadow 0.45s ease",
              willChange: "transform, opacity",
              ...cardStyle,
            }}
          >
            {pos === 0 && (
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, transparent 50%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt={card.label}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        );
      })}
    </div>
  );

  // ── SHARED: DOT NAVIGATION ──
  const Dots = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        marginTop: 20,
      }}
    >
      {CARDS.map((card, i) => (
        <button
          key={card.id}
          onClick={(e) => {
            e.stopPropagation();
            handleSetActive(i);
          }}
          aria-label={`Go to card ${i + 1}`}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: active === i ? "#C9A84C" : "#E8D08A",
            transform: active === i ? "scale(1.4)" : "scale(1)",
            transition: "background 0.3s ease, transform 0.3s ease",
            padding: 0,
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      className={dmSans.className}
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: isMobile
          ? "64px 0 72px"
          : isLarge
            ? "120px 0 140px"
            : "100px 0 120px",
        overflow: "hidden",
        background: "#FEFCF8",
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 30% 50% at 10% 60%, rgba(201,168,76,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* ── HEADER ── */}
      <div
        className="text-center mx-auto mb-4 lg:mb-16"
        style={{
          maxWidth: isLarge ? "56rem" : "56rem",
          padding: "0 24px",
        }}
      >
        <h2 className="text-4xl lg:text-4xl mb-3 xl:text-5xl">
          WHY CHOOSE <span className="text-primary">US</span>
        </h2>

        <p className="text-gray-600 text-lg mb-2">
          A simple approach, built around real business needs.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mx-auto mb-4">
          We focus on products that are reliable, and made to perform in
          everyday working conditions.
        </p>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            padding: "0 20px",
          }}
        >
          {/* Stack + dots */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {CardStack}
          </div>

          {/* All 6 items in 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              width: "100%",
              maxWidth: 480,
            }}
            className="mt-10 lg:mt-0"
          >
            {CARDS.map((item) => (
              <MobileListItem
                key={item.id}
                label={item.label}
                active={active === item.id}
                onClick={() => handleSetActive(item.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        /* ── DESKTOP LAYOUT ── */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: isLarge ? 80 : 60,
            alignItems: "center",
            maxWidth: isLarge ? 1440 : 1100,
            margin: "0 auto",
            padding: isLarge ? "0 60px" : "0 40px",
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isLarge ? 12 : 8,
            }}
          >
            {leftItems.map((item) => (
              <ListItem
                key={item.id}
                label={item.label}
                active={active === item.id}
                align="left"
                onClick={() => handleSetActive(item.id)}
                isLarge={isLarge}
              />
            ))}
          </div>

          {/* Center */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            {CardStack}
          </div>

          {/* Right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isLarge ? 12 : 8,
            }}
          >
            {rightItems.map((item) => (
              <ListItem
                key={item.id}
                label={item.label}
                active={active === item.id}
                align="right"
                onClick={() => handleSetActive(item.id)}
                isLarge={isLarge}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
