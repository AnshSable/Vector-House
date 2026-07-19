"use client";

import { motion } from "framer-motion";

const logos = [
  "Nexus Finance",
  "Terroir Studio",
  "Meridian Legal",
  "Orbit Labs",
  "Kairos Health",
  "Vantage & Co.",
];

export default function TrustStrip() {
  return (
    <section className="py-10 bg-[#F2EDE6] dark:bg-[#1B1B1B] border-y border-[#DDD2C3] dark:border-[#2B2B2B]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <span className="eyebrow shrink-0 text-[#A78F7A]">Trusted by</span>
          <div className="relative w-full overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F2EDE6] dark:from-[#1B1B1B] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F2EDE6] dark:from-[#1B1B1B] to-transparent z-10" />
            {/* Marquee */}
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="font-serif text-base font-light text-[#CDBCA9] dark:text-[#7A6556] tracking-wide select-none shrink-0"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
