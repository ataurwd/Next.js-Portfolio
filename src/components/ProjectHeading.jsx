import React from "react";
import { HyperText } from "./ui/hyper-text";
import Image from "next/image";

const ProjectHeading = () => {
  return (
    <div className="z-50">
      <div className="text-center grid place-items-center mt-10 space-y-3">
        <HyperText className={"text-emerald-500"}>My Project</HyperText>
        <p className="md:w-[50%] mx-auto text-gray-600">
          I’m a beginner frontend web developer excited to learn and grow. Here
          are the tools and technologies I’m working with to build awesome web
          experiences.
        </p>
      </div>
      <div className="px-20 z-50">
        <Image className="w-full" width={1000} height={500} layout="responsive" src="/assets/project-banner/project banner.webp" />
      </div>
    </div>
  );
};

export default ProjectHeading;
