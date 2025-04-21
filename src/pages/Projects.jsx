import React, { useState } from 'react'
import ConstructionImg from '../images/construction.png'
import ProjectCard from '../components/ProjectCard'
import Train from '../images/train.png';
import ExploreButton from '../components/ExploreButton';
import PurpleButton from '../components/PurpleButton';
import Constellation from '../images/constellation.png';
import WizPeek from '../images/wizpeek.png';
import Footer from '../components/Footer';

export default function Projects() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center'>

{/* JumboTron Element */}
<div className='flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen pt-[100px]'>
  <div className='flex flex-col items-center gap-8'>
    <div className='flex flex-col items-center gap-4'>
      <div className='text-white font-sora text-[32px] md:text-[40px] font-bold leading-[36px] md:leading-[48px] tracking-[-0.5px]'>My Playground !</div>
      <div className='text-white font-sora text-[16px] md:text-[20px] font-[600] leading-[20px] md:leading-[24px] tracking-[-0.15px]'>This is where I shine !!</div>
    </div>
      <div className='flex items-end'><img src={ConstructionImg} alt='construction-site' className='w-[605.25px] h-[282px] hidden md:block'></img></div>
  </div>
  <div className='absolute bottom-[32px]'>
        <ion-icon name="arrow-down-outline" style={{color:'white', fontSize: '28px'}}></ion-icon>
    </div>
</div>

{/* Projects List Element */}
<div className='flex flex-col items-center justify-center min-h-screen min-w-full rounded-tl-[68px] rounded-tr-[68px] pt-[100px] py-[80px] bg-white gap-24'>
<div className='flex flex-col md:inline-flex md:flex-row justify-center items-center md:items-start gap-10 md:gap-36'>
  {/* Projects Made */}
  <div className='flex flex-col justify-center md:justify-start items-center gap-2 md:gap-4'>
    <div className='text-black text-2xl md:text-3xl font-bold font-sora leading-9 md:leading-10 text-center'>
      Projects Made
    </div>
    <div className='w-28 h-28 md:w-36 md:h-36 px-6 py-10 md:px-8 md:py-14 rounded-full outline-[10px] md:outline-[18.08px] outline-offset-[-10px] md:outline-offset-[-18.08px] outline-[#2454D1] flex flex-col justify-center items-center gap-2.5'>
      <div className='text-black text-xl md:text-3xl font-semibold font-sora leading-7 md:leading-9'>12/∞</div>
    </div>
  </div>

  {/* DSA Problems Solved */}
  <div className='flex flex-col justify-center md:justify-start items-center gap-2 md:gap-4'>
    <div className='text-black text-2xl md:text-3xl font-bold font-sora leading-9 md:leading-10 text-center'>
      DSA Problems Solved
    </div>
    <div className='w-28 h-28 md:w-36 md:h-36 px-6 py-10 md:px-8 md:py-14 rounded-full outline-[10px] md:outline-[18.08px] outline-offset-[-10px] md:outline-offset-[-18.08px] outline-[#7432BE] flex flex-col justify-center items-center gap-2.5'>
      <div className='text-black text-xl md:text-3xl font-semibold font-sora leading-7 md:leading-9'>760</div>
    </div>
  </div>

  {/* Designs Made */}
  <div className='flex flex-col justify-center md:justify-start items-center gap-2 md:gap-4'>
    <div className='text-black text-2xl md:text-3xl font-bold font-sora leading-9 md:leading-10 text-center'>
      Designs Made
    </div>
    <div className='w-28 h-28 md:w-36 md:h-36 px-6 py-10 md:px-8 md:py-14 rounded-full outline-[10px] md:outline-[18.08px] outline-offset-[-10px] md:outline-offset-[-18.08px] outline-[#5467A1] flex flex-col justify-center items-center gap-2.5'>
      <div className='text-black text-xl md:text-3xl font-semibold font-sora leading-7 md:leading-9'>150</div>
    </div>
  </div>
</div>
    <div className='flex flex-col items-center justify-center gap-16'>
      
      {/* Desktop Filters */}
      <div className='hidden md:flex items-center gap-4'>
        <div className='text-colors-neutral-950 text-3xl font-semibold font-sora leading-9'> Filter: </div>
        <ExploreButton label="Smaller" name="Skill" showIcon={false} width='8rem' />
        <ExploreButton label="Smaller" name="Category" showIcon={false} width='10rem' />
        <ExploreButton label="Smaller" name="Sort By" showIcon={false} width='10rem' />
      </div>

      {/* Mobile Dropdown Filter */}
      <div className='md:hidden flex flex-col items-center gap-4 w-full'>
        <button
          className="text-white bg-[#363C43] px-6 py-2 rounded-lg font-semibold"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {showDropdown ? 'Hide Filters' : 'Show Filters'}
        </button>

        {showDropdown && (
          <div className="flex flex-col items-center gap-3 w-full">
            <ExploreButton label="Smaller" name="Skill" showIcon={false} width='12rem' />
            <ExploreButton label="Smaller" name="Category" showIcon={false} width='12rem' />
            <ExploreButton label="Smaller" name="Sort By" showIcon={false} width='12rem' />
          </div>
        )}
      </div>

      {/* Project Cards */}
      <div className='flex flex-col items-center gap-8'>
        <ProjectCard />
        <ProjectCard dir='card-reverse' image={Train} />
        <ProjectCard />
        <ProjectCard dir='card-reverse' image={Train} />
      </div>

      {/* Navigation Dots */}
      <div className='inline-flex justify-start items-start gap-20'>
        <span className="w-8 h-8 bg-[#363C43] rounded-full"></span>
        <span className="w-8 h-8 bg-[#D9D9D9] rounded-full"></span>
        <span className="w-8 h-8 bg-[#D9D9D9] rounded-full"></span>
      </div>
    </div>
</div>

{/* Contact Element */}
<div className='flex w-full px-32 py-64 relative bg-[#1B1F23] flex-col justify-center items-center gap-16 overflow-hidden' style={{ boxShadow: 'inset 0 0 72px 10px rgba(0, 0, 0, 0.25)',}}>
  <div className='relative z-10 text-white text-[32px] md:text-[40px] font-bold font-sora leading-[36px] md:leading-[44px] text-center flex flex-col items-center'>
    <span>Dreaming something?,</span>
    <span className='block lg:inline'>Lemme make it for you !</span>
  </div>

  <div className='relative flex-col md:flex-row flex items-center justify-center gap-8 z-10'>
      <ExploreButton name={"Hire Me Now !"} iconName={"arrow-redo-outline"}/>
      <PurpleButton name={"Let's Collaborate"} iconName={"arrow-redo-outline"}/>
  </div>
  <img src={Constellation} alt='background' className='fixed top-0 left-0 w-full h-full object-cover opacity-[0.03] z-0 pointer-events-none' />
  <img src={WizPeek} alt='Wiz Peek' className="w-64 h-64 absolute right-0 -bottom-10 z-20" />
</div>

{/* Footer Element */}
<div className='relative w-full'>
    <Footer />
</div>
</div>
  );
}
