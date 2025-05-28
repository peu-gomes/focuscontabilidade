import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Check, Star, MessageCircle, FileText, Shield, Clock, Users, Zap, Menu, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import AnimatedText from '@/components/AnimatedText';
import PhoneMockup from '@/components/PhoneMockup';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const whatsappNumber = "5577981522683";
  
  // Mensagens personalizadas para cada botão - memoizadas
  const whatsappMessages = useMemo(() => ({
    header: "Olá! Gostaria de falar com um contador.",
    hero: "Olá! Gostaria de falar com um contador.",
    meiPlan: "Olá! Quero saber mais sobre o Plano MEI.",
    essentialPlan: "Oi! Quero saber mais sobre o Plano Essencial.",
    proPlan: "Olá! Quero saber mais sobre o Plano PRO.",
    customPlan: "Oi! Quero entender como funciona o Plano Personalizado.",
    footer: "Olá! Gostaria de falar com um contador."
  }), []);

  const createWhatsAppUrl = useCallback((message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [whatsappNumber]);

  // Intersection Observer otimizado
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px'
      }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const getSectionClasses = useCallback((sectionId: string, baseClasses: string = '') => {
    const isVisible = visibleSections.has(sectionId);
    return `${baseClasses} transition-all duration-700 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`;
  }, [visibleSections]);

  // Memoizar lista de serviços para evitar re-criação
  const servicos = useMemo(() => [
    'Abertura de empresa', 
    'Contabilidade mensal', 
    'Emissão de notas fiscais e obrigações', 
    'Folha de pagamento (serviço adicional)', 
    'Imposto de Renda Pessoa Física', 
    'Consultoria e planejamento tributário', 
    'Regularização de CNPJ e parcelamentos', 
    'Monitoramento de certidões e pendências fiscais'
  ], []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo clicável com altura fixa e lazy loading */}
            <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105 flex-shrink-0">
              <img 
                alt="Focus Contabilidade" 
                className="h-8 sm:h-10 w-auto drop-shadow-sm" 
                src="/lovable-uploads/92cc8ce4-c3a0-40f9-8a84-0671c985f5df.png"
                loading="eager"
                decoding="async"
                width="40"
                height="40"
              />
            </button>
            
            {/* Menu Desktop - com margem nas laterais */}
            <nav className="hidden md:flex items-center space-x-6 mx-8">
              <button onClick={() => scrollToSection('vantagens')} className="text-focus-gray hover:text-focus-blue transition-all duration-300 font-medium hover:scale-105">Vantagens</button>
              <button onClick={() => scrollToSection('servicos')} className="text-focus-gray hover:text-focus-blue transition-all duration-300 font-medium hover:scale-105">Serviços</button>
              <button onClick={() => scrollToSection('planos')} className="text-focus-gray hover:text-focus-blue transition-all duration-300 font-medium hover:scale-105">Planos</button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-focus-gray hover:text-focus-blue transition-all duration-300 font-medium hover:scale-105">Quem Somos</button>
              <button onClick={() => scrollToSection('cta-final')} className="text-focus-gray hover:text-focus-blue transition-all duration-300 font-medium hover:scale-105">Contato</button>
            </nav>

            <div className="flex items-center space-x-3">
              {/* WhatsApp Button - texto completo no desktop, só ícone no mobile */}
              <Button onClick={() => window.open(createWhatsAppUrl(whatsappMessages.header), '_blank')} className="bg-focus-green hover:bg-focus-green/90 text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <MessageCircle className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Fale no WhatsApp</span>
              </Button>

              {/* Menu Mobile */}
              <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden hover:scale-105 transition-all duration-300">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 pb-6 space-y-4">
                    <button onClick={() => scrollToSection('vantagens')} className="w-full text-left py-3 px-4 text-focus-gray hover:text-focus-blue hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:scale-105">
                      Vantagens
                    </button>
                    <button onClick={() => scrollToSection('servicos')} className="w-full text-left py-3 px-4 text-focus-gray hover:text-focus-blue hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:scale-105">
                      Serviços
                    </button>
                    <button onClick={() => scrollToSection('planos')} className="w-full text-left py-3 px-4 text-focus-gray hover:text-focus-blue hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:scale-105">
                      Planos
                    </button>
                    <button onClick={() => scrollToSection('quem-somos')} className="w-full text-left py-3 px-4 text-focus-gray hover:text-focus-blue hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:scale-105">
                      Quem Somos
                    </button>
                    <button onClick={() => scrollToSection('cta-final')} className="w-full text-left py-3 px-4 text-focus-gray hover:text-focus-blue hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:scale-105">
                      Contato
                    </button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div 
          id="hero" 
          data-animate 
          className={getSectionClasses('hero', 'container mx-auto px-4 py-16 relative z-10')}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-focus-gray mb-6 leading-tight">
              🚀 Contabilidade moderna,
              <br className="md:hidden" />
              <span className="bg-gradient-to-r from-focus-blue to-focus-green bg-clip-text text-transparent">
                ágil e 100% digital
              </span>
            </h1>
            <p className="text-xl text-focus-gray/80 mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
              Aqui você resolve tudo pelo celular: documentação na nuvem, atendimento via WhatsApp e nada de complicação. 
              A gente cuida de tudo, você foca no seu negócio.
            </p>
            <Button onClick={() => window.open(createWhatsAppUrl(whatsappMessages.hero), '_blank')} className="bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com um contador agora
            </Button>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            id="vantagens-title" 
            data-animate 
            className={getSectionClasses('vantagens-title', 'text-center mb-16')}
          >
            <h2 className="text-4xl font-bold text-focus-gray mb-4">🔧 Por que escolher a Focus?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-focus-blue to-focus-green mx-auto rounded-full"></div>
          </div>
          
          <div 
            id="vantagens-cards" 
            data-animate 
            className={getSectionClasses('vantagens-cards', 'grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16')}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-focus-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-focus-green" />
                </div>
                <CardTitle className="text-lg text-focus-gray font-semibold leading-tight">Atendimento rápido via WhatsApp</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-focus-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-focus-blue" />
                </div>
                <CardTitle className="text-lg text-focus-gray font-semibold leading-tight">Documentos 100% digitais e na nuvem</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-focus-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-focus-green" />
                </div>
                <CardTitle className="text-lg text-focus-gray font-semibold leading-tight">Entregamos relatórios e guias com agilidade</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-focus-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-focus-blue" />
                </div>
                <CardTitle className="text-lg text-focus-gray font-semibold leading-tight">Monitoramos sua situação fiscal automaticamente</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div 
            id="vantagens-extras" 
            data-animate 
            className={getSectionClasses('vantagens-extras', 'bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-10 shadow-inner')}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-focus-gray mb-6 text-xl">✅ Nossos diferenciais:</h3>
                <ul className="space-y-3 text-focus-gray/80">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Envie tudo de forma prática, até pelo celular</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contadores com cabeça aberta para a nova geração</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Linguagem simples, sem termos complicados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-focus-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ideal para MEIs, prestadores de serviço e pequenas empresas</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gradient-to-br from-blue-50/30 via-gray-50 to-green-50/20 relative">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.2'%3E%3Cpath d='M20 20l10-10v20l-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            id="servicos-title" 
            data-animate 
            className={getSectionClasses('servicos-title', 'text-center mb-16')}
          >
            <h2 className="text-4xl font-bold text-focus-gray mb-4">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-focus-blue to-focus-green mx-auto rounded-full"></div>
          </div>
          
          <div 
            id="servicos-grid" 
            data-animate 
            className={getSectionClasses('servicos-grid', 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto')}
          >
            {servicos.map((servico, index) => 
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-8 h-8 bg-focus-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-focus-green" />
                </div>
                <span className="text-focus-gray font-medium">{servico}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            id="planos-title" 
            data-animate 
            className={getSectionClasses('planos-title', 'text-center mb-16')}
          >
            <h2 className="text-4xl font-bold text-focus-gray mb-4">📦 Planos simples e transparentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-focus-blue to-focus-green mx-auto rounded-full"></div>
          </div>
          
          <div 
            id="planos-cards" 
            data-animate 
            className={getSectionClasses('planos-cards', 'grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12')}
          >
            <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                🔥 Promoção
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-focus-blue font-bold">MEI</span>
                </div>
                <CardTitle className="text-xl text-focus-gray">MEI Digital</CardTitle>
                <CardDescription className="text-3xl font-bold text-focus-gray">R$ 79<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-focus-gray/80">
                  <li>• Envio de guias e folha</li>
                  <li>• Consultoria básica</li>
                  <li>• Suporte via WhatsApp</li>
                </ul>
                <Button className="w-full mt-6 bg-focus-blue hover:bg-focus-blue/90 font-medium transform hover:scale-105 transition-all duration-300" onClick={() => window.open(createWhatsAppUrl(whatsappMessages.meiPlan), '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-focus-green/20 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                Mais Popular
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-focus-green/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-focus-green font-bold">ESS</span>
                </div>
                <CardTitle className="text-xl text-focus-gray">Essencial</CardTitle>
                <CardDescription className="text-3xl font-bold text-focus-gray">R$ 199<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-focus-gray/80">
                  <li>• Ideal para Simples Nacional</li>
                  <li>• Escrituração contábil e fiscal</li>
                  <li>• Emissão de guias e entrega de obrigações</li>
                  <li>• Suporte via WhatsApp e e-mail</li>
                  <li>• Relatórios mensais</li>
                </ul>
                <p className="text-xs text-focus-gray/60 mt-4">*Serviços de folha de pagamento podem ser contratados à parte.</p>
                <Button className="w-full mt-6 bg-focus-green hover:bg-focus-green/90 font-medium transform hover:scale-105 transition-all duration-300" onClick={() => window.open(createWhatsAppUrl(whatsappMessages.essentialPlan), '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center space-x-1">
                <Crown className="w-3 h-3" />
                <span>Premium</span>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    PRO
                  </span>
                </div>
                <CardTitle className="text-xl text-focus-gray">Pro Digital</CardTitle>
                <CardDescription className="text-3xl font-bold text-focus-gray">R$ 299<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-focus-gray/80">
                  <li>• Tudo do plano Essencial +</li>
                  <li>• Análise mensal da situação fiscal</li>
                  <li>• Envio automático de certidões negativas</li>
                  <li>• Monitoramento contínuo da saúde fiscal</li>
                  <li>• Relatórios personalizados e orientações mensais</li>
                </ul>
                <p className="text-xs text-focus-gray/60 mt-4">*Folha de pagamento à parte. Suporte completo, direto no WhatsApp.</p>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transform hover:scale-105 transition-all duration-300" onClick={() => window.open(createWhatsAppUrl(whatsappMessages.proPlan), '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>

          <div 
            id="planos-cta" 
            data-animate 
            className={getSectionClasses('planos-cta', 'text-center')}
          >
            <Button onClick={() => window.open(createWhatsAppUrl(whatsappMessages.customPlan), '_blank')} className="bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white px-8 text-lg font-semibold py-8 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Quero um plano personalizado
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-green-50/20">
        <div className="container mx-auto px-4">
          <div 
            id="quem-somos-content" 
            data-animate 
            className={getSectionClasses('quem-somos-content', 'max-w-4xl mx-auto text-center')}
          >
            <h2 className="text-4xl font-bold text-focus-gray mb-8">Quem Somos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-focus-blue to-focus-green mx-auto rounded-full mb-12"></div>
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-focus-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-focus-blue" />
              </div>
              <p className="text-lg text-focus-gray/80 mb-6 font-medium">
                Somos uma contabilidade feita por contadores jovens e conectados com o presente.
              </p>
              <p className="text-focus-gray/80 mb-6">
                Aqui você não precisa imprimir nada. Tudo é resolvido de forma prática, online, e com linguagem que você entende.
              </p>
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

      {/* Avaliações em Carrossel */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-blue-50/20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            id="depoimentos-title" 
            data-animate 
            className={getSectionClasses('depoimentos-title', 'text-center mb-16')}
          >
            <h2 className="text-4xl font-bold text-focus-gray mb-4">O que nossos clientes dizem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-focus-blue to-focus-green mx-auto rounded-full"></div>
          </div>
          
          <div 
            id="depoimentos-carousel" 
            data-animate 
            className={getSectionClasses('depoimentos-carousel', '')}
          >
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-20 bg-gradient-to-r from-focus-blue to-focus-green relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div 
          id="cta-final-content" 
          data-animate 
          className={getSectionClasses('cta-final-content', 'container mx-auto px-4 text-center relative z-10')}
        >
          <h2 className="text-3xl font-bold text-white mb-4">📞 Pronto para descomplicar sua contabilidade?</h2>
          <p className="text-xl text-blue-100 mb-8 font-medium">
            Fale agora com a Focus e tenha um contador no seu bolso, direto pelo WhatsApp.
          </p>
          <Button onClick={() => window.open(createWhatsAppUrl(whatsappMessages.footer), '_blank')} className="bg-white text-focus-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar agora via WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-16 bg-focus-gray text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  alt="Focus Contabilidade" 
                  className="h-8 w-auto brightness-0 invert" 
                  src="/lovable-uploads/7e766620-115f-42c5-b8f9-90b895b6862e.png"
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                />
              </div>
              <p className="text-gray-300">
                Contabilidade moderna, ágil e 100% digital para todo o Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>WhatsApp: (77) 98152-2683</p>
                <p>E-mail: contato@focuscontabilidade.com.br</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">Instagram</a>
                <a href={createWhatsAppUrl(whatsappMessages.footer)} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors block">WhatsApp</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">Focus Contabilidade © 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
