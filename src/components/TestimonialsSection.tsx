
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
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
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-focus-gray mb-4">O que nossos clientes dizem</h3>
        </div>
        
        {/* Desktop/Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 9).map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
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
          ))}
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
