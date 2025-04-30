import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } opacity-0 transition-opacity duration-1000`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="relative inline-block">
              <span className={`relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Vrinda Parmar
              </span>
              <span 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-500 opacity-30 rounded"
                style={{ width: '100%' }}
              ></span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-blue-500">
            Software Engineer
          </h2>
          
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I create elegant solutions to complex problems, specializing in web development
            and user-centered design. Welcome to my portfolio.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 text-base font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className={`px-8 py-3 text-base font-medium rounded-lg border-2 transition-colors duration-300 ${
                darkMode 
                  ? 'border-gray-700 hover:border-gray-600 text-white' 
                  : 'border-gray-300 hover:border-gray-400 text-gray-900'
              }`}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-colors ${
          darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;