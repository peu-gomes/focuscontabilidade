
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

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
    text: "Atendimento incrível! Resolvi minha situação fiscal em poucos dias. Recomendo muito!",
    author: "Ana Paula S., E-commerce",
    rating: 5
  },
  {
    text: "Migrei de outro contador e a diferença é absurda. Tudo digital e muito mais ágil.",
    author: "Roberto M., Consultor",
    rating: 5
  },
  {
    text: "Como MEI, encontrei exatamente o que precisava. Preço justo e serviço de qualidade.",
    author: "Juliana F., Fotógrafa",
    rating: 5
  },
  {
    text: "A Focus transformou minha relação com a contabilidade. Agora é tudo simples e claro.",
    author: "Pedro H., Desenvolvedor",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  return (
    <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-focus-gray/80 mb-6 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-focus-gray text-sm">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white border-focus-blue/20 hover:border-focus-blue text-focus-blue" />
      <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white border-focus-blue/20 hover:border-focus-blue text-focus-blue" />
    </Carousel>
  );
};

export default TestimonialCarousel;
