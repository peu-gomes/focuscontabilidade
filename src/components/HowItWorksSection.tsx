
import React from 'react';
import { MessageCircle, FileText, CheckCircle, Smartphone } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Entre em contato",
      description: "Mande uma mensagem no WhatsApp e conte sobre sua empresa"
    },
    {
      icon: FileText,
      title: "2. Envie os documentos",
      description: "Compartilhe os documentos necessários pelo próprio WhatsApp"
    },
    {
      icon: CheckCircle,
      title: "3. Deixe com a gente",
      description: "Cuidamos de toda a parte contábil e fiscal da sua empresa"
    },
    {
      icon: Smartphone,
      title: "4. Acompanhe pelo celular",
      description: "Receba relatórios e documentos direto no seu WhatsApp"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold text-focus-gray mb-2">
            Como funciona nosso processo
          </h4>
          <p className="text-focus-gray/60">
            Simples, rápido e 100% digital
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6 text-focus-blue" />
              </div>
              <div className="text-sm font-semibold text-focus-gray">{step.title}</div>
              <div className="text-xs text-focus-gray/60">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
