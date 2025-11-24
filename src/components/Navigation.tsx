import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Zap, Briefcase, Clock } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Arul Regan
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'about', label: 'About', icon: User },
              { id: 'skills', label: 'Skills', icon: Zap },
              { id: 'timeline', label: 'Journey', icon: Clock },
              { id: 'projects', label: 'Work', icon: Briefcase },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm relative group flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.button>
              );
            })}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
