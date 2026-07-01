import React from "react";
import { ArrowDown, DollarSign, Store, Tag } from "lucide-react";
import { SALES_COPY } from "../data";

interface PricingSectionProps {
  onScrollToConfigurator: () => void;
}

export default function PricingSection({ onScrollToConfigurator }: PricingSectionProps) {
  const pc = SALES_COPY;

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Transparencia y Valor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {pc.pricingIntro}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Pricing Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Commercial Boutique */}
          <div className="p-8 bg-[#161616]/40 border border-white/5 rounded-sm luxury-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Store className="w-5 h-5 text-slate-500" />
                <h3 className="font-serif font-semibold text-slate-500 text-base uppercase tracking-wider">
                  Boutique en Centro Comercial
                </h3>
              </div>

              <div className="mb-6">
                <span className="text-sm text-slate-500 font-mono">Precio Promedio</span>
                <p className="font-serif text-3xl text-slate-500 font-semibold line-through">
                  $80 - $200 USD
                </p>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-500 font-light">
                <li>• Pagas el alquiler del local comercial premium.</li>
                <li>• Margen de intermediarios y cadena de distribución.</li>
                <li>• Sueldo de comisionistas y personal de ventas.</li>
                <li>• Presentación estándar sin grabados personalizados.</li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Gastos Indirectos de Tiendas Físicas
              </p>
            </div>
          </div>

          {/* Direct Creator - Jender Llanos */}
          <div className="p-8 bg-[#161616] border border-white/10 rounded-sm luxury-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Tag className="w-5 h-5 text-amber-400 animate-pulse" />
                <h3 className="font-serif font-semibold text-amber-400 text-base uppercase tracking-wider">
                  Compra Directa al Taller
                </h3>
              </div>

              <div className="mb-6">
                <span className="text-sm text-slate-400 font-mono">Inversión Desde</span>
                <p className="font-serif text-4xl text-white font-bold">
                  $10.00 USD
                </p>
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                  Suma personalizada hasta $100+
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 font-light">
                <li className="flex items-center space-x-2 text-emerald-400">
                  <span className="font-semibold text-emerald-400">✔</span>
                  <span>Sin locales costosos. Pagas valor real de la plata.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-emerald-400">✔</span>
                  <span>Trato personal con el propio joyero Jender Llanos.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-emerald-400">✔</span>
                  <span>Opciones de grabado y longitud a medida.</span>
                </li>
                <li className="flex items-center space-x-2 text-emerald-400">
                  <span className="font-semibold text-emerald-400">✔</span>
                  <span>Bonos incluidos gratis (Empaque, envío, guía).</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <p className="text-[9px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Relación Justa de Confianza
              </p>
              <button
                onClick={onScrollToConfigurator}
                className="text-[10px] font-mono uppercase font-semibold text-white flex items-center space-x-1 hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>Configurar</span>
                <ArrowDown className="w-3 h-3 animate-bounce" />
              </button>
            </div>
          </div>

        </div>

        {/* Narrative Copy mapping exact user text */}
        <div className="p-6 bg-[#161616] border border-white/10 rounded-sm text-center luxury-shadow space-y-4 max-w-3xl mx-auto">
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            {pc.pricingText1}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            {pc.pricingText2}
          </p>
          <p className="font-serif italic text-base text-amber-400">
            "{pc.pricingRange}"
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            {pc.pricingText3}
          </p>
          <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
            {pc.pricingNote}
          </p>
        </div>

      </div>
    </section>
  );
}
