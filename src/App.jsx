import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-tighter text-gray-900">
            Portfolio<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
            <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all shadow-md">
            Hire Me
          </a>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="md:hidden border-t border-gray-200/60">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-bold text-gray-700">
              <a href="#home" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="#contact" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        ) : null}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
