import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/lib/data/work";
import PhoneShowcase from "@/components/work/PhoneShowcase";
import WebShowcase from "@/components/work/WebShowcase";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main className="bg-[#F8F6F2] dark:bg-[#1B1B1B]">
        {/* Hero */}
        <section className="pt-36 pb-16 bg-[#F2EDE6] dark:bg-[#1B1B1B]">
          <div className="container-site">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-[#A78F7A] hover:text-[#C1704D] transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#DDD2C3]/60 dark:bg-[#2B2B2B] text-[#7A6556] dark:text-[#A78F7A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
                  {cs.title}
                </h1>
                <p className="text-base text-[#7A6556] dark:text-[#A78F7A] leading-relaxed max-w-xl">
                  {cs.excerpt}
                </p>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <div className="bg-[#F8F6F2] dark:bg-[#2B2B2B] rounded-2xl p-6 space-y-4">
                  {[
                    { label: "Client", value: cs.client },
                    { label: "Year", value: cs.year },
                    { label: "Category", value: cs.category },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-b border-[#DDD2C3] dark:border-[#4B3A32] pb-3 last:border-0 last:pb-0">
                      <p className="eyebrow text-[#A78F7A] mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-[#4B3A32] dark:text-[#F2EDE6]">{value}</p>
                    </div>
                  ))}
                  <div className="pt-2">
                    <div className="font-serif text-3xl text-[#C1704D] font-light">{cs.result}</div>
                    <div className="text-xs text-[#A78F7A] mt-0.5 leading-tight">{cs.resultLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image — hidden for custom showcase projects */}
        {cs.slug !== "rohit-diamonds-platform" && cs.slug !== "medi-raj-pharma-platform" && (
          <div className="relative aspect-[21/9] overflow-hidden bg-gradient-to-br from-[#DDD2C3] to-[#CDBCA9] dark:from-[#2B2B2B] dark:to-[#1B1B1B]">
            {cs.heroImage && !cs.heroImage.includes("/images/work/") ? (
              <Image
                src={cs.heroImage}
                alt={cs.title}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="font-serif text-6xl text-[#7A6556]/30 font-light">{cs.result}</div>
                  <p className="eyebrow text-[#A78F7A]/60">{cs.resultLabel}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Custom Showcases */}
        {cs.slug === "rohit-diamonds-platform" && <PhoneShowcase />}
        {cs.slug === "medi-raj-pharma-platform" && <WebShowcase />}

        {/* Body */}
        <article className="section-py">
          <div className="container-site">
            <div className="max-w-2xl mx-auto space-y-16">
              {[
                { label: "The Problem", content: cs.problem },
                { label: "Our Approach", content: cs.approach },
                { label: "The Outcome", content: cs.outcome },
              ].map(({ label, content }) => (
                <div key={label} className="space-y-4">
                  <Badge>{label}</Badge>
                  <p className="text-base text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                    {content}
                  </p>
                </div>
              ))}
              {cs.techStack && cs.techStack.length > 0 && (
                <div className="space-y-4">
                  <Badge>Tech Stack</Badge>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F2EDE6] dark:bg-[#2B2B2B] border border-[#DDD2C3] dark:border-[#4B3A32] text-[#4B3A32] dark:text-[#F2EDE6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#F2EDE6] dark:bg-[#1B1B1B] border-t border-[#DDD2C3] dark:border-[#2B2B2B]">
          <div className="container-site text-center space-y-5">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#4B3A32] dark:text-[#F2EDE6]">
              Want results like these?
            </h2>
            <Button href="/contact" size="lg">
              Start a conversation <ArrowRight size={16} />
            </Button>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-py border-t border-[#DDD2C3] dark:border-[#2B2B2B]">
            <div className="container-site">
              <p className="eyebrow text-[#A78F7A] mb-8">More Work</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/work/${rel.slug}`}
                    className="group block bg-[#F2EDE6] dark:bg-[#2B2B2B] rounded-2xl p-6 border border-[#DDD2C3] dark:border-[#2B2B2B] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <p className="eyebrow text-[#A78F7A] mb-2">{rel.client}</p>
                    <h3 className="font-serif text-xl font-medium text-[#4B3A32] dark:text-[#F2EDE6] mb-3">
                      {rel.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#C1704D] group-hover:gap-3 transition-all duration-300">
                      View case study <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
