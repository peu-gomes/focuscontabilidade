
import React from 'react';
import { Shield, Award, CheckCircle, Users } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      title: "CRC Ativo",
      description: "Conselho Regional de Contabilidade"
    },
    {
      icon: Award,
      title: "Certificação Digital",
      description: "ICP-Brasil homologado"
    },
    {
      icon: CheckCircle,
      title: "ISO 27001",
      description: "Segurança da informação"
    },
    {
      icon: Users,
      title: "LGPD",
      description: "Conformidade total"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold text-focus-gray mb-2">
            Certificações e Conformidades
          </h4>
          <p className="text-focus-gray/60">
            Sua segurança é nossa prioridade
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <badge.icon className="w-6 h-6 text-focus-blue" />
              </div>
              <div className="text-sm font-semibold text-focus-gray">{badge.title}</div>
              <div className="text-xs text-focus-gray/60">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
