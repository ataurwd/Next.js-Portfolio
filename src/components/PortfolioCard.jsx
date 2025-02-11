"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function PortfolioCard() {
  const data = [
    {
      id: 1,
      name: "User-Friendly Platform for Tour Planning and Booking",
      language: [
        "Next.js",
        "React.js",
        "Vercel",
        "Tailwind Css",
        "Typescript",
        "Framer-Motion",
      ],
      img: "/assets/learning.png",
      liveLink: "https://learning-zone-with-next-js.vercel.app/",
      repoLinkClient: "https://github.com/ataurwd/Learning-Zone-with-Next.js",
    },
    {
      id: 2,
      name: "User-Friendly Platform for Tour Planning and Booking",
      language: [
        "React.js",
        "Node.js",
        "Vercel",
        "Tailwind Css",
        "Tanstack Query",
        "Mongo DB",
        "Firebase",
      ],
      img: "/assets/treva.png",
      liveLink: "https://tourism-management-1e7fd.web.app/",
      repoLinkClient: "https://github.com/ataurwd/Tourist-Client",
      repoLinkServer: "https://github.com/ataurwd/Tourist-Server",
    },
    {
      id: 3,
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
      img: "/assets/visago.png",
      liveLink: "https://visago-with-mongodb.web.app/",
      repoLinkClient: "https://github.com/ataurwd/VisaGo-B10A10C",
      repoLinkServer: "https://github.com/ataurwd/VisaGo-B10A10S",
    },
    {
      id: 4,
      name: "BookQuill- A user-friendly Library Management System",
      language: [
        "React.js",
        "Node.js",
        "Tailwind Css",
        "Vercel",
        "Mongo DB",
        "Firebase",
      ],
      img: "/assets/book.png",
      liveLink: "https://book-shop-7a4d6.web.app/",
      repoLinkClient: "https://github.com/ataurwd/Library-Client",
      repoLinkServer: "https://github.com/ataurwd/Library-Server",
    },
    {
      id: 5,
      name: "Vocable- A Better Way to Teach Words Meannings",
      language: [
        "React.js",
        "Context API",
        "Tailwind Css",
        "JavaScript",
        "firebase",
      ],
      img: "/assets/vocable.png",
      liveLink: "https://vocabulary-learning-c0cb4.web.app/",
      repoLinkClient: "https://github.com/ataurwd/Tech-With-RR",
    },
    {
      id: 6,
      name: "ElectroMart- A Tech Accessorize Dynamic Website",
      language: [
        "React.js",
        "Context API",
        "Tailwind Css",
        "JavaScript",
        "Netlify",
      ],
      img: "/assets/electro.png",
      liveLink: "https://electromart-bd.netlify.app/",
      repoLinkClient: "https://github.com/ataurwd/Tech-With-RR",
    },
    {
      id: 7,
      name: "Cricket Player Marketplace",
      language: [
        "React.js",
        "CSS",
        "Tailwind Css",
        "JavaScript",
        "Daisy UI",
        "React icons",
      ],
      img: "/assets/cricket.png",
      liveLink: "https://ataurwd-b10a7.netlify.app/",
      repoLinkClient: "https://github.com/ataurwd/B10A7-CRICKET-PLAYER-SELL",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 cursor-pointer dark:bg-black border dark:border-white/[0.2] border-black/[0.1] rounded-lg shadow-md hover:shadow-xl
           transition-shadow duration-300"
          >
            {/* Project Image */}
            <Image
              src={project.img}
              alt={project.name}
              className="w-full h-56 sm:h-56rounded-md rounded-t-lg"
              width={500}
              height={400}
            />
            {/* text area  */}
            <div className="px-4 pb-4">
              {/* Project Name */}
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white mt-4">
                {project.name}
              </h2>
              {/* Language Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.language.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm border border-emerald-800 rounded-full text-gray-700 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <div className="flex gap-3 mt-2 sm:mt-0">
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
          </div>
        ))}
      </div>
    </div>
  );
}
