import { useEffect, useState } from 'react';

export function CRTEffect() {
  return (
    <>
      <div className="crt-overlay" />
      <div className="scanlines" />
      <style>{`
        .crt-overlay {
          position: fixed;
          inset: 0;
          background:
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            );
          pointer-events: none;
          z-index: 9999;
          animation: flicker 0.15s infinite;
        }

        @keyframes flicker {
          0% { opacity: 0.97; }
          50% { opacity: 1; }
          100% { opacity: 0.97; }
        }

        .scanlines {
          position: fixed;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(34, 197, 94, 0.02) 51%
          );
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 9998;
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </>
  );
}

interface ParticleProps {
  x: number;
  y: number;
  id: number;
}

export function PixelExplosion({ particles }: { particles: ParticleProps[] }) {
  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="pixel-particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}
      <style>{`
        .pixel-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #22c55e;
          pointer-events: none;
          animation: pixel-explode 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          box-shadow:
            0 0 10px #22c55e,
            0 0 20px #22c55e,
            0 0 30px #22c55e;
          image-rendering: pixelated;
        }

        @keyframes pixel-explode {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform:
              translate(
                calc((var(--random-x, 0.5) - 0.5) * 250px),
                calc((var(--random-y, 0.5) - 0.5) * 250px)
              )
              scale(0)
              rotate(720deg);
            opacity: 0;
          }
        }

        .pixel-particle:nth-child(1) { --random-x: 0.1; --random-y: 0.9; }
        .pixel-particle:nth-child(2) { --random-x: 0.9; --random-y: 0.1; animation-delay: 0.03s; }
        .pixel-particle:nth-child(3) { --random-x: 0.3; --random-y: 0.7; animation-delay: 0.06s; }
        .pixel-particle:nth-child(4) { --random-x: 0.7; --random-y: 0.3; animation-delay: 0.09s; }
        .pixel-particle:nth-child(5) { --random-x: 0.5; --random-y: 0.1; animation-delay: 0.12s; }
        .pixel-particle:nth-child(6) { --random-x: 0.2; --random-y: 0.5; animation-delay: 0.15s; }
        .pixel-particle:nth-child(7) { --random-x: 0.8; --random-y: 0.8; animation-delay: 0.18s; }
        .pixel-particle:nth-child(8) { --random-x: 0.4; --random-y: 0.2; animation-delay: 0.21s; }
        .pixel-particle:nth-child(9) { --random-x: 0.6; --random-y: 0.9; animation-delay: 0.24s; }
        .pixel-particle:nth-child(10) { --random-x: 0.1; --random-y: 0.4; animation-delay: 0.27s; }
        .pixel-particle:nth-child(11) { --random-x: 0.9; --random-y: 0.6; animation-delay: 0.30s; }
        .pixel-particle:nth-child(12) { --random-x: 0.5; --random-y: 0.5; animation-delay: 0.33s; }
        .pixel-particle:nth-child(13) { --random-x: 0.15; --random-y: 0.85; animation-delay: 0.36s; }
        .pixel-particle:nth-child(14) { --random-x: 0.85; --random-y: 0.15; animation-delay: 0.39s; }
        .pixel-particle:nth-child(15) { --random-x: 0.35; --random-y: 0.65; animation-delay: 0.42s; }
        .pixel-particle:nth-child(16) { --random-x: 0.65; --random-y: 0.35; animation-delay: 0.45s; }
      `}</style>
    </>
  );
}

export function GlitchText({ text, className }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${className} ${isGlitching ? 'glitch-active' : ''}`} data-text={text}>
      {text}
      <style>{`
        .glitch-active {
          animation: glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both;
          position: relative;
        }

        .glitch-active::before,
        .glitch-active::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
        }

        .glitch-active::before {
          animation: glitch-anim-2 0.3s cubic-bezier(.25, .46, .45, .94) both;
          color: #0ff;
          z-index: -1;
        }

        .glitch-active::after {
          animation: glitch-anim-3 0.3s cubic-bezier(.25, .46, .45, .94) both;
          color: #f0f;
          z-index: -2;
        }

        @keyframes glitch-anim {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
        }

        @keyframes glitch-anim-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(3px, -3px); }
          40% { transform: translate(3px, 3px); }
          60% { transform: translate(-3px, -3px); }
          80% { transform: translate(-3px, 3px); }
        }

        @keyframes glitch-anim-3 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
      `}</style>
    </span>
  );
}

export function MatrixRain() {
  return (
    <div className="matrix-container">
      <style>{`
        .matrix-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.3;
          pointer-events: none;
        }

        .matrix-container::before {
          content: '01101010011010110110111001110100011010000010000001110010011000010110110101100001';
          position: absolute;
          inset: 0;
          font-family: monospace;
          font-size: 12px;
          color: #22c55e;
          word-wrap: break-word;
          line-height: 1.2;
          animation: matrix-rain 3s linear infinite;
          text-shadow: 0 0 10px #22c55e;
        }

        @keyframes matrix-rain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function TerminalCursor() {
  return (
    <span className="terminal-cursor">
      _
      <style>{`
        .terminal-cursor {
          animation: cursor-blink 1s step-end infinite;
          font-weight: bold;
        }

        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
