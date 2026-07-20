"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  { id: "web-admin",    label: "Admin Dashboard",    src: "/images/medi2.jpeg" },
  { id: "web-orders",   label: "Order Management",   src: "/images/medi3.jpeg" },
  { id: "web-retailer", label: "Retailer Portal",    src: "/images/medi4.jpeg" },
];

/* ─── Browser frame component ─────────────────────────────── */
function BrowserFrame({ src, label, isCenter }: { src: string; label: string; isCenter: boolean }) {
  return (
    <div
      className={`relative w-[640px] h-[400px] rounded-xl overflow-hidden transition-shadow duration-500 bg-white ${
        isCenter
          ? "shadow-[0_48px_96px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)]"
          : "shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
      }`}
      style={{
        border: isCenter ? "2px solid rgba(255,255,255,0.15)" : "2px solid #222",
      }}
    >
      {/* Browser top bar */}
      <div className="h-10 bg-[#E5E5E5] border-b border-[#D4D4D4] flex items-center px-4 gap-2">
        {/* Mac OS window buttons */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {/* URL Bar */}
        <div className="mx-auto w-1/2 h-6 bg-white rounded flex items-center justify-center shadow-inner">
          <div className="w-32 h-2 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Actual screenshot */}
      <div className="absolute inset-0 top-10 bg-white overflow-hidden">
        <Image src={src} alt={label} fill className="object-cover object-top" sizes="640px" />
      </div>
    </div>
  );
}

/* ─── Main carousel component ───────────────────────────── */
export default function WebShowcase() {
  // order = [leftIdx, centerIdx, rightIdx]
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[1], prev[2], prev[0]]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const positions = ["left", "center", "right"] as const;

  const posVariants = {
    left:   { x: 200, y: 0,   scale: 0.85, opacity: 0.6, zIndex: 0 },
    center: { x: 0,   y: -36, scale: 1,    opacity: 1,   zIndex: 10 },
    right:  { x: -200,y: 0,   scale: 0.85, opacity: 0.6, zIndex: 0 },
  };

  return (
    <section className="py-24 bg-[#0F0F0F] overflow-hidden">
      <div className="container-site relative">
        {/* Heading */}
        <div className="text-center mb-16 space-y-3">
          <p className="eyebrow text-[#A78F7A]">Platform Experience</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F2EDE6] font-light">
            Powerful for distributors.<br />Simple for retailers.
          </h2>
          <p className="text-sm text-[#7A6556] max-w-md mx-auto pt-1 leading-relaxed">
            A comprehensive dual-portal web platform driving the entire B2B pharmaceutical supply chain.
          </p>
        </div>

        {/* Web carousel */}
        <div className="flex items-center justify-center h-[460px] relative">
          {positions.map((pos, posIdx) => {
            const screenIdx = order[posIdx];
            const screen = screens[screenIdx];
            const isCenter = pos === "center";

            return (
              <motion.div
                key={screen.id}
                layoutId={screen.id}
                animate={posVariants[pos]}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="absolute flex flex-col items-center"
                style={{ zIndex: posVariants[pos].zIndex }}
              >
                <BrowserFrame
                  src={screen.src}
                  label={screen.label}
                  isCenter={isCenter}
                />
                
                {/* Label under center browser only */}
                <motion.p
                  animate={{ opacity: isCenter ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 text-[11px] font-medium tracking-[0.15em] uppercase text-[#F2EDE6]"
                >
                  {screen.label}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const current = [...order];
                const clickedPos = current.indexOf(i);
                if (clickedPos === 0) setOrder([current[1], current[0], current[2]]);
                else if (clickedPos === 2) setOrder([current[0], current[2], current[1]]);
              }}
              className={`h-1.5 rounded-full transition-all duration-400 ${
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
