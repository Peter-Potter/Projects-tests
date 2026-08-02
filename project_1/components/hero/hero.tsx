import NavLinks from "./nav-links";
import Badge from "../ui/badge";
import { Search, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between items-start bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat w-full min-h-[92vh] px-6 md:px-16 py-8 overflow-hidden rounded-b-3xl">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      {/* Top Header Navigation Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between w-full gap-4">
        {/* Left Nav */}
        <NavLinks />

        {/* Center Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-2xl md:text-3xl tracking-tight font-extrabold text-white">PADEL</span>
          <span className="text-2xl md:text-3xl tracking-tight font-light text-white/90">SPORT</span>
        </div>

        {/* Right Search & CTA Button */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:flex items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-xs md:text-sm rounded-full py-2 pl-4 pr-9 focus:outline-none focus:ring-2 focus:ring-white/40 w-36 lg:w-48 transition-all"
            />
            <div className="absolute right-2 p-1 bg-white/20 rounded-full text-white">
              <Search className="w-3.5 h-3.5" />
            </div>
          </div>
          <button className="flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer">
            <span>Book Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Community Floating Badge */}
      <div className="relative z-10 mt-8 sm:mt-12 bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 max-w-xs sm:max-w-sm text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white/50 object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Community member"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white/50 object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
              alt="Community member"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white/50 object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
              alt="Community member"
            />
          </div>
          <p className="text-xs text-white/90 leading-tight font-light">
            It's more fun together. Padel connects friends and builds new bonds.
          </p>
        </div>
      </div>

      {/* Bottom Hero Content */}
      <div className="relative z-10 flex flex-col gap-4 items-start mt-auto pt-16">
        <Badge variant="glass">Sport center</Badge>
        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl">
          Your Game, Your Style – <br className="hidden sm:inline" />
          <span className="font-normal">Modern Padel Courts</span> for <br className="hidden sm:inline" />
          Every Level
        </h1>
      </div>
    </section>
  );
};

export default Hero;