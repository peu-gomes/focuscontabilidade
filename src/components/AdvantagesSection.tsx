
import React from 'react';
import { MessageCircle, FileText, Zap, Shield } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: MessageCircle,
      title: "Atendimento rápido via WhatsApp",
      description: "Resolva tudo direto pelo celular"
    },
    {
      icon: FileText,
      title: "Documentos 100% digitais e na nuvem",
      description: "Acesse de qualquer lugar, a qualquer hora"
    },
    {
      icon: Zap,
      title: "Entregamos relatórios e guias com agilidade",
      description: "Processos otimizados para sua empresa"
    },
    {
      icon: Shield,
      title: "Monitoramos sua situação fiscal automaticamente",
      description: "Fique sempre em dia com suas obrigações"
    }
  ];

  return (
    <section id="vantagens" className="py-16 bg-focus-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-[1280px] mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Por que escolher a Focus?</h3>
          <p className="text-blue-100 text-base">Soluções modernas para sua empresa</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-semibold mb-2">{advantage.title}</div>
              <div className="text-blue-100 text-sm">{advantage.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
