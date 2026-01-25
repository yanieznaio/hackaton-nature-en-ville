import React from "react";

export default function MapSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* BACKGROUND MAP */}
      <img
        src="/france.svg"
        alt="Worldwide presence map"
        className="absolute right-0 top-0 h-full object-cover opacity-80 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-9xl mx-auto px-8 pt-24">
        {/* TEXT BLOCK */}
        <div className="max-w-xl">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-tight">
            Agis pour
            <br />
            ta planète
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Une application qui transforme l’engagement écologique en missions
            concrètes. Nettoie, protège ton environnement et gagne des
            récompenses tout en faisant la différence.
          </p>
        </div>

        {/* STATS */}
        <div className=" max-w-6xl mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Jeunes engagés"
            value="12k+"
            suffix="volontaires actifs"
          />
          <StatCard
            title="Missions réalisées"
            value="3 500+"
            suffix="actions terrain"
          />
          <StatCard
            title="Zones nettoyées"
            value="180+"
            suffix="lieux protégés"
          />
          <StatCard
            title="Récompenses distribuées"
            value="25k+"
            suffix="gains débloqués"
          />
        </div>
      </div>

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
    </section>
  );
}

function StatCard({
  title,
  value,
  suffix,
}: {
  title: string;
  value: string;
  suffix: string;
}) {
  return (
    <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
      <span className="text-sm text-white/50">{title}</span>
      <div>
        <div className="text-3xl font-semibold">{value}</div>
        <div className="text-white/80">{suffix}</div>
      </div>
    </div>
  );
}
