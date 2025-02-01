"use client";

import { FlickeringGrid } from "./ui/flickering-grid";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-8 bg-cover bg-no-repeat bg-black relative">
      <FlickeringGrid
        className="absolute inset-0 z-0 w-full h-auto"
        squareSize={4}
        gridGap={10}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={0.1}
      />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center z-50 relative">
        {/* Left Section: Name and Description */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-white">Ataur Rahman</h1>
          <p className="mt-2 text-sm">
            Passionate frontend web developer creating beautiful, functional,
            and user-friendly websites.
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/ataurwd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.334-1.755-1.334-1.755-1.09-.745.083-.73.083-.73 1.204.084 1.837 1.237 1.837 1.237 1.07 1.835 2.805 1.305 3.491.998.107-.774.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.235-3.22-.123-.304-.535-1.527.117-3.182 0 0 1.008-.322 3.301 1.23.956-.266 1.983-.399 3.003-.404 1.02.005 2.048.138 3.005.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.655.241 2.878.118 3.182.767.839 1.235 1.909 1.235 3.22 0 4.611-2.806 5.623-5.479 5.922.43.372.814 1.103.814 2.222v3.293c0 .319.192.694.799.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.29 19H4.15V9.23h3.14V19zm-1.57-11.3c-1.03 0-1.87-.84-1.87-1.87s.84-1.87 1.87-1.87 1.87.84 1.87 1.87-1.87.84-1.87 1.87zm13.57 11.3h-3.14v-4.27c0-1.02-.02-2.34-1.42-2.34-1.42 0-1.64 1.11-1.64 2.26v4.35H9.93V9.23h3.02v1.34h.04c.42-.8 1.42-1.64 2.93-1.64 3.13 0 3.71 2.06 3.71 4.73V19z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.576 0 0 .576 0 1.288v21.424C0 23.424.576 24 1.288 24h11.495v-9.294H9.691v-3.622h3.092V8.413c0-3.066 1.873-4.738 4.605-4.738 1.31 0 2.438.098 2.764.142v3.204h-1.896c-1.489 0-1.777.71-1.777 1.748v2.293h3.553l-.463 3.622h-3.09V24h6.058c.711 0 1.288-.576 1.288-1.288V1.288C24 .576 23.424 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
