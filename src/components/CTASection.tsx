import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CTASectionProps {
  whatsappUrl: string;
}

const CTASection = ({ whatsappUrl }: CTASectionProps) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 bg-gradient-to-r from-focus-blue to-focus-green">
      <div ref={sectionRef} className="w-full max-w-[1280px] mx-auto px-4 text-center">
        <h3 
          className={`text-3xl font-bold text-white mb-4 scroll-hidden ${
            isVisible ? 'scroll-animate-slide-left' : ''
          }`}
        >
          Pronto para descomplicar sua contabilidade?
        </h3>
        <p 
          className={`text-xl text-blue-100 mb-8 font-medium scroll-hidden stagger-2 ${
            isVisible ? 'scroll-animate-slide-right' : ''
          }`}
        >
          Fale agora com a Focus e tenha um contador no seu bolso, direto pelo WhatsApp.
        </p>
        <div 
          className={`scroll-hidden stagger-4 ${isVisible ? 'scroll-animate-bounce' : ''}`}
        >
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')} 
            className="bg-white text-focus-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar agora via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;