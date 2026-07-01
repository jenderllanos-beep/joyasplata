import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, CheckCircle2, User, Clock, ArrowRight } from "lucide-react";
import { SALES_COPY, FAQS } from "../data";

// Helper responses tailored in Jender's voice based on FAQs and sales copy
function getJenderResponse(userInput: string): string {
  const query = userInput.toLowerCase();

  if (query.includes("whatsapp") || query.includes("teléfono") || query.includes("telefono") || query.includes("contacto") || query.includes("escribir") || query.includes("número") || query.includes("numero") || query.includes("escribirle")) {
    return "¡Hola! Claro que sí, me puedes escribir directamente a mi WhatsApp personal al +593 983647582. Estoy disponible para cualquier duda sobre los diseños, grabados especiales o pedidos personalizados.";
  }
  if (query.includes("oro") || query.includes("gold") || query.includes("baño de oro") || query.includes("rosa") || query.includes("sólido")) {
    return "¡Hola! Sí, por supuesto que trabajo con oro. En el configurador interactivo de arriba, acabo de activar las opciones de Baño en Oro de 24K, Baño en Oro Rosa de 18K, e incluso Oro Amarillo Sólido de 18K bajo pedido. El acabado es impecable, con un brillo deslumbrante y duradero.";
  }
  if (query.includes("plata") || query.includes("material") || query.includes("baño") || query.includes("real")) {
    return "Hola. Sí, te garantizo al 100% que es plata de ley real (Plata 925 de alta densidad), no un simple baño metálico barato que se desgasta a las pocas semanas. Me tomo muy en serio la nobleza de los materiales con los que trabajo.";
  }
  if (query.includes("personalizado") || query.includes("grabado") || query.includes("especial") || query.includes("nombre")) {
    return "¡Por supuesto! En el configurador de arriba puedes agregar un grabado a punzón artesanal sobre el reverso del dije. Si tienes una idea aún más única o quieres combinar metales, avísame y con gusto lo diseñamos juntos.";
  }
  if (query.includes("tiempo") || query.includes("cuánto tarda") || query.includes("llegar") || query.includes("envío") || query.includes("despacho")) {
    return "Normalmente despacho las piezas en un plazo de 24 a 48 horas. Con el envío estándar gratuito que te obsequio en el Bono 2, suele tomar de 5 a 8 días hábiles dependiendo de tu ciudad. Si tienes prisa, puedes elegir el Envío Express al ordenar.";
  }
  if (query.includes("cuidar") || query.includes("limpiar") || query.includes("brillo") || query.includes("negro") || query.includes("verde")) {
    return "La plata fina reacciona al ambiente, pero cuidarla es sumamente fácil. Te incluyo una guía física con instrucciones claras (Bono 3). El truco principal es guardarla seca, separada de otras piezas, y limpiarla con un paño suave. ¡Así te durará toda la vida!";
  }
  if (query.includes("dañado") || query.includes("garantía") || query.includes("defecto") || query.includes("problema") || query.includes("roto")) {
    return "No te preocupes en lo absoluto. Si tu pieza llega con algún desperfecto o la cadena se rompe por un fallo de soldadura, yo mismo me encargo de reemplazártela o repararla sin cargos extra. Llevo 5 años cuidando mi reputación cliente por cliente.";
  }
  if (query.includes("seguro") || query.includes("estafa") || query.includes("recibir")) {
    return "Es totalmente seguro. Las fotos y videos que muestro son de mis collares reales, sin montajes digitales. Procesamos los pedidos de forma segura y transparente, y puedes ver arriba los testimonios de clientes que ya los usan.";
  }
  if (query.includes("regalo") || query.includes("envoltura") || query.includes("mamá") || query.includes("novia")) {
    return "¡Es una idea maravillosa! El collar llega en su estuche premium con el Bono 1 listo para entregar, y si quieres, puedo enviarlo directamente a la dirección de esa persona especial. No incluiré ningún recibo de precio dentro de la caja si me lo indicas en las notas.";
  }
  if (query.includes("precio") || query.includes("costo") || query.includes("cuánto vale")) {
    return "Nuestros diseños base empiezan en solo $10.00 USD, y con las personalizaciones o dijes de colección que elijas, el precio se actualiza de inmediato en el configurador interactivo. Siempre trato de mantener un precio honesto y justo.";
  }

  // Default response
  return "Gracias por escribirme. Llevo 5 años en la joyería artesanal y me encanta responder directamente cada duda. Lo que ves aquí es un trabajo de dedicación, y si ordenas hoy, yo mismo empacaré tu pieza con la garantía completa.";
}

interface Message {
  id: string;
  sender: "user" | "jender";
  text: string;
  timestamp: string;
}

interface AboutCreatorProps {
  isOpenChat: boolean;
  onCloseChat: () => void;
}

export default function AboutCreator({ isOpenChat, onCloseChat }: AboutCreatorProps) {
  // Chat states
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "jender",
      text: "Hola, soy Jender Llanos. Gracias por visitar mi espacio artesanal. Si tienes alguna pregunta sobre mis collares de plata u oro, los envíos o los grabados, escríbeme directamente aquí y te responderé enseguida.",
      timestamp: "Ahora mismo"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate artisan thinking/typing
    setTimeout(() => {
      const jenderReplyText = getJenderResponse(userMsg.text);
      const jenderMsg: Message = {
        id: `reply-${Date.now()}`,
        sender: "jender",
        text: jenderReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, jenderMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="sobre-jender" className="py-16 lg:py-24 bg-[#0e0e0e] border-b border-white/10 px-4 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Creator text columns (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
              {SALES_COPY.aboutTitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium">
              {SALES_COPY.aboutGreeting}
            </h2>
            <div className="w-12 h-[1.5px] bg-amber-600/50" />

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <p className="font-medium font-serif text-base text-white">
                {SALES_COPY.aboutParagraph1}
              </p>
              <p>{SALES_COPY.aboutParagraph2}</p>
              <p>{SALES_COPY.aboutParagraph3}</p>
              <p>{SALES_COPY.aboutParagraph4}</p>
              <p>{SALES_COPY.aboutParagraph5}</p>
            </div>

            <div className="p-6 bg-[#161616] border border-white/10 rounded-sm luxury-shadow">
              <p className="font-serif italic text-base text-slate-200 font-light">
                "{SALES_COPY.aboutConclusion}"
              </p>
            </div>
          </div>

          {/* Interactive Live Chat Column (Col span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#161616] border border-white/10 rounded-sm luxury-shadow overflow-hidden flex flex-col justify-between h-[500px]">
              
              {/* Chat Header */}
              <div className="p-4 bg-[#1a1a1a] text-white border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-white">
                      <span className="font-serif font-bold text-sm tracking-widest text-amber-400">JL</span>
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#161616] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold tracking-tight text-white">Jender Llanos</h4>
                    <p className="text-[9px] font-mono text-amber-400 uppercase tracking-widest">Joyero Artesano — Activo</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-slate-300">
                  <Clock className="w-3 h-3 text-amber-400 animate-pulse" />
                  <span>Respuesta rápida</span>
                </div>
              </div>

              {/* WhatsApp Redirection Bar */}
              <a 
                href="https://wa.me/593983647582?text=Hola%20Jender%2C%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20dise%C3%B1ar%20un%20collar%20artesanal%20personalizado."
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-950/40 hover:bg-emerald-950/60 border-b border-emerald-500/20 px-4 py-2.5 flex items-center justify-between text-xs transition-smooth group cursor-pointer"
              >
                <div className="flex items-center space-x-2 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">¿Prefieres WhatsApp?</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400 font-medium font-serif group-hover:text-emerald-300 text-[11px]">
                  <span>Preguntar al +593 983647582</span>
                  <span className="text-xs">→</span>
                </div>
              </a>

              {/* Chat Messages Log */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0e0e0e]/50">
                {messages.map((msg) => {
                  const isJender = msg.sender === "jender";
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isJender ? "justify-start" : "justify-end"}`}
                    >
                      <div className={`max-w-[85%] rounded-sm p-3 text-xs leading-relaxed ${
                        isJender
                          ? "bg-[#1e1e1e] text-slate-100 border border-white/5 rounded-tl-none"
                          : "bg-amber-600 text-white rounded-tr-none"
                      }`}>
                        <p className="font-light">{msg.text}</p>
                        <span className={`block text-[8px] font-mono mt-1 text-right ${isJender ? "text-slate-500" : "text-amber-100/60"}`}>
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Simulated typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[#1e1e1e] border border-white/5 rounded-sm rounded-tl-none p-3 max-w-[85%] text-xs flex items-center space-x-1.5 text-slate-400">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span className="font-mono text-[9px] uppercase tracking-wider ml-1 text-slate-500">Jender escribiendo...</span>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-[#161616] flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Pregúntame sobre plata, oro, envíos, cuidado..."
                  className="flex-1 px-3 py-2 text-xs bg-[#0e0e0e] border border-white/10 text-white rounded-sm focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-amber-600 text-white hover:bg-amber-500 transition-smooth rounded-sm cursor-pointer"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
