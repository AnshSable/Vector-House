import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { team } from "@/lib/data/team";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vector House is a digital studio built around craft, clarity, and collaboration. Meet the team.",
};

const values = [
  {
    title: "Craft before scale.",
    description:
      "We'd rather build one exceptional thing than ten average ones. Quality is not negotiable — it's the whole point.",
  },
  {
    title: "Honest over impressive.",
    description:
      "We tell you what's possible, what's not, and how long it'll actually take. No pitch theatre, no inflated timelines.",
  },
  {
    title: "Long-term relationships.",
    description:
      "We measure success by whether clients come back. Most of our best work happened in the second or third project.",
  },
  {
    title: "Curiosity is the discipline.",
    description:
      "We're genuinely interested in how things work — your business, your users, the technology. That curiosity shows in the work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#F8F6F2] dark:bg-[#1B1B1B]">
        {/* Hero */}
        <section className="pt-36 pb-16 bg-[#F2EDE6] dark:bg-[#1B1B1B]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-5">
              <Badge>About Us</Badge>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
                A small studio that punches above its weight.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                Vector House was built to answer a simple question: what if a
                digital agency cared as much about the outcome as the client
                does? We&apos;re a focused team working across web, AI, design, and
                motion — for clients who want substance, not just style.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-py border-t border-[#DDD2C3] dark:border-[#2B2B2B]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-3">
              <Badge>Our Story</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
                Why we started, and why it matters.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-base text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
              <p>
                We started Vector House because we kept seeing the same problem:
                talented teams getting underwhelming work from agencies that were
                more focused on winning pitches than solving real problems.
              </p>
              <p>
                We set up differently. Small on purpose. Deep on craft. Honest
                about what&apos;s possible. We take on fewer clients so we can go
                deeper with each one — and we measure success by outcomes, not
                deliverables.
              </p>
              <p>
                Based in India, working globally. We serve clients across Europe,
                North America, and Asia — and we&apos;ve built the communication
                practices to make remote collaboration feel seamless.
              </p>
              <Button href="/contact" variant="outline" size="md">
                Work with us <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-py bg-[#F2EDE6] dark:bg-[#1B1B1B] border-t border-[#DDD2C3] dark:border-[#2B2B2B]">
          <div className="container-site">
            <div className="space-y-3 mb-14">
              <Badge>What We Believe</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-lg">
                The principles we actually follow.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className="bg-[#F8F6F2] dark:bg-[#2B2B2B] rounded-2xl p-7 border border-[#DDD2C3] dark:border-[#2B2B2B] space-y-3"
                >
                  <div className="font-serif text-3xl text-[#C1704D]/40 font-light leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-py border-t border-[#DDD2C3] dark:border-[#2B2B2B]">
          <div className="container-site">
            <div className="space-y-3 mb-14">
              <Badge>The Team</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight max-w-lg">
                People you&apos;ll actually work with.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div
                  key={member.slug}
                  className="group bg-[#F2EDE6] dark:bg-[#2B2B2B] rounded-2xl overflow-hidden border border-[#DDD2C3] dark:border-[#2B2B2B]"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#DDD2C3] to-[#CDBCA9] dark:from-[#2B2B2B] dark:to-[#1B1B1B] flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#C1704D]/20 flex items-center justify-center text-2xl font-serif font-medium text-[#C1704D]">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-medium text-[#4B3A32] dark:text-[#F2EDE6]">
                      {member.name}
                    </h3>
                    <p className="eyebrow text-[#A78F7A]">{member.role}</p>
                    <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
