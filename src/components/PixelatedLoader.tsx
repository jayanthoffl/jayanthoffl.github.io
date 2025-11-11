import { useEffect, useState } from 'react';

interface PixelatedLoaderProps {
  onLoadComplete: () => void;
}

export default function PixelatedLoader({ onLoadComplete }: PixelatedLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'logo' | 'complete'>('loading');
  const [logoPixels, setLogoPixels] = useState<boolean[][]>([]);

  const jrLogo = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  useEffect(() => {
    setLogoPixels(jrLogo.map(row => row.map(val => val === 1)));

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setPhase('logo');
          setTimeout(() => {
            setPhase('complete');
            setTimeout(() => onLoadComplete(), 800);
          }, 1500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="scan-lines" />
        <div className="grid-overlay" />
      </div>

      {phase === 'loading' && (
        <div className="relative z-10 space-y-12">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 border-4 border-green-500 animate-spin-square">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-green-500" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-green-500" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500" />
                </div>
                <div className="absolute inset-4 border-2 border-green-400 animate-spin-square-reverse" />
                <div className="absolute inset-8 border border-green-300 animate-spin-square" />
              </div>
              <div className="absolute -inset-8 bg-green-500 opacity-20 blur-2xl animate-pulse-glow" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-mono text-green-400 mb-2 glitch-effect tracking-wider">
                JAYANTH_RAMAKRISHNAN
              </h1>
              <p className="text-green-300 font-mono text-sm tracking-widest animate-pulse">
                QUANTUM_COMPUTING_RESEARCHER
              </p>
            </div>

            <div className="w-96 max-w-[90vw] mx-auto">
              <div className="h-6 bg-gray-900 border-2 border-green-500 relative overflow-hidden pixel-border">
                <div
                  className="h-full bg-gradient-to-r from-green-600 via-green-400 to-green-300 transition-all duration-300 relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
                </div>

                <div className="absolute inset-0 grid grid-cols-20">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="border-r border-green-900/50" />
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black font-mono text-xs font-bold mix-blend-difference">
                    {Math.floor(progress)}%
                  </span>
                </div>
              </div>

              <div className="mt-2 flex justify-between text-green-500 font-mono text-xs">
                <span>LOADING...</span>
                <span>{Math.floor(progress)}/100</span>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-8 bg-green-500 pixel-bar"
                  style={{
                    animation: `wave ${1 + i * 0.1}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    opacity: progress > i * 20 ? 1 : 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {phase === 'logo' && (
        <div className="relative z-10 animate-fadeIn">
          <div className="relative">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${jrLogo[0].length}, minmax(0, 1fr))`,
                transform: 'scale(3)'
              }}
            >
              {logoPixels.map((row, i) =>
                row.map((isActive, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? 'bg-green-400 shadow-pixel' : 'bg-gray-900/30'
                    }`}
                    style={{
                      animation: isActive ? `pixelPop ${0.3 + (i + j) * 0.05}s cubic-bezier(0.68, -0.55, 0.265, 1.55) backwards` : 'none',
                      boxShadow: isActive ? '0 0 10px rgba(34, 197, 94, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.3)' : 'none'
                    }}
                  />
                ))
              )}
            </div>
            <div className="absolute -inset-16 bg-green-500 opacity-10 blur-3xl animate-pulse-glow" />
          </div>

          <div className="text-center mt-12">
            <p className="text-green-400 font-mono text-xl tracking-wider animate-pulse">
              INITIALIZING_SYSTEM...
            </p>
          </div>
        </div>
      )}

      {phase === 'complete' && (
        <div className="relative z-10 animate-scaleOut">
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 font-mono animate-pulse">
              ✓
            </div>
            <p className="text-green-400 font-mono text-xl mt-4">READY</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin-square {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin-square-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes wave {
          0%, 100% { height: 2rem; }
          50% { height: 3rem; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes pixelPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.5);
          }
        }

        .animate-spin-square {
          animation: spin-square 3s linear infinite;
        }

        .animate-spin-square-reverse {
          animation: spin-square-reverse 2s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scaleOut {
          animation: scaleOut 0.8s ease-out forwards;
        }

        .glitch-effect {
          animation: glitch-text 2s infinite;
        }

        @keyframes glitch-text {
          0%, 90%, 100% {
            text-shadow: 2px 2px 0 rgba(34, 197, 94, 0.7);
          }
          92% {
            text-shadow: -2px 2px 0 rgba(34, 197, 94, 0.7);
          }
          94% {
            text-shadow: 2px -2px 0 rgba(34, 197, 94, 0.7);
          }
        }

        .pixel-border {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        .pixel-bar {
          image-rendering: pixelated;
        }

        .shadow-pixel {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.3);
        }

        .scan-lines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 50%,
            rgba(34, 197, 94, 0.03) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
