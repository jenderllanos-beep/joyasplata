import React from "react";
import { Quote } from "lucide-react";
import { SALES_COPY } from "../data";

export default function StorySection() {
  const story = SALES_COPY.story;

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
              {story.title}
            </span>
            <h3 className="font-serif text-3xl text-white tracking-tight font-medium">
              Conexión Emocional & Arte
            </h3>
            <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
              {story.paragraph1}
            </p>
            <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
              {story.paragraph2}
            </p>
            <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
              {story.paragraph3}
            </p>
          </div>

          {/* Large Quote Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative p-8 bg-[#161616] border border-white/15 rounded-sm luxury-shadow">
              {/* Elegant Accent Quote Icon */}
              <Quote className="absolute -top-4 -left-3 w-10 h-10 text-amber-500/20 fill-amber-500/10" />

              <p className="font-serif italic text-base sm:text-lg text-slate-100 leading-relaxed mb-6 font-light">
                {story.quote}
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-serif font-medium text-xs text-white uppercase tracking-wider">
                  Valentina, 28 años
                </p>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Cliente de Graduación
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story moral and summary */}
        <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">La Diferencia Clave</p>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {story.moral}
            </p>
          </div>
          <div className="flex flex-col justify-center bg-[#111] p-6 rounded-sm border border-white/5">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">En Pocas Palabras</p>
            <p className="font-serif text-lg text-white font-medium tracking-tight">
              {story.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
