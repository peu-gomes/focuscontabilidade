
import React from 'react';

interface FooterProps {
  whatsappUrl: string;
}

const Footer = ({ whatsappUrl }: FooterProps) => {
  return (
    <footer id="contato" className="py-12 bg-focus-gray text-white">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img alt="Focus Contabilidade" className="h-8 w-auto brightness-0 invert" src="/lovable-uploads/72dd4e0c-c190-431c-b465-e6f21689b198.png" />
            </div>
            <p className="text-gray-300">
              Contabilidade moderna, ágil e 100% digital para todo o Brasil.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Contato</h5>
            <div className="space-y-2 text-gray-300">
              <p>WhatsApp: (77) 98152-2683</p>
              <p>E-mail: contato@contabilfocus.com.br</p>
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
  );
};

export default Footer;
