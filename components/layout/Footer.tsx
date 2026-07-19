import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, Share2, Globe, AtSign } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web & App Dev", href: "/services#web-app-development" },
    { label: "AI & Automation", href: "/services#ai-agents-automation" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "Video & Motion", href: "/services#video-editing-motion-design" },
  ],
};

const socials = [
  { label: "Instagram", href: "#", icon: Share2 },
  { label: "Twitter / X", href: "#", icon: AtSign },
  { label: "LinkedIn", href: "#", icon: Globe },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F2EDE6] dark:bg-[#1B1B1B] border-t border-[#DDD2C3] dark:border-[#2B2B2B]">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Vector House Logo" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#7A6556] dark:text-[#A78F7A] leading-relaxed max-w-xs">
              A digital studio crafting web products, AI systems, and design that means something.
            </p>
            <a
              href="mailto:hello@vectorhouse.studio"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C1704D] hover:text-[#A85C3C] transition-colors duration-200"
            >
              <Mail size={14} />
              hello@vectorhouse.studio
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <p className="eyebrow text-[#A78F7A]">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#7A6556] dark:text-[#A78F7A] hover:text-[#C1704D] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#A78F7A]">
            © {year} Vector House. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#A78F7A] hover:text-[#C1704D] hover:bg-[#DDD2C3]/50 dark:hover:bg-[#2B2B2B] transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
