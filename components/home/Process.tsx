"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const steps = [
  {
    numeral: "01",
    title: "Discovery",
    description:
      "We start by understanding your users, your goals, and the gap between them. A focused discovery session saves weeks of rebuilding later.",
  },
  {
    numeral: "02",
    title: "Design",
    description:
      "Wireframes, systems, and high-fidelity prototypes — all with rationale. You see exactly what you're getting before a line of code is written.",
  },
  {
    numeral: "03",
    title: "Build",
    description:
      "We build in short, visible cycles. You get weekly updates and demos — no black-box development, no surprises at the end.",
  },
  {
    numeral: "04",
    title: "Launch & Beyond",
    description:
      "We handle deployment, handoff, and knowledge transfer. And we stick around — most clients become long-term partners.",
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process" className="bg-[#F8F6F2] dark:bg-[#1B1B1B]">
      <div className="container-site">
        <div className="space-y-3 mb-14">
          <Badge>How We Work</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-lg">
            A process built on transparency.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.numeral}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(100%+0px)] w-full h-px bg-[#DDD2C3] dark:bg-[#2B2B2B] z-0" style={{ left: "auto", right: "-50%", width: "100%" }}>
                  <div className="h-px w-full bg-[#DDD2C3] dark:bg-[#2B2B2B]" />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[#C1704D] text-3xl font-light leading-none">
                    {step.numeral}
                  </span>
                  <div className="h-px flex-1 bg-[#DDD2C3] dark:bg-[#2B2B2B] lg:hidden" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
