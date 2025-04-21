import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = ["/", "/projects", "/about", "/blog"];
  const labels = ["Home", "Projects", "About", "Blog"];

  return (
    <div className="absolute top-[3vh] left-0 right-0 z-50">
      <div className="w-full max-w-[1600px] mx-auto px-[5vw] flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-white font-bold font-sora text-[clamp(1.5rem,4vw,2.5rem)] leading-tight tracking-[-0.5px]">
          LazyWiz
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-[clamp(1rem,2.5vw,2rem)] list-none font-sora text-[clamp(1rem,1.5vw,1.3rem)] font-light tracking-tight">
          {navLinks.map((path, idx) => (
            <li key={path}>
              <Link
                to={path}
                className={`text-white no-underline transition duration-150 ${
                  location.pathname === path ? "font-bold" : "font-normal"
                }`}
              >
                {labels[idx]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:block ml-[clamp(0.5rem,2vw,1.5rem)]">
          <Link to="/resume" className="no-underline">
            <button className="flex items-center justify-center gap-2 px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.5rem,1vw,0.8rem)] border border-[#024E79] bg-[#0072B1] text-white font-[Rubik] text-[clamp(0.95rem,1.5vw,1.1rem)] font-medium shadow-md hover:border-[#0072B1] hover:bg-[#024E79] active:border-[#054F78] active:bg-[#033F61] transition duration-150">
              <ion-icon name="eye-outline" className="text-[clamp(1.2rem,1.5vw,1.5rem)]"></ion-icon>
              <span>View Resume</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-[5vw]">
          <ul className="flex flex-col gap-4 bg-[#0a192f] p-6 rounded-lg shadow-lg font-sora text-white">
            {navLinks.map((path, idx) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className={`block text-base no-underline ${
                    location.pathname === path ? "font-bold" : "font-normal"
                  }`}
                >
                  {labels[idx]}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/resume" onClick={closeMenu} className="no-underline">
                <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 border border-[#024E79] bg-[#0072B1] text-white font-[Rubik] text-base font-medium shadow-md hover:border-[#0072B1] hover:bg-[#024E79] active:border-[#054F78] active:bg-[#033F61] transition duration-150">
                  <ion-icon name="eye-outline"></ion-icon>
                  <span>View Resume</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
