import React, { useState, useRef } from 'react';
import { MessageCircle, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
interface PlansSectionProps {
  meiWhatsappUrl: string;
  essencialWhatsappUrl: string;
  proWhatsappUrl: string;
  personalizadoWhatsappUrl: string;
}
const PlansSection = ({
  meiWhatsappUrl,
  essencialWhatsappUrl,
  proWhatsappUrl,
  personalizadoWhatsappUrl
}: PlansSectionProps) => {
  const [activeTab, setActiveTab] = useState("servico");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const servicoPlanFeatures = [{
    name: "Abertura de empresa",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Contabilidade mensal",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Emissão de guias",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Consultoria básica",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Suporte via WhatsApp",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Relatórios mensais",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Escrituração contábil",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Análise fiscal mensal",
    mei: false,
    essencial: false,
    pro: true
  }, {
    name: "Certidões automáticas",
    mei: false,
    essencial: false,
    pro: true
  }, {
    name: "Monitoramento fiscal",
    mei: false,
    essencial: false,
    pro: true
  }];
  const comercioPlanFeatures = [{
    name: "Abertura de empresa",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Contabilidade mensal",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Emissão de guias",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Consultoria básica",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Suporte via WhatsApp",
    mei: true,
    essencial: true,
    pro: true
  }, {
    name: "Relatórios mensais",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Escrituração contábil",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Controle de estoque",
    mei: false,
    essencial: true,
    pro: true
  }, {
    name: "Gestão de vendas",
    mei: false,
    essencial: false,
    pro: true
  }, {
    name: "Análise de margem",
    mei: false,
    essencial: false,
    pro: true
  }, {
    name: "Relatório de produtos",
    mei: false,
    essencial: false,
    pro: true
  }, {
    name: "Monitoramento fiscal",
    mei: false,
    essencial: false,
    pro: true
  }];
  const servicoPlans = {
    mei: {
      price: "R$ 79",
      features: servicoPlanFeatures.filter(f => f.mei)
    },
    essencial: {
      price: "R$ 199",
      features: servicoPlanFeatures.filter(f => f.essencial)
    },
    pro: {
      price: "R$ 299",
      features: servicoPlanFeatures.filter(f => f.pro)
    }
  };
  const comercioPlans = {
    mei: {
      price: "R$ 79",
      features: comercioPlanFeatures.filter(f => f.mei)
    },
    essencial: {
      price: "R$ 249",
      features: comercioPlanFeatures.filter(f => f.essencial)
    },
    pro: {
      price: "R$ 399",
      features: comercioPlanFeatures.filter(f => f.pro)
    }
  };
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Manter a posição do scroll no mobile
    if (scrollContainerRef.current) {
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = currentScrollLeft;
        }
      }, 0);
    }
  };
  return <section id="planos" className="py-16 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-bold text-focus-gray mb-4 text-3xl">Planos</h3>
          <p className="text-focus-gray/80 text-base">Soluções que acompanham o crescimento da sua empresa</p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="servico">Serviço</TabsTrigger>
            <TabsTrigger value="comercio">Comércio</TabsTrigger>
          </TabsList>

          <TabsContent value="servico">
            {/* Planos Desktop/Tablet - Layout de tabela lado a lado */}
            <div className="hidden md:block">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-6">
                  {/* Plano MEI */}
                  <div className="space-y-4">
                    <Card className="h-32">
                      <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                        <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-blue font-bold text-sm">MEI</span>
                        </div>
                        <CardTitle className="text-lg text-focus-gray">MEI Digital</CardTitle>
                        <CardDescription className="text-xl font-bold text-focus-gray">{servicoPlans.mei.price}<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                    </Card>
                    {servicoPlanFeatures.map((feature, index) => <div key={index} className="h-12 flex items-center justify-center">
                        {feature.mei ? <Check className="w-5 h-5 text-focus-green" /> : <X className="w-5 h-5 text-gray-400" />}
                      </div>)}
                    <div className="h-16 flex items-center">
                      <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(meiWhatsappUrl, '_blank')}>
                        Escolher Plano
                      </Button>
                    </div>
                  </div>

                  {/* Plano Essencial */}
                  <div className="space-y-4">
                    <Card className="h-32 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        Mais Popular
                      </div>
                      <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                        <div className="w-12 h-12 bg-focus-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-green font-bold text-sm">ESS</span>
                        </div>
                        <CardTitle className="text-lg text-focus-gray">Essencial</CardTitle>
                        <CardDescription className="text-xl font-bold text-focus-gray">{servicoPlans.essencial.price}<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                    </Card>
                    {servicoPlanFeatures.map((feature, index) => <div key={index} className="h-12 flex items-center justify-center">
                        {feature.essencial ? <Check className="w-5 h-5 text-focus-green" /> : <X className="w-5 h-5 text-gray-400" />}
                      </div>)}
                    <div className="h-16 flex items-center">
                      <Button className="w-full bg-focus-green hover:bg-focus-green/90 font-medium" onClick={() => window.open(essencialWhatsappUrl, '_blank')}>
                        Escolher Plano
                      </Button>
                    </div>
                  </div>

                  {/* Plano Pro */}
                  <div className="space-y-4">
                    <Card className="h-32">
                      <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-focus-blue to-focus-green rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">PRO</span>
                        </div>
                        <CardTitle className="text-lg text-focus-gray">Pro Digital</CardTitle>
                        <CardDescription className="text-xl font-bold text-focus-gray">{servicoPlans.pro.price}<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                    </Card>
                    {servicoPlanFeatures.map((feature, index) => <div key={index} className="h-12 flex items-center justify-center">
                        {feature.pro ? <Check className="w-5 h-5 text-focus-green" /> : <X className="w-5 h-5 text-gray-400" />}
                      </div>)}
                    <div className="h-16 flex items-center">
                      <Button className="w-full bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white font-medium" onClick={() => window.open(proWhatsappUrl, '_blank')}>
                        Escolher Plano
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Planos Mobile */}
            <div className="block md:hidden">
              <div ref={scrollContainerRef} className="overflow-x-auto pb-6 -mx-4 px-4">
                <div className="flex gap-4 min-w-max">
                  {/* Plano MEI */}
                  <div className="flex-shrink-0 w-64">
                    <Card className="h-full">
                      <CardHeader className="text-center pb-4">
                        <div className="w-10 h-10 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-blue font-bold text-xs">MEI</span>
                        </div>
                        <CardTitle className="text-base text-focus-gray">MEI Digital</CardTitle>
                        <CardDescription className="text-lg font-bold text-focus-gray">{servicoPlans.mei.price}<span className="text-xs text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2 mb-4">
                          {servicoPlans.mei.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                              <span className="text-focus-gray">{feature.name}</span>
                            </div>)}
                        </div>
                        <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium text-xs" onClick={() => window.open(meiWhatsappUrl, '_blank')}>
                          Escolher
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Plano Essencial */}
                  <div className="flex-shrink-0 w-64">
                    <Card className="h-full relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                        Popular
                      </div>
                      <CardHeader className="text-center pb-4">
                        <div className="w-10 h-10 bg-focus-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-green font-bold text-xs">ESS</span>
                        </div>
                        <CardTitle className="text-base text-focus-gray">Essencial</CardTitle>
                        <CardDescription className="text-lg font-bold text-focus-gray">{servicoPlans.essencial.price}<span className="text-xs text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2 mb-4">
                          {servicoPlans.essencial.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                              <span className="text-focus-gray">{feature.name}</span>
                            </div>)}
                        </div>
                        <Button className="w-full bg-focus-green hover:bg-focus-green/90 font-medium text-xs" onClick={() => window.open(essencialWhatsappUrl, '_blank')}>
                          Escolher
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Plano Pro */}
                  <div className="flex-shrink-0 w-64">
                    <Card className="h-full">
                      <CardHeader className="text-center pb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-focus-blue to-focus-green rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xs">PRO</span>
                        </div>
                        <CardTitle className="text-base text-focus-gray">Pro Digital</CardTitle>
                        <CardDescription className="text-lg font-bold text-focus-gray">{servicoPlans.pro.price}<span className="text-xs text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2 mb-4">
                          {servicoPlans.pro.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                              <span className="text-focus-gray">{feature.name}</span>
                            </div>)}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white font-medium text-xs" onClick={() => window.open(proWhatsappUrl, '_blank')}>
                          Escolher
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Dica de scroll para mobile */}
              <div className="text-center mt-4">
                <p className="text-sm text-focus-gray/60 flex items-center justify-center gap-2">
                  <span>Deslize para ver todos os planos</span>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="animate-pulse">
                    <path d="M14 2L18 6L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comercio">
            {/* Planos Comércio Desktop/Tablet */}
            <div className="hidden md:block">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-4 gap-6">
                  {/* Plano MEI */}
                  <div className="space-y-4">
                    <Card className="h-32">
                      <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                        <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-blue font-bold text-sm">MEI</span>
                        </div>
                        <CardTitle className="text-lg text-focus-gray">MEI Digital</CardTitle>
                        <CardDescription className="text-xl font-bold text-focus-gray">{comercioPlans.mei.price}<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                    </Card>
                    {comercioPlanFeatures.map((feature, index) => <div key={index} className="h-12 flex items-center justify-center">
                        {feature.mei ? <Check className="w-5 h-5 text-focus-green" /> : <X className="w-5 h-5 text-gray-400" />}
                      </div>)}
                    <div className="h-16 flex items-center">
                      <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(meiWhatsappUrl, '_blank')}>
                        Escolher Plano
                      </Button>
                    </div>
                  </div>

                  {/* Plano Essencial */}
                  <div className="space-y-4">
                    <Card className="h-32 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        Mais Popular
                      </div>
                      <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                        <div className="w-12 h-12 bg-focus-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-green font-bold text-sm">ESS</span>
                        </div>
                        <CardTitle className="text-lg text-focus-gray">Essencial</CardTitle>
                        <CardDescription className="text-xl font-bold text-focus-gray">{comercioPlans.essencial.price}<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                    </Card>
                    {comercioPlanFeatures.map((feature, index) => <div key={index} className="h-12 flex items-center justify-center">
                        {feature.essencial ? <Check className="w-5 h-5 text-focus-green" /> : <X className="w-5 h-5 text-gray-400" />}
                      </div>)}
                    <div className="h-16 flex items-center">
                      <Button className="w-full bg-focus-green hover:bg-focus-green/90 font-medium" onClick={() => window.open(essencialWhatsappUrl, '_blank')}>
                        Escolher Plano
                      </Button>
                    </div>
                  </div>

                  {/* Plano Pro */}
                  <div className="space-y-4">
                    <Card className="h-32">
                      <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-focus-blue to-focus-green rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">PRO</span>
                        </div>
                        <CardTitle className="text-lg text-focus-gray">Pro Digital</CardTitle>
                        <CardDescription className="text-xl font-bold text-focus-gray">{comercioPlans.pro.price}<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                    </Card>
                    {comercioPlanFeatures.map((feature, index) => <div key={index} className="h-12 flex items-center justify-center">
                        {feature.pro ? <Check className="w-5 h-5 text-focus-green" /> : <X className="w-5 h-5 text-gray-400" />}
                      </div>)}
                    <div className="h-16 flex items-center">
                      <Button className="w-full bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white font-medium" onClick={() => window.open(proWhatsappUrl, '_blank')}>
                        Escolher Plano
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Planos Comércio Mobile */}
            <div className="block md:hidden">
              <div ref={scrollContainerRef} className="overflow-x-auto pb-6 -mx-4 px-4">
                <div className="flex gap-4 min-w-max">
                  {/* Plano MEI */}
                  <div className="flex-shrink-0 w-64">
                    <Card className="h-full">
                      <CardHeader className="text-center pb-4">
                        <div className="w-10 h-10 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-blue font-bold text-xs">MEI</span>
                        </div>
                        <CardTitle className="text-base text-focus-gray">MEI Digital</CardTitle>
                        <CardDescription className="text-lg font-bold text-focus-gray">{comercioPlans.mei.price}<span className="text-xs text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2 mb-4">
                          {comercioPlans.mei.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                              <span className="text-focus-gray">{feature.name}</span>
                            </div>)}
                        </div>
                        <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium text-xs" onClick={() => window.open(meiWhatsappUrl, '_blank')}>
                          Escolher
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Plano Essencial */}
                  <div className="flex-shrink-0 w-64">
                    <Card className="h-full relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                        Popular
                      </div>
                      <CardHeader className="text-center pb-4">
                        <div className="w-10 h-10 bg-focus-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-focus-green font-bold text-xs">ESS</span>
                        </div>
                        <CardTitle className="text-base text-focus-gray">Essencial</CardTitle>
                        <CardDescription className="text-lg font-bold text-focus-gray">{comercioPlans.essencial.price}<span className="text-xs text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2 mb-4">
                          {comercioPlans.essencial.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                              <span className="text-focus-gray">{feature.name}</span>
                            </div>)}
                        </div>
                        <Button className="w-full bg-focus-green hover:bg-focus-green/90 font-medium text-xs" onClick={() => window.open(essencialWhatsappUrl, '_blank')}>
                          Escolher
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Plano Pro */}
                  <div className="flex-shrink-0 w-64">
                    <Card className="h-full">
                      <CardHeader className="text-center pb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-focus-blue to-focus-green rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xs">PRO</span>
                        </div>
                        <CardTitle className="text-base text-focus-gray">Pro Digital</CardTitle>
                        <CardDescription className="text-lg font-bold text-focus-gray">{comercioPlans.pro.price}<span className="text-xs text-focus-gray/60">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="space-y-2 mb-4">
                          {comercioPlans.pro.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-focus-green flex-shrink-0" />
                              <span className="text-focus-gray">{feature.name}</span>
                            </div>)}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white font-medium text-xs" onClick={() => window.open(proWhatsappUrl, '_blank')}>
                          Escolher
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Dica de scroll para mobile */}
              <div className="text-center mt-4">
                <p className="text-sm text-focus-gray/60 flex items-center justify-center gap-2">
                  <span>Deslize para ver todos os planos</span>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="animate-pulse">
                    <path d="M14 2L18 6L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Plano Personalizado sempre em baixo */}
          <div className="mt-8">
            <Card className="max-w-sm mx-auto">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-focus-blue font-bold text-xs">PERS</span>
                </div>
                <CardTitle className="text-lg text-focus-gray">Personalizado</CardTitle>
                <CardDescription className="text-xl font-bold text-focus-gray">Sob consulta</CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-4">
                <div className="text-focus-gray/70 text-sm mb-4">
                  Plano sob medida para as necessidades específicas da sua empresa
                </div>
                <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(personalizadoWhatsappUrl, '_blank')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </section>;
};
export default PlansSection;