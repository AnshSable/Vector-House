"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="testimonials" className="bg-[#F8F6F2] dark:bg-[#1B1B1B]">
      <div className="container-site">
        <div className="space-y-3 mb-14">
          <Badge>Client Stories</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-lg">
            Heard from those who've been there.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quote area */}
          <div className="lg:col-span-8 relative min-h-[260px] md:min-h-[220px]">
            <Quote
              size={40}
              className="text-[#C1704D]/30 mb-6"
              strokeWidth={1}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-relaxed">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-[#DDD2C3] dark:bg-[#2B2B2B] flex items-center justify-center text-sm font-medium text-[#7A6556] dark:text-[#A78F7A]">
                    {testimonials[active].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                      {testimonials[active].author}
                    </div>
                    <div className="text-xs text-[#A78F7A]">
                      {testimonials[active].role},{" "}
                      <span className="text-[#7A6556] dark:text-[#CDBCA9]">
                        {testimonials[active].company}
                      </span>
                    </div>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector tabs */}
          <div className="lg:col-span-4 space-y-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-250 ${
                  active === i
                    ? "bg-[#F2EDE6] dark:bg-[#2B2B2B] border-l-2 border-[#C1704D]"
                    : "hover:bg-[#F2EDE6]/60 dark:hover:bg-[#2B2B2B]/60"
                }`}
              >
                <div className="text-sm font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                  {t.author}
                </div>
                <div className="text-xs text-[#A78F7A] mt-0.5">
                  {t.company}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
