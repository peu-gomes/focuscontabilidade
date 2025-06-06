
import React from 'react';
import { 
  Stethoscope, 
  Code, 
  Scale, 
  PaintBucket, 
  Building, 
  Camera, 
  Calculator, 
  Car,
  Heart,
  Home,
  Briefcase,
  MoreHorizontal
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesIndustriesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const industries = [
    { icon: Stethoscope, name: "Médicos e Clínicas", color: "text-red-500" },
    { icon: Code, name: "Desenvolvedores", color: "text-blue-500" },
    { icon: Scale, name: "Advogados", color: "text-amber-600" },
    { icon: PaintBucket, name: "Designers", color: "text-purple-500" },
    { icon: Building, name: "Construtoras", color: "text-gray-600" },
    { icon: Camera, name: "Fotógrafos", color: "text-green-500" },
    { icon: Calculator, name: "Consultores", color: "text-indigo-500" },
    { icon: Car, name: "Transportadoras", color: "text-orange-500" },
    { icon: Heart, name: "Psicólogos", color: "text-pink-500" },
    { icon: Home, name: "Imobiliárias", color: "text-teal-500" },
    { icon: Briefcase, name: "Consultores", color: "text-cyan-500" },
    { icon: MoreHorizontal, name: "Outros", color: "text-focus-blue" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-hidden ${titleVisible ? 'scroll-animate-fade-up' : ''}`}
        >
          <h3 className="text-3xl font-bold text-focus-gray mb-4">
            Setores que Atendemos
          </h3>
          <p className="text-focus-gray/70 max-w-2xl mx-auto">
            Especialistas em diversos segmentos, oferecendo soluções personalizadas para cada área
          </p>
        </div>

        {/* Auto-scrolling horizontal carousel */}
        <div className="relative">
          <div className="flex animate-scroll-horizontal hover:pause-animation">
            {/* Duplicate items for seamless loop */}
            {[...industries, ...industries].map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div 
                  key={index}
                  className="flex-shrink-0 w-48 mx-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="text-center">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${industry.color}`} />
                    <h4 className="font-semibold text-focus-gray text-sm">
                      {industry.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-focus-gray/60">
            Passe o mouse para pausar • Atendemos empresas de todos os portes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesIndustriesSection;
