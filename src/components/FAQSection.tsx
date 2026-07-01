import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQS, SALES_COPY } from "../data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first is open by default

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="preguntas" className="py-16 lg:py-24 bg-[#0e0e0e] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Dudas Resueltas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            Preguntas Frecuentes
          </h2>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Accordions Log */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#161616] border border-white/10 rounded-sm overflow-hidden luxury-shadow transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 lg:p-6 flex items-center justify-between space-x-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-serif text-sm lg:text-base font-semibold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-full bg-white/5 text-slate-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-white/5 p-5 lg:p-6 bg-[#0e0e0e]/50" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-xs lg:text-sm text-slate-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
