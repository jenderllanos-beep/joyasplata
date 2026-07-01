import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Play, Image } from "lucide-react";
import { SALES_COPY } from "../data";

// Retrieve the exact generated image path
const heroImagePath = "/src/assets/images/silver_necklace_hero_1782937080726.jpg";

interface HeroProps {
  onScrollToConfigurator: () => void;
}

export default function Hero({ onScrollToConfigurator }: HeroProps) {
  const [mediaType, setMediaType] = useState<"photo" | "video">("video");

  return (
    <section className="relative overflow-hidden py-12 lg:py-24 px-4 lg:px-8 border-b border-white/10 bg-[#0a0a0a]">
      {/* Subtle Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-[11px] font-mono uppercase tracking-widest text-slate-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Plata Ley 925 & Baño de Oro de 24K — Hecho a Mano</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight font-medium mb-6"
          >
            El Collar Que No Solo{" "}
            <span className="italic font-light text-slate-400 block sm:inline">Completa Tu Outfit…</span>{" "}
            <span className="relative text-amber-100/90">
              Te Completa a Ti
              <span className="absolute left-0 bottom-1.5 w-full h-[2px] bg-amber-500/30" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-8 max-w-2xl"
          >
            {SALES_COPY.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <button
              onClick={onScrollToConfigurator}
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-amber-100 transition-smooth cursor-pointer shadow-lg active:scale-95"
            >
              <span>Diseña Tu Collar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#solucion"
              className="flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-sm text-sm font-medium tracking-widest uppercase transition-smooth border border-white/15"
            >
              Ver Galería de Arte
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-slate-500 uppercase tracking-wider border-t border-white/10 pt-6"
          >
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Garantía de Calidad Certificada</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Empaque Premium Gratis</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Soporte Directo con el Joyero</span>
            </div>
          </motion.div>
        </div>

        {/* Image / Video Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex flex-col items-center gap-4 w-full"
        >
          {/* Custom Sleek Tab Switcher */}
          <div className="flex bg-[#111111] border border-white/10 p-1 rounded-full text-xs font-mono tracking-widest uppercase">
            <button
              onClick={() => setMediaType("video")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                mediaType === "video"
                  ? "bg-amber-600 text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Vídeo del Taller</span>
            </button>
            <button
              onClick={() => setMediaType("photo")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                mediaType === "photo"
                  ? "bg-amber-600 text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Ver Joya</span>
            </button>
          </div>

          <div className="relative p-3 bg-[#161616] border border-white/15 luxury-shadow max-w-md lg:max-w-none w-full aspect-video overflow-hidden rounded-sm group">
            {/* Elegant corner tabs */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30 z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30 z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30 z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30 z-20 pointer-events-none" />

            <div className="w-full h-full overflow-hidden rounded-sm bg-stone-900 relative">
              {mediaType === "photo" ? (
                <img
                  src={heroImagePath}
                  alt="Collar de Plata Artesanal por Jender Llanos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-smooth"
                />
              ) : (
                <iframe
                  className="w-full h-full rounded-sm"
                  src="https://www.youtube.com/embed/jTwiS38qO4M?autoplay=1&mute=1"
                  title="Vídeo de Presentación - Collar Artesanal"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Floater Badge */}
          <div className="absolute -bottom-6 -left-4 bg-[#161616] border border-white/10 px-5 py-3 rounded-sm luxury-shadow flex items-center space-x-3 max-w-xs z-30">
            <span className="text-3xl">✨</span>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Creador Directo
              </p>
              <p className="text-xs font-serif font-medium text-white">
                Diseñado a Mano por Jender Llanos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
