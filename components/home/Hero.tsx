"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F8F6F2] dark:bg-[#1B1B1B]">
      {/* Subtle background texture pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B3A32' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm gradient blobs */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-3xl rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(193,112,77,0.10) 0%, transparent 70%)",
          transform: "translate(20%, -30%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-xl rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(205,188,169,0.25) 0%, transparent 70%)",
          transform: "translate(-20%, 30%)",
        }}
      />

      <div className="container-site relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Badge>Digital Agency — Web · AI · Design</Badge>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] text-[#4B3A32] dark:text-[#F2EDE6] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              We build what your{" "}
              <em className="text-[#C1704D] not-italic">business</em>{" "}
              needs to&nbsp;move&nbsp;fast.
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-[#7A6556] dark:text-[#A78F7A] leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              Web products, AI agents, design systems, and motion — built with
              craft, delivered with clarity. For ambitious teams that care about
              the details.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            >
              <Button href="/contact" size="lg">
                Start a Project
                <ArrowRight size={16} />
              </Button>
              <Button href="/work" variant="ghost" size="lg">
                View Our Work
              </Button>
            </motion.div>

            {/* Trust mini-stat row */}
            <motion.div
              className="flex flex-wrap gap-6 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {[
                { stat: "40+", label: "Projects shipped" },
                { stat: "3 continents", label: "Clients served" },
                { stat: "4 disciplines", label: "Under one roof" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <div className="font-serif text-2xl text-[#4B3A32] dark:text-[#F2EDE6] font-light">
                    {stat}
                  </div>
                  <div className="text-xs text-[#A78F7A] mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: hero visual */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/be94882a-1408-4ffd-96ec-481d64a6e84a.png"
                  alt="Hero Workspace"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                  {/* Floating UI card mockup */}
                  <div className="bg-[#F8F6F2]/90 dark:bg-[#1B1B1B]/90 backdrop-blur-sm rounded-xl p-4 w-full max-w-[220px] shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#C1704D] flex items-center justify-center text-white text-xs font-medium">
                        VH
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                          Project delivered
                        </div>
                        <div className="text-xs text-[#A78F7A]">6 weeks · on budget</div>
                      </div>
                    </div>
                    <div className="h-1 bg-[#DDD2C3] dark:bg-[#2B2B2B] rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[#C1704D] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#F8F6F2] dark:bg-[#2B2B2B] rounded-xl p-4 shadow-lg border border-[#DDD2C3] dark:border-[#2B2B2B]"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="text-2xl font-serif text-[#C1704D] font-light">340%</div>
                <div className="text-xs text-[#A78F7A] mt-0.5">Lead growth</div>
              </motion.div>

              {/* Accent dot */}
              <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full border border-[#DDD2C3] dark:border-[#2B2B2B] opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="eyebrow text-[#A78F7A]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#A78F7A] to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
