import React, { useState } from 'react';
import { Check, Star, MessageCircle, FileText, Shield, Clock, Users, Zap, CheckCircle, Smartphone, ChevronDown, ChevronUp, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ProcessSteps from '@/components/ProcessSteps';

const Index = () => {
  const whatsappNumber = "5577981522683";
  const whatsappMessage = "Olá! Gostaria de conhecer os serviços da Focus Contabilidade.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const meiWhatsappMessage = "Olá! Quero o plano MEI";
  const meiWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(meiWhatsappMessage)}`;
  const essencialWhatsappMessage = "Olá! Quero o plano Essencial";
  const essencialWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(essencialWhatsappMessage)}`;
  const proWhatsappMessage = "Olá! Quero o plano PRO";
  const proWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(proWhatsappMessage)}`;
  const personalizadoWhatsappMessage = "Olá, Quero um plano personalizado.";
  const personalizadoWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(personalizadoWhatsappMessage)}`;
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [currentPlan, setCurrentPlan] = React.useState(0);
  
  const testimonials = [
    {
      rating: 5,
      text: "Comecei com a Focus porque queria simplicidade. Hoje não me preocupo mais com nada, eles cuidam de tudo.",
      author: "Luana M., Designer Freelancer"
    },
    {
      rating: 5,
      text: "Toda a documentação chega no meu WhatsApp. Rápido e simples, do jeito que eu precisava.",
      author: "Carlos A., Prestador de Serviços"
    },
    {
      rating: 5,
      text: "Excelente atendimento e profissionalismo. Recomendo a todos!",
      author: "Pedro S., Empresário"
    },
    {
      rating: 5,
      text: "Melhor decisão que tomei para minha empresa. Profissionais competentes e atenciosos.",
      author: "Maria L., Comerciante"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const advantages = [{
    icon: MessageCircle,
    title: "Atendimento rápido via WhatsApp",
    description: "Resolva tudo direto pelo celular"
  }, {
    icon: FileText,
    title: "Documentos 100% digitais e na nuvem",
    description: "Acesse de qualquer lugar, a qualquer hora"
  }, {
    icon: Zap,
    title: "Entregamos relatórios e guias com agilidade",
    description: "Processos otimizados para sua empresa"
  }, {
    icon: Shield,
    title: "Monitoramos sua situação fiscal automaticamente",
    description: "Fique sempre em dia com suas obrigações"
  }];
  const services = [{
    title: 'Abertura de empresa',
    description: 'Processo completo de abertura, incluindo escolha do regime tributário mais adequado e todas as documentações necessárias.'
  }, {
    title: 'Contabilidade mensal',
    description: 'Escrituração contábil completa, demonstrações financeiras e relatórios gerenciais personalizados.'
  }, {
    title: 'Emissão de notas fiscais e obrigações',
    description: 'Suporte na emissão de notas fiscais e cumprimento de todas as obrigações fiscais e acessórias.'
  }, {
    title: 'Folha de pagamento (serviço adicional)',
    description: 'Gestão completa da folha de pagamento, incluindo admissões, demissões e cálculos trabalhistas.'
  }, {
    title: 'Imposto de Renda Pessoa Física',
    description: 'Declaração completa do IRPF, incluindo análise de documentos e planejamento tributário pessoal.'
  }, {
    title: 'Consultoria e planejamento tributário',
    description: 'Análise estratégica para otimização fiscal e escolha do melhor regime tributário.'
  }, {
    title: 'Regularização de CNPJ e parcelamentos',
    description: 'Auxílio na regularização de pendências e negociação de débitos com órgãos públicos.'
  }, {
    title: 'Monitoramento de certidões e pendências fiscais',
    description: 'Acompanhamento proativo de certidões e resolução de pendências antes que se tornem problemas.'
  }];
  const planFeatures = [
    { name: "Abertura de empresa", mei: true, essencial: true, pro: true },
    { name: "Contabilidade mensal", mei: false, essencial: true, pro: true },
    { name: "Emissão de guias", mei: true, essencial: true, pro: true },
    { name: "Consultoria básica", mei: true, essencial: true, pro: true },
    { name: "Suporte via WhatsApp", mei: true, essencial: true, pro: true },
    { name: "Relatórios mensais", mei: false, essencial: true, pro: true },
    { name: "Escrituração contábil", mei: false, essencial: true, pro: true },
    { name: "Análise fiscal mensal", mei: false, essencial: false, pro: true },
    { name: "Certidões automáticas", mei: false, essencial: false, pro: true },
    { name: "Monitoramento fiscal", mei: false, essencial: false, pro: true },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };
  return <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="w-full max-w-[1280px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img alt="Focus Contabilidade" className="h-10 w-auto object-contain" src="/lovable-uploads/d46b0f3f-634a-4ba4-9b52-234af8bbba8b.png" />
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Início</button>
              <button onClick={() => scrollToSection('vantagens')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Vantagens</button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Como Funciona</button>
              <button onClick={() => scrollToSection('planos')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Planos</button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Quem Somos</button>
              <button onClick={() => scrollToSection('contato')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Contato</button>
            </nav>

            <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-focus-green hover:bg-focus-green/90 text-white font-medium">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="w-full max-w-[1280px] mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-focus-gray mb-6">
              🚀 Contabilidade moderna,
              <span className="bg-gradient-to-r from-focus-blue to-focus-green bg-clip-text text-transparent"> ágil e 100% digital</span>
            </h2>
            <p className="text-xl text-focus-gray/80 mb-8 leading-relaxed font-medium">
              Aqui você resolve tudo pelo celular: documentação na nuvem, atendimento via WhatsApp e nada de complicação. 
              A gente cuida de tudo, você foca no seu negócio.
            </p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white px-8 py-4 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com um contador agora
            </Button>
          </div>
        </div>
      </section>

      {/* Vantagens - com background diferenciado */}
      <section id="vantagens" className="py-16 bg-focus-blue text-white relative overflow-hidden">
        {/* Background decoration */}
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
            {advantages.map((advantage, index) => <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-semibold mb-2">{advantage.title}</div>
                <div className="text-blue-100 text-sm">{advantage.description}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Steps - New Component */}
      <ProcessSteps />

      {/* Nossos Serviços */}
      <section id="como-funciona" className="py-16 bg-gradient-to-br from-focus-blue to-focus-green">
        <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              O que oferecemos
            </h3>
            <p className="text-blue-100 text-base">
              Serviços completos para sua empresa
            </p>
          </div>
          
          <div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {services.map((service, index) => <div key={index} className="bg-white/10 rounded-lg overflow-hidden cursor-pointer transition-all duration-300" onClick={() => toggleService(index)}>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3 text-white">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{service.title}</span>
                    </div>
                    {expandedService === index ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                  </div>
                  {expandedService === index && <div className="px-4 pb-4 text-blue-100 text-sm">
                      {service.description}
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-bold text-focus-gray mb-4 text-3xl">Planos</h3>
            <p className="text-focus-gray/80 text-base">Soluções que acompanham o crescimento da sua empresa</p>
          </div>
          
          {/* Planos Desktop/Tablet - Layout de tabela lado a lado */}
          <div className="hidden md:block">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-5 gap-6">
                {/* Coluna de recursos */}
                <div className="space-y-4">
                  <div className="h-32 flex items-end pb-4">
                    <h4 className="text-lg font-bold text-focus-gray">Recursos</h4>
                  </div>
                  {planFeatures.map((feature, index) => (
                    <div key={index} className="h-12 flex items-center">
                      <span className="text-focus-gray font-medium">{feature.name}</span>
                    </div>
                  ))}
                  <div className="h-16"></div>
                </div>

                {/* Plano MEI */}
                <div className="space-y-4">
                  <Card className="h-32">
                    <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                      <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-focus-blue font-bold text-sm">MEI</span>
                      </div>
                      <CardTitle className="text-lg text-focus-gray">MEI Digital</CardTitle>
                      <CardDescription className="text-xl font-bold text-focus-gray">R$ 79<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                    </CardHeader>
                  </Card>
                  {planFeatures.map((feature, index) => (
                    <div key={index} className="h-12 flex items-center justify-center">
                      {feature.mei ? (
                        <Check className="w-5 h-5 text-focus-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  ))}
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
                      <CardDescription className="text-xl font-bold text-focus-gray">R$ 199<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                    </CardHeader>
                  </Card>
                  {planFeatures.map((feature, index) => (
                    <div key={index} className="h-12 flex items-center justify-center">
                      {feature.essencial ? (
                        <Check className="w-5 h-5 text-focus-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  ))}
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
                      <CardDescription className="text-xl font-bold text-focus-gray">R$ 299<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
                    </CardHeader>
                  </Card>
                  {planFeatures.map((feature, index) => (
                    <div key={index} className="h-12 flex items-center justify-center">
                      {feature.pro ? (
                        <Check className="w-5 h-5 text-focus-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  ))}
                  <div className="h-16 flex items-center">
                    <Button className="w-full bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white font-medium" onClick={() => window.open(proWhatsappUrl, '_blank')}>
                      Escolher Plano
                    </Button>
                  </div>
                </div>

                {/* Plano Personalizado */}
                <div className="space-y-4">
                  <Card className="h-32">
                    <CardHeader className="text-center pb-4 h-full flex flex-col justify-center">
                      <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-focus-blue font-bold text-xs">PERS</span>
                      </div>
                      <CardTitle className="text-lg text-focus-gray">Personalizado</CardTitle>
                      <CardDescription className="text-xl font-bold text-focus-gray">Sob consulta</CardDescription>
                    </CardHeader>
                  </Card>
                  {planFeatures.map((feature, index) => (
                    <div key={index} className="h-12 flex items-center justify-center">
                      <span className="text-focus-blue font-medium text-sm">✓</span>
                    </div>
                  ))}
                  <div className="h-16 flex items-center">
                    <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(personalizadoWhatsappUrl, '_blank')}>
                      Solicitar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view with horizontal scroll */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="overflow-x-auto pb-6 -mx-4 px-4">
                <div className="flex gap-4 min-w-max">
                  {/* Previous plan cards remain the same... */}
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-4">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentPlan === index ? 'bg-focus-blue w-4' : 'bg-focus-blue/30'
                    }`}
                    onClick={() => setCurrentPlan(index)}
                  />
                ))}
              </div>

              {/* Mobile scroll hint */}
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
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-focus-gray mb-4">O que nossos clientes dizem</h3>
          </div>
          
          {/* Desktop view */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-focus-gray/80 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-focus-gray">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile view with horizontal scroll */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-6 -mx-4 px-4">
              <div className="flex gap-4 snap-x snap-mandatory">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-[280px] snap-center">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-focus-gray/80 mb-4">{testimonial.text}</p>
                        <p className="font-semibold text-focus-gray">— {testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-focus-blue w-4' : 'bg-focus-blue/30'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            {/* Mobile scroll hint */}
            <div className="text-center mt-4">
              <p className="text-sm text-focus-gray/60 flex items-center justify-center gap-2">
                <span>Deslize para ver mais depoimentos</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="animate-pulse">
                  <path d="M14 2L18 6L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
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

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-focus-blue to-focus-green">
        <div className="w-full max-w-[1280px] mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Pronto para descomplicar sua contabilidade?</h3>
          <p className="text-xl text-blue-100 mb-8 font-medium">
            Fale agora com a Focus e tenha um contador no seu bolso, direto pelo WhatsApp.
          </p>
          <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-white text-focus-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar agora via WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-focus-gray text-white">
        <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img alt="Focus Contabilidade" className="h-8 w-auto brightness-0 invert" src="/lovable-uploads/72dd4e0c-c190-431c-b465-e6f21689b198.png" />
              </div>
              <p className="text-gray-300">
                Contabilidade moderna, ágil e 100% digital para todo o Brasil.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-300">
                <p>WhatsApp: (77) 98152-2683</p>
                <p>E-mail: contato@contabilfocus.com.br</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Redes Sociais</h5>
              <div className="space-y-2">
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">Instagram</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors block">WhatsApp</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">Focus Contabilidade © 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;