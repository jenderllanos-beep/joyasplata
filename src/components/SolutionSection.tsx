import React from "react";
import { Sparkle, Compass, Award } from "lucide-react";
import { SALES_COPY } from "../data";

export default function SolutionSection() {
  const sol = SALES_COPY.solution;

  return (
    <section id="solucion" className="py-16 lg:py-24 bg-[#0e0e0e] border-b border-white/10 px-4 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-amber-800/20 text-amber-400 border border-amber-500/20 rounded-full text-[9px] font-mono uppercase tracking-widest">
            {sol.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-medium mt-4 leading-tight">
            {sol.title}
          </h2>
          <div className="w-16 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Content Breakdown: 3 Columns (Text Points, Live Workshop Photo, Editorial Quote) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Core Values (span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#161616] border border-white/10 rounded-sm text-amber-400 mt-1 shrink-0">
                <Sparkle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white font-medium mb-1">Materia Prima Noble</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {sol.intro}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#161616] border border-white/10 rounded-sm text-amber-400 mt-1 shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white font-medium mb-1">El Oficio y Técnica</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {sol.process}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#161616] border border-white/10 rounded-sm text-amber-400 mt-1 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white font-medium mb-1">Tu Sello Personal</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {sol.essence}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Artisan Crafting Photo (span 4) */}
          <div className="lg:col-span-4 relative p-3 bg-[#161616] border border-white/10 rounded-sm luxury-shadow group flex flex-col justify-between h-full min-h-[350px]">
            {/* Elegant corner tabs */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/20" />

            <div className="w-full h-full overflow-hidden rounded-sm bg-stone-900 aspect-[3/4] relative">
              <img
                src="/src/assets/images/artisan_hands_crafting_silver_1782937534402.jpg"
                alt="Manos del joyero artesano Jender Llanos esculpiendo plata fina"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-[#0e0e0e]/90 border border-white/5 px-2.5 py-1 rounded">
                  Taller de Jender Llanos
                </span>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                  Pieza Única
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Large Editorial Card for Positioning (span 4) */}
          <div className="lg:col-span-4 p-8 bg-[#161616] border border-white/10 rounded-sm luxury-shadow relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600" />
            
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                Creado Con Intención
              </p>
              <p className="font-serif text-xl text-slate-100 leading-relaxed font-light">
                "{sol.destination}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Para Quién Es
                </p>
                <p className="font-serif font-medium text-sm text-white uppercase tracking-wider">
                  {sol.personalNote}
                </p>
              </div>
              <span className="text-2xl text-amber-500/40 italic font-serif">JL</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
