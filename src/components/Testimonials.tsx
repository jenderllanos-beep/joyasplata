import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, SALES_COPY } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Opiniones de Clientes Reales
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {SALES_COPY.testimonialsIntro}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Testimonials Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-[#161616] border border-white/10 rounded-sm luxury-shadow flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-sm text-white">
                    {t.name}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    {t.age} años, {t.location}
                  </p>
                </div>
                
                <Quote className="w-8 h-8 text-white/5 fill-white/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono uppercase tracking-widest">
          🛡️ Todos los testimonios mostrados son de clientes reales y verificables
        </div>

      </div>
    </section>
  );
}
