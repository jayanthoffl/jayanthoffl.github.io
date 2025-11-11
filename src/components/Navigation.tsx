import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: '> HOME_' },
    { id: 'experience', label: '> EXPERIENCE_' },
    { id: 'skills', label: '> SKILLS_' },
    { id: 'contact', label: '> CONTACT_' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b-2 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigate('home')}>
              <Terminal className="w-8 h-8 text-green-400 animate-pulse" />
              <span className="text-green-400 font-bold text-xl font-mono tracking-wider">
                JAYANTH_RAMAKRISHNAN
              </span>
            </div>

            <div className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 font-mono text-sm transition-all duration-300 relative group ${
                    currentPage === item.id
                      ? 'text-green-400 bg-green-950/50'
                      : 'text-green-300 hover:text-green-400'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
                  {currentPage === item.id && (
                    <span className="absolute inset-0 border border-green-500 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-green-400 hover:text-green-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-green-900">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-6 py-4 font-mono text-sm border-b border-green-900 transition-all ${
                  currentPage === item.id
                    ? 'text-green-400 bg-green-950/50'
                    : 'text-green-300 hover:text-green-400 hover:bg-green-950/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="h-16" />
    </>
  );
}
