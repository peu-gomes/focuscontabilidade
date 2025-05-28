
import React, { memo, useMemo } from 'react';
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
  },
  {
    text: "Suporte fantástico pelo WhatsApp. Sempre respondem rápido e resolvem tudo na hora.",
    author: "Mariana L., Arquiteta",
    rating: 5
  },
  {
    text: "Nunca vi uma contabilidade tão moderna. Tudo no celular, sem papelada, sem complicação.",
    author: "Fernando S., Comerciante",
    rating: 5
  },
  {
    text: "Excelente custo-benefício! Pago menos que no contador antigo e tenho muito mais qualidade.",
    author: "Priscila R., Coach",
    rating: 5
  },
  {
    text: "A praticidade da Focus é incomparável. Documentos na nuvem e atendimento excepcional.",
    author: "João M., Dentista",
    rating: 5
  }
];

const TestimonialCard = memo(({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  const stars = useMemo(() => 
    Array.from({ length: testimonial.rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    )), [testimonial.rating]
  );

  return (
    <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 shadow-lg bg-white h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex mb-4">
            {stars}
          </div>
          <p className="text-gray-700 mb-6 flex-grow leading-relaxed font-medium">
            "{testimonial.text}"
          </p>
          <p className="font-bold text-focus-gray text-sm">
            — {testimonial.author}
          </p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const TestimonialCarousel = memo(() => {
  const carouselOptions = useMemo(() => ({
    align: "start" as const,
    loop: true,
    slidesToScroll: 1,
  }), []);

  return (
    <div className="relative">
      <Carousel 
        opts={carouselOptions}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.author}-${index}`} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-16 bg-white hover:bg-gray-50 border-2 border-focus-blue/30 hover:border-focus-blue text-focus-blue shadow-lg" />
        <CarouselNext className="hidden md:flex -right-16 bg-white hover:bg-gray-50 border-2 border-focus-blue/30 hover:border-focus-blue text-focus-blue shadow-lg" />
      </Carousel>
    </div>
  );
});

TestimonialCarousel.displayName = 'TestimonialCarousel';

export default TestimonialCarousel;
