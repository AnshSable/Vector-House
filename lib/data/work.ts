export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  year: string;
  heroImage: string;
  thumbnailImage: string;
  result: string;
  resultLabel: string;
  excerpt: string;
  problem: string;
  approach: string;
  outcome: string;
  services: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "brand-platform-relaunch",
    title: "A Complete Brand Platform for a FinTech Startup",
    client: "Nexus Finance",
    category: "Web & AI",
    tags: ["Next.js", "AI Chatbot", "Design System"],
    year: "2024",
    heroImage: "/images/work/nexus-hero.jpg",
    thumbnailImage: "/images/work/nexus-thumb.jpg",
    result: "340%",
    resultLabel: "increase in qualified leads in 90 days",
    excerpt:
      "We rebuilt Nexus Finance's entire digital presence — from brand identity to a custom AI assistant that qualifies leads automatically.",
    problem:
      "Nexus Finance had a credibility problem. Their existing site looked like a template from 2017, and their sales team was drowning in unqualified inbound leads — spending hours on calls that went nowhere. They needed a site that commanded trust and a system that did the qualification work for them.",
    approach:
      "We started with a week of discovery — interviewing their top 5 customers to understand what actually made them convert. From there, we redesigned their brand from scratch: a refined color system, custom typeface pairing, and a component library built in Figma. We then built the site in Next.js with a custom AI assistant trained on their product docs and FAQs, integrated directly into the sales funnel.",
    outcome:
      "Within 90 days of launch, qualified lead volume increased 340%. The AI assistant handled 68% of initial inquiries autonomously — freeing the sales team to focus on high-intent prospects only. Page load time went from 4.8s to 1.1s.",
    services: ["Web & App Development", "AI Agents & Automation", "UI/UX Design"],
    featured: true,
  },
  {
    slug: "ecommerce-motion-brand",
    title: "Motion Identity for a D2C Skincare Brand",
    client: "Terroir Studio",
    category: "Design & Motion",
    tags: ["Brand Identity", "Motion Design", "Social Content"],
    year: "2024",
    heroImage: "/images/work/terroir-hero.jpg",
    thumbnailImage: "/images/work/terroir-thumb.jpg",
    result: "2.4×",
    resultLabel: "increase in Instagram engagement rate",
    excerpt:
      "We created a motion identity system for a new D2C skincare brand — from logo animation to a full library of social-first video templates.",
    problem:
      "Terroir was entering a saturated market (skincare) with a genuinely differentiated product — but their visual presence felt generic. They needed a motion design language that felt premium and natural, not clinical or overly polished.",
    approach:
      "Our process began with a mood board intensive and competitive audit. We designed a kinetic logo system using organic, slow-morphing shapes in earthy tones. We then built out 12 social video templates for their content team — each one system-consistent but flexible enough to feel fresh across weeks of posting.",
    outcome:
      "Their Instagram engagement rate increased 2.4× in the first month. The template system reduced per-video production time from 6 hours to under 45 minutes for their in-house team. Three months post-launch they hit 10k followers organically.",
    services: ["Video & Motion Design", "UI/UX Design"],
    featured: true,
  },
  {
    slug: "saas-workflow-automation",
    title: "AI Automation Stack for a Legal Services Firm",
    client: "Meridian Legal",
    category: "AI & Automation",
    tags: ["n8n", "OpenAI", "Workflow Automation"],
    year: "2025",
    heroImage: "/images/work/meridian-hero.jpg",
    thumbnailImage: "/images/work/meridian-thumb.jpg",
    result: "18 hrs",
    resultLabel: "saved per week per team member",
    excerpt:
      "We built an end-to-end automation system for a legal firm — from intake to document drafting — eliminating 18 hours of weekly admin per team member.",
    problem:
      "Meridian Legal's team was spending more time on paperwork than on cases. Client intake forms were manual, document templates required copy-pasting, and follow-up emails were sent by hand. They knew automation was possible but didn't know where to start.",
    approach:
      "We audited their workflows over two weeks, mapping every repetitive touchpoint. We then built a multi-step automation system using n8n: automated intake forms that populate a CRM, GPT-4-powered document draft generation from intake data, and an email sequence that triggered based on case stage. All connected via API with no manual handoffs.",
    outcome:
      "Each team member reclaimed 18 hours per week — time redirected to client-facing work. Document drafting time dropped from 2 hours to 8 minutes per document. The system paid for itself in under 6 weeks.",
    services: ["AI Agents & Automation"],
    featured: true,
  },
];
