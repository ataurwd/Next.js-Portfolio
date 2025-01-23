"use client";
import { PortfolioCard } from "./PortfolioCard";
import { HyperText } from "./ui/hyper-text";

const ProjectCard = () => {
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
      liveLink: "https://charming-frangollo-1f9a4c.netlify.app/",
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
      liveLink: "https://charming-frangollo-1f9a4c.netlify.app/",
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
        "React icons",
      ],
      img: "https://i.ibb.co.com/3WgT0Dq/Screenshot-39.png",
      liveLink: "https://charming-frangollo-1f9a4c.netlify.app/",
      repoLinkClient: "https://github.com/ataurwd/B10A7-CRICKET-PLAYER-SELL",
    },
  ];
  return (
    <div className="z-50 grid place-items-center mt-20">
      <h1 className="md:text-5xl  text-3xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-500 bg-[200%_auto] text-center text-transparent bg-clip-text">
        <HyperText>Projects</HyperText>
      </h1>
      <div className="">
        <PortfolioCard></PortfolioCard>
      </div>
    </div>
  );
};

export default ProjectCard;
