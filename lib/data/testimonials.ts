export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  country: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Working with Vector House was the first time I felt like an agency truly understood what we were trying to build — not just what we asked for. The site went live in six weeks and immediately changed how customers perceived us.",
    author: "Arjun Mehta",
    role: "Co-founder",
    company: "Nexus Finance",
    country: "IN",
  },
  {
    id: "t2",
    quote:
      "The motion design system they created for us is genuinely one of our biggest brand assets. It's flexible, it's beautiful, and our team can actually use it. That combination is rarer than you'd think.",
    author: "Sophie Leclaire",
    role: "Brand Director",
    company: "Terroir Studio",
    country: "FR",
  },
  {
    id: "t3",
    quote:
      "I was skeptical about AI automation — I'd been burned by overpromising vendors before. Vector House came in, mapped our actual workflows, and built something that works exactly as described. The ROI was visible in the first month.",
    author: "Daniel Osei",
    role: "Operations Lead",
    company: "Meridian Legal",
    country: "UK",
  },
];
