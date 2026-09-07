import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullscreenVideoScrollSection() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative w-full h-[400vh] bg-black">
      {/* STICKY IMAGE BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image
          src="/second.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {paragraphs.map((text, index) => {
            const start = index / paragraphs.length;
            const end = (index + 1) / paragraphs.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0],
            );

            const scale = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0.95, 1, 1, 0.95],
            );

            return (
              <motion.p
                key={index}
                style={{ opacity, scale }}
                className="absolute max-w-3xl text-center text-white text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight"
              >
                {text}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const paragraphs = [
  "Des défis écologiques à relever près de chez toi",
  "Nettoie, protège, monte en niveau",
  "Chaque mission te fait gagner des récompenses",
  "Joue collectif pour un futur plus propre",
];
