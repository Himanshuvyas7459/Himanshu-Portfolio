import React from "react";
import { Github, Linkedin, Twitter, Download, ArrowDown } from "lucide-react";
import Himanshu from "../assets/Himanshu.png"

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Himanshu_Resume.pdf";
  link.download = "Himanshu_Resume.pdf";
  link.click();
};

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          
          {/* Profile */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-gray-700 dark:text-gray-300">
                <img className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-gray-700 dark:text-gray-300" src={Himanshu} alt="HV" />
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          </div>

          {/* Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Himanshu Vyas
            </h1>

            <h2 className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 font-semibold">
              Full Stack Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
  Full Stack Developer focused on building AI-powered, scalable applications and delivering impactful digital experiences.
</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
            >
              View Projects
            </button>

            <button
              onClick={handleDownload}
            className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Himanshuvyas7459"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-vyas07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* Scroll Down */}
          <button
            onClick={() => scrollToSection("#about")}
            className="absolute bottom-8 animate-bounce"
          >
            <ArrowDown size={32} className="text-gray-400 dark:text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;









// <div className="flex flex-wrap gap-4">

//   {/* View Resume */}
//   <a 
//     href="/resume.pdf" 
//     target="_blank" 
//     rel="noopener noreferrer"
//   >
//     <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2">
//       👁️ View Resume
//     </button>
//   </a>

//   {/* Download Resume */}
//   <a href="/resume.pdf" download>
//     <button className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2">
//       ⬇️ Download Resume
//     </button>
//   </a>

// </div>