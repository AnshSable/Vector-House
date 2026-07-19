"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MessageSquare, MapPin, Clock, Check, Send } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const projectTypes = [
  "Web & App Development",
  "AI Agents & Automation",
  "UI/UX Design",
  "Video & Motion Design",
  "Multiple / Not sure yet",
];

const budgets = [
  "Under $2,000 / ₹1,70,000",
  "$2,000–$8,000 / ₹1.7L–₹6.7L",
  "$8,000–$20,000 / ₹6.7L–₹16.5L",
  "$20,000+ / ₹16.5L+",
  "Retainer / Ongoing",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async — replace with real form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <Nav />
      <main className="bg-[#F8F6F2] dark:bg-[#1B1B1B] min-h-screen">
        {/* Hero */}
        <section className="pt-36 pb-16 bg-[#F2EDE6] dark:bg-[#1B1B1B]">
          <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-5">
              <Badge>Get In Touch</Badge>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#4B3A32] dark:text-[#F2EDE6] leading-tight">
                Let&apos;s talk about what you&apos;re building.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-4 text-sm text-[#7A6556] dark:text-[#A78F7A]">
                {[
                  { icon: Clock, label: "Response time", value: "Within 24 hours" },
                  { icon: MapPin, label: "Based in", value: "India (IST, UTC+5:30)" },
                  { icon: Mail, label: "Email", value: "hello@vectorhouse.studio" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={15} className="mt-0.5 text-[#C1704D] shrink-0" />
                    <div>
                      <div className="eyebrow">{label}</div>
                      <div className="text-[#4B3A32] dark:text-[#F2EDE6] font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="section-py">
          <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {sent ? (
                <div className="text-center space-y-4 py-16">
                  <div className="w-16 h-16 rounded-full bg-[#C1704D]/10 flex items-center justify-center mx-auto">
                    <Check size={28} className="text-[#C1704D]" />
                  </div>
                  <h2 className="font-serif text-3xl font-light text-[#4B3A32] dark:text-[#F2EDE6]">
                    Message sent.
                  </h2>
                  <p className="text-sm text-[#7A6556] dark:text-[#A78F7A]">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Your name", type: "text", placeholder: "Alex Rivera" },
                      { id: "email", label: "Email address", type: "email", placeholder: "alex@company.com" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id} className="space-y-1.5">
                        <label htmlFor={id} className="eyebrow text-[#A78F7A]">
                          {label}
                        </label>
                        <input
                          id={id}
                          name={id}
                          type={type}
                          required
                          placeholder={placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-[#F2EDE6] dark:bg-[#2B2B2B] border border-[#DDD2C3] dark:border-[#4B3A32] text-sm text-[#4B3A32] dark:text-[#F2EDE6] placeholder:text-[#A78F7A] focus:outline-none focus:border-[#C1704D] focus:ring-2 focus:ring-[#C1704D]/20 transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project type */}
                  <div className="space-y-1.5">
                    <label htmlFor="project-type" className="eyebrow text-[#A78F7A]">
                      Type of project
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#F2EDE6] dark:bg-[#2B2B2B] border border-[#DDD2C3] dark:border-[#4B3A32] text-sm text-[#4B3A32] dark:text-[#F2EDE6] focus:outline-none focus:border-[#C1704D] focus:ring-2 focus:ring-[#C1704D]/20 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="eyebrow text-[#A78F7A]">
                      Budget range (USD / INR)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-xl bg-[#F2EDE6] dark:bg-[#2B2B2B] border border-[#DDD2C3] dark:border-[#4B3A32] text-sm text-[#4B3A32] dark:text-[#F2EDE6] focus:outline-none focus:border-[#C1704D] focus:ring-2 focus:ring-[#C1704D]/20 transition-all duration-200"
                    >
                      <option value="">Prefer not to say</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="eyebrow text-[#A78F7A]">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you building, what's the problem you're solving, and what does success look like?"
                      className="w-full px-4 py-3 rounded-xl bg-[#F2EDE6] dark:bg-[#2B2B2B] border border-[#DDD2C3] dark:border-[#4B3A32] text-sm text-[#4B3A32] dark:text-[#F2EDE6] placeholder:text-[#A78F7A] focus:outline-none focus:border-[#C1704D] focus:ring-2 focus:ring-[#C1704D]/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto justify-center">
                    {loading ? "Sending…" : (
                      <>Send Message <Send size={15} /></>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-6">
              {/* WhatsApp */}
              <div className="bg-[#F2EDE6] dark:bg-[#2B2B2B] rounded-2xl p-6 space-y-3 border border-[#DDD2C3] dark:border-[#2B2B2B]">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-[#8A9A7E]" />
                  <span className="eyebrow text-[#A78F7A]">Quick chat</span>
                </div>
                <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                  Prefer WhatsApp? For Indian clients, this is often faster.
                </p>
                <Button
                  href="https://wa.me/91XXXXXXXXXX"
                  variant="ghost"
                  size="sm"
                  external
                  className="border border-[#DDD2C3] dark:border-[#4B3A32] hover:border-[#8A9A7E] hover:text-[#8A9A7E] hover:bg-transparent"
                >
                  Message on WhatsApp
                </Button>
              </div>

              {/* Payment info */}
              <div className="bg-[#F2EDE6] dark:bg-[#2B2B2B] rounded-2xl p-6 space-y-3 border border-[#DDD2C3] dark:border-[#2B2B2B]">
                <span className="eyebrow text-[#A78F7A]">Payment</span>
                <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed">
                  We accept Stripe, PayPal, and Wise (USD/GBP) for international
                  clients. UPI, NEFT, and Razorpay for Indian clients.
                </p>
              </div>

              {/* Timezone */}
              <div className="bg-[#F2EDE6] dark:bg-[#2B2B2B] rounded-2xl p-6 space-y-3 border border-[#DDD2C3] dark:border-[#2B2B2B]">
                <span className="eyebrow text-[#A78F7A]">Timezone overlap</span>
                <div className="space-y-1.5 text-sm">
                  {[
                    { region: "UK / Europe", overlap: "IST overlaps afternoons" },
                    { region: "US East", overlap: "Morning IST = previous evening ET" },
                    { region: "India", overlap: "Full overlap — same time zone" },
                  ].map(({ region, overlap }) => (
                    <div key={region} className="flex justify-between text-xs">
                      <span className="text-[#7A6556] dark:text-[#A78F7A]">{region}</span>
                      <span className="text-[#A78F7A]">{overlap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
