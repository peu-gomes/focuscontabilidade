
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  whatsappUrl: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ whatsappUrl, scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img alt="Focus Contabilidade" className="h-10 w-auto object-contain" src="/lovable-uploads/d46b0f3f-634a-4ba4-9b52-234af8bbba8b.png" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('inicio')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Início</button>
            <button onClick={() => scrollToSection('vantagens')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Vantagens</button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-focus-gray hover:text-focus-blue transition-colors font-medium">Como Funciona</button>
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
  );
};

export default Header;
