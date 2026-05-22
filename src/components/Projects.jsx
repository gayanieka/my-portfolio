import React, { useEffect, useState } from 'react';

const ICON_SIZE = 14;

const Icon = ({ children, className = '' }) => (
  <svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const getCategoryMeta = (category) => {
  switch (category) {
    case 'Data Analysis':
      return {
        color: 'text-sky-700',
        bg: 'bg-sky-100',
        glow: 'bg-sky-200/50',
        icon: (
          <Icon>
            <path d="M4 19V5" />
            <path d="M4 19h16" />
            <path d="M8 15l3-3 3 2 5-6" />
          </Icon>
        )
      };
    case 'BI & Data Warehouse':
      return {
        color: 'text-violet-700',
        bg: 'bg-violet-100',
        glow: 'bg-violet-200/50',
        icon: (
          <Icon>
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
            <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
          </Icon>
        )
      };
    case 'Full Stack':
      return {
        color: 'text-emerald-700',
        bg: 'bg-emerald-100',
        glow: 'bg-emerald-200/50',
        icon: (
          <Icon>
            <path d="M8 9l-3 3 3 3" />
            <path d="M16 9l3 3-3 3" />
            <path d="M14 7l-4 10" />
          </Icon>
        )
      };
    case 'Full Stack (MERN)':
      return {
        color: 'text-amber-700',
        bg: 'bg-amber-100',
        glow: 'bg-amber-200/50',
        icon: (
          <Icon>
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6l-2 0" />
            <path d="M9 20a1 1 0 100-2 1 1 0 000 2z" />
            <path d="M18 20a1 1 0 100-2 1 1 0 000 2z" />
          </Icon>
        )
      };
    case 'UI/UX Design':
      return {
        color: 'text-rose-700',
        bg: 'bg-rose-100',
        glow: 'bg-rose-200/50',
        icon: (
          <Icon>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
          </Icon>
        )
      };
    case 'Mobile App (Android)':
      return {
        color: 'text-teal-700',
        bg: 'bg-teal-100',
        glow: 'bg-teal-200/50',
        icon: (
          <Icon>
            <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
            <path d="M11 19h2" />
          </Icon>
        )
      };
    default:
      return {
        color: 'text-primary',
        bg: 'bg-purple-50',
        glow: 'bg-purple-200/50',
        icon: (
          <Icon>
            <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
          </Icon>
        )
      };
  }
};

const ExternalLinkIcon = ({ className = '' }) => (
  <Icon className={className}>
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
  </Icon>
);

const projectsData = [
 
  {
    title: "Healthcare Data Analysis Project",
    category: "Data Analysis",
    description: "Analyzed healthcare datasets using statistical techniques and regression models to identify trends, patterns, and risk factors; built predictive models for patient outcomes.",
    shortDescription: "Healthcare data analysis using statistical techniques and regression models.",
    details: "Analyzed healthcare datasets to identify trends, patterns, and risk factors. Performed data cleaning and exploratory analysis, then built and evaluated regression-based predictive models for patient outcomes and insights.",
    tech: ["R"],
    image: null,
    links: [
      { label: "GitHub", href: "https://github.com/gayanieka/healthcare-stress-analysis.git" }
    ]
  },
 
  {
    title: "Data Warehouse & Business Intelligence Project",
    category: "BI & Data Warehouse",
    description: "Designed and implemented a dimensional data warehouse (star schema) and built interactive dashboards in Power BI; built and developed OLAP cubes and SQL Server Analysis Services solutions.",
    shortDescription: "Dimensional data warehouse + BI dashboards with OLAP and reporting.",
    details: "Designed and implemented a dimensional data warehouse using a star schema. Built ETL pipelines, created OLAP cubes for analytics, and delivered interactive Power BI dashboards and reports to support business intelligence and decision-making.",
    tech: ["Star Schema", "Dimensional Modeling", "ETL (SSIS)", "OLAP (SSAS)", "Power BI", "SSRS"],
    image: null,
    links: [
      { label: "GitHub (Warehouse)", href: "https://github.com/gayanieka/Shopping-mall-data-warehouse.git" },
      { label: "GitHub (Reporting)", href: "https://github.com/gayanieka/Shopping-mall-sales-reporting.git" }
    ]
  },
  {
    title: "Full-Stack University Management System Project",
    category: "Full Stack",
    description: "Built a scalable university management web app with role-based workflows and REST APIs; implemented resource management and a smart recommendation feature.",
    shortDescription: "Full-stack university management app with role-based workflows and APIs.",
    details: "Built a scalable university management web application with role-based workflows and REST APIs. Implemented core modules for resource management and included a smart recommendation feature to support better user experiences and decision-making.",
    tech: ["React.js", "Spring Boot", "Java", "MySQL"],
    image: null,
    links: [
      { label: "GitHub", href: "https://github.com/gayanieka/Smart-Campus-Website-Project.git" }
    ]
  },
   {
    title: "Computer Retail Management System",
    category: "Full Stack (MERN)",
    description: "Aug 2025 – Nov 2025 • Built an e-commerce + retail management platform with secure authentication, RBAC, admin dashboard management, and structured reporting workflows.",
    shortDescription: "E-commerce + retail management system with authentication and admin workflows.",
    details: "Built an e-commerce + retail management platform with secure authentication and role-based access control (RBAC). Implemented admin dashboard workflows for managing data and operations, and supported structured reporting features for better visibility and management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "RBAC"],
    image: null,
    links: [
      { label: "GitHub", href: "https://github.com/gayanieka/website-project-1.git" }
    ]
  },
  {
    title: "DailyZen Wellness Mobile App",
    category: "Mobile App (Android)",
    description: "Smart wellness app for mindful daily routines with habit tracking, mood tracking, and hydration reminders. Built with Kotlin and powered by SharedPreferences to securely store user progress and preferences.",
    shortDescription: "Android wellness app with habit/mood tracking and hydration reminders.",
    details: "Developed an Android wellness app that supports habit tracking, mood tracking, and hydration reminders. Built with Kotlin and used SharedPreferences to securely store user progress and preferences, ensuring a smooth experience even after the app is closed.",
    tech: ["Kotlin", "Android", "SharedPreferences"],
    image: null,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/gayanieka/Mobile-Application-UIUX-design-with-sharedpreference-DailyZen"
      }
    ]
  },
  {
    title: "Computer Retail Management System",
    category: "Full Stack Development",
    description: "Built a MERN-stack e-commerce + retail management platform with secure RBAC login, staff tracking, and admin reporting.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    image: "./project6.jpg",
    github: "https://github.com/gayanieka/website-project-1.git",
    live: "https://github.com/gayanieka/website-project-1.git"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };

    if (activeProject) {
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }

    return undefined;
  }, [activeProject]);

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
            (() => {
              const meta = getCategoryMeta(project.category);

              return (
            <div
              key={index}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white ring-1 ring-gray-200/70 shadow-xl shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white" />
              <div className={`absolute -top-20 -right-24 w-72 h-72 rounded-full blur-3xl ${meta.glow}`} />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl bg-purple-200/30" />

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-[480px] p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-lg">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${meta.bg} ${meta.color} border border-white/60`}>
                      {meta.icon}
                    </span>
                    <span>{project.category}</span>
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="text-3xl font-black text-gray-900 tracking-tight leading-tight line-clamp-2">
                    {project.title}
                  </h4>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription || project.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    className="mt-3 inline-flex text-[10px] font-black uppercase tracking-widest text-gray-900/70 hover:text-gray-900 transition-colors"
                  >
                    View Details
                  </button>
                </div>

                {Array.isArray(project.tech) && project.tech.length > 0 ? (
                  <div className="mt-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Skills
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-black text-gray-700 bg-white/80 px-2.5 py-1.5 rounded-lg border border-gray-200/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-auto pt-4 flex flex-col gap-3">
                  {Array.isArray(project.links) && project.links.length > 0
                    ? project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-black uppercase tracking-widest shadow-md shadow-gray-900/10 hover:bg-gray-800 transition-colors"
                        >
                          <ExternalLinkIcon className="text-white/90" />
                          {link.label}
                        </a>
                      ))
                    : null}
                </div>
              </div>
            </div>
              );
            })()
          ))}
        </div>
      </div>

      {activeProject ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute inset-0 bg-gray-900/60"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
          />

          {(() => {
            const meta = getCategoryMeta(activeProject.category);

            return (
              <div className="relative w-full max-w-2xl rounded-[2rem] bg-white ring-1 ring-gray-200 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white" />
                <div className={`absolute -top-20 -right-24 w-72 h-72 rounded-full blur-3xl ${meta.glow}`} />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl bg-purple-200/30" />

                <div className="relative p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-lg">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${meta.bg} ${meta.color} border border-white/60`}>
                        {meta.icon}
                      </span>
                      <span>{activeProject.category}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 border border-gray-200/80 text-gray-700 hover:text-gray-900 hover:bg-white transition-colors"
                      aria-label="Close"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <h4 className="mt-8 text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                    {activeProject.title}
                  </h4>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {activeProject.details || activeProject.description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      ) : null}
    </section>
  );
};

export default Projects;