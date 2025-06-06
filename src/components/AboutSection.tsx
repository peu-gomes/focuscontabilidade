
import React from 'react';
import { Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ 
    threshold: 0.2,
    triggerOnce: true 
  });
  
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  return (
    <section id="quem-somos" className="py-16 bg-gradient-to-b from-focus-blue via-focus-blue/30 to-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            ref={titleRef}
            className={`text-3xl font-bold text-white mb-8 scroll-hidden ${
              titleVisible ? 'scroll-animate-slide-bottom' : ''
            }`}
          >
            Quem Somos
          </h3>
          <div 
            ref={contentRef}
            className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 scroll-hidden ${
              contentVisible ? 'scroll-animate-slide-top' : ''
            }`}
          >
            <Users 
              className={`w-16 h-16 text-focus-blue mx-auto mb-6 hover:scale-110 transition-transform duration-300 scroll-hidden stagger-3 ${
                contentVisible ? 'scroll-animate-bounce' : ''
              }`} 
            />
            <p className="text-lg text-focus-gray/80 mb-6 font-medium">Somos uma contabilidade feita por contadores conectados com o presente.</p>
            <p className="text-focus-gray/80 mb-6">Unimos nossa experiência com a vontade de fazer diferente: atendimento próximo, linguagem simples e processos digitais que funcionam de verdade.</p>
            <p className="text-focus-gray/80 mb-6">
              Nosso foco é tirar o peso da contabilidade do seu dia a dia, com agilidade, clareza e tecnologia.
            </p>
            <p className="text-lg font-semibold text-focus-blue">
              Atendemos empresas de todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
