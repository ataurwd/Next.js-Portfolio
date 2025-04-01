"use client";
import Link from "next/link";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { ScrollProgress } from "./ui/scroll-progress";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b w-full">
      {/* <ScrollProgress className="top-[65px]" /> */}
      <div className="flex justify-between items-center px-5 lg:px-20 py-3">
        
        {/* Left: Logo (Always Left) */}
        <Link href="/" className="flex-shrink-0">
          <Image
            width={150}
            height={150}
            src="/assets/logo/logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Right: Navbar Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-6 text-[16px] font-medium">
          <Link href="/" className="flex items-center space-x-1">
            <span>Home</span> <IoHomeOutline />
          </Link>
          <Link href="/skills" className="flex items-center space-x-1">
            <span>My Skills</span> <FaCode />
          </Link>
          <Link href="/projects" className="flex items-center space-x-1">
            <span>Projects</span> <FaLaptopCode />
          </Link>
          <Link href="/contact" className="flex items-center space-x-1">
            <span>Contact</span> <MdOutlineContactPhone />
          </Link>
        </div>

        {/* Right: Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-8 6h8"
            />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute left-0 top-16 w-full bg-white shadow-md lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-3 py-4 text-[16px] font-medium">
            <li>
              <Link href="/" className="flex items-center space-x-1">
                <span>Home</span> <IoHomeOutline />
              </Link>
            </li>
            <li>
              <Link href="/skills" className="flex items-center space-x-1">
                <span>My Skills</span> <FaCode />
              </Link>
            </li>
            <li>
              <Link href="/projects" className="flex items-center space-x-1">
                <span>Projects</span> <FaLaptopCode />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center space-x-1">
                <span>Contact</span> <MdOutlineContactPhone />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
