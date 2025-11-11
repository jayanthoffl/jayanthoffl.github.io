import { Rocket, Trophy, Users, Code, Database, Cpu, Shield, Cloud, Gamepad2, Briefcase, Award } from 'lucide-react';
import { useEffect } from 'react';

export default function SkillsPage() {
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
  const researchHighlights = [
    {
      title: 'Quantum Topological Data Analysis',
      institution: 'Deakin University, Australia (Remote)',
      description: 'Exploring quantum computing applications in TDA using Qiskit and PennyLane',
      achievements: [
        'Simulated high-dimensional topological holes using Qiskit and PennyLane',
        'Experimented with Persistent Homology using quantum-encoded data',
        'Worked on datasets from Gitto, Scikit-TDA, TDAstats repositories',
        'Manipulated quantum qubits for topological feature extraction'
      ],
      tech: ['Qiskit', 'PennyLane', 'Python', 'Persistent Homology', 'TDA']
    },
    {
      title: 'AI Video Analytics Platform',
      institution: 'Purple Technologies (Paid Onsite Internship)',
      description: 'Enterprise-grade video analytics with object detection and face recognition',
      achievements: [
        'Implemented ML models using YOLOv8 and DeepFace',
        'Optimized workflows for reliable performance',
        'Built dashboards with Streamlit',
        'Managed backend integration with FastAPI and PostgreSQL',
        'Delivered production-ready system for enterprise deployment'
      ],
      tech: ['YOLOv8', 'DeepFace', 'FastAPI', 'PostgreSQL', 'Streamlit']
    }
  ];

  const foundingInitiatives = [
    {
      title: 'Microsoft Student Community — SRM AP',
      role: 'Founder & Lead',
      description: 'Leading the university\'s largest student tech community, delivering industry-aligned training and hackathons.',
      stats: [
        { label: 'Participants', value: '600+' },
        { label: 'States Reached', value: '15+' },
        { label: 'Total Prize Pool', value: '₹15L+' }
      ],
      highlights: [
        'Organized HACK MSC 2.0 National Hackathon with ₹21Lakh+ Prize Pool',
        'Biggest Hackathon in the region',
        'Training in Azure, Power BI, Generative AI',
        'Corporate partnerships and networking events'
      ],
      gradient: 'from-green-600 to-green-800'
    },
    {
      title: 'Singularity Advanced Student Research Lab',
      role: 'Founder & Chief Executive',
      description: 'A 24/7 student-run research hub accelerating research and product-ready prototypes from Year 1.',
      stats: [
        { label: 'Funding', value: '₹15L+' },
        { label: 'Research Labs', value: '7' },
        { label: 'Active Projects', value: '20+' }
      ],
      highlights: [
        '₹15L+ worth of tech: 3D printers, drones, VR headsets, NVIDIA Jetsons, Raspberry Pis',
        '7 focused labs: Quantum, QML, AI, AR/VR, Robotics, Cloud, Cybersecurity, LoRa, Game Dev',
        'Always-on interdisciplinary research environment',
        'Converting student ideas into funded projects and startups'
      ],
      gradient: 'from-green-700 to-green-900'
    }
  ];

  const labDivisions = [
    {
      name: 'AI / ML',
      icon: Cpu,
      description: 'Machine Learning, Deep Learning, Neural Networks, Computer Vision',
      color: 'text-green-400'
    },
    {
      name: 'Quantum Computing & QML',
      icon: Rocket,
      description: 'Quantum Algorithms, Quantum Machine Learning, Topological Data Analysis',
      color: 'text-green-300'
    },
    {
      name: 'Cloud Technologies',
      icon: Cloud,
      description: 'Cloud Infrastructure, DevOps, Azure, Scalable Systems',
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
      name: 'IoT / Drone',
      icon: Gamepad2,
      description: 'Embedded Systems, Robotics, LoRa, Raspberry Pi, NVIDIA Jetson',
      color: 'text-green-300'
    },
    {
      name: 'Game Development',
      icon: Trophy,
      description: 'Game Engines, VR/AR Development, Interactive Experiences',
      color: 'text-green-400'
    }
  ];

  const coreSkills = [
    {
      category: 'Quantum & Advanced Computing',
      skills: ['Quantum Computing', 'Quantum Machine Learning', 'Topological Data Analysis', 'Persistent Homology', 'Qiskit', 'PennyLane']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Deep Learning', 'Generative AI', 'Computer Vision', 'YOLOv8', 'DeepFace', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'Development',
      skills: ['Java Development', 'Python', 'FastAPI', 'PostgreSQL', 'Streamlit', 'Cloud Architecture']
    },
    {
      category: 'Leadership & Community',
      skills: ['Community Building', 'Event Management', 'Research to Product', 'Workshop Facilitation', 'Corporate Partnerships']
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
            <Code className="w-5 h-5 animate-pulse" />
            <span>$ cat skills.json</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4 glitch-text">
            SKILLS_&_EXPERTISE
          </h1>
          <p className="text-green-300 font-mono text-lg">
            Research, Innovation, and Leadership in Action
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 font-mono flex items-center space-x-3">
            <Briefcase className="w-8 h-8" />
            <span>RESEARCH_&_INTERNSHIP_HIGHLIGHTS</span>
          </h2>

          <div className="space-y-8">
            {researchHighlights.map((research, index) => (
              <div
                key={index}
                className="border-2 border-green-500 bg-black/50 p-8 hover:bg-green-950/20 transition-all duration-300 group scroll-reveal-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-2 font-mono group-hover:text-green-300 transition-colors">
                    &gt; {research.title}
                  </h3>
                  <p className="text-green-500 font-mono text-sm mb-2">{research.institution}</p>
                  <p className="text-green-300 font-mono text-sm leading-relaxed">
                    {research.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-green-400 font-mono font-bold mb-3">
                    <Award className="w-5 h-5" />
                    <span>KEY_ACHIEVEMENTS:</span>
                  </div>
                  <div className="space-y-2">
                    {research.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3 pl-4">
                        <div className="w-2 h-2 bg-green-500 mt-2 flex-shrink-0" />
                        <p className="text-green-300 font-mono text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {research.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-950/50 border border-green-700 text-green-400 font-mono text-xs hover:border-green-500 transition-colors"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 font-mono flex items-center space-x-3">
            <Rocket className="w-8 h-8" />
            <span>FOUNDING_INITIATIVES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {foundingInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="border-2 border-green-500 bg-black/50 overflow-hidden group hover:border-green-400 transition-all duration-300 scroll-reveal-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${initiative.gradient}`} />

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-green-400 mb-1 font-mono group-hover:text-green-300 transition-colors">
                      {initiative.title}
                    </h3>
                    <p className="text-green-500 font-mono text-sm mb-3">{initiative.role}</p>
                    <p className="text-green-300 font-mono text-sm leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {initiative.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 border border-green-900 bg-green-950/20">
                        <div className="text-xl font-bold text-green-400 mb-1">{stat.value}</div>
                        <div className="text-xs text-green-500 font-mono">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {initiative.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-3 p-3 border border-green-900 bg-green-950/20 hover:bg-green-950/40 transition-all">
                        <div className="w-2 h-2 bg-green-500 mt-2 flex-shrink-0" />
                        <p className="text-green-300 font-mono text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 font-mono flex items-center space-x-3">
            <Database className="w-8 h-8" />
            <span>RESEARCH_LAB_DIVISIONS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labDivisions.map((division, index) => (
              <div
                key={index}
                className="p-6 border-2 border-green-900 bg-green-950/20 hover:border-green-500 hover:bg-green-950/40 transition-all duration-300 group scroll-reveal-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <division.icon className={`w-12 h-12 ${division.color} mb-4 group-hover:scale-110 transition-transform`} />
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
            <span>CORE_TECHNICAL_SKILLS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {coreSkills.map((skillSet, index) => (
              <div
                key={index}
                className="border-2 border-green-500 bg-black/50 p-6 scroll-reveal-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-green-950/50 border border-green-600 text-green-400 font-mono text-xs hover:border-green-500 hover:bg-green-900/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 border-2 border-green-500 bg-gradient-to-br from-green-950/30 to-black/50 text-center">
          <Rocket className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
          <h3 className="text-3xl font-bold text-green-400 mb-2 font-mono">
            BUILDING_THE_FUTURE
          </h3>
          <p className="text-green-300 font-mono text-lg mb-4">
            Merging Quantum Computing, AI/ML, and Leadership to drive innovation
          </p>
          <p className="text-green-400 font-mono text-sm">
            Looking for collaborations in quantum research, internships / RA roles (QML / TDA), and managerial roles
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
      `}</style>
    </div>
  );
}
