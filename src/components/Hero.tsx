import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-red-600">Hamza</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              A passionate web developer and Discord bot programmer from Morocco
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
              >
                View My Services
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-medium rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 md:h-96 bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-800 rounded-2xl shadow-xl flex items-center justify-center text-white">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">Programming Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['JavaScript', 'PHP', 'HTML/CSS', 'React', 'Node.js', 'SQL', 'Discord.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;