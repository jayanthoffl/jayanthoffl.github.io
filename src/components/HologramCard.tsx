import { ReactNode, useState, useRef, useEffect } from 'react';

interface HologramCardProps {
  children: ReactNode;
  className?: string;
}

export default function HologramCard({ children, className = '' }: HologramCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`hologram-card ${className} ${isHovered ? 'holo-active' : ''}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="hologram-overlay" />
      <div className="scan-effect" />
      <div className="holo-content">{children}</div>

      <style>{`
        .hologram-card {
          position: relative;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
        }

        .hologram-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              45deg,
              transparent 30%,
              rgba(34, 197, 94, 0.1) 50%,
              transparent 70%
            );
          background-size: 200% 200%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
          mix-blend-mode: screen;
        }

        .hologram-card.holo-active .hologram-overlay {
          opacity: 1;
          animation: holo-shift 3s ease-in-out infinite;
        }

        @keyframes holo-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .scan-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(34, 197, 94, 0.3) 50%,
            transparent 100%
          );
          height: 100%;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .hologram-card.holo-active .scan-effect {
          opacity: 1;
          animation: scan-down 2s linear infinite;
        }

        @keyframes scan-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .holo-content {
          position: relative;
          z-index: 1;
        }

        .hologram-card.holo-active {
          box-shadow:
            0 0 30px rgba(34, 197, 94, 0.3),
            inset 0 0 20px rgba(34, 197, 94, 0.05);
        }

        .hologram-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(34, 197, 94, 0.3),
            transparent
          );
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: -1;
          animation: border-glow 3s linear infinite;
        }

        .hologram-card.holo-active::before {
          opacity: 1;
        }

        @keyframes border-glow {
          0%, 100% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(30deg);
          }
        }
      `}</style>
    </div>
  );
}
