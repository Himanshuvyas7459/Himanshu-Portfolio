import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const timeline = [
    // {
    //   type: "work",
    //   title: "Senior Full Stack Developer",
    //   organization: "Tech Innovations Inc.",
    //   period: "2022 - Present",
    //   description:
    //     "Leading development of enterprise web applications. Architecting scalable solutions and mentoring junior developers.",
    //   achievements: [
    //     "Reduced application load time by 60% through optimization",
    //     "Led team of 5 developers in successful product launch",
    //     "Implemented CI/CD pipeline reducing deployment time by 80%",
    //   ],
    // },
   {
  type: "education",
  title: "B.Tech in Computer Science Engineering",
  organization: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
  period: "2021 - 2025",
  description:
    "Pursuing Computer Science Engineering with a focus on full-stack development and AI-driven applications.",
  achievements: [
    "CGPA: 7.0/10",
    "Built multiple full-stack and AI-integrated projects",
    "Hands-on experience with MERN stack and modern web technologies"
  ],
},
    {
  type: "work",
  title: "MERN Stack Developer Intern",
  organization: "Zidio Development",
  period: "Jul 2024 - Oct 2024",
  description:
    "Contributed to building full-stack web applications using the MERN stack, focusing on API development, frontend optimization, and real-world project implementation.",
  achievements: [
    "Designed and implemented RESTful APIs with Node.js and Express",
    "Developed dynamic and responsive user interfaces using React.js",
    "Managed data using MongoDB and optimized database queries",
  ],
},
    {
  type: "work",
  title: "Full Stack Developer Intern",
  organization: "Eskills Web LLP",
  period: "May 2025 - Present",
  description:
    "Worked as a Full Stack Developer Intern where I built and deployed real-world MERN applications, gaining hands-on experience in both frontend and backend development along with AI integration.",
  achievements: [
    "Developed major projects like Prep Me (AI Interview Platform), Utsav AI, and Libas Mitra",
    "Built full-stack applications using React.js, Node.js, Express, and MongoDB",
    "Integrated AI features using OpenAI APIs in real-world applications",
    "Handled deployment using Vercel and Render",
    "Strengthened understanding of authentication, APIs, and scalable architecture"
  ],
},
    // {
    //   type: "education",
    //   title: "Bachelor of Computer Science",
    //   organization: "University of California",
    //   period: "2013 - 2017",
    //   description:
    //     "Foundation in computer science fundamentals and software development.",
    //   achievements: [
    //     "Graduated with Honors",
    //     "President of Computer Science Club",
    //     "Winner of University Hackathon 2016",
    //   ],
    // },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>

          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            My professional journey
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2"></div>

                <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg">
                    {item.type === "work" ? (
                      <Briefcase className="text-white" size={24} />
                    ) : (
                      <GraduationCap className="text-white" size={24} />
                    )}
                  </div>
                </div>

                <div className="ml-24 md:ml-0 md:w-1/2 md:px-8">
                  <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.period}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                      {item.organization}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;