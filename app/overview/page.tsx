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
      className="md:h-screen w-full bg-black pt-10 md:pt-6  p-10 md:p-6"
    >
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-12 grid-rows-6 lg:grid-rows-6 gap-6">
        {/* Top left – 360 partner */}
        <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-3 relative rounded-3xl overflow-hidden">
          <Image
            src="/bag.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="absolute inset-0 rounded-xl object-cover"
          />
        </div>

        {/* Center large product — IMAGE */}
        <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-4 relative rounded-3xl overflow-hidden bg-neutral-100 mt-0 lg:mt-20">
          <Image
            src="/bag.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="absolute inset-0 object-cover"
          />
        </div>

        {/* Right industries */}
        <div className="col-span-1  lg:col-span-4 row-span-1 lg:row-span-4 rounded-3xl bg-[#E1E0E6] p-8 flex flex-col justify-between">
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
        <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-3 rounded-3xl bg-[#4273D2] p-8 flex flex-col justify-between">
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
        </div>

        {/* Bottom center – Link to platform */}
        <Link
          href="https://hackathon-nature.vercel.app"
          target="_blank"
          className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-2 relative rounded-3xl bg-[#E1E0E6] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
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
        <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden bg-[#2792DE]">
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
