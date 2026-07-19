"use client";

import { Monitor, Cpu, PenTool, Film, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  cpu: Cpu,
  "pen-tool": PenTool,
  film: Film,
};

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="bg-[#F8F6F2] dark:bg-[#1B1B1B]">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <Badge>Services</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-lg">
              Four crafts, one roof.
            </h2>
          </div>
          <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed max-w-xs">
            We go deep in each discipline — no jack-of-all-trades generalism,
            just focused expertise working together.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group block bg-[#F2EDE6] dark:bg-[#2B2B2B] rounded-2xl p-7 md:p-8 h-full transition-all duration-300 hover:bg-[#DDD2C3]/60 dark:hover:bg-[#2B2B2B] hover:shadow-md hover:-translate-y-0.5 border border-transparent hover:border-[#DDD2C3] dark:hover:border-[#4B3A32]"
                >
                  {/* Numeral + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-serif text-[#CDBCA9] dark:text-[#4B3A32] text-4xl font-light leading-none">
                      {service.numeral}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#DDD2C3]/60 dark:bg-[#4B3A32]/60 flex items-center justify-center text-[#7A6556] dark:text-[#CDBCA9] group-hover:bg-[#C1704D] group-hover:text-[#F8F6F2] transition-all duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-medium text-[#4B3A32] dark:text-[#F2EDE6] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#C1704D] group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
