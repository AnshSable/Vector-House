"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#2B2B2B] dark:bg-[#1B1B1B] py-24 md:py-36">
      {/* Warm radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(193,112,77,0.35) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23F2EDE6'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <p className="eyebrow text-[#A78F7A]">Ready when you are</p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F2EDE6] leading-tight">
            Let&apos;s build something{" "}
            <em className="text-[#C1704D] not-italic">you&apos;re proud of.</em>
          </h2>

          <p className="text-base text-[#A78F7A] leading-relaxed max-w-xl mx-auto">
            Tell us what you&apos;re working on. We&apos;ll respond within one
            business day with thoughts, questions, and a clear next step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start a Project
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Reassurance row */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {[
              "No commitment required",
              "Reply within 24 hours",
              "INR & USD accepted",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-[#7A6556]"
              >
                <div className="w-1 h-1 rounded-full bg-[#C1704D]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
