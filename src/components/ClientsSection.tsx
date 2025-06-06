
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ClientsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.3,
    triggerOnce: true 
  });
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovaSoft", logo: "IS" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudSys", logo: "CS" },
    { name: "NexTech", logo: "NT" },
    { name: "ProBiz", logo: "PB" },
    { name: "SmartOp", logo: "SO" },
    { name: "FlexWork", logo: "FW" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-hidden ${titleVisible ? 'scroll-animate-fade-up' : ''}`}
        >
          <h3 className="text-3xl font-bold text-focus-gray mb-4">
            <span className="text-focus-blue">Nossos</span> Clientes
          </h3>
          <p className="text-lg text-focus-gray/70 max-w-2xl mx-auto">
            Empresas que confiam na Focus para cuidar da sua contabilidade
          </p>
        </div>
        
        <div 
          ref={logosRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto scroll-hidden ${
            logosVisible ? 'scroll-animate-scale' : ''
          }`}
        >
          {clients.map((client, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 scroll-hidden stagger-${(index % 4) + 1} ${
                logosVisible ? 'scroll-animate-zoom' : ''
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-focus-blue/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-focus-blue font-bold text-lg">{client.logo}</span>
                </div>
                <p className="text-focus-gray font-medium text-sm">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
