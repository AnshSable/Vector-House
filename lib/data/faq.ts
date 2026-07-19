export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq1",
    question: "How do you handle timezone differences for international clients?",
    answer:
      "Our team is based in India (IST, UTC+5:30), which gives us strong overlap with European afternoons and the ability to work ahead of US-based clients. We maintain a daily async update rhythm using Notion or Linear, and schedule live calls during overlap windows that work for you. Most clients find this rhythm more productive than they expected.",
  },
  {
    id: "faq2",
    question: "What payment methods do you accept?",
    answer:
      "We support international payments via Stripe, PayPal, and Wise — invoiced in USD or GBP. For Indian clients, we accept UPI, bank transfer (NEFT/RTGS), and Razorpay. We typically structure projects as 50% upfront and 50% on delivery, with milestone-based billing for longer engagements.",
  },
  {
    id: "faq3",
    question: "Who owns the work once the project is complete?",
    answer:
      "You do — entirely. Upon final payment, all IP, source code, design files, and deliverables transfer to you with no strings attached. We retain the right to display the work in our portfolio unless you request otherwise (we always respect NDAs).",
  },
  {
    id: "faq4",
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A polished marketing website runs 4–6 weeks. A full product with custom backend and AI features typically takes 10–16 weeks. We'll give you a detailed timeline estimate during discovery — and we're honest if something will take longer than you might hope.",
  },
  {
    id: "faq5",
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer a retainer model for clients who want continued development, monthly design work, or ongoing AI system maintenance. We also do fixed-scope post-launch support packages for bug fixes and performance monitoring. We'd rather be your long-term partner than a one-time vendor.",
  },
  {
    id: "faq6",
    question: "Can you work within our existing tech stack?",
    answer:
      "Almost certainly. We're framework-agnostic and have worked with React, Vue, Laravel, Django, Webflow, and more. If you have a specific stack, tell us in your brief — we'll be upfront if it's outside our wheelhouse.",
  },
];
