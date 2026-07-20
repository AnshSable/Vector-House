"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import { caseStudies } from "@/lib/data/work";

const allTags = ["All", ...Array.from(new Set(caseStudies.flatMap((c) => c.tags)))];

const gradients = [
  "from-[#DDD2C3] to-[#CDBCA9]",
  "from-[#C1704D]/20 to-[#DDD2C3]",
  "from-[#CDBCA9] to-[#A78F7A]/40",
  "from-[#DDD2C3] to-[#C1704D]/15",
];

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.tags.includes(activeTag));

  return (
    <>
      <Nav />
      <main className="bg-[#F8F6F2] dark:bg-[#1B1B1B] min-h-screen">
        {/* Hero */}
        <section className="pt-36 pb-16 bg-[#F2EDE6] dark:bg-[#1B1B1B]">
          <div className="container-site space-y-5">
            <Badge>Selected Work</Badge>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-2xl">
              Work we&apos;re proud to put our name on.
            </h1>
          </div>
        </section>

        {/* Filter bar */}
        <section className="py-8 border-b border-[#DDD2C3] dark:border-[#2B2B2B] bg-[#F8F6F2] dark:bg-[#1B1B1B]">
          <div className="container-site flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? "bg-[#C1704D] text-[#F8F6F2]"
                    : "bg-[#F2EDE6] dark:bg-[#2B2B2B] text-[#7A6556] dark:text-[#A78F7A] hover:bg-[#DDD2C3] dark:hover:bg-[#4B3A32]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="section-py">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cs, i) => (
                <motion.article
                  key={cs.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }}
                >
                  <Link
                    href={`/work/${cs.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-[#DDD2C3] dark:border-[#2B2B2B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-[#F2EDE6] dark:bg-[#2B2B2B]"
                  >
                    {/* Image */}
                    <div
                      className={`aspect-[16/10] bg-gradient-to-br ${gradients[i % gradients.length]} relative overflow-hidden`}
                    >
                      {cs.thumbnailImage && !cs.thumbnailImage.includes("/images/work/") ? (
                        <Image
                          src={cs.thumbnailImage}
                          alt={cs.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out bg-gradient-to-br opacity-80"
                          style={{ backgroundImage: `linear-gradient(135deg, ${
                            ["#DDD2C3", "#CDBCA9", "#C1704D22", "#A78F7A66"][i % 4]
                          }, ${["#CDBCA9", "#DDD2C3", "#DDD2C3", "#DDD2C3"][i % 4]})` }}
                        />
                      )}
                      {/* Result stat overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-[#F8F6F2]/90 backdrop-blur-sm rounded-lg px-3 py-2">
                          <div className="font-serif text-xl text-[#C1704D] font-light leading-none">
                            {cs.result}
                          </div>
                          <div className="text-[10px] text-[#7A6556] mt-0.5 max-w-[120px] leading-tight">
                            {cs.resultLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {cs.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-[#DDD2C3]/60 dark:bg-[#1B1B1B] text-[#7A6556] dark:text-[#A78F7A] uppercase tracking-widest font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div>
                        <p className="eyebrow text-[#A78F7A] mb-1">{cs.client}</p>
                        <h2 className="font-serif text-lg font-medium text-[#4B3A32] dark:text-[#F2EDE6] leading-snug">
                          {cs.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#C1704D] group-hover:gap-3 transition-all duration-300">
                        View case study <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
