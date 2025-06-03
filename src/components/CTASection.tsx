
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  whatsappUrl: string;
}

const CTASection = ({ whatsappUrl }: CTASectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-focus-blue to-focus-green">
      <div className="w-full max-w-[1280px] mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-4 animate-fade-in">Pronto para descomplicar sua contabilidade?</h3>
        <p className="text-xl text-blue-100 mb-8 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Fale agora com a Focus e tenha um contador no seu bolso, direto pelo WhatsApp.
        </p>
        <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')} 
            className="bg-white text-focus-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar agora via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
