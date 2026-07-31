"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeHybridTab, setActiveHybridTab] = useState<"phev" | "mhev">(
    "phev",
  );

  // Chapter 03 Data Array
  const silhouettes = [
    { name: "Coupe", sub: "2-Door Fixed Roof", file: "coupe.svg" },
    { name: "Sedan", sub: "4-Door Three-Box", file: "sedan.svg" },
    { name: "Supercar", sub: "Mid-Engine Exotic", file: "supercar.svg" },
    { name: "SUV", sub: "High-Rider Utility", file: "suv.svg" },
    { name: "Convertible", sub: "Open-Top Roadster", file: "convertible.svg" },
    { name: "Wagon", sub: "Extended Cargo Roof", file: "wagon.svg" },
    { name: "Hatchback", sub: "Liftback Utility", file: "hatchback.svg" },
    { name: "Targa", sub: "Removable Roof Panel", file: "targa.svg" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* =========================================================================
          CHAPTER 00: HERO & AI SEARCH BAR
          ========================================================================= */}
      <section className="relative h-screen w-full flex flex-col justify-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/chapter0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="text-amber-500 text-xs font-mono tracking-widest uppercase mb-2 block">
            Chapter 00 // Introduction
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none">
            Decode Performance. <br />
            <span className="text-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              Compare Heritage.
            </span>
          </h1>
          <p className="text-base md:text-xl text-zinc-300 font-normal leading-relaxed mb-8">
            An interactive breakdown of engine architectures, body forms, and
            modern powertrain engineering.
          </p>

          <div className="flex items-center bg-black/60 border border-white/20 rounded-full p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-md focus-within:border-amber-500 transition-all w-full max-w-xl">
            <input
              type="text"
              placeholder="Search any vehicle, engine, or spec..."
              className="w-full bg-transparent px-5 py-2.5 text-white placeholder-zinc-300 focus:outline-none text-sm md:text-base"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-full transition-all text-sm whitespace-nowrap shadow-lg hover:shadow-amber-500/30">
              Analyze
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-zinc-400 text-xs tracking-widest uppercase font-mono">
          ↓ Scroll to Chapter 01
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 01: POWERTRAINS & HYBRID SYSTEMS
          ========================================================================= */}
      <section className="relative min-h-screen w-full py-32 px-8 md:px-20 flex flex-col justify-center overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/chapter1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
              Chapter 01 // Powertrains
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2">
              Hybrid Systems Demystified
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl">
              Understand energy generation, charging methods, and find out which
              powertrain suits your driving style best.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
            {/* Tab Selector */}
            <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => setActiveHybridTab("phev")}
                className={`relative z-20 px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer select-none ${
                  activeHybridTab === "phev"
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                Plug-In Hybrid (PHEV)
              </button>
              <button
                type="button"
                onClick={() => setActiveHybridTab("mhev")}
                className={`relative z-20 px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer select-none ${
                  activeHybridTab === "mhev"
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                Mild Hybrid (MHEV)
              </button>
            </div>

            {/* PHEV Tab Content */}
            {activeHybridTab === "phev" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Large Battery + Grid Charging
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Plug-In Hybrid: Electric Car + Gas Backup
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    PHEVs function like fully electric vehicles for daily
                    commutes while keeping a combustion engine for long-distance
                    trips. The high-capacity battery charges directly via wall
                    outlet or public charging stations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                      <div className="text-amber-500 font-bold text-base mb-1">
                        Power Source
                      </div>
                      <p className="text-xs text-zinc-400">
                        Wall Socket / Charger + Regenerative Braking
                      </p>
                    </div>
                    <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                      <div className="text-amber-500 font-bold text-base mb-1">
                        Electric Range
                      </div>
                      <p className="text-xs text-zinc-400">
                        50 – 100 km (30–60 miles) pure zero-emission driving
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-black/60 border border-amber-500/30 p-6 rounded-2xl relative overflow-hidden">
                  <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
                    Quick Verdict
                  </div>
                  <div className="text-xl font-bold mb-2">Who is it for?</div>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    Perfect if you can plug in at home or work and want to drive
                    completely electric around town, without range anxiety on
                    highway road trips.
                  </p>
                  <div className="text-xs text-amber-400/80 font-mono border-t border-white/10 pt-3">
                    ✔ Massive city fuel savings
                  </div>
                </div>
              </div>
            )}

            {/* MHEV Tab Content */}
            {activeHybridTab === "mhev" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Automated Electric Assist (No Plug Needed)
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Mild Hybrid: Combustion Engine Assistant
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    An MHEV is a standard gas/diesel engine paired with a small
                    48V electric motor.{" "}
                    <strong className="text-white">It does not plug in.</strong>{" "}
                    Energy is harvested automatically during deceleration to
                    assist acceleration and power vehicle systems.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                      <div className="text-amber-500 font-bold text-base mb-1">
                        Power Source
                      </div>
                      <p className="text-xs text-zinc-400">
                        100% self-generated from braking & internal engine
                      </p>
                    </div>
                    <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                      <div className="text-amber-500 font-bold text-base mb-1">
                        Pure EV Range
                      </div>
                      <p className="text-xs text-zinc-400">
                        0 km (Electric motor only assists, cannot drive alone)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-black/60 border border-amber-500/30 p-6 rounded-2xl relative overflow-hidden">
                  <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
                    Quick Verdict
                  </div>
                  <div className="text-xl font-bold mb-2">Who is it for?</div>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    Ideal if you have no access to charging plugs, but want
                    reduced fuel consumption, smoother start-stop response, and
                    instant torque fill.
                  </p>
                  <div className="text-xs text-amber-400/80 font-mono border-t border-white/10 pt-3">
                    ✔ Zero hassle with cables or charging stations
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 02: FORM OF MOTORS (FOLDER: /public/motors/)
          ========================================================================= */}
      <section className="relative min-h-screen w-full py-32 px-8 md:px-20 flex flex-col justify-center overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/chapter2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                Chapter 02 // Engine Architectures
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2">
                Internal Combustion Blocks
              </h2>
            </div>
            <div className="text-right">
              <span className="text-amber-500 font-mono font-bold text-2xl md:text-3xl block">
                99% →
              </span>
              <span className="text-zinc-400 text-xs uppercase font-mono tracking-wider">
                Modern Production Cars
              </span>
            </div>
          </div>

          {/* LINIA 1: Cele 4 motoare principale (99%) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Inline (I) */}
            <div className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-amber-500/50 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden min-h-[220px] flex flex-col justify-between">
              <img
                src="/motors/I.png"
                alt="Inline Engine Blueprint"
                className="absolute -right-4 -bottom-4 w-40 h-40 object-contain opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 pointer-events-none filter drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              />
              <div className="relative z-10">
                <span className="text-xs font-mono text-amber-500">
                  LAYOUT I
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">Inline (I)</h3>
              </div>
              <p className="relative z-10 text-xs text-zinc-400 leading-relaxed max-w-[85%] group-hover:text-zinc-200 transition-colors">
                Cylinders in one straight line. Standard for most everyday
                vehicles.
              </p>
            </div>

            {/* V-Engine (V) */}
            <div className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-amber-500/50 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden min-h-[220px] flex flex-col justify-between">
              <img
                src="/motors/V.png"
                alt="V Engine Blueprint"
                className="absolute -right-4 -bottom-4 w-40 h-40 object-contain opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 pointer-events-none filter drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              />
              <div className="relative z-10">
                <span className="text-xs font-mono text-amber-500">
                  LAYOUT V
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">V-Engine (V)</h3>
              </div>
              <p className="relative z-10 text-xs text-zinc-400 leading-relaxed max-w-[85%] group-hover:text-zinc-200 transition-colors">
                Angled twin cylinder banks. Compact choice for high performance.
              </p>
            </div>

            {/* Flat / Boxer (F) */}
            <div className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-amber-500/50 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden min-h-[220px] flex flex-col justify-between">
              <img
                src="/motors/F.png"
                alt="Flat Engine Blueprint"
                className="absolute -right-4 -bottom-4 w-40 h-40 object-contain opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 pointer-events-none filter drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              />
              <div className="relative z-10">
                <span className="text-xs font-mono text-amber-500">
                  LAYOUT F
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">Flat / Boxer</h3>
              </div>
              <p className="relative z-10 text-xs text-zinc-400 leading-relaxed max-w-[85%] group-hover:text-zinc-200 transition-colors">
                Horizontally opposed pistons. Lowers vehicle center of gravity.
              </p>
            </div>

            {/* W-Engine (W) */}
            <div className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-amber-500/50 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden min-h-[220px] flex flex-col justify-between">
              <img
                src="/motors/W.png"
                alt="W Engine Blueprint"
                className="absolute -right-4 -bottom-4 w-40 h-40 object-contain opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 pointer-events-none filter drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              />
              <div className="relative z-10">
                <span className="text-xs font-mono text-amber-500">
                  LAYOUT W
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">W-Engine (W)</h3>
              </div>
              <p className="relative z-10 text-xs text-zinc-400 leading-relaxed max-w-[85%] group-hover:text-zinc-200 transition-colors">
                Double 'V' block design. Used for high displacement supercars.
              </p>
            </div>
          </div>

          {/* LINIA 2: Banner 1% (Rare & Historical) */}
          <div className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-amber-500 font-mono font-bold text-2xl md:text-3xl">
                  1% →
                </span>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-full">
                  Rare & Historical Layouts
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Exotic Concepts: X, U, Delta (Δ), and K
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Experimental geometric setups engineered during the early 20th
                century for aviation, marine craft, or racing prototypes.
                Virtually non-existent on modern roads.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end">
              <img
                src="/motors/rare.png"
                alt="X, U, Delta, K Engine Diagrams"
                className="h-28 md:h-32 object-contain rounded-xl opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 03: FORM OF CARS (SVG SILHOUETTES INTEGRATED)
          ========================================================================= */}
      <section className="relative min-h-screen w-full py-32 px-8 md:px-20 flex flex-col justify-center overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-50"
          >
            <source src="/chapter3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
              Chapter 03 // Aerodynamics & Body Forms
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-white">
              Vehicle Silhouettes
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {silhouettes.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/[0.03] border border-white/10 p-6 rounded-xl backdrop-blur-xl hover:border-amber-500/60 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  {/* Step Number + SVG Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-amber-500">
                      0{idx + 1}
                    </span>
                    <div className="relative w-32 h-32 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={`/chapter3_Silhouettes/${item.file}`}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain filter invert"
                      />
                    </div>
                  </div>

                  {/* Text Information */}
                  <div className="font-bold text-lg text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
