"use client";

import { Meteors } from "./ui/meteors";
import { FacebookIcon, Github } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import HeadingNewAnimation from "./HeadingNewAnimation";
import { TextAnimate } from "./ui/text-animate";
import { Opulento } from "uvcanvas";

const Heading = () => {
  return (
    <div className="relative md:h-[500px] w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Effect */}
      <Opulento className="absolute inset-0 w-full h-full opacity-50" />

      {/* Content */}
      <div className="lg:px-28 md:px-16 px-4 md:flex justify-between z-10 absolute top-0 w-full bg-white/30 backdrop-blur-sm rounded-lg p-8">
        <div className="space-y-6 w-full md:w-1/2 md:mt-0 flex flex-col justify-center md:text-left text-center">
          <h1 className="text-[24px] md:text-4xl font-semibold text-white" data-aos="fade-up">
            <br />
            <div className="relative inline-block">
              <TextAnimate animation="blurInUp" by="character">
                HI I'm Ataur Rahman
              </TextAnimate>
            </div>
            <p>A Passionate Frontend <br /> Web Developer</p>
          </h1>
          <p data-aos="zoom-in" className="text-gray-300 text-sm md:text-base">
            As a skilled frontend developer, I specialize in building dynamic, responsive web apps using React.js, 
            Node.js, MongoDB, and Tailwind CSS. I'm passionate about creating seamless, user-friendly interfaces 
            and optimizing performance for the best experience.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-6">
            <a
              className="py-2 px-4 rounded-xl text-md font-medium bg-emerald-600 
              text-white border-2 border-emerald-900 flex items-center justify-center hover:bg-emerald-700 transition"
              href="/resume1.pdf"
              download={"resume1.pdf"}
            >
              Download <TbFileCv size={20} className="ml-3" />
            </a>
            <div className="flex items-center space-x-3 md:justify-start justify-center">
              <Link
                href={"https://github.com/ataurwd"}
                target="blank"
                className="w-10 h-10 border-2 border-emerald-500 grid place-items-center rounded-full hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition"
              >
                <Github color="white" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/ataur-rahman-653685254/"}
                target="blank"
                className="w-10 h-10 border-2 border-emerald-500 grid place-items-center rounded-full hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition"
              >
                <FaLinkedin color="white" />
              </Link>
              <Link
                href={"https://www.facebook.com/profile.php?id=61563838319684"}
                target="blank"
                className="w-10 h-10 border-2 border-emerald-500 grid place-items-center rounded-full hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition"
              >
                <FacebookIcon color="white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-10 grid place-items-center">
          <HeadingNewAnimation />
        </div>
      </div>
    </div>
  );
};

export default Heading;
