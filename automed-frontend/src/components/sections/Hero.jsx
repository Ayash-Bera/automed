import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';
import Button from '../ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="h-full w-full bg-gradient-to-b from-slate-900 to-slate-800 relative flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-600 mb-6 leading-tight">
            Revolutionizing Medicine Quality Assurance
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl mb-8">
            Harness the power of AI to ensure pharmaceutical excellence. 
            Advanced analytics, real-time monitoring, and precise quality control for safer medicines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button variant="primary" size="large" className="min-w-32 sm:min-w-40" onClick={() => window.location.href = '/medicine-quality'}>
              Get Started
            </Button>
            <Button variant="outline" size="large" className="min-w-32 sm:min-w-40 border-white text-white hover:bg-slate-800" onClick={() => window.location.href = '#features'}>
              Learn More
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          className="text-white"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;