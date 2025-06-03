
import React from 'react';
import { Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-16 bg-gradient-to-b from-focus-blue via-focus-blue/30 to-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Quem Somos</h3>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <Users className="w-16 h-16 text-focus-blue mx-auto mb-6" />
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
