
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const testimonials = [
    {
      text: "A Focus Contabilidade transformou completamente nossa gestão financeira. O atendimento via WhatsApp é excepcional e sempre conseguimos resolver tudo rapidamente.",
      author: "Marina Santos",
      position: "CEO",
      company: "TechStart Soluções",
      logo: "/lovable-uploads/72dd4e0c-c190-431c-b465-e6f21689b198.png",
      rating: 5
    },
    {
      text: "Migrei minha empresa para a Focus e foi a melhor decisão que tomei. Processo 100% digital, sem burocracias e com total transparência nos serviços.",
      author: "Carlos Roberto",
      position: "Diretor Comercial",
      company: "Inovare Consultoria",
      logo: "/lovable-uploads/7e766620-115f-42c5-b8f9-90b895b6862e.png",
      rating: 5
    },
    {
      text: "A equipe da Focus é extremamente competente. Documentos sempre organizados na nuvem e relatórios mensais que realmente fazem sentido para nosso negócio.",
      author: "Ana Paula Ferreira",
      position: "Sócia-Fundadora",
      company: "Design & Arquitetura AP",
      logo: "/lovable-uploads/9044b07b-06bf-4225-a0f6-53ed0a06b67c.png",
      rating: 5
    },
    {
      text: "Nunca imaginei que contabilidade poderia ser tão simples. A Focus cuida de tudo enquanto eu foco no que realmente importa: fazer minha empresa crescer.",
      author: "João Pedro Silva",
      position: "Empresário",
      company: "Silva & Associados",
      logo: "/lovable-uploads/92cc8ce4-c3a0-40f9-8a84-0671c985f5df.png",
      rating: 5
    },
    {
      text: "Atendimento humanizado com tecnologia de ponta. A Focus conseguiu unir o melhor dos dois mundos para oferecer um serviço realmente diferenciado.",
      author: "Paula Regina",
      position: "Diretora",
      company: "Nova Era TI",
      logo: "/lovable-uploads/caa28dc7-ee67-4c8a-82ac-a2653995749f.png",
      rating: 5
    },
    {
      text: "Processo de abertura da empresa foi incrivelmente rápido. Em poucos dias já estava operando com toda documentação em ordem. Recomendo fortemente!",
      author: "Ricardo Mendes",
      position: "Founder",
      company: "StartUp Growth",
      logo: "/lovable-uploads/d46b0f3f-634a-4ba4-9b52-234af8bbba8b.png",
      rating: 5
    },
    {
      text: "A Focus não é só uma contabilidade, é uma parceira estratégica. Sempre disponíveis para esclarecer dúvidas e orientar as melhores decisões fiscais.",
      author: "Fernanda Lima",
      position: "Proprietária",
      company: "Boutique Elegance",
      logo: "/lovable-uploads/f73e3f21-1797-4e03-b00e-8ca0470ce0c9.png",
      rating: 5
    },
    {
      text: "Migrei de uma contabilidade tradicional para a Focus e a diferença é impressionante. Tudo digital, organizado e com preços justos.",
      author: "Gabriel Torres",
      position: "CTO",
      company: "DevSolutions Pro",
      logo: "/lovable-uploads/72dd4e0c-c190-431c-b465-e6f21689b198.png",
      rating: 5
    },
    {
      text: "Suporte excepcional via WhatsApp. Sempre que precisei, obtive respostas rápidas e precisas. A Focus entende as necessidades do empreendedor moderno.",
      author: "Carla Freitas",
      position: "Psicóloga",
      company: "Clínica Bem-Estar",
      logo: "/lovable-uploads/7e766620-115f-42c5-b8f9-90b895b6862e.png",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-hidden ${titleVisible ? 'scroll-animate-slide-top' : ''}`}
        >
          <h3 className="text-3xl font-bold text-focus-gray mb-4">O que nossos clientes dizem</h3>
          <p className="text-focus-gray/70 max-w-2xl mx-auto">
            Depoimentos reais de empresários que transformaram sua gestão contábil com a Focus
          </p>
        </div>
        
        {/* Desktop/Tablet View with Carousel */}
        <div className="hidden md:block">
          <Carousel
            ref={cardsRef}
            className={`w-full max-w-6xl mx-auto scroll-hidden ${cardsVisible ? 'scroll-animate-fade-up' : ''}`}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.logo} 
                          alt={`Logo ${testimonial.company}`}
                          className="w-12 h-12 object-contain rounded-lg mr-4 bg-gray-50 p-2"
                        />
                        <div className="flex-1">
                          <div className="flex mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <h4 className="font-semibold text-focus-gray text-sm">{testimonial.company}</h4>
                        </div>
                      </div>
                      
                      <p className="text-focus-gray/80 mb-6 flex-1 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="mt-auto">
                        <p className="font-semibold text-focus-gray">{testimonial.author}</p>
                        <p className="text-sm text-focus-gray/60">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden lg:flex -left-16 border-focus-blue/20 text-focus-blue hover:bg-focus-blue hover:text-white transition-all duration-300" />
            <CarouselNext className="hidden lg:flex -right-16 border-focus-blue/20 text-focus-blue hover:bg-focus-blue hover:text-white transition-all duration-300" />
          </Carousel>

          {/* Navigation hint for smaller screens */}
          <div className="text-center mt-6 lg:hidden">
            <p className="text-sm text-focus-gray/60 flex items-center justify-center gap-2">
              <span>Deslize para ver mais depoimentos</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex-shrink-0 w-[300px] snap-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.logo} 
                        alt={`Logo ${testimonial.company}`}
                        className="w-10 h-10 object-contain rounded-lg mr-3 bg-gray-50 p-2"
                      />
                      <div className="flex-1">
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <h4 className="font-semibold text-focus-gray text-xs">{testimonial.company}</h4>
                      </div>
                    </div>
                    
                    <p className="text-focus-gray/80 mb-4 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div>
                      <p className="font-semibold text-focus-gray text-sm">{testimonial.author}</p>
                      <p className="text-xs text-focus-gray/60">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile hint */}
          <div className="text-center mt-4">
            <p className="text-sm text-focus-gray/60 flex items-center justify-center gap-2">
              <span>Deslize para ver mais depoimentos</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
