import React, { useState } from "react";
import { Check, Info, ShoppingBag, ShieldCheck, Heart, Sparkles, Send, Gift, Clock } from "lucide-react";
import { DESIGN_STYLES, PENDANT_TYPES, CHAIN_LENGTHS, PACKAGING_OPTIONS, MATERIAL_OPTIONS } from "../data";
import { DesignStyle, PendantType, ChainLength, PackagingOption, Configuration, MaterialOption } from "../types";

interface ConfiguratorProps {
  onAddToCart: (config: Configuration, price: number) => void;
}

export default function Configurator({ onAddToCart }: ConfiguratorProps) {
  // State for selections
  const [selectedMaterialId, setSelectedMaterialId] = useState("silver");
  const [selectedStyleId, setSelectedStyleId] = useState("minimalist");
  const [selectedPendantId, setSelectedPendantId] = useState("none");
  const [selectedLengthId, setSelectedLengthId] = useState("40");
  const [engravingText, setEngravingText] = useState("");
  const [selectedPackagingId, setSelectedPackagingId] = useState("premium"); // starts as premium box (Bono 1 is active!)

  // Checkout modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard"); // standard vs express (+ $10)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Retrieve selected objects
  const activeMaterial = MATERIAL_OPTIONS.find((m) => m.id === selectedMaterialId) || MATERIAL_OPTIONS[0];
  const activeStyle = DESIGN_STYLES.find((s) => s.id === selectedStyleId) || DESIGN_STYLES[0];
  const activePendant = PENDANT_TYPES.find((p) => p.id === selectedPendantId) || PENDANT_TYPES[0];
  const activeLength = CHAIN_LENGTHS.find((l) => l.id === selectedLengthId) || CHAIN_LENGTHS[0];
  const activePackaging = PACKAGING_OPTIONS.find((p) => p.id === selectedPackagingId) || PACKAGING_OPTIONS[0];

  // Calculate pricing
  const materialPrice = activeMaterial.price;
  const stylePrice = activeStyle.price;
  const pendantPrice = activePendant.price;
  const lengthPrice = activeLength.price;
  const engravingPrice = engravingText.trim().length > 0 ? 10 : 0;
  
  // Custom logic for Bono 1: If premium box is chosen, it is FREE ($0 instead of $8)
  const isPremiumBoxFree = selectedPackagingId === "premium";
  const packagingPrice = isPremiumBoxFree ? 0 : activePackaging.price;

  const subtotal = materialPrice + stylePrice + pendantPrice + lengthPrice + engravingPrice + packagingPrice;
  const shippingPrice = shippingMethod === "express" ? 10 : 0; // standard shipping is FREE!
  const finalTotal = subtotal + shippingPrice;

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setIsSuccess(false);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !address || !city) {
      alert("Por favor, completa todos los campos requeridos para el envío.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to artisan's server
    setTimeout(() => {
      const generatedId = `JL-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Callback to root to update cart count or state
      onAddToCart(
        {
          material: activeMaterial.name,
          style: activeStyle.name,
          pendant: activePendant.name,
          length: activeLength.name,
          engraving: engravingText.trim() || "Ninguno",
          packaging: activePackaging.name,
        },
        finalTotal
      );
    }, 1800);
  };

  return (
    <section id="tienda" className="py-16 lg:py-24 bg-[#0a0a0a] border-b border-white/10 px-4 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/3 rounded-br-full" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Taller Interactivo Jender Llanos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-medium mt-2 leading-tight">
            Diseña y Configura Tu Collar de Plata u Oro
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed font-mono mt-3 uppercase tracking-wider">
            Personaliza cada aspecto y calcula tu inversión al instante
          </p>
          <div className="w-12 h-[1px] bg-amber-600/50 mx-auto mt-6" />
        </div>

        {/* Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Options Column (col span 7) */}
          <div className="lg:col-span-7 space-y-10">
            {/* 1. Material Selection */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="font-mono text-xs font-medium text-amber-400">PASO 1</span>
                <h3 className="font-serif text-lg text-white font-medium">Selecciona el Material Precioso</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MATERIAL_OPTIONS.map((mat) => {
                  const isSelected = mat.id === selectedMaterialId;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`group p-4 rounded-sm border text-left flex flex-col justify-between transition-smooth cursor-pointer ${
                        isSelected
                          ? "bg-white border-white text-black font-semibold"
                          : "bg-[#161616] border-white/5 hover:border-white/15 text-slate-300 luxury-shadow"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-sm font-medium">{mat.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                        </div>
                        <p className={`text-xs font-light leading-relaxed ${isSelected ? "text-black/80" : "text-slate-400"}`}>
                          {mat.description}
                        </p>
                      </div>
                      <span className={`block font-mono text-xs mt-4 font-semibold ${isSelected ? "text-amber-800" : "text-amber-400"}`}>
                        {mat.price === 0 ? "Incluido en base" : `+ $${mat.price}.00 USD`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Base Design Style */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="font-mono text-xs font-medium text-amber-400">PASO 2</span>
                <h3 className="font-serif text-lg text-white font-medium">Elige el Estilo Base del Collar</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DESIGN_STYLES.map((style) => {
                  const isSelected = style.id === selectedStyleId;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyleId(style.id)}
                      className={`group p-4 rounded-sm border text-left flex flex-col justify-between transition-smooth cursor-pointer ${
                        isSelected
                          ? "bg-white border-white text-black font-semibold"
                          : "bg-[#161616] border-white/5 hover:border-white/15 text-slate-300 luxury-shadow"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-sm font-medium">{style.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                        </div>
                        <p className={`text-xs font-light leading-relaxed ${isSelected ? "text-black/80" : "text-slate-400"}`}>
                          {style.description}
                        </p>
                      </div>
                      <span className={`block font-mono text-xs mt-4 font-semibold ${isSelected ? "text-amber-800" : "text-amber-400"}`}>
                        ${style.price}.00 USD
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Pendant Carving Choice */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="font-mono text-xs font-medium text-amber-400">PASO 3</span>
                <h3 className="font-serif text-lg text-white font-medium">Selecciona un Dije Artesanal Extra</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PENDANT_TYPES.map((pendant) => {
                  const isSelected = pendant.id === selectedPendantId;
                  return (
                    <button
                      key={pendant.id}
                      onClick={() => setSelectedPendantId(pendant.id)}
                      className={`group p-4 rounded-sm border text-left flex flex-col justify-between transition-smooth cursor-pointer ${
                        isSelected
                          ? "bg-white border-white text-black font-semibold"
                          : "bg-[#161616] border-white/5 hover:border-white/15 text-slate-300 luxury-shadow"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-xs font-medium">{pendant.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
                        </div>
                        <p className={`text-[11px] font-light leading-relaxed ${isSelected ? "text-black/80" : "text-slate-400"}`}>
                          {pendant.description}
                        </p>
                      </div>
                      <span className={`block font-mono text-xs mt-3 font-semibold ${isSelected ? "text-amber-800" : "text-amber-400"}`}>
                        {pendant.price === 0 ? "Incluido" : `+ $${pendant.price}.00 USD`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Chain Length */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="font-mono text-xs font-medium text-amber-400">PASO 4</span>
                <h3 className="font-serif text-lg text-white font-medium">Largo de la Cadena Incluida</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CHAIN_LENGTHS.map((len) => {
                  const isSelected = len.id === selectedLengthId;
                  return (
                    <button
                      key={len.id}
                      onClick={() => setSelectedLengthId(len.id)}
                      className={`p-3.5 rounded-sm border text-center transition-smooth cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                        isSelected
                          ? "bg-white border-white text-black font-semibold"
                          : "bg-[#161616] border-white/5 hover:border-white/15 text-slate-300 luxury-shadow"
                      }`}
                    >
                      <span className="font-serif text-xs font-semibold">{len.name}</span>
                      <span className={`block font-mono text-[11px] font-light ${isSelected ? "text-amber-800" : "text-amber-400"}`}>
                        {len.price === 0 ? "Sin costo extra" : `+ $${len.price}.00 USD`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Custom Engraving */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="font-mono text-xs font-medium text-amber-400">PASO 5</span>
                <h3 className="font-serif text-lg text-white font-medium">Grabado Personalizado a Mano</h3>
              </div>
              <div className="bg-[#161616] border border-white/5 p-5 rounded-sm luxury-shadow space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase tracking-wider">
                  <span>Inscripción (Letras, Iniciales o Fecha Especial)</span>
                  <span className="text-amber-400 font-semibold">+ $10.00 USD</span>
                </div>
                <input
                  type="text"
                  maxLength={25}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  placeholder="Ej. V & A 01.07.2026 (Deja vacío para sin grabado)"
                  className="w-full px-4 py-3 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500 font-mono tracking-wider"
                />
                <p className="text-[10px] text-slate-500 font-light flex items-center space-x-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-500" />
                  <span>Jender tallará a punzón cada letra directamente sobre el reverso del dije. Máximo 25 caracteres.</span>
                </p>
              </div>
            </div>

            {/* 6. Luxury Packaging Option */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="font-mono text-xs font-medium text-amber-400">PASO 6</span>
                <h3 className="font-serif text-lg text-white font-medium">Estilo de Presentación y Empaque</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PACKAGING_OPTIONS.map((pack) => {
                  const isSelected = pack.id === selectedPackagingId;
                  const isBonoFree = pack.id === "premium";
                  
                  return (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPackagingId(pack.id)}
                      className={`group p-4 rounded-sm border text-left flex flex-col justify-between transition-smooth cursor-pointer ${
                        isSelected
                          ? "bg-white border-white text-black font-semibold"
                          : "bg-[#161616] border-white/5 hover:border-white/15 text-slate-300 luxury-shadow"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-xs font-semibold">{pack.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
                        </div>
                        <p className={`text-[11px] font-light leading-relaxed ${isSelected ? "text-black/80" : "text-slate-400"}`}>
                          {pack.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <span className={`block font-mono text-xs font-semibold ${isSelected ? "text-amber-800" : "text-amber-400"}`}>
                          {isBonoFree ? "$0.00 USD" : `$${pack.price}.00 USD`}
                        </span>
                        {isBonoFree && (
                          <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-1.5 py-0.5 rounded">
                            Bono 1 Activado (Ahorras $8)
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Checkout Invoice Summary (col span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#161616] border border-white/15 rounded-sm p-6 lg:p-8 luxury-shadow space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block">
                Tu Configuración Personal
              </span>
              <h3 className="font-serif text-xl text-white font-medium">
                Resumen de tu Collar
              </h3>
            </div>

            {/* Bill Details */}
            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">{activeMaterial.name}</span>
                  <span className="text-[10px] text-slate-500">Material Precioso</span>
                </div>
                <span>{materialPrice === 0 ? "Incluido" : `+$${materialPrice}.00 USD`}</span>
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">{activeStyle.name}</span>
                  <span className="text-[10px] text-slate-500">Estilo Base</span>
                </div>
                <span>${stylePrice}.00 USD</span>
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">{activePendant.name}</span>
                  <span className="text-[10px] text-slate-500">Dije Complementario</span>
                </div>
                <span>{pendantPrice === 0 ? "Incluido" : `$${pendantPrice}.00 USD`}</span>
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">{activeLength.name}</span>
                  <span className="text-[10px] text-slate-500">Longitud Cadena</span>
                </div>
                <span>{lengthPrice === 0 ? "Incluido" : `$${lengthPrice}.00 USD`}</span>
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">Grabado: "{engravingText || "Ninguno"}"</span>
                  <span className="text-[10px] text-slate-500">Punzón artesanal</span>
                </div>
                <span>{engravingPrice === 0 ? "$0.00 USD" : `+$${engravingPrice}.00 USD`}</span>
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">{activePackaging.name}</span>
                  <span className="text-[10px] text-slate-500">Estilo de Caja</span>
                </div>
                <div className="text-right">
                  {isPremiumBoxFree ? (
                    <>
                      <span className="line-through text-slate-500 mr-1.5">$8.00</span>
                      <span className="text-emerald-400 font-semibold">Gratis</span>
                    </>
                  ) : (
                    <span>$0.00 USD</span>
                  )}
                </div>
              </div>

              {/* Shipping Standard FREE */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <div>
                  <span className="block font-semibold text-white">Envío Estándar Directo</span>
                  <span className="text-[10px] text-slate-500">Bono de Envío Incluido</span>
                </div>
                <span className="text-emerald-400 font-semibold">Gratis</span>
              </div>
            </div>

            {/* Total Block */}
            <div className="p-4 bg-[#1f1f1f] border border-white/10 rounded-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Inversión Total Estimada
                </span>
                <span className="font-serif text-2xl font-semibold text-white">
                  ${subtotal}.00 USD
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded">
                Garantía Incluida
              </span>
            </div>

            {/* CTA action buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleOpenCheckout}
                className="w-full py-4 bg-amber-600 text-white hover:bg-amber-500 font-medium tracking-widest text-xs uppercase rounded-sm transition-smooth flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ordenar Collar Ahora</span>
              </button>
              
              <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pago y Envío 100% Protegido</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RETAIL CHECKOUT OVERLAY MODAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#161616] border border-white/10 w-full max-w-2xl rounded-sm luxury-shadow overflow-hidden relative max-h-[90vh] flex flex-col justify-between">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#1a1a1a]">
              <div>
                <p className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  Formulario de Reserva Artesanal
                </p>
                <h3 className="font-serif text-xl font-medium text-white">
                  Completa tu Solicitud
                </h3>
              </div>
              <button
                onClick={handleCloseCheckout}
                className="p-1 text-slate-400 hover:text-white text-lg font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Inner Content */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {isSuccess ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/30 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
                      ¡Orden Reservada Exitosamente!
                    </span>
                    <h4 className="font-serif text-2xl text-white font-medium">
                      Gracias por Comprar Arte Real
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light max-w-md mx-auto">
                      Jender Llanos ha recibido tu pedido y comenzará a preparar los materiales de plata en su mesa de trabajo. Recibirás un correo electrónico de confirmación de inmediato.
                    </p>
                  </div>

                  {/* Order receipt box */}
                  <div className="max-w-md mx-auto p-5 bg-[#1e1e1e] border border-white/10 rounded-sm text-left text-xs font-mono text-slate-300 space-y-3">
                    <div className="flex justify-between border-b border-white/5 pb-2 font-bold text-white">
                      <span>Código de Pedido:</span>
                      <span className="text-amber-400">{orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cliente:</span>
                      <span className="text-white font-medium">{name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Destino:</span>
                      <span className="text-white font-medium">{city}, {address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estilo:</span>
                      <span className="text-white font-medium">{activeStyle.name}</span>
                    </div>
                    {selectedPendantId !== "none" && (
                      <div className="flex justify-between">
                        <span>Dije complementario:</span>
                        <span className="text-white font-medium">{activePendant.name}</span>
                      </div>
                    )}
                    {engravingText.trim() && (
                      <div className="flex justify-between text-amber-400">
                        <span>Grabado punzón:</span>
                        <span>"{engravingText}"</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Cadena:</span>
                      <span className="text-white font-medium">{activeLength.name}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 text-white font-bold text-sm">
                      <span>Total Liquidado:</span>
                      <span>${finalTotal}.00 USD</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleCloseCheckout}
                      className="px-6 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-widest rounded-sm hover:bg-amber-400 hover:text-black transition-smooth cursor-pointer"
                    >
                      Volver a la Tienda
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  {/* Shipping Address Forms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Valentina Gómez"
                        className="w-full px-3 py-2 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="valentina@ejemplo.com"
                        className="w-full px-3 py-2 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. +57 300 123 4567"
                        className="w-full px-3 py-2 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                        Ciudad y País *
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ej. Bogotá, Colombia"
                        className="w-full px-3 py-2 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                      Dirección de Entrega Completa *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Calle, Número, Departamento, Código Postal"
                      className="w-full px-3 py-2 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Notes / Gift Card */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                      Notas Especiales o Mensaje de Regalo (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Por favor omitir precio en empaque, es un regalo de graduación para mi hija..."
                      className="w-full px-3 py-2 bg-[#0e0e0e] border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  {/* Shipping option */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                      Modalidad de Envío
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setShippingMethod("standard")}
                        className={`p-3 text-left border rounded-sm transition-smooth cursor-pointer ${
                          shippingMethod === "standard"
                            ? "bg-white text-black border-white"
                            : "bg-[#0e0e0e] border-white/10 text-slate-300"
                        }`}
                      >
                        <div className="flex justify-between text-xs font-semibold">
                          <span>Envío Estándar Protegido</span>
                          <span className={`${shippingMethod === "standard" ? "text-emerald-800" : "text-emerald-400"} font-bold`}>¡GRATIS!</span>
                        </div>
                        <p className="text-[10px] opacity-75 mt-0.5">Entrega aproximada en 5-8 días hábiles</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setShippingMethod("express")}
                        className={`p-3 text-left border rounded-sm transition-smooth cursor-pointer ${
                          shippingMethod === "express"
                            ? "bg-white text-black border-white"
                            : "bg-[#0e0e0e] border-white/10 text-slate-300"
                        }`}
                      >
                        <div className="flex justify-between text-xs font-semibold">
                          <span>Envío Express Prioritario</span>
                          <span>+ $10.00 USD</span>
                        </div>
                        <p className="text-[10px] opacity-75 mt-0.5 font-light">Despacho en 24h y entrega en 2-4 días</p>
                      </button>
                    </div>
                  </div>

                  {/* Total summary before payment */}
                  <div className="p-4 bg-[#1f1f1f] rounded-sm flex items-center justify-between border border-white/5 mt-4">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-slate-400 tracking-wider">Monto Final del Pedido</span>
                      <p className="font-serif text-lg font-semibold text-white">${finalTotal}.00 USD</p>
                    </div>
                    <div className="text-right text-[10px] font-mono text-slate-400">
                      <span>Incluye {activePackaging.name}</span>
                    </div>
                  </div>

                  {/* Form Submit buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={handleCloseCheckout}
                      className="flex-1 py-3 border border-white/20 text-slate-300 hover:bg-white/5 font-mono text-xs uppercase tracking-widest rounded-sm transition-smooth cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs uppercase tracking-widest rounded-sm transition-smooth flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>Transmitiendo Reserva...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Confirmar Compra</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
