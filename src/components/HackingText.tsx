import { useState, useEffect } from 'react';

interface HackingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function HackingText({ text, className = '', speed = 50 }: HackingTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHacking, setIsHacking] = useState(false);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|~`';

  const hackText = () => {
    setIsHacking(true);
    let iterations = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(prevText =>
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iterations += 1 / 3;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsHacking(false);
      }
    }, speed);
  };

  return (
    <span
      className={`hacking-text ${className} ${isHacking ? 'hacking-active' : ''}`}
      onMouseEnter={hackText}
    >
      {displayText}
      <style>{`
        .hacking-text {
          cursor: pointer;
          display: inline-block;
          transition: all 0.3s;
        }

        .hacking-text.hacking-active {
          color: #22c55e;
          text-shadow:
            0 0 10px #22c55e,
            0 0 20px #22c55e,
            0 0 30px #22c55e;
          animation: hack-flicker 0.1s infinite;
        }

        @keyframes hack-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </span>
  );
}
