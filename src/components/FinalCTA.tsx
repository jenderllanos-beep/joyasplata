import React from "react";
import { MessageSquare, ShoppingBag, ArrowUp } from "lucide-react";
import { SALES_COPY } from "../data";

interface FinalCTAProps {
  onScrollToConfigurator: () => void;
  onOpenChat: () => void;
}

export default function FinalCTA({ onScrollToConfigurator, onOpenChat }: FinalCTAProps) {
  const cta = SALES_COPY;

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] text-slate-100 border-b border-white/10 px-4 lg:px-8 relative overflow-hidden text-center">
      {/* Background glowing particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Subtle accent badge */}
        <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-amber-500 font-semibold">
          Tu Decisión de Imagen
        </span>

        {/* Large Display Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-2xl mx-auto font-medium">
          {cta.finalCtaTitle}
        </h2>
        
        <div className="w-12 h-[1px] bg-amber-500/30 mx-auto" />

        {/* Rich sales narrative */}
        <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed font-light">
          <p>{cta.finalCtaText1}</p>
          
          <p className="font-serif italic text-lg text-amber-400 font-normal py-2">
            "{cta.finalCtaQuestion}"
          </p>
          
          <p>{cta.finalCtaText2}</p>
        </div>

        {/* Dynamic CTA Button triggering store scroll */}
        <div className="pt-6 space-y-4 max-w-sm mx-auto">
          <button
            onClick={onScrollToConfigurator}
            className="w-full group flex items-center justify-center space-x-2.5 px-8 py-5 bg-amber-600 text-white rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-amber-500 transition-smooth cursor-pointer shadow-lg shadow-black/20"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{cta.finalCtaButton}</span>
          </button>
          
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
            {cta.finalCtaSub}
          </p>
        </div>

        {/* Summary lists of benefits/limits */}
        <div className="pt-8 text-xs font-mono text-slate-500 uppercase tracking-widest max-w-xl mx-auto">
          <p className="border-y border-white/10 py-3 leading-loose">
            {cta.finalCtaFooter}
          </p>
          <p className="pt-4 text-amber-400 font-semibold tracking-widest text-sm">
            {cta.finalCtaDecision}
          </p>
        </div>

        {/* Pre-purchase support line */}
        <div className="pt-10 border-t border-white/10 max-w-2xl mx-auto space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            {cta.finalCtaContact}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenChat}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-amber-500 hover:bg-white/5 transition-smooth cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Preguntar en el Sitio</span>
            </button>
            <a
              href="https://wa.me/593983647582?text=Hola%20Jender%2C%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20dise%C3%B1ar%20un%20collar%20artesanal%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs font-mono text-white transition-smooth cursor-pointer font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.016.992 11.435.992c-5.439 0-9.865 4.371-9.87 9.801 0 1.748.475 3.4 1.372 4.908l-1.025 3.742 3.86-.99c1.552.883 3.109 1.35 4.77 1.35zm11.365-7.72c-.3-.15-1.77-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C10.1 5.3 9.5 3.825 9.25 3.225c-.244-.593-.491-.51-.676-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 1.05-1.125 1.075-.075.025-.375.125-.375.425 0 .3.25.75.35.875.1.125 1.95 3.125 4.875 4.25.695.267 1.24.427 1.665.56.7.22 1.34.19 1.84.116.56-.083 1.77-.725 2.025-1.39.25-.665.25-1.24.175-1.39-.075-.15-.275-.225-.575-.375z" />
              </svg>
              <span>WhatsApp: +593 983647582</span>
            </a>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden md:inline">o escríbele a</span>
            <span className="text-xs font-mono text-amber-400">jenderllanos@gmail.com</span>
          </div>

          <div className="pt-4">
            <p className="font-serif italic text-base tracking-widest text-white uppercase">
              {cta.finalCtaSignature}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
