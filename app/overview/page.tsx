"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-screen w-screen bg-black p-6"
    >
      <div className="grid h-full w-full grid-cols-12 grid-rows-6 gap-6">
        {/* Top left – 360 partner */}
        <div className="col-span-4 row-span-3 relative rounded-3xl overflow-hidden">
          <iframe
            src="https://iframe.videodelivery.net/828c5062cabdbb925ef0096793eca070?autoplay=true&muted=true&loop=true&controls=false&preload=true"
            className="absolute inset-0 h-full w-[120%] rounded-xl scale-[1.09]"
            allow="autoplay; encrypted-media"
            loading="lazy"
          />
        </div>

        {/* Center large product — VIDEO */}
        <div className="col-span-4 row-span-4 relative rounded-3xl overflow-hidden bg-neutral-100 mt-20">
          <iframe
            src="https://iframe.videodelivery.net/41473fa5db710e4a5c2170cc12a7fe42?autoplay=true&muted=true&loop=true&controls=false&preload=true"
            className="absolute inset-0 h-full scale-[1.5] w-[120%]"
            allow="autoplay; encrypted-media"
            loading="lazy"
            style={{ pointerEvents: "none" }}
          />
        </div>

        {/* Right industries */}
        <div className="col-span-4 row-span-4 rounded-3xl bg-[#E1E0E6] p-8 flex flex-col justify-between">
          <div>
            <span className="inline-block mb-4 rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium">
              TYPES DE MISSIONS
            </span>

            <ul className="space-y-3 text-2xl font-light text-black">
              <li>Nettoyage urbain</li>
              <li>Plages & rivières</li>
              <li>Forêts & sentiers</li>
              <li>Tri & recyclage</li>
              <li>Actions collectives</li>
            </ul>
          </div>

          <p className="text-xs tracking-wide text-neutral-500">
            SOLO · ENTRE AMIS · ÉCOLES · ASSOCIATIONS · ÉVÉNEMENTS
          </p>
        </div>

        {/* Bottom left – Periflex PS */}
        <div className="col-span-4 row-span-3 rounded-3xl bg-[#4273D2] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-medium mb-4">
              Missions & Récompenses
            </h3>

            <div className="space-y-3 text-sm text-neutral-100">
              <p>
                DURÉE MOYENNE
                <br />
                30 à 120 minutes
              </p>
              <p>
                POINTS GAGNÉS
                <br />
                50 à 500 points
              </p>
              <p>
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-black">
                  VALIDÉ PAR LA COMMUNAUTÉ
                </span>
                <span className="ml-2 text-xs">IMPACT LOCAL CERTIFIÉ</span>
              </p>
            </div>
          </div>

          <button className="self-start text-sm flex items-center gap-2">
            Voir les missions <span>→</span>
          </button>
        </div>

        {/* Bottom center – Link to platform */}
        <Link
          href="https://hackathon-nature.vercel.app"
          target="_blank"
          className="col-span-4 row-span-2 relative rounded-3xl bg-[#E1E0E6] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black p-6">
            <span className="text-xs tracking-wide mb-2 opacity-60">
              REJOIGNEZ-NOUS
            </span>
            <Link
              href="https://hackathon-nature.vercel.app"
              target="_blank"
              className="text-2xl font-semibold"
            >
              Demo CleanMaVille
            </Link>
            <p className="mt-2 text-sm opacity-70">
              Accédez à votre espace et commencez à faire la différence
            </p>
            <span className="mt-4 text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </Link>

        {/* Bottom right – product strip */}
        <div className="col-span-4 row-span-2 relative rounded-3xl overflow-hidden bg-[#2792DE]">
          <Image
            src="/bluedekstopoverview.png"
            alt="Desktop overview"
            fill
            className="object-right object-contain"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
