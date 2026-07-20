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
  techStack?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "rohit-diamonds-platform",
    title: "AI-Powered Jewellery Business Management Platform",
    client: "Rohit Diamonds",
    category: "Web & App",
    tags: ["Next.js", "Flutter", "Supabase", "PostgreSQL", "React"],
    year: "2025",
    heroImage: "/images/RD.png",
    thumbnailImage: "/images/RD.png",
    result: "100%",
    resultLabel: "elimination of manual paperwork across operations",
    excerpt:
      "We built a full-stack jewellery business management ecosystem — connecting inventory, production, sales, customers, and analytics into one cloud platform used by manufacturers, wholesalers, retailers, and field staff.",
    problem:
      "Rohit Diamonds, like most businesses in the jewellery industry, was running critical operations through WhatsApp messages, spreadsheets, and disconnected tools. Orders were managed manually, production had no real-time visibility, inventory was inconsistent across locations, and field sales executives had no digital support. The result: operational errors, delayed fulfillment, and a customer experience that felt opaque and untrustworthy.",
    approach:
      "We designed and built a complete end-to-end platform from scratch — starting with a deep discovery phase to map every workflow across manufacturers, sales reps, managers, and customers. The architecture was designed as a connected ecosystem rather than a single tool. The web platform (Next.js, TypeScript, Tailwind CSS, Shadcn UI) handles admin operations, inventory, orders, CRM, and analytics. A dedicated Flutter mobile app was built specifically for field sales executives — enabling them to browse catalogues, create orders, and track customers from anywhere. The backend runs on Supabase (PostgreSQL, Edge Functions, Realtime, Storage) with role-based access control ensuring every user type sees exactly what they need. Supabase Realtime powers live production tracking — moving orders through stages from Manufacturing → Stone Setting → Polishing → Quality Inspection → Delivery — visible to managers, staff, and customers simultaneously.",
    outcome:
      "The platform digitized the entire jewellery business lifecycle. Manual paperwork was eliminated across order management, inventory, and production. Field sales executives gained full mobile capability — reducing their dependency on calls and WhatsApp by replacing them with real-time data. Customers received complete production transparency through a dedicated tracking portal. Business owners gained an analytics dashboard surfacing sales trends, staff productivity, inventory health, and top-selling products in real time. The platform now serves manufacturers, wholesalers, retailers, and their sales teams from a single cloud-hosted system.",
    services: ["Web & App Development", "UI/UX Design"],
    featured: true,
    techStack: [
      "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI",
      "Flutter", "Supabase", "PostgreSQL", "Supabase Realtime",
      "Supabase Edge Functions", "Supabase Auth (Phone OTP)", "REST APIs",
    ],
  },
  {
    slug: "medi-raj-pharma-platform",
    title: "B2B Pharmaceutical Distribution & Ordering Platform",
    client: "Medi Raj Pharma",
    category: "Web & App",
    tags: ["React", "Next.js", "B2B Portal", "Supply Chain"],
    year: "2025",
    heroImage: "/images/medi1.png",
    thumbnailImage: "/images/medi1.png",
    result: "100%",
    resultLabel: "elimination of phone calls & manual order paperwork",
    excerpt:
      "We built a full B2B web platform connecting pharmaceutical distributors and pharmacies — digitizing the entire supply chain from bulk inventory management and promotional offers to seamless order placement and real-time tracking.",
    problem:
      "Medi Raj Pharma, like most pharmaceutical distributors, was running daily operations through phone calls, WhatsApp messages, and paper-based systems. Retailers had to call or visit in person to check stock, place orders, and discover schemes. Distributors manually tracked enquiries across a fragmented system — with no centralized view of incoming orders, retailer activity, or inventory status. The process was slow, error-prone, and impossible to scale.",
    approach:
      "We designed and built a dual-portal web platform — one interface for distributors (admin), one for retailers (pharmacies) — both sharing a single cloud backend. The distributor portal features bulk inventory management via Excel/CSV upload with intelligent column mapping, a centralized order dashboard for real-time enquiry tracking, retailer network management with registration approvals, and a promotions engine to broadcast custom schemes. The retailer portal gives pharmacies a powerful product discovery experience with real-time stock checks, a cart-based enquiry system that replaces phone calls entirely, an order tracking dashboard, a dedicated promotions hub, and secure profile management including GST and drug license (DL) storage.",
    outcome:
      "The platform fully digitized the distributor-retailer supply chain. Retailers no longer need to call to check stock or place orders — everything flows through the portal. Distributors gained a single dashboard to manage their entire retailer network, process enquiries, and control promotions in real time. Bulk catalog uploads via Excel/CSV replaced manual data entry, and the promotions engine gave distributors a direct channel to push schemes to all retailers simultaneously. The result: faster order cycles, fewer errors, and a scalable foundation for the business to grow its retailer network digitally.",
    services: ["Web & App Development", "UI/UX Design"],
    featured: true,
    techStack: [
      "React", "Next.js", "TypeScript", "Tailwind CSS",
      "Supabase", "PostgreSQL", "Supabase Auth",
      "Excel/CSV Import Pipeline", "REST APIs", "Role-Based Access Control",
    ],
  },
  {
    slug: "brand-platform-relaunch",
    title: "A Complete Brand Platform for a FinTech Startup",
    client: "Nexus Finance",
    category: "Web & AI",
    tags: ["Next.js", "AI Chatbot", "Design System"],
    year: "2024",
    heroImage: "/images/nexus2.png",
    thumbnailImage: "/images/nexus1.png",
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
    heroImage: "/images/motion1.png",
    thumbnailImage: "/images/motion1.png",
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
    heroImage: "/images/legal1.png",
    thumbnailImage: "/images/legal1.png",
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
