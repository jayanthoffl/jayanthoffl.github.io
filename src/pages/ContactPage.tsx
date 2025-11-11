import { Mail, Linkedin, Instagram, Facebook, MapPin, Send, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactPage() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jayanth-ramakrishnan/',
      handle: '@jayanth-ramakrishnan',
      color: 'hover:text-green-400 hover:border-green-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/thejayanthramakrishnan/',
      handle: '@thejayanthramakrishnan',
      color: 'hover:text-green-400 hover:border-green-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/thejayanthramakrishnanofficial',
      handle: '@thejayanthramakrishnanofficial',
      color: 'hover:text-green-400 hover:border-green-400'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-green-500 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 animate-slideDown">
          <div className="flex items-center space-x-3 text-green-400 font-mono text-sm mb-4">
            <Mail className="w-5 h-5 animate-pulse" />
            <span>$ echo "Let's connect"</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4 glitch-text">
            GET_IN_TOUCH
          </h1>
          <p className="text-green-300 font-mono text-lg">
            Ready to collaborate on the next big innovation?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="border-2 border-green-500 bg-black/50 p-8 scroll-reveal-item">
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-green-400 font-mono">CONNECT_ONLINE</h2>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 border-2 border-green-900 bg-green-950/20 ${social.color} transition-all duration-300 group animate-fadeInUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-bold font-mono">{social.name}</div>
                        <div className="text-sm opacity-70 font-mono">{social.handle}</div>
                      </div>
                    </div>
                    <Send className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-2 border-green-500 bg-black/50 p-8 scroll-reveal-item">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-green-400 font-mono">LOCATION</h2>
              </div>
              <p className="text-green-300 font-mono leading-relaxed">
                SRM University AP<br />
                Andhra Pradesh, India<br />
                <br />
                Available for remote collaborations and<br />
                on-site opportunities worldwide
              </p>
            </div>

            <div className="border-2 border-green-900 bg-green-950/20 p-6 scroll-reveal-item">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">RESEARCH_INTERESTS</h3>
              <div className="flex flex-wrap gap-2">
                {['Quantum Computing', 'AI/ML', 'Cloud Tech', 'Web3', 'CyberSec', 'IoT'].map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-950/50 border border-green-600 text-green-400 font-mono text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-2 border-green-500 bg-black/50 p-8 scroll-reveal-item">
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-green-400 font-mono">JOIN_LAB</h2>
              </div>
              <p className="text-green-300 font-mono leading-relaxed mb-4">
                Interested in working with me at<br />
                <span className="text-green-400 font-bold">Singularity Advanced Student Research Lab</span>?
              </p>
              <a
                href="https://singularitymainwebsite.netlify.app/aanu-tattva-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-green-500 text-black font-bold font-mono hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
              >
                <Terminal className="w-5 h-5" />
                <span>APPLY_NOW</span>
              </a>
            </div>
          </div>

          <div className="border-2 border-green-500 bg-black/50 p-8 scroll-reveal-item">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-green-400 font-mono">SEND_MESSAGE</h2>
            </div>

            {submitted ? (
              <div className="h-full flex items-center justify-center py-20">
                <div className="text-center space-y-4 animate-pulse">
                  <div className="w-16 h-16 border-4 border-green-400 rounded-full mx-auto flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 font-mono">MESSAGE_SENT</h3>
                  <p className="text-green-300 font-mono text-sm">
                    Thanks for reaching out!<br />
                    I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    &gt; NAME_
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-green-950/20 border-2 border-green-900 text-green-300 px-4 py-3 font-mono focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    &gt; EMAIL_
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-green-950/20 border-2 border-green-900 text-green-300 px-4 py-3 font-mono focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    &gt; MESSAGE_
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-green-950/20 border-2 border-green-900 text-green-300 px-4 py-3 font-mono focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or collaboration idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-green-500 text-black font-bold font-mono tracking-wider hover:bg-green-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND_MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-6 p-4 border border-green-900 bg-green-950/20">
              <p className="text-green-400 font-mono text-xs">
                <span className="text-green-500">Note:</span> This is a demo form. For actual inquiries,
                please reach out via social media links above.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 border-2 border-green-500 bg-black/50">
            <p className="text-green-400 font-mono text-sm">
              &copy; 2025 Jayanth Ramakrishnan | Building the future with code
            </p>
          </div>
        </div>
      </div>

      <style>{`
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

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
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
