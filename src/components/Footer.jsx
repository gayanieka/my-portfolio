import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Gayani Ekanayake. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/gayani-ekanayake-75249454/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://github.com/gayanieka" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
