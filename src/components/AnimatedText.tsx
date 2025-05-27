
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '10px' }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <span 
      ref={textRef} 
      className={`inline-block bg-gradient-to-r from-focus-blue to-focus-green bg-clip-text text-transparent transition-all duration-1000 ${
        isVisible ? 'animate-pulse' : ''
      } ${className}`}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
