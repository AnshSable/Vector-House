"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  { id: "screen-rd1", label: "Dashboard",     src: "/images/RD1.png" },
  { id: "screen-rd2", label: "Order Tracking", src: "/images/RD2.png" },
  { id: "screen-rd3", label: "Inventory",      src: "/images/RD3.png" },
];

const posVariants = {
  left:   { y: 0,   scale: 0.86, opacity: 0.6,  zIndex: 0  },
  center: { y: -64, scale: 1,    opacity: 1,    zIndex: 10 },
  right:  { y: 0,   scale: 0.86, opacity: 0.6,  zIndex: 0  },
};

function PhoneFrame({ src, label, isCenter }: { src: string; label: string; isCenter: boolean }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 240,
        height: 490,
        borderRadius: 48,
        border: isCenter ? "6px solid rgba(193,112,77,0.30)" : "6px solid #222",
        background: "#0D0D0D",
        boxShadow: isCenter
          ? "0 60px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(193,112,77,0.12)"
          : "0 28px 56px rgba(0,0,0,0.55)",
      }}
    >
      {/* Actual screenshot */}
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover object-top"
        sizes="240px"
      />

      {/* Top status bar fade */}
      <div
        className="absolute top-0 inset-x-0 h-10 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.7), transparent)" }}
      />

      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0D0D0D] rounded-b-3xl z-20" />

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-white/25 z-10" />
    </div>
  );
}

export default function PhoneShowcase() {
  // order[0] = left, order[1] = center, order[2] = right
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[1], prev[2], prev[0]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const positions = ["left", "center", "right"] as const;

  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container-site">

        {/* Heading */}
        <div className="text-center mb-20 space-y-3">
          <p className="eyebrow text-[#A78F7A]">Mobile Experience</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F2EDE6] font-light">
            Built for field teams.<br />Designed for speed.
          </h2>
          <p className="text-sm text-[#7A6556] max-w-md mx-auto pt-1 leading-relaxed">
            The dedicated Flutter app gives sales executives full power — catalogue, orders, and customers — from their pocket.
          </p>
        </div>

        {/* Phone carousel */}
        <div className="flex items-end justify-center gap-10" style={{ paddingBottom: 80 }}>
          {positions.map((pos, posIdx) => {
            const screenIdx = order[posIdx];
            const screen = screens[screenIdx];
            const isCenter = pos === "center";

            return (
              <motion.div
                key={screen.id}
                layoutId={screen.id}
                animate={posVariants[pos]}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="flex-shrink-0 flex flex-col items-center"
                style={{ zIndex: posVariants[pos].zIndex }}
              >
                <PhoneFrame
                  src={screen.src}
                  label={screen.label}
                  isCenter={isCenter}
                />

                {/* Label only under center phone */}
                <motion.p
                  animate={{ opacity: isCenter ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-5 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C1704D]"
                >
                  {screen.label}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-2">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                // bring clicked screen to center
                const current = [...order];
                const clickedPos = current.indexOf(i);
                if (clickedPos === 0) setOrder([current[1], current[0], current[2]]);
                else if (clickedPos === 2) setOrder([current[0], current[2], current[1]]);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                order[1] === i ? "w-6 bg-[#C1704D]" : "w-1.5 bg-[#333]"
              }`}
              aria-label={`View ${screens[i].label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
