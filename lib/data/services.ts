export interface Service {
  id: string;
  slug: string;
  numeral: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "web-app-dev",
    slug: "web-app-development",
    numeral: "01",
    title: "Web & App Development",
    tagline: "Products people actually want to use.",
    description:
      "We build fast, scalable web apps and mobile-first websites — from marketing sites that convert to complex SaaS products with real-time features.",
    details: [
      "Next.js, React, and TypeScript for rock-solid foundations",
      "API design, databases, and backend architecture",
      "Performance-first: sub-2s load times, Core Web Vitals green",
      "Mobile-first, fully responsive builds",
      "Post-launch support, monitoring, and feature iterations",
    ],
    icon: "monitor",
    image: "/images/webdev.png",
  },
  {
    id: "ai-automation",
    slug: "ai-agents-automation",
    numeral: "02",
    title: "AI Agents & Automation",
    tagline: "Let your software do the heavy lifting.",
    description:
      "We build custom AI systems that actually save time — chatbots trained on your docs, automated workflows replacing repetitive tasks, and AI woven into your existing products.",
    details: [
      "Custom AI chatbots and assistants (RAG, fine-tuned LLMs)",
      "Workflow automation using n8n, Make, and custom pipelines",
      "AI integration into your existing web or SaaS product",
      "Lead qualification, customer support, and internal ops bots",
      "LLM API integration (OpenAI, Anthropic, Gemini, open-source)",
    ],
    icon: "cpu",
    image: "/images/ai.png",
  },
  {
    id: "uiux-design",
    slug: "ui-ux-design",
    numeral: "03",
    title: "UI/UX Design",
    tagline: "Interfaces that feel inevitable.",
    description:
      "Design that goes beyond looking good — we obsess over the logic of how people move through a product, then craft visuals that make every interaction feel effortless.",
    details: [
      "User research, journey mapping, and information architecture",
      "Wireframing and rapid prototyping in Figma",
      "Full visual design system with components and tokens",
      "Interaction design and micro-animation specs",
      "Design-to-development handoff with precise specs",
    ],
    icon: "pen-tool",
    image: "/images/uiux.png",
  },
  {
    id: "video-motion",
    slug: "video-editing-motion-design",
    numeral: "04",
    title: "Video & Motion Design",
    tagline: "Stories that move your audience.",
    description:
      "From product explainers to brand films, we handle the edit, motion graphics, and sound design — delivering polished video content that works on every platform.",
    details: [
      "Brand and product explainer videos",
      "Social-first content (Reels, YouTube, LinkedIn)",
      "Motion graphics and animated logo sequences",
      "UI animation and app demo videos",
      "Full post-production: editing, color grading, audio mix",
    ],
    icon: "film",
    image: "/images/video.png",
  },
];
