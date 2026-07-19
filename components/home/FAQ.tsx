"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { faqItems } from "@/lib/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <SectionWrapper id="faq" className="bg-[#F2EDE6] dark:bg-[#1B1B1B]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <Badge>FAQ</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
              Questions we get a lot.
            </h2>
            <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
              Don't see yours?{" "}
              <a href="/contact" className="text-[#C1704D] hover:underline underline-offset-2">
                Just ask us directly.
              </a>
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8 space-y-0">
            {faqItems.map((item, i) => (
              <div
                key={item.id}
                className={`border-b border-[#DDD2C3] dark:border-[#2B2B2B] ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={open === item.id}
                >
                  <span
                    className={`font-serif text-lg font-medium leading-snug transition-colors duration-200 ${
                      open === item.id
                        ? "text-[#C1704D]"
                        : "text-[#4B3A32] dark:text-[#F2EDE6] group-hover:text-[#C1704D]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="shrink-0 mt-0.5 text-[#A78F7A]">
                    {open === item.id ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {open === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed pb-5 pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
