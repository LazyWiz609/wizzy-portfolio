import React from 'react'
import Linkedin from '../images/linkedin.svg'
import Github from '../images/github.svg'
import Gmail from '../images/mail.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-end gap-8 text-[#778D99] bg-[#1B1F23] w-full h-[32vh] p-4">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex w-[20vw] justify-between items-center">
          <a href="https://www.linkedin.com/in/priyanshuwiz/" target="_blank" rel="noopener noreferrer">
            <div className="flex p-[10px] justify-center items-center border-[2.612px] border-[#024E79] bg-[#0072B1] hover:border-[#0072B1] hover:bg-[#024E79] active:border-[#054F78] active:bg-[#033F61]">
              <img src={Linkedin} alt="linkedin" className="w-[29.174px] h-[27.215px]" />
            </div>
          </a>
          <a href="https://github.com/LazyWiz609" target="_blank" rel="noopener noreferrer">
            <div className="flex p-[10px] justify-center items-center border-[2.324px] border-[#3E496A] bg-[#292F42] hover:border-[#292F42] hover:bg-[#3E496A] active:border-[#292F42] active:bg-[#1B1F23]">
              <img src={Github} alt="github" className="w-[29.174px] h-[27.215px]" />
            </div>
          </a>
          <Link to="/about">
            <div className="flex p-[10px] justify-center items-center border-[2.469px] border-[#7F1D1D] bg-[#EF4444] hover:border-[#EF4444] hover:bg-[#F87171] active:border-[#F87171] active:bg-[#991B1B]">
              <img src={Gmail} alt="gmail" className="w-[29.174px] h-[27.215px]" />
            </div>
          </Link>
        </div>

        <div className="text-white text-[22px] leading-[28px] font-semibold font-[Sora]">
          Ph. : 9599144299 | instagram/lazywiz609
        </div>
      </div>

      <div className="text-white text-sm leading-5 font-normal font-[Rubik]">
        © Priyanshu Nandan, All Rights Reserved
      </div>
    </div>
  )
}
