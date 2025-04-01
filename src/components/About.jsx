"use client";

import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";
import { HyperText } from "./ui/hyper-text";
import { BoxReveal } from "./ui/box-reveal";
import Image from "next/image";

const About = () => {
  return (
    <div className="md:pb-24 lg:px-28 md:px-10 px-4 grid grid-cols-1 md:grid-cols-2 md:py-16 z-50 my-10">
      {/* Right Side - Smaller Image */}
      <div className="flex justify-center items-center">
        <Image
          id="servicesImg"
          src="/assets/devimg/devimg2.png"
          alt="About Me"
          className="w-3/4 md:w-2/3 lg:w-[70%] object-cover opacity-9 hover:border-none"
          width={400}
          height={400}
        />
      </div>
      {/* Left Side - Centered Text */}
      <div className=" space-y-4" data-aos="fade-up">
        <BoxReveal>
          {" "}
          <h4
            data-aos-anchor-placement="top-bottom"
            className="font-bold underline text-emerald-500"
          >
            About Me
          </h4>
        </BoxReveal>
        <BoxReveal>
          {" "}
          <h1
            data-aos-anchor-placement="top-bottom"
            className="font-bold text-3xl md:text-4xl w-[70%]"
          >
            <HyperText> A Story Of HardWork And Dedication</HyperText>
          </h1>
        </BoxReveal>
        <BoxReveal>
          {" "}
          <p className="text-gray-600 text-sm md:text-base">
            As a frontend developer, I started my journey by mastering HTML,
            CSS, and JavaScript. Over time, I explored popular libraries and
            frameworks like React, Next.js and Tailwind CSS, which helped me build
            modern, dynamic websites. I learned to
            create user-friendly, responsive designs that provide seamless
            experiences across devices. Every project presented new challenges,
            pushing me to grow and refine my skills, making me passionate about
            creating beautiful, functional websites.
          </p>
        </BoxReveal>
        <BoxReveal>
          <Link
            href={"https://github.com/ataurwd"}
            target="blank"
            className="py-2 px-4 rounded-xl text-md font-medium bg-emerald-950 text-emerald-500 border border-emerald-900 flex items-center w-40"
          >
            Learn More <Github size={20} className="ml-3" />
          </Link>
        </BoxReveal>
      </div>
    </div>
  );
};

export default About;
