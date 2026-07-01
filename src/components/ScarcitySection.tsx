import React, { useState, useEffect } from "react";
import { AlertTriangle, Clock, Sparkles } from "lucide-react";
import { SALES_COPY } from "../data";

export default function ScarcitySection() {
  const sc = SALES_COPY;

  // Live simulation variables
  const [stockCount, setStockCount] = useState(14);
  const [minutesLeft, setMinutesLeft] = useState(48);

  // Subtle live stock tick
  useEffect(() => {
    const stockTimer = setInterval(() => {
      setStockCount((prev) => (prev > 5 ? prev - 1 : 14));
    }, 45000);

    const minutesTimer = setInterval(() => {
      setMinutesLeft((prev) => (prev > 1 ? prev - 1 : 59));
    }, 60000);

    return () => {
      clearInterval(stockTimer);
      clearInterval(minutesTimer);
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8 relative overflow-hidden">
      
      {/* Decorative linear grids */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-[2px] bg-white/10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-[2px] bg-white/10" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
            Inventario Limitado del Taller
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {sc.scarcityTitle}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Live Urgency Status Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-center">
          {/* Stock bar */}
          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-sm flex items-center justify-between text-left">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block">Stock Disponible</span>
                <span className="font-serif text-sm font-semibold text-white">Quedan {stockCount} piezas en almacén</span>
              </div>
            </div>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-ping shrink-0" />
          </div>

          {/* Shipment bar */}
          <div className="p-4 bg-emerald-950/40 border border-emerald-500/20 rounded-sm flex items-center justify-between text-left">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 block">Envío Gratuito</span>
                <span className="font-serif text-sm font-semibold text-white">Vence en {minutesLeft}m de esta sesión</span>
              </div>
            </div>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
          </div>
        </div>

        {/* Narrative Copy mapping exact user text */}
        <div className="space-y-6 text-sm text-slate-400 leading-relaxed font-light mb-10 max-w-3xl mx-auto text-left md:text-center">
          <p>{sc.scarcityText1}</p>
          <p>{sc.scarcityText2}</p>
          <p>{sc.scarcityText3}</p>
          <p>{sc.scarcityText4}</p>
        </div>

        {/* Scarcity highlighted quote callout */}
        <div className="p-8 bg-[#161616] border border-white/10 text-white rounded-sm relative text-center luxury-shadow">
          <p className="font-serif text-lg sm:text-xl font-light italic leading-relaxed mb-4 text-amber-100">
            "{sc.scarcityCallout}"
          </p>
          
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{sc.scarcityAction}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </section>
  );
}
