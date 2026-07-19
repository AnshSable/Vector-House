"use client";

import { Zap, Globe, MessageSquare, Layers } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const differentiators = [
  {
    icon: Zap,
    title: "AI-native from day one.",
    description:
      "We don't retrofit AI — every product we scope considers automation and intelligence as foundational, not afterthought features.",
  },
  {
    icon: Layers,
    title: "Design and engineering in the same room.",
    description:
      "Our design and dev teams work in parallel, not in sequence. That means fewer handoff gaps, tighter builds, and better end products.",
  },
  {
    icon: Globe,
    title: "Built for global standards.",
    description:
      "Based in India, working with clients across 3 continents. We understand what international credibility requires — and how to build it.",
  },
  {
    icon: MessageSquare,
    title: "Communication you'll actually enjoy.",
    description:
      "Clear async updates, no jargon, honest timelines. We treat your time as seriously as we treat the work.",
  },
];

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-[#F2EDE6] dark:bg-[#1B1B1B]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <Badge>Why Vector House</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
              We work differently.
            </h2>
            <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
              Not because we claim to — but because the work shows it.
            </p>
          </div>

          {/* Right: differentiator list */}
          <div className="lg:col-span-8 space-y-2">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
                className="group flex gap-5 p-6 rounded-2xl hover:bg-[#F8F6F2] dark:hover:bg-[#2B2B2B] transition-colors duration-300 cursor-default"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#DDD2C3]/60 dark:bg-[#2B2B2B] flex items-center justify-center text-[#7A6556] dark:text-[#A78F7A] group-hover:bg-[#C1704D] group-hover:text-[#F8F6F2] transition-all duration-300">
                  <item.icon size={18} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
