import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullscreenVideoScrollSection() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative w-full h-[400vh] bg-black">
      {/* STICKY VIDEO BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <iframe
          src="https://iframe.videodelivery.net/0411d72287a701a564a50d54095413c8?autoplay=true&muted=true&loop=true&controls=false"
          className="absolute inset-0 w-[105%] h-[105%] scale-[1.5]"
          allow="autoplay; encrypted-media"
          loading="eager"
          style={{ pointerEvents: "none" }}
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
