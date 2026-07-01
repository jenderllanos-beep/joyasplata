import React from "react";
import { Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import { SALES_COPY } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-slate-100 border-t border-white/10 py-12 lg:py-16 px-4 lg:px-8 relative overflow-hidden">
      {/* Background soft highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-amber-500/5 rounded-tl-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Brand Information (Col span 5) */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-widest uppercase font-medium text-amber-500">
              Jender Llanos
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono -mt-1">
              Joyería Artesanal con Alma
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
            Diseñando y esculpiendo joyería fina de plata de ley 925 con técnicas tradicionales desde hace cinco años. Cada pieza es elaborada y revisada de forma individual, pieza por pieza.
          </p>
        </div>

        {/* Links and Columns (Col span 4) */}
        <div className="md:col-span-4 space-y-4 text-left">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Garantías y Soporte Directo
          </span>
          <div className="space-y-2 text-xs text-slate-400 leading-relaxed font-light">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Garantía contra defectos de fabricación</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Plata Certificada 925 grabada</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Bonos promocionales limitados</span>
            </div>
          </div>
        </div>

        {/* Contact direct (Col span 3) */}
        <div className="md:col-span-3 space-y-4 text-left">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-500 font-semibold">
            Contacto del Taller
          </span>
          <p className="text-xs text-slate-400 font-light">
            Si deseas un encargo especial, tienes dudas antes de ordenar o necesitas un ajuste:
          </p>
          <div className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 p-3.5 rounded-sm space-y-1">
            <p className="font-semibold text-amber-500">Jender Llanos</p>
            <p className="text-[10px] text-slate-400">jenderllanos@gmail.com</p>
            <a 
              href="https://wa.me/593983647582?text=Hola%20Jender%2C%20vengo%20de%20tu%20sitio%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[10px] text-emerald-400 hover:text-emerald-300 transition-colors mt-1 font-medium uppercase tracking-wider cursor-pointer"
            >
              <span>WhatsApp: +593 983647582</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>

      {/* Legal & credits row */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-slate-500">
        <span>© {currentYear} Jender Llanos. Todos los derechos reservados.</span>
        <span>Hecho a mano con plata fina 925 certificada</span>
      </div>
    </footer>
  );
}
