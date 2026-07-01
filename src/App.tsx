/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import StorySection from "./components/StorySection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import Transformation from "./components/Transformation";
import Configurator from "./components/Configurator";
import PricingSection from "./components/PricingSection";
import ScarcitySection from "./components/ScarcitySection";
import Testimonials from "./components/Testimonials";
import BonusesSection from "./components/BonusesSection";
import GuaranteeSection from "./components/GuaranteeSection";
import AboutCreator from "./components/AboutCreator";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { Configuration } from "./types";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isOpenChat, setIsOpenChat] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (config: Configuration, price: number) => {
    setCartCount((prev) => prev + 1);
  };

  const handleOpenChat = () => {
    setIsOpenChat(true);
    scrollToSection("sobre-jender");
  };

  const handleCloseChat = () => {
    setIsOpenChat(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1c1c] selection:bg-amber-600/20 selection:text-amber-900 overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Header
        cartCount={cartCount}
        onScrollToConfigurator={() => scrollToSection("tienda")}
        onOpenChat={handleOpenChat}
      />

      <main>
        {/* 2. Hero Presentation */}
        <Hero onScrollToConfigurator={() => scrollToSection("tienda")} />

        {/* 3. Problem Identification */}
        <ProblemSection />

        {/* 4. Client Graduation Story */}
        <StorySection />

        {/* 5. Solution Announcement */}
        <SolutionSection />

        {/* 6. Product Benefits */}
        <BenefitsSection />

        {/* 7. Detailed Features Selector */}
        <FeaturesSection />

        {/* 8. Purchase and Shipping Steps */}
        <HowItWorks />

        {/* 9. Emotional Transformation Board */}
        <Transformation />

        {/* 10. Interactive Necklace Configurator */}
        <Configurator onAddToCart={handleAddToCart} />

        {/* 11. Custom vs Boutique Pricing */}
        <PricingSection onScrollToConfigurator={() => scrollToSection("tienda")} />

        {/* 12. Stock Scarcity Indicators */}
        <ScarcitySection />

        {/* 13. Customer Testimonials Grid */}
        <Testimonials />

        {/* 14. Promotional Gift Bonuses */}
        <BonusesSection />

        {/* 15. Absolute Guarantee Badges */}
        <GuaranteeSection />

        {/* 16. Creator Bio & Live Chat Simulation */}
        <AboutCreator isOpenChat={isOpenChat} onCloseChat={handleCloseChat} />

        {/* 17. Question and Answers Accordions */}
        <FAQSection />

        {/* 18. Urgent Call to Action */}
        <FinalCTA
          onScrollToConfigurator={() => scrollToSection("tienda")}
          onOpenChat={handleOpenChat}
        />
      </main>

      {/* 19. Clean Dark Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/593983647582?text=Hola%20Jender%2C%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20dise%C3%B1ar%20un%20collar%20artesanal%20personalizado."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border border-emerald-400/20"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping group-hover:hidden" />
        <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.016.992 11.435.992c-5.439 0-9.865 4.371-9.87 9.801 0 1.748.475 3.4 1.372 4.908l-1.025 3.742 3.86-.99c1.552.883 3.109 1.35 4.77 1.35zm11.365-7.72c-.3-.15-1.77-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C10.1 5.3 9.5 3.825 9.25 3.225c-.244-.593-.491-.51-.676-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 1.05-1.125 1.075-.075.025-.375.125-.375.425 0 .3.25.75.35.875.1.125 1.95 3.125 4.875 4.25.695.267 1.24.427 1.665.56.7.22 1.34.19 1.84.116.56-.083 1.77-.725 2.025-1.39.25-.665.25-1.24.175-1.39-.075-.15-.275-.225-.575-.375z" />
        </svg>
      </a>
    </div>
  );
}

