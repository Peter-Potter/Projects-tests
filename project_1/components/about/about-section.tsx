"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "../ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <Badge variant="light">About Padel Club</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
            At our padel center, we bring sport and community together. From beginners to professionals – everyone can find their place here.
          </h2>
          <button className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer mt-2">
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column: 2 Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6">
          
          {/* Card 1: Outdoor Area */}
          <div className="sm:col-span-7 relative group rounded-3xl overflow-hidden shadow-lg h-[340px] sm:h-[380px]">
            <img
              src="/about_outdoor.jpg"
              alt="Outdoor area court"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="glass">Outdoor area</Badge>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <p className="text-white text-sm font-light leading-snug max-w-[200px]">
                A space for training, relaxing, and friendly matches
              </p>
              <button className="bg-black/60 hover:bg-black text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Indoor Courts */}
          <div className="sm:col-span-5 flex flex-col justify-between bg-zinc-50 border border-zinc-100 p-4 rounded-3xl shadow-sm">
            <div className="relative rounded-2xl overflow-hidden h-[70%] mb-4 group">
              <img
                src="/about_indoor.jpg"
                alt="Indoor courts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="glass" className="text-xs py-1 px-3">Indoor courts</Badge>
              </div>
            </div>

            <div className="px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Court</span>
              <p className="text-xs text-zinc-600 mt-1 font-light leading-relaxed">
                Discover your new favorite place – play, train, and compete.
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end gap-2 mt-4">
              <button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
