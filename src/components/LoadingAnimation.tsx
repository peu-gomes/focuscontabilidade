
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          // Aguarda um pouco antes de esconder a animação
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prevProgress + 2; // Incrementa 2% a cada 50ms
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <img 
          alt="Focus Contabilidade" 
          className="h-16 w-auto mx-auto mb-4" 
          src="/lovable-uploads/92cc8ce4-c3a0-40f9-8a84-0671c985f5df.png" 
        />
        <h2 className="text-2xl font-bold text-focus-gray mb-2">Focus Contabilidade</h2>
        <p className="text-focus-gray/60">Carregando...</p>
      </div>
      
      <div className="w-80 max-w-md">
        <Progress value={progress} className="h-3 mb-4" />
        <div className="text-center">
          <span className="text-2xl font-bold text-focus-blue">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
