import React from "react";
import { motion } from "motion/react";
import { BENEFITS, SALES_COPY } from "../data";

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            ¿Por Qué Elegir Plata Real Hecha a Mano?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {SALES_COPY.benefitsIntro}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Bento Grid layout of the 8 benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => {
            // pad number to 2 digits
            const numStr = String(idx + 1).padStart(2, "0");
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group p-6 bg-[#161616] border border-white/10 rounded-sm hover:border-amber-500/40 transition-smooth luxury-shadow hover:scale-[1.02] flex flex-col justify-between"
              >
                <div>
                  {/* Number tag */}
                  <span className="block font-mono text-xs text-amber-400 font-medium tracking-widest mb-4">
                    BENEFICIO {numStr}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg text-white font-medium leading-tight mb-3 group-hover:text-amber-300 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="w-6 h-[1px] bg-white/10 group-hover:bg-amber-500 group-hover:w-full transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
