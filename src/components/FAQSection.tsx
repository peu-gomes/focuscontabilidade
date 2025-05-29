
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o atendimento 100% digital?",
      answer: "Todo nosso atendimento é feito via WhatsApp e e-mail. Você envia documentos pelo celular, recebe relatórios digitalmente e tira dúvidas em tempo real. Nada de filas ou deslocamentos."
    },
    {
      question: "Atendem empresas de todo o Brasil?",
      answer: "Sim! Como trabalhamos 100% digital, atendemos empresas de qualquer lugar do Brasil. Nossos processos são totalmente online e seguros."
    },
    {
      question: "Quanto tempo demora para abrir uma empresa?",
      answer: "O processo de abertura varia de 5 a 15 dias úteis, dependendo da complexidade e do tipo de empresa. Acompanhamos todo o processo e mantemos você informado."
    },
    {
      question: "O que está incluso nos planos mensais?",
      answer: "Cada plano inclui escrituração contábil, emissão de guias, entrega de obrigações, suporte via WhatsApp e relatórios mensais. Folha de pagamento é um serviço adicional."
    },
    {
      question: "Como garantem a segurança dos meus dados?",
      answer: "Utilizamos sistemas em nuvem com criptografia de ponta, backup automático e acesso restrito. Todos os documentos ficam seguros e acessíveis apenas para você e nossa equipe."
    },
    {
      question: "Posso mudar de plano a qualquer momento?",
      answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Entre em contato via WhatsApp e ajustamos conforme sua necessidade."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-focus-gray mb-4">
            Perguntas Frequentes
          </h3>
          <p className="text-focus-gray/80 text-lg">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-focus-gray hover:text-focus-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-focus-gray/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
