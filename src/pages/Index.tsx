
import React from 'react';
import ProcessSteps from '@/components/ProcessSteps';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import PlansSection from '@/components/PlansSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const whatsappNumber = "5577981522683";
  const whatsappMessage = "Olá! Gostaria de conhecer os serviços da Focus Contabilidade.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const meiWhatsappMessage = "Olá! Quero o plano MEI";
  const meiWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(meiWhatsappMessage)}`;
  const essencialWhatsappMessage = "Olá! Quero o plano Essencial";
  const essencialWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(essencialWhatsappMessage)}`;
  const proWhatsappMessage = "Olá! Quero o plano PRO";
  const proWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(proWhatsappMessage)}`;
  const personalizadoWhatsappMessage = "Olá, Quero um plano personalizado.";
  const personalizadoWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(personalizadoWhatsappMessage)}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header whatsappUrl={whatsappUrl} scrollToSection={scrollToSection} />
      <HeroSection whatsappUrl={whatsappUrl} />
      <AdvantagesSection />
      <ProcessSteps />
      <ServicesSection />
      <PlansSection 
        meiWhatsappUrl={meiWhatsappUrl}
        essencialWhatsappUrl={essencialWhatsappUrl}
        proWhatsappUrl={proWhatsappUrl}
        personalizadoWhatsappUrl={personalizadoWhatsappUrl}
      />
      <AboutSection />
      <TestimonialsSection />
      <CTASection whatsappUrl={whatsappUrl} />
      <Footer whatsappUrl={whatsappUrl} />
    </div>
  );
};

export default Index;
