"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Badge from "../ui/badge";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Joining the padel club has been the best decision for my free time. The atmosphere is amazing, and every match brings excitement and new friends!",
    name: "Marina S.",
    role: "club member",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    nextImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    quote: "The facility quality and court maintenance are second to none. Coaches are extremely helpful and the community tournaments are super fun!",
    name: "Alex R.",
    role: "pro member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    nextImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="membership" className="w-full mx-auto px-6 md:px-16 py-16 md:py-24">
      
      {/* Header Row */}
      <div className="flex items-center justify-between gap-6 mb-12">
        <div className="flex flex-col items-start gap-3">
          <Badge variant="light">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight">
            What Our Members Say
          </h2>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Photo */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-[460px]">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
        </div>

        {/* Right Quote Content */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8 py-4">
          <div className="space-y-6">
            <Quote className="w-12 h-12 text-zinc-800 fill-zinc-900 stroke-none" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-800 leading-snug tracking-tight">
              "{current.quote}"
            </p>
            <div>
              <p className="text-sm font-semibold text-zinc-900">{current.name}, <span className="font-light text-zinc-500">{current.role}</span></p>
            </div>
          </div>

          {/* Bottom indicator & next thumbnail preview */}
          <div className="flex items-center justify-end gap-3 pt-8">
            <span className="text-xs text-zinc-400 font-mono">{index + 1}/{TESTIMONIALS.length}</span>
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-zinc-200 shadow-sm cursor-pointer" onClick={handleNext}>
              <img
                src={current.nextImage}
                alt="Next member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;
