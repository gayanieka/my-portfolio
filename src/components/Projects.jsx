import React from 'react';

const projectsData = [
  {
    title: "Computer Retail Management System",
    category: "Full Stack (MERN)",
    description: "Business management tool featuring secure user authentication, role-based access, and automated administrative reporting.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "./re", // Move this file to your /public folder
    github: "https://github.com/gayanieka/website-project-2.git", 
    live: "https://google.com"
  },
  {
    title: "Task Management App",
    category: "Web App",
    description: "A drag-and-drop kanban board application with Firebase auth.",
    tech: ["React", "Firebase", "DnD Kit"],
    image: "./project2.jpg",
    github: "https://github.com/",
    live: "https://google.com"
  },
  {
    title: "Weather Forecast",
    category: "Data & API",
    description: "Minimalist forecasting tool using complex API data mapping.",
    tech: ["Javascript", "API", "DataViz"],
    image: "./project3.jpg",
    github: "https://github.com/",
    live: "https://google.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-[#8B5CF6] uppercase tracking-[0.3em]">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">
              Featured <span className="text-gray-400">Works.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed font-medium">
            A selection of my favorite projects where code meets meaningful data.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-gray-200 shadow-2xl shadow-gray-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Layer with Fallback Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-gray-200" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="relative z-10 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                onError={(e) => { e.target.style.display = 'none'; }} // Hides the "broken" icon if image fails
              />

              {/* Glassmorphism Category Tag */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-2 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 z-30 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-[#8B5CF6] bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links - NOW WORKING */}
                <div className="flex gap-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-white font-black text-xs uppercase tracking-widest border-b-2 border-[#8B5CF6] pb-1 hover:text-[#8B5CF6] transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-white font-black text-xs uppercase tracking-widest border-b-2 border-[#8B5CF6] pb-1 hover:text-[#8B5CF6] transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;