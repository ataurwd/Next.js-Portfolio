import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { HyperText } from "./ui/hyper-text";

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="text-center space-y-3">
        <h1 className="md:text-4xl font-bold text-xl text-emerald-500">
          <HyperText>My Experience</HyperText>
        </h1>
        <p>
          A 2-year journey of freelancing, completing projects, and helping
          businesses grow.
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
};

export const projects = [
  {
    title: "WordPress",
    description:
      "Experienced WordPress web designer with 2 years of expertise in creating stunning, responsive websites",
    link: "/skills",
  },
  {
    title: "Frontend Development",
    description:
      "Building seamless and engaging user interfaces with React, Tailwind CSS, and more.",
    link: "/skills",
  },
  {
    title: "Web Desinger",
    description:
      "Freelance web designer with 2 years of experience creating custom, user-friendly, and responsive websites",
    link: "/skills",
  },
  {
    title: "Client Collaboration",
    description:
      "Working closely with clients to understand their needs and deliver tailored solutions.",
    link: "/skills",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces, focusing on enhancing the user experience.",
    link: "/skills",
  },
  {
    title: "E-commerce Development",
    description:
      "Building and optimizing e-commerce websites for businesses, integrating payment gateways, and ensuring smooth user experiences.",
    link: "/skills",
  },
];

export default Experience;
