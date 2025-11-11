import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const menuItems = [
    { id: 'home', label: '> HOME_' },
    { id: 'experience', label: '> EXPERIENCE_' },
    { id: 'skills', label: '> SKILLS_' },
    { id: 'contact', label: '> CONTACT_' }
  ];

  const handleNavigate = (page: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      onNavigate(page);
      setIsOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b-2 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95" onClick={() => handleNavigate('home')}>
              <Terminal className="w-8 h-8 text-green-400 animate-pulse hover:rotate-12 transition-transform duration-300" />
              <span className="text-green-400 font-bold text-xl font-mono tracking-wider hover:text-green-300 transition-colors duration-300">
                JAYANTH_RAMAKRISHNAN
              </span>
            </div>

            <div className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 font-mono text-sm transition-all duration-300 relative group hover:scale-105 active:scale-95 ${
                    currentPage === item.id
                      ? 'text-green-400 bg-green-950/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                      : 'text-green-300 hover:text-green-400 hover:bg-green-950/30'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  {currentPage === item.id && (
                    <span className="absolute inset-0 border border-green-500 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110 active:scale-95 p-2 border-2 border-green-500 bg-green-950/30 hover:bg-green-950/50"
            >
              {isOpen ? (
                <X className="w-6 h-6 animate-spin-once" />
              ) : (
                <Menu className="w-6 h-6 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-green-900 animate-slideDown">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-6 py-4 font-mono text-sm border-b border-green-900 transition-all duration-300 hover:translate-x-2 active:scale-95 animate-fadeInUp group ${
                  currentPage === item.id
                    ? 'text-green-400 bg-green-950/50 border-l-4 border-l-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                    : 'text-green-300 hover:text-green-400 hover:bg-green-950/30 hover:shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">&gt;</span>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="h-16" />

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-once {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(180deg);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out backwards;
        }

        .animate-spin-once {
          animation: spin-once 0.3s ease-out;
        }

        @media (max-width: 768px) {
          button:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  );
}
