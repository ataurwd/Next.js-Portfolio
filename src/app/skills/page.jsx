import { SkillAnimation } from "@/components/SkillAnimation";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { HyperText } from "@/components/ui/hyper-text";
import { cn } from "@/lib/utils";
import React from "react";
const Skills = () => {
  const technologies = [
    {
      id: 1,
      name: "React Js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      id: 3,
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      id: 4,
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      id: 5,
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      id: 6,
      name: "Framer Motion",
      logo: "https://i.ibb.co.com/D7v7BFd/20200926171128-removebg-preview.png",
    },
    {
      id: 7,
      name: "React Icons",
      logo: "https://react-icons.github.io/react-icons/favicon.ico",
    },
    {
      id: 8,
      name: "Swiper",
      logo: "https://i.ibb.co.com/vxkywj1/images-1-removebg-preview.png",
    },
    {
      id: 9,
      name: "Bootstrap",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      id: 10,
      name: "Material UI",
      logo: "https://mui.com/static/logo.png",
    },
    {
      id: 11,
      name: "Vite",
      logo: "https://vitejs.dev/logo.svg",
    },
    {
      id: 17,
      name: "Chart.js",
      logo: "https://www.chartjs.org/media/logo-title.svg",
    },
    {
      id: 18,
      name: "Axios",
      logo: "https://axios-http.com/assets/logo.svg",
    },
    {
      id: 19,
      name: "React Router",
      logo: "https://reactrouter.com/favicon-light.png",
    },
  ];

  const backendTechnologies = [
    {
      id: 1,
      name: "MongoDB",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg", // Transparent background
    },
    {
      id: 2,
      name: "Node.js",
      logo: "https://i.ibb.co.com/RvcYs7W/Node-js-logo-svg-removebg-preview.png", // Transparent background
    },
    {
      id: 3,
      name: "Express.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", // Transparent background
    },
    {
      id: 4,
      name: "Firebase",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg", // Transparent background
    },
    {
      id: 5,
      name: "JWT",
      logo: "https://jwt.io/img/pic_logo.svg", // Transparent background
    },
  ];
  const devToolsAndPlatforms = [
    {
      id: 1,
      name: "Git",
      logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", // Transparent background
    },
    {
      id: 2,
      name: "GitHub",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // Transparent background
    },
    {
      id: 4,
      name: "Netlify",
      logo: "https://i.ibb.co.com/6XygRd8/netlify-icon-2048x2048-vn9f0x8q-removebg-preview.png", // Transparent background
    },
    {
      id: 5,
      name: "VS Code",
      logo: "https://i.ibb.co.com/sCsjMrQ/Visual-Studio-Code-1-35-icon-svg-removebg-preview.png", // Transparent background
    },
    {
      id: 6,
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Transparent background
    },
  ];

  return (
    <div>
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-10%] h-[58%] skew-y-0 w-[100%]"
        )}
      />
      <div className="lg:px-20 md:px-10 px-4 lg:py-10 md:py-5 py-4">
        <div className="md:w-3/4 lg:w-1/2 mx-auto text-center space-y-4 mb-12">
          <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-500 bg-[200%_auto] text-transparent bg-clip-text animate-text-gradient">
            <HyperText>My Skills</HyperText>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            I’m a beginner frontend web developer excited to learn and grow.
            Here are the tools and technologies I’m working with to build
            awesome web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Technologies */}
          <div className="bg-black p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              Frontend Technology
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {technologies.map((item) => (
                <div
                  key={item.id}
                  className="border p-3 flex items-center justify-center rounded-lg w-20"
                >
                  <img
                    className="w-12 h-12 object-contain"
                    src={item.logo}
                    alt={`${item.name} logo`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="bg-black p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              Backend Technology
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {backendTechnologies.map((item) => (
                <div
                  key={item.id}
                  className="border p-3 flex items-center justify-center rounded-lg w-20"
                >
                  <img
                    className="w-12 h-12 object-contain"
                    src={item.logo}
                    alt={`${item.name} logo`}
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 text-white md:mt-10 mt-1">
              Other Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {devToolsAndPlatforms.map((item) => (
                <div
                  key={item.id}
                  className="border p-3 flex items-center justify-center rounded-lg w-20"
                >
                  <img
                    className="w-12 h-12 object-contain"
                    src={item.logo}
                    alt={`${item.name} logo`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Technologies */}
        {/* <div className="bg-black p-6 rounded-2xl mt-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Other Technologies</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {devToolsAndPlatforms.map((item) => (
            <div key={item.id} className="border p-3 flex items-center justify-center rounded-lg w-20">
              <img className="w-12 h-12 object-contain" src={item.logo} alt={`${item.name} logo`} />
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Skills;
