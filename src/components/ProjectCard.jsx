"use client";
import { PortfolioCard } from "./PortfolioCard";
import { HyperText } from "./ui/hyper-text";

const ProjectCard = () => {

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
