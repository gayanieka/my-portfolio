import React from 'react';

const projectsData = [
  {
    title: "Healthcare Data Analysis Project",
    category: "Data Science & R",
    description: "Analyzed and cleaned healthcare datasets using statistical techniques and regression models to identify trends, patterns, and risk factors.",
    tech: ["R Language", "Python", "DataViz", "Regression Models"],
    image: "./project1.jpg",
    github: "https://github.com/gayanieka/healthcare-stress-analysis.git",
    live: "https://github.com/gayanieka/healthcare-stress-analysis.git"
  },
  {
    title: "Data Warehouse & BI Project",
    category: "Data Engineering",
    description: "Designed and implemented a dimensional data warehouse using star schema. Developed ETL pipelines with SSIS and built OLAP cubes with SSAS, visualizing insights in Power BI.",
    tech: ["Power BI", "SSAS", "SSIS", "SQL Server"],
    image: "./project2.jpg",
    github: "https://github.com/gayanieka/Shopping-mall-data-warehouse.git",
    live: "https://github.com/gayanieka/Shopping-mall-olap-reporting.git"
  },
  {
    title: "Full-Stack University Management System",
    category: "Full Stack Development",
    description: "Developed a scalable full-stack university website with a premium Resource Management module, availability tracking, and a smart recommendation feature.",
    tech: ["React.js", "Spring Boot", "Java", "MySQL", "REST API"],
    image: "./project3.jpg",
    github: "https://github.com/gayanieka/Smart-Campus-Website-Project.git",
    live: "https://github.com/gayanieka/Smart-Campus-Website-Project.git"
  },
  {
    title: "DailyZen Mobile Application",
    category: "Mobile App Development",
    description: "A smart wellness app that helps users build mindful daily routines. It combines habit tracking, mood tracking, and hydration reminders, storing progress locally via SharedPreferences.",
    tech: ["Kotlin", "Android Studio", "SharedPreferences", "UI/UX Design"],
    image: "./project4.jpg",
    github: "https://github.com/gayanieka/Mobile-Application-UIUX-design-with-sharedpreference-DailyZen",
    live: "https://github.com/gayanieka/Mobile-Application-UIUX-design-with-sharedpreference-DailyZen"
  },
  {
    title: "Fixed & Tidy Mobile Application",
    category: "Mobile App & UI/UX",
    description: "Fixed & Tidy transforms home maintenance through an innovative mobile platform, delivering a complete solution for cleaning and repair services and connecting users with screened professionals.",
    tech: ["Kotlin", "Android Studio", "UI/UX Design", "Firebase"],
    image: "./project5.jpg",
    github: "https://github.com/gayanieka/Mobile-Application-UIUX-design-for-cleaning-service-provider",
    live: "https://github.com/gayanieka/Mobile-Application-UIUX-design-for-cleaning-service-provider"
  },
  {
    title: "Computer Retail Management System",
    category: "Full Stack Development",
    description: "Built a MERN-stack e-commerce and retail management platform to streamline retail workflows, manage backend staff tracking, integrate secure RBAC login workflows, and support administrative report generation.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    image: "./project6.jpg",
    github: "https://github.com/gayanieka/website-project-1.git",
    live: "https://github.com/gayanieka/website-project-1.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em]">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">
              Featured <span className="text-gray-400">Works.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed font-medium">
            A collection of my projects spanning data science, machine learning, and full-stack engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-xl shadow-gray-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-[480px]"
            >
              {/* Dynamic Header Block with colorful gradients based on project type */}
              <div className={`h-40 relative flex items-center justify-center bg-gradient-to-tr ${
                index === 0 ? "from-blue-500 to-indigo-600" :
                index === 1 ? "from-sky-500 to-indigo-500" :
                index === 2 ? "from-emerald-400 to-teal-600" :
                index === 3 ? "from-amber-500 to-orange-600" :
                index === 4 ? "from-rose-500 to-orange-500" :
                "from-slate-800 to-indigo-950"
              } overflow-hidden`}>
                {/* Background ambient shapes */}
                <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10 blur-md"></div>
                <div className="absolute w-24 h-24 bg-black/10 rounded-full -bottom-8 -left-8 blur-md"></div>
                
                {/* Visual Icon representing the project category */}
                <div className="text-5xl text-white drop-shadow-md select-none transform transition-transform duration-700 group-hover:scale-110">
                  {index === 0 ? "📊" : index === 1 ? "🗄️" : index === 2 ? "🏫" : index === 3 ? "📱" : index === 4 ? "🧹" : "💻"}
                </div>

                {/* Glassmorphism Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content Area - always visible */}
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold text-primary bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 border-t border-gray-50 pt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-900 font-bold text-[10px] uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1"
                    >
                      GitHub &rarr;
                    </a>
                    {project.live && project.live !== project.github && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-900 font-bold text-[10px] uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                  </div>
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