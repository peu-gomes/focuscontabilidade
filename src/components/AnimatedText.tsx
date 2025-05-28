
import React, { memo } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = memo(({ text, className = '' }) => {
  return (
    <span 
      className={`inline-block bg-gradient-to-r from-focus-blue to-focus-green bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
});

AnimatedText.displayName = 'AnimatedText';

export default AnimatedText;
