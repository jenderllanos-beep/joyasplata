import React from "react";
import { X, Check, RefreshCw } from "lucide-react";
import { TRANSFORMATION } from "../data";

export default function Transformation() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            El Antes y Después
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            La Transformación del Collar Correcto
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* BEFORE */}
          <div className="bg-[#161616] border border-white/5 rounded-sm p-8 luxury-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-red-900/40" />
            
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="font-serif font-semibold text-lg text-slate-300">
                  {TRANSFORMATION.before.title}
                </span>
              </div>

              <ul className="space-y-4">
                {TRANSFORMATION.before.points.map((pt, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs text-slate-400 leading-relaxed font-light">
                    <span className="text-red-400/50 mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-[9px] font-mono uppercase tracking-widest text-red-400/60">
                Estado de Frustración Cotidiana
              </p>
            </div>
          </div>

          {/* AFTER */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-sm p-8 luxury-shadow relative overflow-hidden flex flex-col justify-between text-slate-200">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-600/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-serif font-semibold text-lg text-amber-300">
                  {TRANSFORMATION.after.title}
                </span>
              </div>

              <ul className="space-y-4">
                {TRANSFORMATION.after.points.map((pt, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs text-slate-200 leading-relaxed font-light">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-[9px] font-mono uppercase tracking-widest text-amber-400">
                Estado de Presencia y Autenticidad
              </p>
            </div>
          </div>
        </div>

        {/* Synthesis Box */}
        <div className="p-8 bg-[#161616] border border-white/10 rounded-sm text-center relative luxury-shadow">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <RefreshCw className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
              Transformación Holística
            </span>
          </div>
          <p className="font-serif text-lg text-slate-300 leading-relaxed font-light">
            "La transformación no es solo estética. Es la seguridad de saber que lo que llevas encima es bueno de verdad. Y eso — ese pequeño pero poderoso conocimiento — cambia cómo te mueves por el mundo."
          </p>
        </div>

      </div>
    </section>
  );
}
