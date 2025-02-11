"use client";

import { Meteors } from "./ui/meteors";

import { FacebookIcon, Github } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import HeadingNewAnimation from "./HeadingNewAnimation";
import { TextAnimate } from "./ui/text-animate";
// import resume from './Resume.pdf'

const Heading = () => {
  return (
    <div className="relative md:h-[500px] w-full overflow-hidden bg-background">
      <Meteors number={15} />
      <div className="lg:px-28 md:px-16 px-4 md:flex justify-between">
        <div className="space-y-6 w-full md:w-1/2 md:mt-0 flex flex-col justify-center md:text-left text-center">
          <h1
            className="text-[24px] md:text-4xl font-semibold text-black"
            data-aos="fade-up"
          >
            <br />
            <div className="relative inline-block ">
              <TextAnimate animation="blurInUp" by="character">
                HI I'm Ataur Rahman
              </TextAnimate>
            </div>
            <p>
              A Passionate Frontend <br /> Web Developer
            </p>
          </h1>
          <p data-aos="zoom-in" className="text-gray-400 text-sm md:text-base">
            As a skilled frontend developer, I specialize in building dynamic,
            responsive web apps using React.js, Node.js, MongoDB, and Tailwind
            CSS. I'm passionate about creating seamless, user-friendly
            interfaces and optimizing performance for the best experience.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-6">
            <a
              className="py-2 px-4 rounded-xl text-md font-medium bg-emerald-950 
          text-emerald-500 border border-emerald-900 flex items-center justify-center"
              href="/Resume.pdf"
              download={"Resume.pdf"}
            >
              Download <TbFileCv size={20} className="ml-3" />
            </a>
            <div className="flex items-center space-x-3 md:justify-start justify-center">
              <Link
                href={"https://github.com/ataurwd"}
                target="blank"
                className="w-10 h-10 border-2 border-emerald-700 grid place-items-center rounded-full hover:border-black hover:bg-emerald-500 hover:text-white"
              >
                <Github color="black" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/ataur-rahman-653685254/"}
                target="blank"
                className="w-10 h-10 border-2 border-emerald-700 grid place-items-center rounded-full hover:border-black hover:bg-emerald-500 hover:text-white"
              >
                <FaLinkedin color="black" />
              </Link>
              <Link
                href={"https://www.facebook.com/profile.php?id=61563838319684"}
                target="blank"
                className="w-10 h-10 border-2 border-emerald-700 grid place-items-center rounded-full hover:border-black hover:bg-emerald-500 hover:text-white"
              >
                <FacebookIcon color="black" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-10 grid place-items-center">
          {/* <HeadingAnimaiton /> */}
          <HeadingNewAnimation />
          {/* <img className="shadow-sm rounded-md border-2 border-emerald-400" src={headimg} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Heading;
