import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <div className="flex items-center justify-between px-8 py-6 w-[90vw] absolute top-0 left-0 right-0 z-10 mx-auto">
      {/* Brand Name */}
      <div className="text-white font-bold text-[32px] leading-[40px] tracking-[-0.5px] font-[Sora]">
        LazyWiz
      </div>

      {/* Menu */}
      <div className="font-[Sora] text-[20px] font-extralight leading-[24px] tracking-[-0.15px]">
        <ul className="flex gap-4 list-none">
          <li>
            <Link
              to="/"
              className={`text-white no-underline ${
                location.pathname === "/" ? "font-bold" : "font-normal"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-white no-underline ${
                location.pathname === "/projects" ? "font-bold" : "font-normal"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white no-underline ${
                location.pathname === "/about" ? "font-bold" : "font-normal"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`text-white no-underline ${
                location.pathname === "/blog" ? "font-bold" : "font-normal"
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Resume Button */}
      <div>
        <Link to="/resume" className="no-underline">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border-[1.3px] border-[#024E79] bg-[#0072B1] text-white font-[Rubik] text-[17.7px] leading-[25.3px] font-normal shadow-md hover:border-[#0072B1] hover:bg-[#024E79] active:border-[#054F78] active:bg-[#033F61]">
            <ion-icon name="eye-outline" className="text-xl"></ion-icon>
            View Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
