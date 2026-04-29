import React from 'react';

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Express", "MongoDB", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-black text-[#8B5CF6] uppercase tracking-[0.3em]">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              Passionate about creating <span className="text-gray-400">impactful</span> solutions.
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I am a dedicated software developer with a strong foundation in modern web technologies. 
                My journey in coding started with a curiosity about how things work on the internet, 
                and it has evolved into a career focused on building scalable, user-friendly applications.
              </p>
              <p>
                Whether it's crafting a pixel-perfect frontend interface or designing a robust backend architecture, 
                I enjoy the challenge of turning ideas into reality through code.
              </p>
            </div>
            
            {/* Skills */}
            <div className="pt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-700 font-medium text-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual/Stats Content */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2">
                <span className="text-5xl font-black text-[#8B5CF6] mb-2">2+</span>
                <span className="text-gray-500 font-medium">Years Experience</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2 translate-y-8">
                <span className="text-5xl font-black text-[#8B5CF6] mb-2">10+</span>
                <span className="text-gray-500 font-medium">Projects Completed</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2">
                <span className="text-5xl font-black text-[#8B5CF6] mb-2">100%</span>
                <span className="text-gray-500 font-medium">Client Satisfaction</span>
              </div>
              <div className="bg-gray-900 p-8 rounded-[2rem] shadow-xl shadow-gray-900/20 flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2 translate-y-8">
                <span className="text-3xl font-black text-white mb-2">Let's Talk</span>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors underline decoration-2 underline-offset-4">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
