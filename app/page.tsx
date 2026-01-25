"use client";

import Link from "next/link";
import React from "react";
import Categorys from "./_component/Categorys";
import Footer from "./_component/Footer";
import MapSection from "./_component/MapSection";
import FullscreenVideoScrollSection from "./_component/FullScreenVideoSection";
import Image from "next/image";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <section className="relative h-screen w-full overflow-hidden bg-neutral-200">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/7475339-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Center hero text */}
        <div className="relative z-10 flex h-full mt-20 flex-col items-center justify-center px-6 text-center">
          <h1
            className="max-w-6xl text-white leading-[0.95] flex flex-col
    text-4xl md:text-[72px] font-bold tracking-[-0.04em]"
          >
            <span>Soit volontaire</span>
            <span className="tracking-[-0.02em]">et reçoit en retour</span>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2 text-sm text-white/80">
          <span className="inline-block h-4 w-2 rounded-full border border-white/70" />
          Scroll down
        </div>

        <div className="absolute bottom-20 left-1/2 z-20 -translate-x-1/2 cursor-pointer">
          <div className="flex items-center gap-2 rounded-3xl bg-white/40 pr-3  backdrop-blur-md shadow-sm">
            <div className="p-1">
              <div className="rounded-3xl w-14 h-14 bg-blue-600" />
            </div>
            <div className="flex items-center gap-2 ">
              <Link
                href="https://hackathon-nature.vercel.app"
                target="_blank"
                className="text-sm md:text-lg text-black pr-4 font-semibold tracking-tight"
              >
                Trouve ou crée une mission
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </section>
      <FullscreenVideoScrollSection />
      <FullScreenIndustriesSection />
      <MapSection />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;

function FullScreenIndustriesSection() {
  return (
    <div className="w-full h-screen bg-[#1b1b1b] flex items-center justify-center">
      <div className="w-[95%] h-[80%] flex gap-6 mt-14">
        {/* LEFT PANEL */}
        <div className="flex-1 bg-[#f4efe9] rounded-2xl relative p-10 flex flex-col justify-between">
          <div className="text-center text-xs tracking-widest text-gray-400">
            MISSION COMMUNAUTAIRE
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-3xl font-semibold text-gray-900">
              Nettoyage de plage
            </h1>
            <p className="mt-2 text-xl text-gray-500">
              Marseille · Mission collective
            </p>
          </div>

          <div className="flex gap-6 text-xs text-gray-400 uppercase tracking-wide">
            <span className="text-gray-900">Plage</span>
            <span>Plastique</span>
            <span>Déchets marins</span>
            <span>Équipe</span>
            <span>Impact local</span>
            <span>Écologie</span>
            <span>Récompenses</span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 rounded-2xl relative overflow-hidden">
          <img
            src="/group-activists-friends-collecting-plastic-waste-beach-guys-show-thumb-up.jpg"
            alt="Flames"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* INFO CARD */}
          <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-xl rounded-xl p-6 max-w-sm text-white shadow-lg">
            <div className="w-8 h-8 mb-3 flex items-center justify-center rounded-md bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v3.75M15.75 3v3.75M3 9.75h18M5.25 6.75h13.5A1.5 1.5 0 0120.25 8.25v10.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed">
              Lors de cette mission, 18 volontaires ont collecté plus de 120 kg
              de déchets plastiques en une matinée. Chaque participant a gagné
              des points échangeables contre des récompenses locales et a
              contribué à la protection du littoral.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
