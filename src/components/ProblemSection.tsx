import React from "react";
import { motion } from "motion/react";
import { Eye, ShieldAlert, Gift, ArrowRight } from "lucide-react";
import { SALES_COPY } from "../data";

export default function ProblemSection() {
  return (
    <section id="problema" className="py-16 lg:py-24 bg-[#0e0e0e] border-b border-white/10 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/3 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Subtle section header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            El Conflicto Cotidiano
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight font-medium mt-2 max-w-2xl mx-auto leading-tight">
            {SALES_COPY.problem.question}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Narrative columns / layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Missing Spark */}
          <div className="p-6 bg-[#161616] border border-white/5 rounded-sm luxury-shadow flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-4 text-amber-400">
                <Eye className="w-4 h-4" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400/60 mb-2">01 / El Espejo Vacío</p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Revisas el espejo. La ropa está bien. El cabello, también. Pero hay algo que no termina de cuadrar. Esa chispa que convierte un look en una declaración de intención. Ese detalle que hace que la gente te mire dos veces y piense: <span className="font-serif italic text-white">"ella tiene algo especial."</span>
              </p>
            </div>
          </div>

          {/* Card 2: Plastic Accessories */}
          <div className="p-6 bg-[#161616] border border-white/5 rounded-sm luxury-shadow flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-4 text-amber-400">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400/60 mb-2">02 / Calidad Descartable</p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                O quizás ya tienes joyas. Pero son esas piezas genéricas que compraste de prisa, que se oscurecen a los tres meses, que se rompen en el peor momento posible, y que en el fondo sabes que no dicen nada de ti. Joyas de plástico disfrazadas de metal.
              </p>
            </div>
          </div>

          {/* Card 3: Gift Dilemma */}
          <div className="p-6 bg-[#161616] border border-white/5 rounded-sm luxury-shadow flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-4 text-amber-400">
                <Gift className="w-4 h-4" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400/60 mb-2">03 / El Regalo Común</p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Y no hablemos de cuándo necesitas hacer un regalo especial. Esa angustia de querer dar algo bonito, significativo, que no parezca comprado a último momento… pero que tampoco te cueste una fortuna. Todo parece ordinario o inaccesible.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Frustration Statement */}
        <div className="p-8 bg-[#1a1a1a] text-slate-300 border border-white/10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">La Realidad Detrás de Todo</p>
          <p className="font-serif text-xl sm:text-2xl font-light leading-relaxed tracking-wide mb-6 text-white">
            "{SALES_COPY.problem.frustration}"
          </p>
          
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <span>{SALES_COPY.problem.resolution}</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
