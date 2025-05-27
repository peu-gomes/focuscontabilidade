
import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Primeiro celular */}
      <div className="relative">
        <div className="w-32 h-60 bg-gray-800 rounded-3xl p-2 shadow-2xl transform -rotate-6">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-800 rounded-b-xl z-10"></div>
            {/* Tela do WhatsApp */}
            <div className="w-full h-full bg-green-100 flex flex-col">
              <div className="bg-green-600 h-16 flex items-end pb-2 px-3">
                <div className="text-white text-xs font-medium">WhatsApp</div>
              </div>
              <div className="flex-1 p-2 space-y-2">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <div className="text-xs text-gray-600">Você</div>
                  <div className="text-xs">Olá! Gostaria de falar com um contador.</div>
                </div>
                <div className="bg-green-500 rounded-lg p-2 shadow-sm ml-4 text-white">
                  <div className="text-xs">Olá! Como posso te ajudar?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segundo celular */}
      <div className="relative">
        <div className="w-32 h-60 bg-gray-800 rounded-3xl p-2 shadow-2xl transform rotate-6">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-800 rounded-b-xl z-10"></div>
            {/* Tela do WhatsApp */}
            <div className="w-full h-full bg-green-100 flex flex-col">
              <div className="bg-green-600 h-16 flex items-end pb-2 px-3">
                <div className="text-white text-xs font-medium">Focus Contabilidade</div>
              </div>
              <div className="flex-1 p-2 space-y-2">
                <div className="bg-green-500 rounded-lg p-2 shadow-sm mr-4 text-white">
                  <div className="text-xs">Seus documentos estão prontos!</div>
                </div>
                <div className="bg-green-500 rounded-lg p-2 shadow-sm mr-4 text-white">
                  <div className="text-xs">📄 Guia DAS emitida</div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <div className="text-xs text-gray-600">Você</div>
                  <div className="text-xs">Perfeito! Obrigado 👍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
