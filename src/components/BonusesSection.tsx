import React from "react";
import { Gift, CreditCard, Sparkles, Truck, Heart, HelpCircle } from "lucide-react";
import { BONUSES, SALES_COPY } from "../data";

// Retrieve the exact generated premium box path
const boxImagePath = "/src/assets/images/premium_gift_box_1782937142343.jpg";

export default function BonusesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
            Valores Agregados Exclusivos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            {SALES_COPY.bonusesIntro}
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Feature Layout with Gift Image & Bonus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          {/* Visual Highlight - Bono 1 Box Image (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#161616] border border-white/10 rounded-sm luxury-shadow relative overflow-hidden">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono uppercase tracking-widest">
                <Gift className="w-3.5 h-3.5" />
                <span>Bono Destacado 1</span>
              </span>
              <h3 className="font-serif text-2xl text-white font-medium tracking-tight">
                Empaque Premium de Regalo
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Cada collar se envía listo para regalar en nuestro estuche rígido gris carbón satinado, cojín de terciopelo y cinta de raso.
              </p>
            </div>

            {/* Packaging Image from Generator */}
            <div className="my-6 aspect-[4/3] rounded-sm overflow-hidden bg-stone-900 border border-white/5">
              <img
                src={boxImagePath}
                alt="Empaque Premium de Regalo Jender Llanos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400">
              <span>VALOR: $8.00 USD</span>
              <span className="text-emerald-400 font-semibold">¡GRATIS HOY!</span>
            </div>
          </div>

          {/* Other Bonuses Grid (Col span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {BONUSES.slice(1).map((bonus, index) => {
              // Custom icon for each bonus
              let bonusIcon = <Sparkles className="w-5 h-5 text-amber-400" />;
              if (bonus.id === 2) bonusIcon = <Truck className="w-5 h-5 text-amber-400" />;
              if (bonus.id === 3) bonusIcon = <Heart className="w-5 h-5 text-amber-400" />;
              if (bonus.id === 4) bonusIcon = <CreditCard className="w-5 h-5 text-amber-400" />;
              if (bonus.id === 5) bonusIcon = <HelpCircle className="w-5 h-5 text-amber-400" />;

              return (
                <div
                  key={bonus.id}
                  className="p-6 bg-[#161616] border border-white/10 rounded-sm luxury-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-[#0e0e0e] border border-white/5 rounded">
                        {bonusIcon}
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-950/40 border border-emerald-500/20 rounded">
                        Gratis
                      </span>
                    </div>

                    <h4 className="font-serif text-base text-white font-medium leading-snug">
                      {bonus.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {bonus.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span>VALOR APROX: {bonus.id === 5 ? "Invaluable" : `$${bonus.value}.00 USD`}</span>
                    <span className="text-amber-400 font-medium">Bono {bonus.id}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic total valuation card */}
        <div className="p-6 bg-[#1a1a1a] text-white rounded-sm text-center border border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-1 block">
            Suma de Beneficios Extraordinarios
          </span>
          <p className="font-serif text-base sm:text-lg font-light">
            Al ordenar hoy, recibes más de <span className="font-semibold text-amber-400">$60.00 USD</span> en bonos exclusivos y empaques de regalo sin pagar un solo centavo adicional.
          </p>
        </div>

      </div>
    </section>
  );
}
