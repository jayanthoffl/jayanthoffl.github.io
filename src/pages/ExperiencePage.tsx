import { Briefcase, Calendar, Award, ExternalLink, Users, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Experience {
  id: number;
  title: string;
  role: string;
  timeline: string;
  description: string;
  achievements: string[];
  link?: string;
  isActive?: boolean;
}

export default function ExperiencePage() {
  const [selectedExp, setSelectedExp] = useState<number>(0);

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

  const experiences: Experience[] = [
    {
      id: 0,
      title: 'Deakin University Australia',
      role: 'Security Attacks on AI Models Intern',
      timeline: 'January 2026 - July 2026',
      description: 'Researching adversarial attacks and defense mechanisms for AI/ML models with focus on model security and robustness.',
      achievements: [
        'Investigating adversarial machine learning techniques',
        'Developing defense strategies against model attacks',
        'Testing AI model vulnerabilities and security loopholes',
        'Contributing to cutting-edge AI security research'
      ],
      isActive: true
    },
    {
      id: 1,
      title: 'Singularity Advanced Student Research Lab',
      role: 'Founder & Chief Executive',
      timeline: 'June 2025 - Present',
      description: 'A 24/7 student-run research hub with 7 specialized divisions focusing on emerging technologies.',
      achievements: [
        '₹15 Lakhs+ funding secured for advanced research initiatives',
        '7 divisions: AI/ML, Quantum Computing, Cloud, Web3, CyberSec, IoT/Drone, Game Dev',
        '₹15L+ worth of tech: 3D printers, drones, VR headsets, NVIDIA Jetsons, Raspberry Pis',
        'Building a community of researchers and innovators',
        'Converting student ideas into funded projects and startups'
      ],
      link: 'https://singularitymainwebsite.netlify.app/',
      isActive: true
    },
    {
      id: 2,
      title: 'Purple Technologies',
      role: 'ML Intern (AI & App Development)',
      timeline: 'May 2025 - August 2025',
      description: 'Contributed to AI-powered video analytics platform with object detection, face recognition, and real-time alerting.',
      achievements: [
        'Implemented ML models using YOLOv8 and DeepFace',
        'Optimized workflows for reliable performance',
        'Built and enhanced dashboards with Streamlit',
        'Managed backend integration with FastAPI and PostgreSQL',
        'Delivered production-ready system for enterprise deployment'
      ]
    },
    {
      id: 3,
      title: 'Deakin University Australia',
      role: 'Quantum ML Intern',
      timeline: 'December 2024 - June 2025',
      description: 'Explored the intersection of Quantum Computing and Topological Data Analysis on real-world quantum simulations.',
      achievements: [
        'Simulated high-dimensional topological holes using Qiskit and PennyLane',
        'Experimented with Persistent Homology using quantum-encoded data',
        'Worked on datasets from Gitto, Scikit-TDA, TDAstats repositories',
        'Manipulated quantum qubits for topological feature extraction',
        'Strengthened research skills in quantum feature encoding'
      ]
    },
    {
      id: 4,
      title: 'Microsoft Student Community — SRM AP',
      role: 'Founder & Lead → Chief Advisor',
      timeline: 'September 2024 - April 2026',
      description: 'Founded and led the university\'s largest student tech community, delivering industry-aligned training and hackathons.',
      achievements: [
        'Organized HACK MSC 2.0 National Hackathon with ₹21Lakh+ Prize Pool',
        '600+ participants from 15+ states across India - Biggest Hackathon in the region',
        'Training programs in Azure, Power BI, Generative AI',
        'Conducted workshops, expert talks, and networking events',
        'Active Lead (Sep 2024 - Nov 2025), Chief Advisor (Nov 2025 - Apr 2026)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 animate-slideDown">
          <div className="flex items-center space-x-3 text-green-400 font-mono text-sm mb-4">
            <Briefcase className="w-5 h-5 animate-pulse" />
            <span>$ cat experience.log</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4 glitch-text">
            EXPERIENCE_TIMELINE
          </h1>
          <p className="text-green-300 font-mono text-lg">
            Journey through leadership, research, and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-2">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(index)}
                className={`w-full text-left p-4 border-2 transition-all duration-300 font-mono group scroll-reveal-item ${
                  selectedExp === index
                    ? 'border-green-400 bg-green-950/50 text-green-400'
                    : 'border-green-900 bg-green-950/20 text-green-500 hover:border-green-500 hover:bg-green-950/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs mb-1 flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.timeline}</span>
                    </div>
                    <h3 className="font-bold text-sm leading-tight group-hover:text-green-300 transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  {exp.isActive && (
                    <Sparkles className="w-4 h-4 text-green-400 animate-pulse flex-shrink-0 ml-2" />
                  )}
                </div>
                <p className="text-xs opacity-80">{exp.role}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="border-2 border-green-500 bg-black/50 p-8 min-h-[600px] relative overflow-hidden scroll-reveal-item">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-3xl font-bold text-green-400 font-mono">
                        {experiences[selectedExp].title}
                      </h2>
                      {experiences[selectedExp].isActive && (
                        <span className="px-3 py-1 bg-green-500 text-black text-xs font-bold animate-pulse">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-green-300 font-mono mb-2">
                      {experiences[selectedExp].role}
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{experiences[selectedExp].timeline}</span>
                    </div>
                  </div>
                  {experiences[selectedExp].link && (
                    <a
                      href={experiences[selectedExp].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>

                <p className="text-green-300 leading-relaxed mb-6 font-mono">
                  {experiences[selectedExp].description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-green-400 font-mono font-bold">
                    <Award className="w-5 h-5" />
                    <span>KEY_ACHIEVEMENTS:</span>
                  </div>

                  <div className="space-y-3">
                    {experiences[selectedExp].achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 border border-green-900 bg-green-950/20 hover:bg-green-950/40 transition-all group animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-green-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-green-300 font-mono text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center space-x-4 font-mono text-xs text-green-500">
                  <Users className="w-4 h-4" />
                  <span>Experience #{selectedExp + 1} of {experiences.length}</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500 opacity-5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rain {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-rain {
          animation: rain linear infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out backwards;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          width: 100%;
          height: 100%;
        }

        .glitch-text {
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0%, 90%, 100% {
            text-shadow: 2px 2px 0 rgba(34, 197, 94, 0.5);
          }
          92% {
            text-shadow: -2px 2px 0 rgba(34, 197, 94, 0.5);
          }
          94% {
            text-shadow: 2px -2px 0 rgba(34, 197, 94, 0.5);
          }
        }

        @keyframes unwrap {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(-15deg);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes glitch-reveal {
          0% {
            opacity: 0;
            transform: translateX(-100%);
            filter: hue-rotate(0deg) brightness(1);
          }
          15% {
            opacity: 0.5;
            transform: translateX(10%) skewX(-5deg);
            filter: hue-rotate(90deg) brightness(1.5);
          }
          20% {
            opacity: 0.3;
            transform: translateX(-5%) skewX(5deg);
            filter: hue-rotate(-90deg) brightness(0.8);
          }
          25% {
            opacity: 0.8;
            transform: translateX(3%) skewX(-2deg);
          }
          35% {
            transform: translateX(-2%) skewX(1deg);
            filter: hue-rotate(0deg) brightness(1);
          }
          45%, 100% {
            opacity: 1;
            transform: translateX(0) skewX(0);
            filter: hue-rotate(0deg) brightness(1);
          }
        }

        .scroll-reveal-item {
          opacity: 0;
          transform: translateX(-100%);
        }

        .scroll-reveal-item.visible {
          animation: glitch-reveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </div>
  );
}
