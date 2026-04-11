import React from "react";
import { Briefcase, Code2, Users, Award } from "lucide-react";

const About = () => {

  const highlights = [
    {
      icon: Briefcase,
      label: "Fresher",
      description: "Experience",
    },
    {
      icon: Code2,
      label: "5+ Projects",
      description: "Completed",
    },
    // {
    //   icon: Users,
    //   label: "30+ Clients",
    //   description: "Worldwide",
    // },
    // {
    //   icon: Award,
    //   label: "15+ Awards",
    //   description: "Won",
    // },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
  Hi! I'm a passionate Full Stack MERN Developer focused on building real-world,
  scalable web applications. I specialize in JavaScript, React, Node.js, and
  modern backend architectures, with a strong interest in integrating AI into
  web platforms.
</p>

<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
  I’ve built projects like AI-powered interview preparation platforms, event
  management systems, and virtual try-on applications, where I focus on solving
  practical problems and delivering smooth user experiences. I enjoy working
  across the full stack — from designing responsive UIs to building secure APIs
  and handling deployments.
</p>

<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
  Currently, I’m actively improving my skills, preparing for full-stack roles,
  and exploring advanced concepts in system design and AI integration. I believe
  in writing clean, efficient code and continuously learning to stay ahead in
  the fast-evolving tech world.
</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.label}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;