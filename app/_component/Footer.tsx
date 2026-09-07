"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  // Bag levitates upward as footer scrolls into view
  const y = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full h-screen bg-black overflow-hidden text-white"
    >
      {/* FLOATING BAG */}
      <motion.img
        src="/plasticbagblue.png"
        alt="Floating bag"
        style={{ y, rotate, opacity }}
        className="
          absolute
          bottom-24
          left-1/2
          -translate-x-1/2
          w-[500px]
          opacity-80
          pointer-events-none
          z-10
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-[clamp(3rem,10vw,9rem)] font-semibold leading-none tracking-tight">
          Rejoins
          <br />
          Nous
        </h2>
        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="https://hackathon-nature.vercel.app"
            target="_blank"
            className="px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
          >
            Trouver une mission
          </Link>

          <Link
            href="https://hackathon-nature.vercel.app"
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition"
          >
            Créer une mission
            <span className="text-blue-400 text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="absolute bottom-0 left-0 w-full px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60 z-30">
        <div className="flex items-center gap-2 text-white">
          <span>CleanMaVille® 2026</span>
        </div>

        <div className="flex items-center gap-8">
          <p>{"Ce projet est une démo et a été conçu lors d’un hackathon."}</p>
        </div>
      </div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}
