
import React from 'react';
import { Users, FileCheck, Clock, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Empresas atendidas",
      description: "Clientes satisfeitos em todo Brasil"
    },
    {
      icon: FileCheck,
      number: "98%",
      label: "Taxa de aprovação",
      description: "Processos aprovados sem complicações"
    },
    {
      icon: Clock,
      number: "24h",
      label: "Resposta média",
      description: "Atendimento rápido via WhatsApp"
    },
    {
      icon: TrendingUp,
      number: "15+",
      label: "Anos de experiência",
      description: "Expertise em contabilidade digital"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-focus-blue to-focus-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Números que comprovam nossa excelência
          </h3>
          <p className="text-blue-100 text-lg">
            Resultados que falam por si só
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-100 mb-1">{stat.label}</div>
              <div className="text-blue-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
