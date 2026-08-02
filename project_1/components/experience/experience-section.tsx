"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="w-full mx-auto px-6 md:px-16 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24  items-stretch">
        
        {/* Left Dark Interactive Feature Card */}
        <div className="lg:col-span-6 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between 
        shadow-2xl relative overflow-hidden min-h-[420px]">
          {/* Background image preview with dark gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Padel Court Background"
              className="w-full h-full object-cover"
            />
            
          </div>

          {/* Top content */}
          <div className="relative z-10 space-y-4 max-w-md">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
              Premium Padel Courts for Training and Play
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Our courts are designed for both individual and group sessions.
            </p>
            <button className="flex items-center gap-2 bg-black/80 hover:bg-black border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium backdrop-blur-md transition-all cursor-pointer">
              <span>Book a court</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bottom Pagination & Nav Controls */}
          <div className="relative z-10 flex items-center justify-between pt-12 border-t border-white/10 mt-6">
            <span className="text-xs text-zinc-400 font-mono tracking-widest">{currentSlide}/8</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : 8))}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev < 8 ? prev + 1 : 1))}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Feature Highlight */}
        <div className="lg:col-span-6 flex flex-col justify-between py-2">
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-medium text-zinc-900 tracking-tight leading-tight">
            Experience the Best <br/> in Padel and More
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Image card with floating + icon */}
            <div className="sm:col-span-4 relative rounded-3xl overflow-hidden shadow-md group h-[15rem]">
              <img
                src="/rackets_balls.jpg"
                alt="Padel Rackets and Balls"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 left-4 bg-black/80 hover:bg-black text-white p-2.5 rounded-full border border-white/20 shadow-lg transition-transform hover:scale-110 cursor-pointer">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Description Text */}
            <div className="sm:col-span-8">
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pr-20">
                Our facilities feature state-of-the-art padel courts, training zones, and spaces for tournaments or casual games. A place where sport and leisure come together perfectly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
