import React, { useMemo, useState } from 'react';

const Hero = () => {
  const imageCandidates = useMemo(
    () => [
      new URL('../images/gayani_ekanayake.jpeg', import.meta.url).href,
      '/images/gayani_ekanayake.png',
      '/images/gayani_ekanayake.jpg',
      '/images/gayani_ekanayake.jpeg',
      '/images/gayani_ekanayake.webp',
      '/images/gayaniekanayake.png',
      '/images/gayaniekanayake.jpg',
      '/images/gayaniekanayake.jpeg',
      '/images/gayaniekanayake.webp'
    ],
    []
  );
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageError = () => {
    setImageIndex((current) => {
      const next = current + 1;
      return next < imageCandidates.length ? next : current;
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-gray-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-blue-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-4 border border-purple-200">
            👋 Hi, Welcome to my portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
            I'm Gayani <br className="hidden md:block" />
            <span className="text-gradient">Ekanayake.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 font-bold tracking-wide uppercase">
            Data Science Undergraduate
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Data Science undergraduate with hands-on experience in data analysis, Power BI dashboards, data
warehouse and programming using Python, R, Java, React and others. Seeking an internship to leverage
skills in Python, Power BI, and SQL to drive data-informed decisions
          </p>

          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Data Science undergraduate at SLIIT with hands-on experience in data analysis, Power BI dashboards, data warehousing, and programming (Python, R, Java, React). Passionate about turning complex data into elegant, actionable solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] group">
            {/* Abstract Shape or Profile Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-gray-300 rounded-[3rem] rotate-6 opacity-80 mix-blend-multiply blur-sm shadow-2xl transition-transform duration-700 group-hover:rotate-12"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 overflow-hidden shadow-xl border border-gray-100">
              <img
                src={imageCandidates[imageIndex]}
                alt="Gayani Ekanayake"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
