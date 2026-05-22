import React from 'react';

const About = () => {
  const skills = [
    "Python", "R", "SQL", "Power BI",
    "Java", "React", "Node.js", "MySQL"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              Turning data into <span className="text-gray-400">useful</span> insights.
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I am a Data Science undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), currently in my 3rd year (2023 - 2027). I have hands-on experience in data analysis, building interactive Power BI dashboards, dimensional data warehousing, and full-stack software development.
              </p>
              <p>
               I enjoy the challenge of turning complex raw datasets into meaningful stories and visual insights, while also designing robust software architectures to support data-driven decision making
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
                <span className="text-5xl font-black text-primary mb-2">2</span>
                <span className="text-gray-500 font-medium">Dean’s Awards</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2">
                <span className="text-5xl font-black text-primary mb-2">3+</span>
                <span className="text-gray-500 font-medium">Key Projects</span>
              </div>
              <div className="bg-gray-900 p-8 rounded-[2rem] shadow-xl shadow-gray-900/20 flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2 translate-y-8 col-span-2">
                <span className="text-3xl font-black text-white mb-2">Open to</span>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors underline decoration-2 underline-offset-4">
                  Internships
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
