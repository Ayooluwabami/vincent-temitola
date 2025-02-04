import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gifts', href: '#gifts' },
    { name: 'Wedding Party', href: '#wedding-party' },
    { name: 'Moments', href: '#moments' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-wedding-dark/90 backdrop-blur-sm fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="font-playfair text-2xl text-wedding-sand hover:text-wedding-pink transition-colors duration-300"
              >
                V&T
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`font-cormorant text-lg ${activeSection === item.href.substring(1)
                      ? 'text-wedding-pink'
                      : 'text-wedding-cream hover:text-wedding-sand'
                    } transition-colors duration-300`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-wedding-cream hover:text-wedding-sand transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-wedding-dark">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block px-3 py-2 font-cormorant text-lg ${activeSection === item.href.substring(1)
                      ? 'text-wedding-pink'
                      : 'text-wedding-cream hover:text-wedding-sand'
                    } transition-colors duration-300`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('#home')}
          className="fixed bottom-6 right-6 p-3 bg-wedding-sand text-wedding-dark rounded-full shadow-lg hover:bg-wedding-pink transition-colors duration-300 animate-scale z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navbar;