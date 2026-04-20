"use client";
import { NavLink } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../shared/Logo";
import { motion, AnimatePresence } from "framer-motion";

const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Collection", href: "/#collection" },
  { label: "Story", href: "/#story" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("/#home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal handler
    const handleReveal = () => setIsVisible(true);
    window.addEventListener("reveal-navbar", handleReveal);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = ["home", "collection", "story", "testimonials", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("reveal-navbar", handleReveal);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl flex justify-between items-center px-12 py-8"
        >
          <Logo />
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = link.href === activeSection;

              return (
                <Link
                  key={link.href}
                  className={`font-display font-light tracking-tight transition-all duration-500 pb-1 border-b
                    ${
                      isActive
                        ? "text-[#c6c6c7] border-[#c6c6c7]"
                        : "text-[#c6c6c7]/40 border-transparent hover:text-[#c6c6c7]/80"
                    }`}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-[#c6c6c7] hover:text-[#c6c6c7] transition-all duration-500">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <button className="md:hidden text-[#c6c6c7]">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
