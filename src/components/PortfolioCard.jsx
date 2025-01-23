"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function PortfolioCard() {
    const data = [
        {
          id: 1,
          name: "VisaGo- Visa Create And Applied Visa Applicatoin",
          language: [
            "React.js",
            "Node.js",
          "Tailwind Css",
            "JWT",
            "Mongo DB",
            "Firebase",
            "Vercel",
          ],
          img: "https://i.ibb.co.com/54M7h2Q/Screenshot-20.png",
          liveLink: "https://visago-with-mongodb.web.app/",
          repoLinkClient: "https://github.com/ataurwd/VisaGo-B10A10C",
          repoLinkServer: "https://github.com/ataurwd/VisaGo-B10A10S",
        },
        {
          id: 2,
          name: "BookQuill- A user-friendly Library Management System",
          language: [
            "React.js",
            "Node.js",
            "Tailwind Css",
            "Vercel",
            "Mongo DB",
            "Firebase",
          ],
          img: "https://i.ibb.co.com/mSX2bkN/Screenshot-21.png",
          liveLink: "https://book-shop-7a4d6.web.app/",
          repoLinkClient: "https://github.com/ataurwd/Library-Client",
          repoLinkServer: "https://github.com/ataurwd/Library-Server",
        },
        {
          id: 3,
          name: "ElectroMart- A Tech Accessorize Dynamic Website",
          language: [
            "React.js",
            "Context API",
            "Tailwind Css",
            "JavaScript",
            "Netlify",
          ],
          img: "https://i.ibb.co.com/s6XdMBb/Screenshot-22.png",
          liveLink: "https://electromart-bd.netlify.app/",
          repoLinkClient: "https://github.com/ataurwd/Tech-With-RR",
        },
        {
          id: 4,
          name: "Vocable- A Better Way to Teach Words Meannings",
          language: [
            "React.js",
            "Context API",
            "Tailwind Css",
            "JavaScript",
            "firebase",
          ],
          img: "https://i.ibb.co.com/Fs13rZ3/Screenshot-24.png",
          liveLink: "https://vocabulary-learning-c0cb4.web.app/",
          repoLinkClient: "https://github.com/ataurwd/Tech-With-RR",
        },
        {
          id: 5,
          name: "Vocable- A Better Way to Teach Words Meannings",
          language: [
            "React.js",
            "CSS",
            "Tailwind Css",
            "JavaScript",
            "Daisy UI",
            "React icons"
          ],
          img: "https://i.ibb.co.com/3WgT0Dq/Screenshot-39.png",
          liveLink: "https://ataurwd-b10a7.netlify.app/",
          repoLinkClient: "https://github.com/ataurwd/B10A7-CRICKET-PLAYER-SELL",
        },
      ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 dark:bg-black border dark:border-white/[0.2] border-black/[0.1] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.name}
              className="h-56 w-full object-cover rounded-md"
              width={500}
              height={400}
            />
            {/* Project Name */}
            <h2 className="text-lg font-bold text-neutral-800 dark:text-white mt-4">
              {project.name}
            </h2>
            {/* Language Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.language.map((tech, index) => (
                <span
                  key={index}
                  className="badge badge-outline border-emerald-800 text-sm dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="flex items-center justify-between mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
              <div className="flex gap-3">
                <a
                  href={project.repoLinkClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
                >
                  <FaGithub className="mr-2" /> Client 
                </a>
                {project.repoLinkServer && (
                  <a
                    href={project.repoLinkServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    <FaGithub className="mr-2" /> Server 
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
