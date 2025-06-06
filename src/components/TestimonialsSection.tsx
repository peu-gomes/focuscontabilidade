
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.3,
    triggerOnce: true 
  });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  const testimonials = [
    {
      text: "Comecei com a Focus porque queria simplicidade. Hoje não me preocupo mais com nada, eles cuidam de tudo.",
      author: "Luana M., Designer Freelancer",
      rating: 5
    },
    {
      text: "Toda a documentação chega no meu WhatsApp. Rápido e simples, do jeito que eu precisava.",
      author: "Carlos A., Prestador de Serviços",
      rating: 5
    },
    {
      text: "A Focus transformou minha relação com a contabilidade. Agora é tudo digital e sem complicação.",
      author: "Marina S., Consultora",
      rating: 5
    },
    {
      text: "Migrei para a Focus e foi a melhor decisão. Atendimento excepcional e preços justos.",
      author: "Roberto L., Comerciante",
      rating: 5
    },
    {
      text: "Nunca imaginei que contabilidade poderia ser tão fácil. Recomendo de olhos fechados!",
      author: "Ana P., Arquiteta",
      rating: 5
    },
    {
      text: "O suporte via WhatsApp é incrível. Sempre que preciso, eles respondem rapidamente.",
      author: "João S., Empresário",
      rating: 5
    },
    {
      text: "Documentos na nuvem facilitaram muito minha vida. Acesso tudo de qualquer lugar.",
      author: "Paula R., Consultora de TI",
      rating: 5
    },
    {
      text: "Preços justos e serviço de qualidade. A Focus superou minhas expectativas.",
      author: "Ricardo M., Advogado",
      rating: 5
    },
    {
      text: "Mudei para a Focus e nunca mais tive dor de cabeça com contabilidade.",
      author: "Fernanda L., E-commerce",
      rating: 5
    },
    {
      text: "Processo de abertura da empresa foi muito rápido e sem burocracias.",
      author: "Gabriel T., Startup",
      rating: 5
    },
    {
      text: "Atendem todas as minhas dúvidas pelo WhatsApp mesmo. Muito prático!",
      author: "Carla F., Psicóloga",
      rating: 5
    },
    {
      text: "Relatórios sempre em dia e fáceis de entender. Equipe muito competente.",
      author: "Pedro H., Restaurante",
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
          <h3 className="text-3xl font-bold text-focus-gray mb-4">
            O que <span className="text-focus-blue">nossos clientes</span> dizem
          </h3>
        </div>
        
        {/* Desktop/Tablet View with Navigation */}
        <div ref={cardsRef} className="hidden md:block max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className={`hover:shadow-lg transition-all duration-300 hover:scale-105 scroll-hidden stagger-${(index % 6) + 1} ${
                      cardsVisible ? (index % 3 === 0 ? 'scroll-animate-slide-left' : index % 3 === 1 ? 'scroll-animate-zoom' : 'scroll-animate-slide-right') : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                      </div>
                      <p className="text-focus-gray/80 mb-4">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-focus-gray">— {testimonial.author}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/90 hover:bg-white border-focus-blue/20 text-focus-blue hover:text-focus-blue" />
            <CarouselNext className="right-0 bg-white/90 hover:bg-white border-focus-blue/20 text-focus-blue hover:text-focus-blue" />
          </Carousel>
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex-shrink-0 w-[280px] snap-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-focus-gray/80 mb-4 text-sm">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-focus-gray text-sm">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile hint */}
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
  );
};

export default TestimonialsSection;
