import { useState } from 'react';
import { PixelExplosion } from './RetroEffects';

interface ArcadeButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function ArcadeButton({ onClick, children, variant = 'primary', className = '' }: ArcadeButtonProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: 16 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y
    }));

    setParticles(prev => [...prev, ...newParticles]);
    setIsPressed(true);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 800);

    setTimeout(() => setIsPressed(false), 100);

    onClick();
  };

  const baseClasses = variant === 'primary'
    ? 'bg-green-500 text-black hover:bg-green-400'
    : 'border-2 border-green-500 text-green-400 hover:bg-green-950/50';

  return (
    <button
      onClick={handleClick}
      className={`px-8 py-4 font-bold font-mono tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:-translate-y-1 relative overflow-hidden group arcade-btn ${baseClasses} ${className} ${isPressed ? 'pressed' : ''}`}
    >
      <span className="relative z-10">{children}</span>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 shimmer-effect" />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="digital-rain"></div>
      </div>

      <PixelExplosion particles={particles} />

      <style>{`
        .arcade-btn {
          text-shadow: 0 0 5px currentColor;
          position: relative;
          image-rendering: pixelated;
        }

        .arcade-btn.pressed {
          animation: arcade-press 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .arcade-btn:hover {
          animation: arcade-pulse 0.6s ease-in-out infinite;
        }

        @keyframes arcade-press {
          0% { transform: scale(1); }
          50% { transform: scale(0.92); box-shadow: 0 0 10px rgba(34, 197, 94, 0.5); }
          100% { transform: scale(1); }
        }

        @keyframes arcade-pulse {
          0%, 100% {
            box-shadow:
              0 0 20px rgba(34, 197, 94, 0.5),
              inset 0 0 20px rgba(34, 197, 94, 0.1);
          }
          50% {
            box-shadow:
              0 0 40px rgba(34, 197, 94, 0.8),
              inset 0 0 30px rgba(34, 197, 94, 0.2);
          }
        }

        .shimmer-effect {
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }

        .digital-rain {
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 8px,
              rgba(34, 197, 94, 0.1) 8px,
              rgba(34, 197, 94, 0.1) 9px
            );
          animation: rain-fall 1.2s linear infinite;
        }

        .digital-rain::before {
          content: '▀▄▀▄▀▄▀▄';
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          font-family: monospace;
          font-size: 10px;
          color: #22c55e;
          letter-spacing: 15px;
          animation: code-scroll 0.8s linear infinite;
        }

        @keyframes rain-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes code-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(10px); }
        }
      `}</style>
    </button>
  );
}
