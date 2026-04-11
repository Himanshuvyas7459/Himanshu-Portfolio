import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-900 dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart size={16} className="text-red-500 fill-current" /> by Himanshu Vyas
            </p>

            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Himanshuvyas7459"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-vyas07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-300" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-gray-300" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">

            <button
              onClick={() =>
                document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-indigo-400 transition-colors"
            >
              Home
            </button>

            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-indigo-400 transition-colors"
            >
              About
            </button>

            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </button>

            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;