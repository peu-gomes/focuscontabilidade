import React from 'react';
import { FileText, MessageCircle, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProcessSteps = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const steps = [
    {
      icon: MessageCircle,
      title: "1. Entre em contato",
      description: "Fale conosco pelo WhatsApp e conte sobre sua empresa"
    },
    {
      icon: FileText,
      title: "2. Enviamos a documentação",
      description: "Receba tudo digitalizado na nuvem, sem papel"
    },
    {
      icon: CheckCircle,
      title: "3. Cuidamos de tudo",
      description: "Sua contabilidade fica em dia automaticamente"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-hidden ${titleVisible ? 'scroll-animate-flip' : ''}`}
        >
          <h3 className="text-3xl font-bold text-focus-gray mb-4">Como funciona</h3>
          <p className="text-focus-gray/80 text-lg">Simples, rápido e digital</p>
        </div>
        
        <div ref={stepsRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center relative scroll-hidden stagger-${index + 2} ${
                  stepsVisible ? 'scroll-animate-slide-bottom' : ''
                }`}
              >
                <div className="bg-gradient-to-br from-focus-blue to-focus-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-focus-gray mb-3">{step.title}</h4>
                <p className="text-focus-gray/80">{step.description}</p>
                
                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-focus-blue to-focus-green opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;