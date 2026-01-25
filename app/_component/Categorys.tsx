import React from "react";

const Categorys = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-[#eef2f3] to-[#8e9eab]">
      {/* Background rope */}
      <img
        src="/rope.png"
        alt=""
        className="pointer-events-none absolute right-0 top-0 h-full object-cover"
      />

      {/* CENTERING WRAPPER */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="grid w-full max-w-9xl grid-cols-12 gap-10 px-8">
          {/* Left panel */}
          <div className="col-span-5 flex items-center">
            <CategoryPanel />
          </div>

          {/* Right product */}
          <div className="col-span-7 flex items-center">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categorys;
function CategoryPanel() {
  return (
    <div className="w-full rounded-3xl bg-white/20 p-6 backdrop-blur-xl">
      <h3 className="mb-4 text-lg text-white">Construction machines</h3>

      <div className="mb-6 overflow-hidden rounded-2xl">
        <img
          src="/construction.jpg"
          alt=""
          className="h-48 w-full object-cover"
        />
      </div>

      <ul className="divide-y divide-white/20 text-white/80">
        {[
          "Hybrid & electric",
          "Buses & trucks",
          "Railway",
          "Agriculture machines",
        ].map((item) => (
          <li key={item} className="py-4 transition hover:text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
function ProductCard() {
  return (
    <div className="relative w-full rounded-3xl bg-white/25 p-10 backdrop-blur-xl">
      <h1 className="text-5xl font-light tracking-wide text-white">PLAS8 NA</h1>

      <div className="mt-8 space-y-6 text-white">
        <div>
          <p className="text-sm uppercase opacity-70">Operating temperature</p>
          <p className="text-2xl">−70°C to +150°C</p>
        </div>

        <div>
          <p className="text-sm uppercase opacity-70">Abrasion resistance</p>
          <span className="inline-block rounded-full bg-orange-500 px-4 py-1 text-sm">
            ISO 6722-1 · Class 4 (4.000 – 14.999 cycles)
          </span>
        </div>

        <div>
          <p className="mb-2 text-sm uppercase opacity-70">Available in</p>
          <div className="flex gap-3">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <span className="h-3 w-3 rounded-full bg-black" />
          </div>
        </div>

        <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/30 px-6 py-3 text-white transition hover:bg-white/40">
          <span className="h-4 w-4 rounded-full bg-orange-500" />
          More about PLAS8 NA
        </button>
      </div>
    </div>
  );
}
