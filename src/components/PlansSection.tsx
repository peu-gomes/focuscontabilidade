
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PlansSectionProps {
  meiWhatsappUrl: string;
  essencialWhatsappUrl: string;
  proWhatsappUrl: string;
  personalizadoWhatsappUrl: string;
}

const PlansSection = ({ meiWhatsappUrl, essencialWhatsappUrl, proWhatsappUrl, personalizadoWhatsappUrl }: PlansSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.3,
    triggerOnce: true 
  });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  const plans = [
    {
      name: "MEI",
      price: "R$ 39",
      period: "/mês",
      description: "Ideal para Microempreendedores Individuais",
      features: [
        "Abertura de CNPJ MEI",
        "Declaração Anual Simplificada (DASN-SIMEI)",
        "Suporte via WhatsApp",
        "Emissão de DAS mensal",
        "Certificado Digital A1 (1 ano)"
      ],
      buttonText: "Começar agora",
      buttonUrl: meiWhatsappUrl,
      highlighted: false
    },
    {
      name: "Essencial",
      price: "R$ 149",
      period: "/mês",
      description: "Para empresas que estão crescendo",
      features: [
        "Abertura de empresa",
        "Contabilidade completa",
        "Impostos federais, estaduais e municipais",
        "Folha de pagamento até 5 funcionários",
        "Balancetes mensais",
        "Suporte via WhatsApp",
        "Certificado Digital A1 (1 ano)"
      ],
      buttonText: "Escolher plano",
      buttonUrl: essencialWhatsappUrl,
      highlighted: true
    },
    {
      name: "PRO",
      price: "R$ 299",
      period: "/mês",
      description: "Para empresas em expansão",
      features: [
        "Tudo do plano Essencial",
        "Folha de pagamento ilimitada",
        "Departamento Pessoal completo",
        "Consultoria fiscal",
        "Relatórios gerenciais",
        "Atendimento prioritário",
        "Reuniões mensais"
      ],
      buttonText: "Escolher plano",
      buttonUrl: proWhatsappUrl,
      highlighted: false
    },
    {
      name: "Personalizado",
      price: "Sob consulta",
      period: "",
      description: "Soluções sob medida para sua empresa",
      features: [
        "Plano customizado",
        "Serviços específicos",
        "Atendimento dedicado",
        "Consultoria especializada",
        "Suporte 24/7"
      ],
      buttonText: "Solicitar proposta",
      buttonUrl: personalizadoWhatsappUrl,
      highlighted: false
    }
  ];

  return (
    <section id="planos" className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-hidden ${titleVisible ? 'scroll-animate-fade-up' : ''}`}
        >
          <h3 className="text-3xl font-bold text-focus-gray mb-4">
            Nossos <span className="text-focus-blue">Planos</span>
          </h3>
          <p className="text-lg text-focus-gray/70 max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a transformar sua contabilidade hoje mesmo
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 hover:scale-105 scroll-hidden stagger-${index + 1} ${
                cardsVisible ? (index % 2 === 0 ? 'scroll-animate-slide-left' : 'scroll-animate-slide-right') : ''
              } ${
                plan.highlighted 
                  ? 'border-focus-blue shadow-lg transform scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-focus-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-focus-gray">{plan.name}</CardTitle>
                <CardDescription className="text-focus-gray/60">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-focus-blue">{plan.price}</span>
                  <span className="text-focus-gray/60">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-focus-green mt-0.5 flex-shrink-0" />
                      <span className="text-focus-gray/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-focus-blue hover:bg-focus-blue/90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white hover:bg-focus-blue text-focus-blue hover:text-white border-2 border-focus-blue'
                  }`}
                  onClick={() => window.open(plan.buttonUrl, '_blank')}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
