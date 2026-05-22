import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-black tracking-tighter">
              Let's work <span className="text-primary">together.</span>
            </h2>
            <p className="text-gray-400 max-w-sm">
              Seeking Data Science & Machine Learning internships. Let's connect!
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="mailto:gayaniekanayake00@gmail.com" className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-colors">
              Say Hello
            </a>
            <a href="https://www.linkedin.com/in/gayani-ekanayake-75249454/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/gayanieka" target="_blank" rel="noreferrer" className="px-6 py-3 bg-gray-800 text-white font-bold rounded-full border border-gray-700 hover:bg-gray-700 transition-colors">
              GitHub
            </a>
          </div>
          
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Gayani Ekanayake. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/gayani-ekanayake-75249454/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/gayanieka" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
