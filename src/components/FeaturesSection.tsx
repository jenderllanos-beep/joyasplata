import React, { useState } from "react";
import { Sparkles, Link, Shield, Gift, Heart, FileCheck, Check } from "lucide-react";
import { FEATURES, SALES_COPY } from "../data";

// Helper to render correct icon based on string name
function renderFeatureIcon(name: string, active: boolean) {
  const css = `w-5 h-5 transition-colors ${active ? "text-white" : "text-slate-400 group-hover:text-amber-400"}`;
  switch (name) {
    case "Sparkles":
      return <Sparkles className={css} />;
    case "Link":
      return <Link className={css} />;
    case "ShieldAlert":
      return <Shield className={css} />;
    case "Gift":
      return <Gift className={css} />;
    case "Heart":
      return <Heart className={css} />;
    case "FileCheck":
      return <FileCheck className={css} />;
    default:
      return <Sparkles className={css} />;
  }
}

export default function FeaturesSection() {
  const [activeFeatureId, setActiveFeatureId] = useState("collar");
  const activeFeature = FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section className="py-16 lg:py-24 bg-[#0e0e0e] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Especificaciones y Componentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {SALES_COPY.featuresIntro}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Interactive Showcase Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Menu selection list (col span 5) */}
          <div className="md:col-span-5 space-y-2 flex flex-col justify-center">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 px-3">
              Haz clic para examinar cada detalle:
            </p>
            {FEATURES.map((feat) => {
              const isActive = feat.id === activeFeatureId;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeatureId(feat.id)}
                  className={`group flex items-center space-x-3.5 w-full text-left p-3.5 rounded-sm border transition-smooth cursor-pointer ${
                    isActive
                      ? "bg-[#1c1c1c] border-amber-500/50 text-white"
                      : "bg-[#111111]/40 border-white/5 hover:bg-[#161616] hover:border-white/10 text-slate-400"
                  }`}
                >
                  <div
                    className={`p-2 rounded-sm transition-smooth ${
                      isActive ? "bg-amber-800" : "bg-[#1a1a1a] border border-white/5"
                    }`}
                  >
                    {renderFeatureIcon(feat.iconName, isActive)}
                  </div>
                  <span className="font-serif text-sm font-medium tracking-tight">
                    {feat.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Details visual preview box (col span 7) */}
          <div className="md:col-span-7 bg-[#161616] border border-white/10 rounded-sm p-8 lg:p-12 luxury-shadow relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-650/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-6">
              {/* Feature Icon Indicator */}
              <div className="inline-flex p-3 bg-white/5 border border-white/10 rounded-sm text-amber-400">
                {renderFeatureIcon(activeFeature.iconName, false)}
              </div>

              {/* Title and Badge */}
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                  Componente de Calidad Incluido
                </span>
                <h3 className="font-serif text-2xl text-white font-medium tracking-tight">
                  {activeFeature.title}
                </h3>
              </div>

              {/* Rich detail description */}
              <p className="text-sm text-slate-300 leading-relaxed font-light min-h-[100px]">
                {activeFeature.description}
              </p>
            </div>

            {/* Quality assurance indicator */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center space-x-2 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Calidad Certificada Jender Llanos — 100% Garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
