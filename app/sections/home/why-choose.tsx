"use client";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  CSSProperties,
} from "react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

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

// Pre-compute static transform strings so they're never rebuilt at runtime
const CARD_TRANSFORMS: Record<
  number,
  { transform: string; opacity: number; zIndex: number }
> = {
  0: {
    transform: "translateY(0px) rotate(0deg) scale(1)",
    opacity: 1,
    zIndex: 20,
  },
  1: {
    transform: "translateY(18px) rotate(0deg) scale(0.96)",
    opacity: 0.85,
    zIndex: 19,
  },
  2: {
    transform: "translateY(34px) rotate(0deg) scale(0.92)",
    opacity: 0.6,
    zIndex: 18,
  },
  3: {
    transform: "translateY(48px) rotate(0deg) scale(0.88)",
    opacity: 0.3,
    zIndex: 17,
  },
};

// Tilt is baked into per-card, per-position strings at module load — zero runtime cost
const CARD_TRANSFORM_CACHE: Record<
  string,
  { transform: string; opacity: number; zIndex: number }
> = {};
function getCardTransform(cardIndex: number, pos: number) {
  const key = `${cardIndex}-${pos}`;
  if (CARD_TRANSFORM_CACHE[key]) return CARD_TRANSFORM_CACHE[key];
  const tilt = TILTS[cardIndex % TILTS.length];
  let result: { transform: string; opacity: number; zIndex: number };
  if (pos === 0)
    result = {
      transform: "translateY(0px) rotate(0deg) scale(1)",
      opacity: 1,
      zIndex: 20,
    };
  else if (pos === 1)
    result = {
      transform: `translateY(18px) rotate(${tilt}deg) scale(0.96)`,
      opacity: 0.85,
      zIndex: 19,
    };
  else if (pos === 2)
    result = {
      transform: `translateY(34px) rotate(${-tilt}deg) scale(0.92)`,
      opacity: 0.6,
      zIndex: 18,
    };
  else if (pos === 3)
    result = {
      transform: `translateY(48px) rotate(${tilt * 0.6}deg) scale(0.88)`,
      opacity: 0.3,
      zIndex: 17,
    };
  else
    result = {
      transform: "translateY(60px) rotate(0deg) scale(0.84)",
      opacity: 0,
      zIndex: 16 - pos,
    };
  CARD_TRANSFORM_CACHE[key] = result;
  return result;
}

// Static shadows — never change, defined once outside render tree
const SHADOW_TOP = "0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)";
const SHADOW_REST = "0 4px 16px rgba(0,0,0,0.08)";

// ── DESKTOP LIST ITEM ──
// memo prevents re-render unless active/label/inView actually change
const ListItem = memo(function ListItem({
  label,
  active,
  align,
  onClick,
  isLarge,
  inView,
  delay,
}: {
  label: string;
  active: boolean;
  align: "left" | "right";
  onClick: () => void;
  isLarge?: boolean;
  inView: boolean;
  delay: number;
}) {
  // CSS class-based hover → avoids JS state entirely, zero re-renders on hover
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        // Use translateX(0) not "none" — keeps element on compositor thread
        transform: inView
          ? "translateX(0px)"
          : align === "right"
            ? "translateX(32px)"
            : "translateX(-32px)",
        transition: inView
          ? `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`
          : "none",
      }}
    >
      <button
        onClick={onClick}
        data-align={align}
        data-active={active ? "true" : "false"}
        style={{
          display: "flex",
          flexDirection: align === "right" ? "row-reverse" : "row",
          alignItems: "flex-start",
          padding: isLarge ? "18px 20px" : "14px 16px",
          borderRadius: 12,
          cursor: "pointer",
          border: "none",
          background: active ? "#FDF8EE" : "transparent",
          textAlign: align,
          width: "100%",
          // translateX(0) as default so GPU layer is allocated — avoids layer promotion jank on hover
          transform: "translateX(0px)",
          transition: "background 0.2s ease, transform 0.2s ease",
        }}
        // Use CSS pseudo-class via inline onMouse for transform only (no state, no re-render)
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            align === "right" ? "translateX(-4px)" : "translateX(4px)";
          if (!active) {
            (e.currentTarget as HTMLButtonElement).style.background = "#FDF8EE";
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateX(0px)";
          if (!active) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
          }
        }}
      >
        <span
          style={{
            flexShrink: 0,
            width: isLarge ? 10 : 8,
            height: isLarge ? 10 : 8,
            background: active ? "#C9A84C" : "#E8D08A",
            transform: active
              ? "rotate(45deg) scale(1.3)"
              : "rotate(45deg) scale(1)",
            marginRight: align === "left" ? (isLarge ? 18 : 14) : 0,
            marginLeft: align === "right" ? (isLarge ? 18 : 14) : 0,
            marginTop: 7,
            transition: "background 0.2s ease, transform 0.2s ease",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontSize: isLarge ? "1.2rem" : undefined,
            fontWeight: active ? 500 : 400,
            color: active ? "#1A1612" : "#3D3530",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
          }}
          className={!isLarge ? "text-md lg:text-lg" : undefined}
        >
          {label}
        </span>
      </button>
    </div>
  );
});

// ── MOBILE LIST ITEM ──
const MobileListItem = memo(function MobileListItem({
  label,
  active,
  onClick,
  inView,
  delay,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(14px)",
        transition: inView
          ? `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`
          : "none",
      }}
    >
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
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <span
          style={{
            flexShrink: 0,
            width: 7,
            height: 7,
            background: active ? "#C9A84C" : "#E8D08A",
            transform: active
              ? "rotate(45deg) scale(1.2)"
              : "rotate(45deg) scale(1)",
            transition: "background 0.2s ease, transform 0.2s ease",
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
    </div>
  );
});

// ── CARD STACK — isolated component so its renders don't affect list items ──
const CardStack = memo(function CardStack({
  active,
  cardW,
  cardH,
  isLarge,
  inView,
  onClick,
}: {
  active: number;
  cardW: number;
  cardH: number;
  isLarge: boolean;
  inView: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        width: cardW,
        height: cardH,
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(24px)",
        transition: inView
          ? "opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s"
          : "none",
      }}
    >
      {CARDS.map((card, i) => {
        const pos =
          (((i - active) % CARDS.length) + CARDS.length) % CARDS.length;
        const { transform, opacity, zIndex } = getCardTransform(i, pos);
        return (
          <div
            className="shadow-md border-gray-200!"
            key={card.id}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: isLarge ? 32 : 24,
              overflow: "hidden",
              border: `${isLarge ? 8 : 6}px solid #FEFCF8`,
              // boxShadow is NOT transitioned — removing it from the transition
              // string prevents a paint on every animation frame
              // Only transition transform + opacity (compositor-only, no paint)
              transition:
                "transform 0.45s cubic-bezier(0.3``4,1.26,0.64,1), opacity 0.35s ease",
              willChange: "transform, opacity",
              transform,
              opacity,
              zIndex,
            }}
          >
            {pos === 0 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: isLarge ? 32 : 24,
                  boxShadow: SHADOW_TOP,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={card.image}
              alt={card.label}
              loading="lazy"
              // Prevents layout recalc from image load
              width={cardW}
              height={cardH}
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
});

// ── DOTS — isolated so it doesn't trigger card/list re-renders ──
const Dots = memo(function Dots({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
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
            onSelect(i);
          }}
          aria-label={`Go to card ${i + 1}`}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            padding: 0,
            background: active === i ? "#C9A84C" : "#E8D08A",
            transform: active === i ? "scale(1.4)" : "scale(1)",
            transition: "background 0.2s ease, transform 0.2s ease",
          }}
        />
      ))}
    </div>
  );
});

// ── MAIN COMPONENT ──
export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [inView, setInView] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const resizeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 900);
      setIsLarge(w >= 1400);
    };
    const debounced = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(check, 150);
    };
    check();
    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
    };
  }, []);

  const nextCard = useCallback(
    () => setActive((p) => (p + 1) % CARDS.length),
    [],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextCard, 3200);
  }, [nextCard]);

  useEffect(() => {
    if (!inView) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [inView, resetTimer]);

  // Stable callbacks — won't cause child re-renders
  const handleSetActive = useCallback(
    (idx: number) => {
      setActive(idx);
      resetTimer();
    },
    [resetTimer],
  );

  const handleStackClick = useCallback(() => {
    setActive((p) => (p + 1) % CARDS.length);
    resetTimer();
  }, [resetTimer]);

  const leftItems = CARDS.filter((c) => c.side === "left");
  const rightItems = CARDS.filter((c) => c.side === "right");
  const cardW = isMobile ? 240 : isLarge ? 360 : 280;
  const cardH = isMobile ? 320 : isLarge ? 480 : 370;

  return (
    <section
      ref={sectionRef}
      className={dmSans.className}
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: isMobile
          ? "64px 0 72px"
          : isLarge
            ? "120px 0 80px"
            : "100px 0 120px",
        overflow: "hidden",
        background: "#FEFCF8",
        contain: "layout paint",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 30% 50% at 10% 60%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
      />

      {/* HEADER */}
      <div
        className="text-center mx-auto mb-4 lg:mb-16"
        style={{
          maxWidth: "56rem",
          padding: "0 24px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0px)" : "translateY(18px)",
          transition: inView
            ? "opacity 0.5s ease, transform 0.5s ease"
            : "none",
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

      {/* MOBILE */}
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
          <CardStack
            active={active}
            cardW={cardW}
            cardH={cardH}
            isLarge={isLarge}
            inView={inView}
            onClick={handleStackClick}
          />
          <Dots active={active} onSelect={handleSetActive} />
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
            {CARDS.map((item, i) => (
              <MobileListItem
                key={item.id}
                label={item.label}
                active={active === item.id}
                onClick={() => handleSetActive(item.id)}
                inView={inView}
                delay={120 + i * 50}
              />
            ))}
          </div>
        </div>
      ) : (
        /* DESKTOP */
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isLarge ? 12 : 8,
            }}
          >
            {leftItems.map((item, i) => (
              <ListItem
                key={item.id}
                label={item.label}
                active={active === item.id}
                align="left"
                onClick={() => handleSetActive(item.id)}
                isLarge={isLarge}
                inView={inView}
                delay={120 + i * 70}
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            <CardStack
              active={active}
              cardW={cardW}
              cardH={cardH}
              isLarge={isLarge}
              inView={inView}
              onClick={handleStackClick}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isLarge ? 12 : 8,
            }}
          >
            {rightItems.map((item, i) => (
              <ListItem
                key={item.id}
                label={item.label}
                active={active === item.id}
                align="right"
                onClick={() => handleSetActive(item.id)}
                isLarge={isLarge}
                inView={inView}
                delay={120 + i * 70}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
