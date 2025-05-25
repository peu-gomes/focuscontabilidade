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
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Focus Contabilidade</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-blue-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection('vantagens')} className="text-gray-600 hover:text-blue-600 transition-colors">Vantagens</button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('planos')} className="text-gray-600 hover:text-blue-600 transition-colors">Planos</button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-gray-600 hover:text-blue-600 transition-colors">Quem Somos</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-600 hover:text-blue-600 transition-colors">Contato</button>
            </nav>

            <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              🚀 Contabilidade moderna,
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ágil e 100% digital</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aqui você resolve tudo pelo celular: documentação na nuvem, atendimento via WhatsApp e nada de complicação. 
              A gente cuida de tudo, você foca no seu negócio.
            </p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
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
            <h3 className="text-3xl font-bold text-gray-800 mb-4">🔧 Por que escolher a Focus?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Atendimento rápido via WhatsApp</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Documentos 100% digitais e na nuvem</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Entregamos relatórios e guias com agilidade</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Monitoramos sua situação fiscal automaticamente</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">✅ Nossos diferenciais:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Envie tudo de forma prática, até pelo celular</li>
                  <li>• Contadores com cabeça aberta para a nova geração</li>
                  <li>• Linguagem simples, sem termos complicados</li>
                  <li>• Ideal para MEIs, prestadores de serviço e pequenas empresas</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600">Economia de tempo e praticidade em cada processo</p>
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
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {['Abertura de empresa', 'Contabilidade mensal', 'Emissão de notas fiscais e obrigações', 'Folha de pagamento (serviço adicional)', 'Imposto de Renda Pessoa Física', 'Consultoria e planejamento tributário', 'Regularização de CNPJ e parcelamentos', 'Monitoramento de certidões e pendências fiscais'].map((servico, index) => <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{servico}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">📦 Planos simples e transparentes</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">MEI</span>
                </div>
                <CardTitle className="text-xl">MEI Digital</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-800">R$ 79<span className="text-sm text-gray-500">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Envio de guias do DAS pelo WhatsApp</li>
                  <li>• Consultoria básica</li>
                  <li>• Suporte via WhatsApp</li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow border-2 border-purple-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">ESS</span>
                </div>
                <CardTitle className="text-xl">Essencial</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-800">R$ 199<span className="text-sm text-gray-500">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Ideal para Simples Nacional</li>
                  <li>• Escrituração contábil e fiscal</li>
                  <li>• Emissão de guias e entrega de obrigações</li>
                  <li>• Suporte via WhatsApp e e-mail</li>
                  <li>• Relatórios mensais</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">*Serviços de folha de pagamento podem ser contratados à parte.</p>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">PRO</span>
                </div>
                <CardTitle className="text-xl">Pro Digital</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-800">R$ 299<span className="text-sm text-gray-500">/mês</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tudo do plano Essencial +</li>
                  <li>• Análise mensal da situação fiscal</li>
                  <li>• Envio automático de certidões negativas</li>
                  <li>• Monitoramento contínuo da saúde fiscal</li>
                  <li>• Relatórios personalizados e orientações mensais</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">*Folha de pagamento à parte. Suporte completo, direto no WhatsApp.</p>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">Quero um plano personalizado</Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Quem Somos</h3>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <p className="text-lg text-gray-600 mb-6">
                Somos uma contabilidade feita por contadores jovens e conectados com o presente.
              </p>
              <p className="text-gray-600 mb-6">
                Aqui você não precisa imprimir nada. Tudo é resolvido de forma prática, online, e com linguagem que você entende.
              </p>
              <p className="text-gray-600 mb-6">
                Nosso foco é tirar o peso da contabilidade do seu dia a dia, com agilidade, clareza e tecnologia.
              </p>
              <p className="text-lg font-semibold text-blue-600">
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
            <h3 className="text-3xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "Comecei com a Focus porque queria simplicidade. Hoje não me preocupo mais com nada, eles cuidam de tudo."
                </p>
                <p className="font-semibold text-gray-800">— Luana M., Designer Freelancer</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "Toda a documentação chega no meu WhatsApp. Rápido e simples, do jeito que eu precisava."
                </p>
                <p className="font-semibold text-gray-800">— Carlos A., Prestador de Serviços</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">📞 Pronto para descomplicar sua contabilidade?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Fale agora com a Focus e tenha um contador no seu bolso, direto pelo WhatsApp.
          </p>
          <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar agora via WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <h4 className="text-xl font-bold">Focus Contabilidade</h4>
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
    </div>;
};
export default Index;