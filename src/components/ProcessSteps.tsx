
import React from 'react';
import { MessageCircle, FileText, CheckCircle, Smartphone } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [{
    icon: MessageCircle,
    title: "Entre em contato",
    step: "01",
    description: "Mande uma mensagem no WhatsApp e conte sobre sua empresa",
    bgColor: "bg-focus-blue/5",
    borderColor: "border-focus-blue/20"
  }, {
    icon: FileText,
    title: "Envie os documentos",
    step: "02",
    description: "Compartilhe os documentos necessários pelo próprio WhatsApp",
    bgColor: "bg-focus-blue/5",
    borderColor: "border-focus-blue/20"
  }, {
    icon: CheckCircle,
    title: "Deixe com a gente",
    step: "03",
    description: "Cuidamos de toda a parte contábil e fiscal da sua empresa",
    bgColor: "bg-focus-blue/5",
    borderColor: "border-focus-blue/20"
  }, {
    icon: Smartphone,
    title: "Acompanhe pelo celular",
    step: "04",
    description: "Receba relatórios e documentos direto no seu WhatsApp",
    bgColor: "bg-focus-blue/5",
    borderColor: "border-focus-blue/20"
  }];

  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-focus-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-focus-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-[1280px] mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-focus-gray mb-6 md:text-5xl">
            Como funciona nosso processo
          </h3>
          <p className="text-focus-gray/70 max-w-2xl mx-auto text-base">
            Um processo simples e transparente para transformar sua contabilidade
          </p>
        </div>

        {/* Desktop View - Connected Cards */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto">
            {steps.map((step, index) => <React.Fragment key={index}>
                <div className={`relative ${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 w-72 h-96 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl overflow-visible`}>
                  {/* Step number badge - ajustado para não cortar */}
                  <div className="absolute -top-6 left-8 w-14 h-14 bg-focus-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-focus-blue rounded-2xl flex items-center justify-center mb-8 mt-8 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-2xl font-bold text-focus-gray mb-4 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-focus-gray/70 text-base leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && <div className="flex-shrink-0">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-focus-blue/30">
                      <path d="M28 4L36 12L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 12H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>}
              </React.Fragment>)}
          </div>
        </div>

        {/* Tablet View - Grid 2x2 */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 max-w-5xl mx-auto pt-8">
          {steps.map((step, index) => <div key={index} className={`relative ${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 h-80 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl overflow-visible`}>
              {/* Step number badge - ajustado para não cortar */}
              <div className="absolute -top-5 left-8 w-12 h-12 bg-focus-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-focus-blue rounded-xl flex items-center justify-center mb-6 mt-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h4 className="text-xl font-bold text-focus-gray mb-4 leading-tight">
                {step.title}
              </h4>
              <p className="text-focus-gray/70 text-base leading-relaxed flex-1">
                {step.description}
              </p>
            </div>)}
        </div>

        {/* Small screens - horizontal scroll without carousel cutting */}
        <div className="md:hidden pt-8">
          <div className="flex gap-4 overflow-x-auto pb-6 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide">
            {steps.map((step, index) => <div key={index} className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-6 h-80 flex flex-col items-center text-center relative overflow-visible flex-shrink-0 w-[280px] snap-center`}>
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-focus-blue to-focus-blue rounded-bl-full"></div>
                </div>
                
                {/* Step number badge - ajustado para não cortar */}
                <div className="absolute -top-5 left-6 w-12 h-12 bg-focus-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-focus-blue rounded-xl flex items-center justify-center mb-6 mt-8 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-focus-gray mb-4 leading-tight px-2">
                  {step.title}
                </h4>
                <p className="text-focus-gray/70 text-base leading-relaxed flex-1 px-2">
                  {step.description}
                </p>
              </div>)}
          </div>
          
          {/* Mobile hint */}
          <div className="text-center mt-8">
            <p className="text-base text-focus-gray/60 flex items-center justify-center gap-2">
              <span>Deslize para ver todos os passos</span>
              <svg width="24" height="14" viewBox="0 0 20 12" fill="none" className="animate-pulse">
                <path d="M14 2L18 6L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default ProcessSteps;
