"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/overview", label: "Preview" },
];

export default function Header() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 });

  // Move pill to active route
  useEffect(() => {
    const activeIndex = links.findIndex((l) => l.href === pathname);
    const el = linkRefs.current[activeIndex];

    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rect = el.getBoundingClientRect();

      setPillStyle({
        width: rect.width,
        left: rect.left - containerRect.left,
      });
    }
  }, [pathname]);

  const movePillTo = (el: HTMLAnchorElement | null) => {
    if (!el || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setPillStyle({
      width: rect.width,
      left: rect.left - containerRect.left,
    });
  };

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 md:gap-2 h-12 md:h-16 rounded-2xl md:rounded-3xl bg-white/40 backdrop-blur-md shadow-sm">
        {/* Logo */}
        <div className="flex items-center pl-4 pr-2 h-full">
          <span className="text-sm md:text-2xl font-bold text-white">
            CleanMaVille
          </span>
        </div>
        {/* Toggle */}
        <div ref={containerRef} className="relative flex rounded-full p-1">
          {/* Animated pill */}
          <motion.div
            className="absolute top-1 bottom-1 rounded-3xl bg-black"
            animate={pillStyle}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />

          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              onMouseEnter={(e) => movePillTo(e.currentTarget)}
              className={`relative z-10 px-3 md:px-10 py-2 md:py-3 text-xs md:text-xl transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-neutral-100/50 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
