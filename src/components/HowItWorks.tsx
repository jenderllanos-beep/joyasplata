import React from "react";
import { HOW_IT_WORKS, SALES_COPY } from "../data";

export default function HowItWorks() {
  return (
    <section id="proceso" className="py-16 lg:py-24 bg-[#0e0e0e] border-b border-white/10 px-4 lg:px-8 relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-amber-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Paso a Paso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {SALES_COPY.howItWorksIntro}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS.map((stepItem, index) => {
            return (
              <div
                key={stepItem.step}
                className="relative p-6 bg-[#161616] border border-white/5 rounded-sm hover:border-amber-500/40 transition-smooth luxury-shadow flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-mono text-sm font-semibold">
                    {stepItem.step}
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400">
                    Fase {stepItem.step} de 6
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-white font-medium leading-snug">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {stepItem.description}
                  </p>
                </div>

                {/* Fine visual spacer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                  <span className="text-[10px] text-slate-500 font-mono">
                    PROGRESO {Math.round((stepItem.step / 6) * 100)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
