
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: 'Abertura de empresa',
      description: 'Processo completo de abertura, incluindo escolha do regime tributário mais adequado e todas as documentações necessárias.'
    },
    {
      title: 'Contabilidade mensal',
      description: 'Escrituração contábil completa, demonstrações financeiras e relatórios gerenciais personalizados.'
    },
    {
      title: 'Emissão de notas fiscais e obrigações',
      description: 'Suporte na emissão de notas fiscais e cumprimento de todas as obrigações fiscais e acessórias.'
    },
    {
      title: 'Folha de pagamento (serviço adicional)',
      description: 'Gestão completa da folha de pagamento, incluindo admissões, demissões e cálculos trabalhistas.'
    },
    {
      title: 'Imposto de Renda Pessoa Física',
      description: 'Declaração completa do IRPF, incluindo análise de documentos e planejamento tributário pessoal.'
    },
    {
      title: 'Consultoria e planejamento tributário',
      description: 'Análise estratégica para otimização fiscal e escolha do melhor regime tributário.'
    },
    {
      title: 'Regularização de CNPJ e parcelamentos',
      description: 'Auxílio na regularização de pendências e negociação de débitos com órgãos públicos.'
    },
    {
      title: 'Monitoramento de certidões e pendências fiscais',
      description: 'Acompanhamento proativo de certidões e resolução de pendências antes que se tornem problemas.'
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="como-funciona" className="py-16 bg-gradient-to-br from-focus-blue to-focus-green">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-hidden ${titleVisible ? 'scroll-animate-rotate' : ''}`}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            O que oferecemos
          </h3>
          <p className="text-blue-100 text-base">
            Serviços completos para sua empresa
          </p>
        </div>
        
        <div ref={servicesRef}>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 scroll-hidden ${
                  index % 2 === 0 ? 'stagger-1' : 'stagger-3'
                } ${servicesVisible ? (index % 2 === 0 ? 'scroll-animate-slide-left' : 'scroll-animate-slide-right') : ''}`}
                onClick={() => toggleService(index)}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3 text-white">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{service.title}</span>
                  </div>
                  {expandedService === index ? 
                    <ChevronUp className="w-5 h-5 text-white transition-transform duration-200" /> : 
                    <ChevronDown className="w-5 h-5 text-white transition-transform duration-200" />
                  }
                </div>
                {expandedService === index && (
                  <div className="px-4 pb-4 text-blue-100 text-sm animate-fade-in">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
