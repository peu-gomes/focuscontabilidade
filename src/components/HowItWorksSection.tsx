
import React from 'react';
import { MessageCircle, FileText, CheckCircle, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Entre em contato",
      description: "Mande uma mensagem no WhatsApp e conte sobre sua empresa",
      color: "text-focus-green"
    },
    {
      icon: FileText,
      title: "2. Envie os documentos",
      description: "Compartilhe os documentos necessários pelo próprio WhatsApp",
      color: "text-focus-blue"
    },
    {
      icon: CheckCircle,
      title: "3. Deixe com a gente",
      description: "Cuidamos de toda a parte contábil e fiscal da sua empresa",
      color: "text-focus-green"
    },
    {
      icon: Smartphone,
      title: "4. Acompanhe pelo celular",
      description: "Receba relatórios e documentos direto no seu WhatsApp",
      color: "text-focus-blue"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-focus-gray mb-4">
            Como funciona nosso processo
          </h3>
          <p className="text-focus-gray/80 text-lg">
            Simples, rápido e 100% digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow relative">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <CardTitle className="text-lg text-focus-gray">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-focus-gray/80">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-focus-blue/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-focus-blue rounded-full"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
