import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-black tracking-tighter text-gray-900">
              Let's work <span className="text-primary">together.</span>
            </h2>
            <p className="text-gray-600 max-w-sm">
              Seeking Data Science & Machine Learning internships. Let's connect!
            </p>
            <p className="text-sm text-gray-700 font-bold">
              Email:{' '}
              <a
                href="mailto:gayaniekanayake00@gmail.com"
                className="font-black text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-500"
              >
                gayaniekanayake00@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/gayani-ekanayake-454b53293/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gayanieka"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
