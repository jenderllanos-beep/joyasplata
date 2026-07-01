import React from "react";
import { ShieldCheck, Award, MessageSquare } from "lucide-react";
import { SALES_COPY } from "../data";

export default function GuaranteeSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8 relative overflow-hidden">
      {/* Background radial soft aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 bg-[#161616] border border-white/10 rounded-sm p-8 lg:p-16 luxury-shadow">
        
        {/* Shield Layout header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-2">
            <ShieldCheck className="w-8 h-8" />
          </div>
          
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
            Respaldo Completo de 5 Años
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-white tracking-tight font-medium">
            {SALES_COPY.guaranteeTitle}
          </h2>
          <p className="font-serif text-lg lg:text-xl text-amber-400 italic font-light max-w-xl">
            "{SALES_COPY.guaranteeText}"
          </p>
          <div className="w-16 h-[1px] bg-amber-600/30 mt-4" />
        </div>

        {/* Guarantee text columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-400 leading-relaxed font-light mb-10">
          <p>{SALES_COPY.guaranteeDetail1}</p>
          <p>{SALES_COPY.guaranteeDetail2}</p>
        </div>

        {/* Reassuring Callout Box */}
        <div className="p-6 bg-[#0e0e0e] border-l-2 border-amber-600 rounded-r-sm mb-8">
          <p className="font-serif text-base text-white font-medium italic mb-2">
            {SALES_COPY.guaranteeCallout}
          </p>
          <p className="text-xs text-slate-400">
            {SALES_COPY.guaranteeAction}
          </p>
        </div>

        {/* Direct Trust points row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-center">
          <div className="space-y-1">
            <p className="font-serif font-semibold text-sm text-white">Reemplazo Directo</p>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Sin excusas ni trabas</p>
          </div>
          <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-white/10 py-3 sm:py-0">
            <p className="font-serif font-semibold text-sm text-white">Soporte Humano</p>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Jender atiende tu pedido</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif font-semibold text-sm text-white">Plata Fina 100%</p>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Garantía material vitalicia</p>
          </div>
        </div>

      </div>
    </section>
  );
}
