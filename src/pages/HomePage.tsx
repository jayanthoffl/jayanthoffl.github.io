import { Github, Linkedin, Instagram, Facebook, ChevronDown, Sparkles, Code, Cpu } from 'lucide-react';
import { useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern" />
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-green-400 font-mono text-sm animate-fadeIn">
                <Terminal className="w-4 h-4 animate-pulse" />
                <span>$ whoami</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-green-400 glitch-effect whitespace-nowrap">
                {'JAYANTH'.split('').map((char, i) => (
                  <span
                    key={i}
                    className="led-letter"
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-green-300 whitespace-nowrap">
                {'RAMAKRISHNAN'.split('').map((char, i) => (
                  <span
                    key={i}
                    className="led-letter"
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h2>

              <div className="flex flex-wrap gap-2 pt-4">
                {['Founder', 'Quantum ML Researcher', 'Tech Leader', 'Innovator'].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-green-950/50 border border-green-500 text-green-400 font-mono text-xs tracking-wider hover:bg-green-900/50 transition-all cursor-default pixel-corner"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>

            <p className="text-green-300 text-lg leading-relaxed font-mono">
              A builder at the intersection of{' '}
              <span className="text-green-400 font-bold">Quantum Computing</span>,{' '}
              <span className="text-green-400 font-bold">Generative AI</span>, and{' '}
              <span className="text-green-400 font-bold">student-led research ecosystems</span>.
              Leading the Microsoft Student Community — Amaravati and founded the Singularity Advanced Student Research Lab at SRM University AP.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jayanth-ramakrishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-950/50 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/thejayanthramakrishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-950/50 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/thejayanthramakrishnanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-950/50 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('experience')}
                className="px-8 py-4 bg-green-500 text-black font-bold font-mono tracking-wider hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                VIEW_EXPERIENCE &gt;
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold font-mono tracking-wider hover:bg-green-950/50 transition-all duration-300"
              >
                VIEW_SKILLS &gt;
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-4 border-green-500 animate-spin-slow" />
              <div className="absolute inset-4 border-2 border-green-400 animate-spin-reverse" />
              <div className="absolute inset-8 border border-green-300 animate-spin-slow" />

              <div className="absolute inset-12 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djxbxhgat/image/upload/v1762872475/Jayanth_web_gzffwf.jpg"
                  alt="Jayanth Ramakrishnan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-400 opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute inset-0 bg-green-500 opacity-10 blur-3xl animate-pulse" />
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border-2 border-green-500 bg-green-950/20 hover:bg-green-950/40 transition-all group scroll-reveal-item">
              <Sparkles className="w-12 h-12 text-green-400 mb-4 group-hover:animate-spin" />
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">FOUNDER</h3>
              <p className="text-green-300 font-mono text-sm">Singularity Advanced Student Research Lab with 15Lakh+ Funding</p>
            </div>

            <div className="p-6 border-2 border-green-500 bg-green-950/20 hover:bg-green-950/40 transition-all group scroll-reveal-item">
              <Code className="w-12 h-12 text-green-400 mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">LEADER</h3>
              <p className="text-green-300 font-mono text-sm">Microsoft Student Community — SRM AP, largest student tech community</p>
            </div>

            <div className="p-6 border-2 border-green-500 bg-green-950/20 hover:bg-green-950/40 transition-all group scroll-reveal-item">
              <Cpu className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">CORE SKILLS</h3>
              <p className="text-green-300 font-mono text-sm">AI ML Engineer, Quantum Computing Researcher, Java Developer</p>
            </div>
          </div>

          <div className="border-2 border-green-500 bg-black/50 p-8 md:p-12 space-y-8 scroll-reveal-item">
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono flex items-center space-x-3">
                <Sparkles className="w-8 h-8" />
                <span>ABOUT_ME</span>
              </h2>
              <p className="text-green-300 leading-relaxed font-mono text-base">
                I'm Jayanth Ramakrishnan — a builder at the intersection of Quantum Computing, Generative AI, and student-led research ecosystems.
                I lead the Microsoft Student Community — Amaravati and founded the Singularity Advanced Student Research Lab at SRM University AP,
                an always-on, interdisciplinary lab that accelerates student research and product-ready prototypes from Year 1.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono flex items-center space-x-3">
                <Code className="w-6 h-6" />
                <span>CURRENT_FOCUS_&_IMPACT</span>
              </h3>
              <div className="space-y-4 text-green-300 leading-relaxed font-mono text-sm">
                <div className="pl-4 border-l-2 border-green-600">
                  <p className="mb-2">
                    <span className="text-green-400 font-bold">• Leading the Microsoft Student Community (MSC) — SRM AP</span>, the university's largest student tech community,
                    delivering industry-aligned training (Azure, Power BI, Generative AI), hackathons, study-jams and corporate partnerships.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-green-600">
                  <p className="mb-2">
                    <span className="text-green-400 font-bold">• Founder & Lead, Singularity Advanced Student Research Lab</span> — a 24/7 student-run research hub
                    with ₹15L+ worth of tech (3D printers, drones, VR headsets, NVIDIA Jetsons, Raspberry Pis) and seven focused labs powering projects in
                    Quantum, QML, AI, AR/VR, Robotics, Cloud, Cybersecurity, LoRa and Game Dev.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-green-600">
                  <p className="mb-2">
                    <span className="text-green-400 font-bold">• Research Intern — Deakin University</span> (Topological Data Analysis / Persistent Homology)
                    with applications to quantum algorithms and ML.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-green-600">
                  <p>
                    <span className="text-green-400 font-bold">• Organizer</span> — region-leading hackathons & events (planned prize pools: ₹1.5L+ cash; ₹15L+ total prize pool),
                    IoT workshops, and expert speaker series.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono flex items-center space-x-3">
                <Cpu className="w-6 h-6" />
                <span>WHAT_I_BUILD</span>
              </h3>
              <div className="space-y-3 text-green-300 leading-relaxed font-mono text-sm">
                <p className="pl-4 border-l-2 border-green-600">
                  • Research prototypes and pipelines that merge Quantum Algorithms, TDA, and ML.
                </p>
                <p className="pl-4 border-l-2 border-green-600">
                  • Scalable student programs: labs, curriculum, workshops, and industry outreach to convert ideas into funded projects and startups.
                </p>
                <p className="pl-4 border-l-2 border-green-600">
                  • Cross-disciplinary product demos using AR/VR, embedded devices (Jetson/RPi), LoRa, and robotics.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">CORE_STRENGTHS</h3>
              <div className="flex flex-wrap gap-2">
                {['Quantum Computing', 'Quantum Machine Learning (QML)', 'Topological Data Analysis (TDA)',
                  'Generative AI', 'Deep Learning', 'Community Building', 'Research to Product'].map((strength, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-green-950/50 border border-green-600 text-green-400 font-mono text-xs hover:border-green-500 hover:bg-green-900/50 transition-all"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-green-900 pt-6">
              <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">LOOKING_FOR_COLLABORATIONS</h3>
              <p className="text-green-300 font-mono text-sm">
                Quantum research • Internships / RA roles (QML / TDA) • Managerial Roles
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
        }

        .glitch-effect {
          position: relative;
          animation: glitch-anim 3s infinite;
        }

        @keyframes glitch-anim {
          0%, 90%, 100% {
            text-shadow: 2px 2px 0 rgba(34, 197, 94, 0.7);
          }
          91%, 93% {
            text-shadow: -2px 2px 0 rgba(34, 197, 94, 0.7);
          }
          92%, 94% {
            text-shadow: 2px -2px 0 rgba(34, 197, 94, 0.7);
          }
        }

        @keyframes led-flicker {
          0%, 18%, 22%, 24%, 26%, 32%, 34%, 36%, 42%, 44%, 46%, 72%, 74%, 76%, 100% {
            opacity: 1;
            text-shadow:
              0 0 10px rgba(34, 197, 94, 0.8),
              0 0 20px rgba(34, 197, 94, 0.6),
              0 0 30px rgba(34, 197, 94, 0.4);
          }
          20%, 23%, 25%, 33%, 35%, 43%, 45%, 73%, 75% {
            opacity: 0.4;
            text-shadow: 0 0 5px rgba(34, 197, 94, 0.3);
          }
          21%, 24%, 34%, 44%, 74% {
            opacity: 0.1;
            text-shadow: none;
          }
        }

        .led-letter {
          display: inline-block;
          animation: led-flicker 6s ease-in-out infinite;
        }

        @keyframes tear-in {
          0% {
            opacity: 0;
            transform: translateY(30px) rotateX(20deg) scale(0.9);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            filter: blur(8px);
          }
          60% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0) scale(1);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            filter: blur(0);
          }
        }

        .scroll-reveal-item {
          opacity: 0;
          transform: translateY(50px);
        }

        .scroll-reveal-item.visible {
          animation: tear-in 0.9s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .led-flicker,
          .scroll-reveal {
            animation: none;
            opacity: 1;
          }
        }

        .pixel-corner {
          clip-path: polygon(
            0 8px, 8px 8px, 8px 0,
            calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
            100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
            8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
          );
        }
      `}</style>
    </div>
  );
}

function Terminal({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" x2="20" y1="19" y2="19"></line>
    </svg>
  );
}
