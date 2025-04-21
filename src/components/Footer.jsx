import React from 'react';
import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Gmail from '../images/mail.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 text-[#778D99] bg-[#1B1F23] w-full p-6 py-10 md:py-12">
      
      {/* --- ICONS (Desktop only) --- */}
      <div className="hidden md:flex items-center justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/priyanshuwiz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex p-2.5 justify-center items-center border-[2.6px] border-[#024E79] bg-[#0072B1] hover:border-[#0072B1] hover:bg-[#024E79] active:border-[#054F78] active:bg-[#033F61] rounded-md">
            <img src={Linkedin} alt="linkedin" className="w-[28px] h-[28px]" />
          </div>
        </a>

        <a
          href="https://github.com/LazyWiz609"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex p-2.5 justify-center items-center border-[2.3px] border-[#3E496A] bg-[#292F42] hover:border-[#292F42] hover:bg-[#3E496A] active:border-[#292F42] active:bg-[#1B1F23] rounded-md">
            <img src={Github} alt="github" className="w-[28px] h-[28px]" />
          </div>
        </a>

        <Link to="/about">
          <div className="flex p-2.5 justify-center items-center border-[2.4px] border-[#7F1D1D] bg-[#EF4444] hover:border-[#EF4444] hover:bg-[#F87171] active:border-[#F87171] active:bg-[#991B1B] rounded-md">
            <img src={Gmail} alt="gmail" className="w-[28px] h-[28px]" />
          </div>
        </Link>
      </div>

      {/* --- TEXT LINKS (Mobile only) --- */}
      <div className="flex flex-col md:hidden items-center justify-center gap-2 text-white font-[Rubik] text-[15px]">
        <a href="https://www.linkedin.com/in/priyanshuwiz/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0072B1] transition">LinkedIn</a>
        <a href="https://github.com/LazyWiz609" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9ca3af] transition">GitHub</a>
        <Link to="/about" className="underline hover:text-[#F87171] transition">Contact Me</Link>
      </div>

      {/* --- Contact Info --- */}
      <div className="text-center text-white text-[18px] sm:text-[20px] md:text-[22px] leading-tight font-semibold font-[Sora]">
        Ph. : 9599144299 <br className="sm:hidden" /> | instagram/lazywiz609
      </div>

      {/* --- Footer Bottom --- */}
      <div className="text-white text-sm text-center font-normal font-[Rubik]">
        © Priyanshu Nandan, All Rights Reserved
      </div>
    </div>
  );
}
