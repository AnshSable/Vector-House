"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#F8F6F2]/90 dark:bg-[#1B1B1B]/90 backdrop-blur-md border-b border-[#DDD2C3]/60 dark:border-[#2B2B2B]/60"
            : "bg-transparent"
        )}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Vector House Home">
            <Image 
              src="/images/logo.png" 
              alt="Vector House Logo" 
              width={140} 
              height={40} 
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-sans font-medium rounded-full transition-all duration-200",
                  pathname === link.href
                    ? "text-[#C1704D]"
                    : "text-[#7A6556] dark:text-[#CDBCA9] hover:text-[#C1704D] hover:bg-[#F2EDE6] dark:hover:bg-[#2B2B2B]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: dark toggle + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#7A6556] dark:text-[#CDBCA9] hover:bg-[#F2EDE6] dark:hover:bg-[#2B2B2B] transition-colors duration-200"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <Button href="/contact" size="sm" className="hidden md:inline-flex">
              Start a Project
            </Button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#4B3A32] dark:text-[#F2EDE6] hover:bg-[#F2EDE6] dark:hover:bg-[#2B2B2B] transition-colors duration-200"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#F8F6F2] dark:bg-[#1B1B1B] flex flex-col pt-24 px-6 pb-10 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 text-2xl font-serif font-medium text-[#4B3A32] dark:text-[#F2EDE6] border-b border-[#DDD2C3] dark:border-[#2B2B2B] hover:text-[#C1704D] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="w-full justify-center">
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
