import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: " Libas Mitra - E-Commerce Platform",
      description:
"Developed Libas Mitra – an AI-powered fashion platform featuring a virtual try-on system that allows users to visualize outfits digitally, enhancing online shopping experience and decision-making.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB" , "TailwindCSS" , "AI-based Virtual Try-On Integration", "Cloudinary", "REST APIs", "Vercel", "Render"],
      liveUrl: "https://libas-mitra-vfli.onrender.com",
      githubUrl: "https://github.com/Himanshuvyas7459/LIBAS-MITRA",
    },
    {
      title: "Utsav AI - Event Management App",
      description:
"Developed Utsav AI – a smart event management platform that allows users to explore, book, and manage events seamlessly, with features like secure bookings, real-time updates, and intuitive user dashboards.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Redux Toolkit", "JWT Authentication", "Cloudinary", "REST APIs", "Vercel", "Render"],
      liveUrl: "https://utsav-ai.vercel.app/",
      githubUrl: "https://github.com/Himanshuvyas7459/Utsav-AI",
    },
    {
      title: "Prep Me  - AI Interview Prepration App",
      description:
"Developed Prep Me – an AI-driven interview preparation platform that creates dynamic mock interviews, generates intelligent responses, and enhances user performance through real-time feedback and personalized practice sessions.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI", "Redux Toolkit", "JWT"],
      liveUrl: "https://prep-me-lilac.vercel.app",
      githubUrl: "https://github.com/Himanshuvyas7459/PREP-ME",
    },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for tracking social media metrics across multiple platforms with beautiful data visualizations.",
    //   image:
    //     "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["Vue.js", "Chart.js", "Node.js", "MongoDB"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Real Estate Marketplace",
    //   description:
    //     "Property listing platform with advanced search filters, virtual tours, and integrated messaging system.",
    //   image:
    //     "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["React", "Express", "PostgreSQL", "AWS S3"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Fitness Tracking App",
    //   description:
    //     "Mobile-first fitness application with workout plans, progress tracking, and nutrition logging capabilities.",
    //   image:
    //     "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["React Native", "Firebase", "Redux", "Node.js"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
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