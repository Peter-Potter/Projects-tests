"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Badge from "../ui/badge";
import { useState } from "react";

const FACILITIES = [
  {
    id: 1,
    badge: "Padel Court",
    title: "Professionally Designed Courts for Every Skill Level",
    image: "/hero.png",
  },
  {
    id: 2,
    badge: "Lounge & Café",
    title: "Relax After Play in Our Cozy Lounge & Café",
    image: "/facilities_lounge.jpg",
  },
  {
    id: 3,
    badge: "Fitness Zone",
    title: "Train, Prepare, and Build Endurance in Our Modern Gym",
    image: "/facilities_gym.jpg",
  },
  {
    id: 4,
    badge: "Events & Tournaments",
    title: "Join Friendly Matches and Official Tournaments",
    image: "/facilities_events.jpg",
  },
];

const FacilitiesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFacilities = FACILITIES.filter((facility) =>
    facility.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="courts" className="w-full bg-zinc-50/60 border-y border-zinc-100 py-16 md:py-24">
      <div className="mx-auto px-6 md:px-16">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight">
            Explore Our Facilities
          </h2>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400 text-xs sm:text-sm rounded-full py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-zinc-400 w-40 sm:w-56 shadow-xs transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
            <button className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer shrink-0">
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-3xl overflow-hidden shadow-md h-[340px] sm:h-[380px] border border-zinc-200/50"
            >
              <img
                src={item.image}
                alt={item.badge}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Tag Top Right */}
              <div className="absolute top-4 right-4">
                <Badge variant="glass" className="text-xs py-1 px-3">
                  {item.badge}
                </Badge>
              </div>

              {/* Bottom Overlay Text */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-sm font-light leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation & Description */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition-colors shadow-xs cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition-colors shadow-xs cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 font-light max-w-md text-left sm:text-right leading-relaxed">
            Book a court for training, friendly matches, or private coaching and discover a new level of padel in a welcoming atmosphere.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;
