
import React from 'react';
import { Check, Star, MessageCircle, FileText, Shield, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = "Olá! Gostaria de conhecer os serviços da Focus Contabilidade.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/caa28dc7-ee67-4c8a-82ac-a2653995749f.png" 
                alt="Focus Contabilidade" 
                className="h-10 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Início</button>
              <button onClick={() => scrollToSection('vantagens')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Vantagens</button>
              <button onClick={() => scrollToSection('servicos')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Serviços</button>
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
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
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

      {/* Vantagens */}
      <section id="vantagens" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-focus-gray mb-4">🔧 Por que escolher a Focus?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-focus-green mx-auto mb-4" />
                <CardTitle className="text-lg text-focus-gray font-semibold">Atendimento rápido via WhatsApp</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-12 h-12 text-focus-blue mx-auto mb-4" />
                <CardTitle className="text-lg text-focus-gray font-semibold">Documentos 100% digitais e na nuvem</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-focus-green mx-auto mb-4" />
                <CardTitle className="text-lg text-focus-gray font-semibold">Entregamos relatórios e guias com agilidade</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-focus-blue mx-auto mb-4" />
                <CardTitle className="text-lg text-focus-gray font-semibold">Monitoramos sua situação fiscal automaticamente</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-focus-gray mb-4">✅ Nossos diferenciais:</h4>
                <ul className="space-y-2 text-focus-gray/80">
                  <li>• Envie tudo de forma prática, até pelo celular</li>
                  <li>• Contadores com cabeça aberta para a nova geração</li>
                  <li>• Linguagem simples, sem termos complicados</li>
                  <li>• Ideal para MEIs, prestadores de serviço e pequenas empresas</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-focus-blue mx-auto mb-4" />
                  <p className="text-focus-gray/80">Economia de tempo e praticidade em cada processo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-focus-gray mb-4">Nossos Serviços</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {['Abertura de empresa', 'Contabilidade mensal', 'Emissão de notas fiscais e obrigações', 'Folha de pagamento (serviço adicional)', 'Imposto de Renda Pessoa Física', 'Consultoria e planejamento tributário', 'Regularização de CNPJ e parcelamentos', 'Monitoramento de certidões e pendências fiscais'].map((servico, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-focus-green flex-shrink-0" />
                <span className="text-focus-gray">{servico}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-focus-gray mb-4">📦 Planos simples e transparentes</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-focus-blue font-bold">MEI</span>
                </div>
                <CardTitle className="text-xl text-focus-gray">MEI Digital</CardTitle>
                <CardDescription className="text-3xl font-bold text-focus-gray">R$ 79<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-focus-gray/80">
                  <li>• Envio de guias do DAS pelo WhatsApp</li>
                  <li>• Consultoria básica</li>
                  <li>• Suporte via WhatsApp</li>
                </ul>
                <Button className="w-full mt-6 bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow border-2 border-focus-green/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-4 py-1 rounded-full text-sm font-medium">
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
                <Button className="w-full mt-6 bg-focus-green hover:bg-focus-green/90 font-medium" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-focus-blue font-bold">PRO</span>
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
                <Button className="w-full mt-6 bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white px-8 py-4 text-lg font-semibold">
              Quero um plano personalizado
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-focus-gray mb-8">Quem Somos</h3>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Users className="w-16 h-16 text-focus-blue mx-auto mb-6" />
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

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-focus-gray mb-4">O que nossos clientes dizem</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-focus-gray/80 mb-4">
                  "Comecei com a Focus porque queria simplicidade. Hoje não me preocupo mais com nada, eles cuidam de tudo."
                </p>
                <p className="font-semibold text-focus-gray">— Luana M., Designer Freelancer</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-focus-gray/80 mb-4">
                  "Toda a documentação chega no meu WhatsApp. Rápido e simples, do jeito que eu precisava."
                </p>
                <p className="font-semibold text-focus-gray">— Carlos A., Prestador de Serviços</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-focus-blue to-focus-green">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">📞 Pronto para descomplicar sua contabilidade?</h3>
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/caa28dc7-ee67-4c8a-82ac-a2653995749f.png" 
                  alt="Focus Contabilidade" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300">
                Contabilidade moderna, ágil e 100% digital para todo o Brasil.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-300">
                <p>WhatsApp: (11) 99999-9999</p>
                <p>E-mail: contato@focuscontabilidade.com.br</p>
                <p>Atendimento online para todo o Brasil</p>
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
    </div>
  );
};

export default Index;
