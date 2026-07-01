import React from "react";
import { ShoppingBag, MessageSquare, Phone } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onScrollToConfigurator: () => void;
  onOpenChat: () => void;
}

export default function Header({ cartCount, onScrollToConfigurator, onOpenChat }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-4 transition-smooth">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex flex-col">
          <span className="font-serif text-xl lg:text-2xl tracking-widest uppercase font-medium text-white">
            Jender Llanos
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-0.5">
            Joyería Artesanal
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest text-slate-400 font-medium">
          <a href="#problema" className="hover:text-white transition-colors">
            El Origen
          </a>
          <a href="#solucion" className="hover:text-white transition-colors">
            La Joya
          </a>
          <a href="#beneficios" className="hover:text-white transition-colors">
            Beneficios
          </a>
          <a href="#proceso" className="hover:text-white transition-colors">
            Cómo Funciona
          </a>
          <a href="#testimonios" className="hover:text-white transition-colors">
            Opiniones
          </a>
          <a href="#preguntas" className="hover:text-white transition-colors">
            F.A.Q.
          </a>
        </nav>

        {/* Action Elements */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <button
            onClick={onOpenChat}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/15 text-xs font-medium text-slate-300 hover:bg-white hover:text-black transition-smooth cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Preguntar a Jender</span>
          </button>

          <button
            onClick={onScrollToConfigurator}
            className="relative flex items-center justify-center p-2.5 rounded-full bg-white text-black hover:bg-slate-200 transition-smooth hover:scale-105 cursor-pointer"
            aria-label="Ver Configurador"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[9px] font-bold text-white ring-2 ring-[#0a0a0a]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
