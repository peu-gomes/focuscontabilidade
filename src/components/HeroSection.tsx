import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  whatsappUrl: string;
}

const HeroSection = ({ whatsappUrl }: HeroSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="inicio" className="pt-20 pb-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className={`text-4xl md:text-6xl font-bold text-focus-gray mb-6 scroll-hidden ${
              titleVisible ? 'scroll-animate-slide-top' : ''
            }`}
          >
            🚀 Contabilidade moderna,
            <span className="bg-gradient-to-r from-focus-blue to-focus-green bg-clip-text text-transparent"> ágil e 100% digital</span>
          </h2>
          <p 
            ref={subtitleRef}
            className={`text-xl text-focus-gray/80 mb-8 leading-relaxed font-medium scroll-hidden stagger-2 ${
              subtitleVisible ? 'scroll-animate-slide-bottom' : ''
            }`}
          >
            Aqui você resolve tudo pelo celular: documentação na nuvem, atendimento via WhatsApp e nada de complicação. 
            A gente cuida de tudo, você foca no seu negócio.
          </p>
          <div 
            ref={buttonRef}
            className={`scroll-hidden stagger-4 ${buttonVisible ? 'scroll-animate-bounce' : ''}`}
          >
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')} 
              className="bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com um contador agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;