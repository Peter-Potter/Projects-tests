import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 text-white flex items-center 
    justify-between px-6 md:px-16 py-20">
      {/* Background Court Action Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Ready to play padel court action"
          className="w-full h-full object-cover object-center opacity-60 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-start gap-8 z-10 max-w-2xl py-20">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight">
          Ready to play <br />
          <span className="font-normal">with us ?</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-md">
          Experience padel like never before – friendly matches, training sessions, and a community that feels like family.
        </p>
        <button className="flex items-center gap-2 bg-black hover:bg-zinc-900 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer mt-4">
          <span>Join the Group</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
