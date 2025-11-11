import { Rocket, Trophy, Users, DollarSign, ExternalLink, Code, Database, Cpu, Shield, Cloud, Gamepad2 } from 'lucide-react';

export default function ProjectsPage() {
  const mainProjects = [
    {
      title: 'HACK MSC 2.0',
      subtitle: 'National Hackathon',
      description: 'Organized the biggest hackathon in the region with unprecedented scale and impact.',
      stats: [
        { icon: DollarSign, label: 'Prize Pool', value: '21L+' },
        { icon: Users, label: 'Participants', value: '600+' },
        { icon: Trophy, label: 'States', value: '15+' }
      ],
      tags: ['Leadership', 'Event Management', 'Community'],
      gradient: 'from-green-600 to-green-800'
    },
    {
      title: 'Singularity Research Lab',
      subtitle: 'Multi-Domain Innovation Hub',
      description: 'Leading a cutting-edge research lab with 6 specialized divisions pushing boundaries of technology.',
      stats: [
        { icon: DollarSign, label: 'Funding', value: '15L+' },
        { icon: Code, label: 'Divisions', value: '6' },
        { icon: Users, label: 'Researchers', value: '50+' }
      ],
      tags: ['Research', 'Innovation', 'Leadership'],
      gradient: 'from-green-700 to-green-900',
      link: 'https://singularitymainwebsite.netlify.app/'
    }
  ];

  const divisions = [
    {
      name: 'AI / ML',
      icon: Cpu,
      description: 'Machine Learning, Deep Learning, Neural Networks',
      color: 'text-green-400'
    },
    {
      name: 'Quantum Computing',
      icon: Rocket,
      description: 'Quantum Algorithms, QML, Topological Data Analysis',
      color: 'text-green-300'
    },
    {
      name: 'Cloud Technologies',
      icon: Cloud,
      description: 'Cloud Infrastructure, DevOps, Scalable Systems',
      color: 'text-green-400'
    },
    {
      name: 'Web3 & Blockchain',
      icon: Database,
      description: 'Decentralized Apps, Smart Contracts, DeFi',
      color: 'text-green-300'
    },
    {
      name: 'CyberSecurity',
      icon: Shield,
      description: 'Network Security, Penetration Testing, Cryptography',
      color: 'text-green-400'
    },
    {
      name: 'IoT / Drone & GameDev',
      icon: Gamepad2,
      description: 'Embedded Systems, Robotics, Game Engines',
      color: 'text-green-300'
    }
  ];

  const researchHighlights = [
    {
      title: 'Quantum Topological Data Analysis',
      description: 'Exploring quantum computing applications in TDA using Qiskit and PennyLane',
      tech: ['Qiskit', 'PennyLane', 'Python', 'Persistent Homology']
    },
    {
      title: 'AI Video Analytics Platform',
      description: 'Enterprise-grade video analytics with object detection and face recognition',
      tech: ['YOLOv8', 'DeepFace', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Microsoft Tech Ecosystem',
      description: 'Building and scaling tech communities with Microsoft technologies',
      tech: ['Azure', 'Community Building', 'Workshop Management']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-green-500 opacity-20 animate-float-rotate"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 animate-slideDown">
          <div className="flex items-center space-x-3 text-green-400 font-mono text-sm mb-4">
            <Rocket className="w-5 h-5 animate-pulse" />
            <span>$ ls -la projects/</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4 glitch-text">
            PROJECTS_&_ACHIEVEMENTS
          </h1>
          <p className="text-green-300 font-mono text-lg">
            Building the future, one innovation at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-green-500 bg-black/50 overflow-hidden group hover:border-green-400 transition-all duration-500 animate-fadeIn hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-1 font-mono group-hover:text-green-300 transition-all duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="text-green-500 font-mono text-sm">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                    >
                      <ExternalLink className="w-5 h-5 transition-transform duration-300" />
                    </a>
                  )}
                </div>

                <p className="text-green-300 font-mono text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center p-3 border border-green-900 bg-green-950/20 transition-all duration-300 hover:bg-green-950/40 hover:border-green-700 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                      <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2 transition-transform duration-300 hover:scale-125" />
                      <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-green-500 font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-950/50 border border-green-600 text-green-400 font-mono text-xs transition-all duration-300 hover:scale-110 hover:border-green-500 hover:bg-green-900/50 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 font-mono flex items-center space-x-3">
            <Code className="w-8 h-8" />
            <span>RESEARCH_DIVISIONS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="p-6 border-2 border-green-900 bg-green-950/20 hover:border-green-500 hover:bg-green-950/40 transition-all duration-500 group animate-fadeInUp hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <division.icon className={`w-12 h-12 ${division.color} mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12`} />
                <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">
                  {division.name}
                </h3>
                <p className="text-green-300 font-mono text-sm leading-relaxed">
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-8 font-mono flex items-center space-x-3">
            <Trophy className="w-8 h-8" />
            <span>RESEARCH_HIGHLIGHTS</span>
          </h2>

          <div className="space-y-6">
            {researchHighlights.map((highlight, index) => (
              <div
                key={index}
                className="border-2 border-green-500 bg-black/50 p-6 hover:bg-green-950/20 transition-all duration-500 group animate-fadeInUp hover:scale-102 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:border-green-400"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono group-hover:text-green-300 transition-all duration-300 group-hover:translate-x-2">
                  &gt; {highlight.title}
                </h3>
                <p className="text-green-300 font-mono text-sm mb-4 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlight.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-950/50 border border-green-700 text-green-400 font-mono text-xs hover:border-green-500 transition-all duration-300 hover:scale-110 hover:bg-green-900/50 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] cursor-default"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 border-2 border-green-500 bg-gradient-to-br from-green-950/30 to-black/50 text-center transition-all duration-500 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-102">
          <Trophy className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce hover:scale-125 transition-transform duration-300" />
          <h3 className="text-3xl font-bold text-green-400 mb-2 font-mono">
            BUILDING THE FUTURE
          </h3>
          <p className="text-green-300 font-mono text-lg">
            Driving innovation across Quantum Computing, AI/ML, and emerging technologies
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float-rotate {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translate(20px, -20px) rotate(180deg);
            opacity: 0.3;
          }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float-rotate {
          animation: float-rotate linear infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out backwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out backwards;
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
      `}</style>
    </div>
  );
}
