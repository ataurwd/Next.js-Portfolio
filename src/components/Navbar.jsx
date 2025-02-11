"use client";
import Link from "next/link";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { ScrollProgress } from "./ui/scroll-progress";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar md:px-20 relative sticky top-0 z-50 bg-white border-b">
       <ScrollProgress className="top-[65px]" />
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Toggle Menu"
            className="btn btn-ghost lg:hidden mr-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div className="relative">
            {/* Mobile Logo */}
            <Link href="/" className="font-semibold text-xl block md:hidden">
              <Image
                width={100}
                height={100}
                src="/assets/logo/logo.png"
                alt="Logo"
                className="h-12 md:w-auto w-24 absolute -right-[168px] -top-[44px]"
              />
            </Link>
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className={`z-50 menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-white`}
            >
              <li>
                <Link href="/" className="">
                  Home <IoHomeOutline className="ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-gray-300">
                  My Skills <FaCode className="ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300">
                  Projects <FaLaptopCode className="ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact <MdOutlineContactPhone className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop Logo */}
        <Link href="/" className="font-semibold text-xl hidden md:block">
          <img
            src="https://ataur-wd.netlify.app/assets/logo-CicHu1CF.png"
            alt="Logo"
            className="h-12 md:w-auto w-24"
          />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 space-x-5 text-[16px] font-medium`}
        >
          <li>
            <Link href="/" className="">
              Home <IoHomeOutline className="ml-1" />
            </Link>
          </li>
          <li>
            <Link href="/skills" className="">
              My Skills <FaCode className="ml-1" />
            </Link>
          </li>
          <li>
            <Link href="/projects" className="">
              Projects <FaLaptopCode className="ml-1" />
            </Link>
          </li>
          <li>
            <Link href="/contact" className="">
              Contact <MdOutlineContactPhone className="ml-1" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
