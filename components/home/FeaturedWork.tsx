"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { caseStudies } from "@/lib/data/work";

const gradients = [
  "from-[#DDD2C3] to-[#CDBCA9]",
  "from-[#C1704D]/20 to-[#DDD2C3]",
  "from-[#CDBCA9] to-[#A78F7A]/40",
];

export default function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <SectionWrapper id="work" className="bg-[#F2EDE6] dark:bg-[#1B1B1B]">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <Badge>Selected Work</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
              Results, not just renders.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C1704D] hover:gap-3 transition-all duration-300"
          >
            View all work <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case study blocks */}
        <div className="space-y-6 md:space-y-8">
          {featured.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 }}
              className="group"
            >
              <Link href={`/work/${cs.slug}`} className="block">
                <div
                  className={`grid grid-cols-1 ${
                    i % 2 === 0 ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-[45%_55%]"
                  } gap-0 rounded-2xl overflow-hidden border border-[#DDD2C3] dark:border-[#2B2B2B] transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br ${gradients[i % gradients.length]} ${
                      i % 2 !== 0 ? "lg:order-2" : ""
                    } overflow-hidden`}
                  >
                    {/* Muted gradient placeholder */}
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                      {/* Decorative element in image area */}
                      <div className="w-full max-w-[200px]">
                        <div className="text-5xl font-serif font-light text-[#7A6556]/40 leading-none mb-2">
                          {cs.result}
                        </div>
                        <div className="text-xs text-[#7A6556]/60 uppercase tracking-widest">
                          {cs.resultLabel}
                        </div>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[#C1704D]/0 group-hover:bg-[#C1704D]/8 transition-colors duration-400" />
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-between p-8 md:p-10 bg-[#F8F6F2] dark:bg-[#2B2B2B] ${
                      i % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#F2EDE6] dark:bg-[#1B1B1B] text-[#7A6556] dark:text-[#A78F7A] border border-[#DDD2C3] dark:border-[#4B3A32]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <p className="eyebrow text-[#A78F7A] mb-2">
                          {cs.client} · {cs.year}
                        </p>
                        <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#4B3A32] dark:text-[#F2EDE6] leading-snug">
                          {cs.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                        {cs.excerpt}
                      </p>
                    </div>

                    {/* Result stat + link */}
                    <div className="mt-8 flex items-end justify-between">
                      <div>
                        <div className="font-serif text-4xl text-[#C1704D] font-light leading-none">
                          {cs.result}
                        </div>
                        <div className="text-xs text-[#A78F7A] mt-1 max-w-[160px] leading-tight">
                          {cs.resultLabel}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-[#C1704D] group-hover:gap-3 transition-all duration-300">
                        View case study <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
