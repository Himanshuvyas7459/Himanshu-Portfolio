import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        // { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        // { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        // { name: "GraphQL", level: 82 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 70 },
        // { name: "Redis", level: 80 },
        // { name: "Supabase", level: 88 },
        // { name: "Prisma", level: 86 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 82 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>

          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>

                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;