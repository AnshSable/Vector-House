import type { Metadata } from "next";
import Image from "next/image";
import { Monitor, Cpu, PenTool, Film, Check, ArrowRight } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web & App Development, AI Agents & Automation, UI/UX Design, and Video & Motion Design — all under one roof at Antigravity.",
};

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  cpu: Cpu,
  "pen-tool": PenTool,
  film: Film,
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#F8F6F2] dark:bg-[#1B1B1B]">
        {/* Page hero */}
        <section className="pt-36 pb-16 bg-[#F2EDE6] dark:bg-[#1B1B1B]">
          <div className="container-site space-y-5">
            <Badge>What We Do</Badge>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-3xl">
              Every discipline you need. None you don&apos;t.
            </h1>
            <p className="text-base text-[#7A6556] dark:text-[#A78F7A] leading-relaxed max-w-xl">
              We built Antigravity around four crafts that work better together
              than apart. Here&apos;s exactly what we do — and what we can do for you.
            </p>
          </div>
        </section>

        {/* Service detail sections */}
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Monitor;
          const isEven = i % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.slug}
              className={`section-py border-t border-[#DDD2C3] dark:border-[#2B2B2B] ${
                isEven
                  ? "bg-[#F8F6F2] dark:bg-[#1B1B1B]"
                  : "bg-[#F2EDE6] dark:bg-[#1B1B1B]"
              }`}
            >
              <div className="container-site">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Number + content */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-6xl text-[#C1704D]/30 font-light leading-none">
                        {service.numeral}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-[#DDD2C3]/60 dark:bg-[#2B2B2B] flex items-center justify-center text-[#7A6556] dark:text-[#A78F7A]">
                        <Icon size={20} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#4B3A32] dark:text-[#F2EDE6] leading-snug">
                        {service.title}
                      </h2>
                      <p className="font-serif text-lg text-[#7A6556] dark:text-[#A78F7A] italic">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed text-base">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm text-[#7A6556] dark:text-[#A78F7A]">
                          <Check
                            size={15}
                            className="shrink-0 mt-0.5 text-[#C1704D]"
                            strokeWidth={2.5}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <Button href="/contact" size="md">
                      Start a {service.title} project
                      <ArrowRight size={15} />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#DDD2C3] dark:bg-[#2B2B2B]">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-[#DDD2C3] to-[#CDBCA9]/60 dark:from-[#2B2B2B] dark:to-[#1B1B1B]">
                          <div className="w-16 h-16 rounded-full bg-[#C1704D]/15 flex items-center justify-center mx-auto">
                            <Icon size={28} className="text-[#C1704D]" />
                          </div>
                          <p className="eyebrow text-[#A78F7A] text-[10px]">
                            {service.title}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
