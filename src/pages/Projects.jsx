import React from 'react'
import ConstructionImg from '../images/construction.png'
import ProjectCard from '../components/ProjectCard'
import Train from '../images/train.png';
import ExploreButton from '../components/ExploreButton';
import PurpleButton from '../components/PurpleButton';
import Constellation from '../images/constellation.png';
import WizPeek from '../images/wizpeek.png';
import Footer from '../components/Footer';
export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center'>


      
{/* JumboTron Element */}



<div className='flex flex-col items-center justify-center min-h-screen pt-[100px]'>
  <div className='flex flex-col items-center gap-8'>
    <div className='flex flex-col items-center gap-4'>
      <div className='text-white font-sora text-[48px] font-bold leading-[52px] tracking-[-0.5px]'>My Playground !</div>
      <div className='text-white font-sora text-[20px] font-[600] leading-[24px] tracking-[-0.15px]'>This is where I shine !!</div>
    </div>
      <div className='flex items-end'><img src={ConstructionImg} alt='construction-site' className='w-[807px] h-[376px]'></img></div>
  </div>
  <div className='absolute bottom-[32px]'>
        <ion-icon name="arrow-down-outline" style={{color:'white', fontSize: '28px'}}></ion-icon>
    </div>
</div>



{/* Projects List Element */}



<div className='flex flex-col items-center justify-center min-h-screen min-w-full rounded-tl-[68px] rounded-tr-[68px] pt-[100px] py-[80px] bg-white gap-24'>
  <div className='inline-flex justify-center items-start gap-36'>
    <div className='inline-flex flex-col justify-start items-center gap-4'>
      <div className='justify-start text-black text-3xl font-bold font-sora leading-10'>Projects Made</div>
      <div className='w-36 h-36 px-8 py-14 rounded-[71.23px] outline-[18.08px] outline-offset-[-18.08px] outline-[#2454D1] inline-flex flex-col justify-center items-center gap-2.5'>
        <div className='justify-start text-black text-3xl font-semibold font-sora leading-9'>12/∞</div>
      </div>
    </div>
    <div className='inline-flex flex-col justify-start items-center gap-4'>
      <div className='justify-start text-black text-3xl font-bold font-sora leading-10'>DSA Problems Solved</div>
      <div className='w-36 h-36 px-8 py-14 rounded-[71.23px] outline-[18.08px] outline-offset-[-18.08px] outline-[#7432BE] inline-flex flex-col justify-center items-center gap-2.5'>
        <div className='justify-start text-black text-3xl font-semibold font-sora leading-9'>760</div>
      </div>
    </div>
    <div className='inline-flex flex-col justify-start items-center gap-4'>
      <div className='justify-start text-black text-3xl font-bold font-sora leading-10'>Designs Made</div>
      <div className='w-37 h-37 px-8 py-14 rounded-[71.23px] outline-[18.08px] outline-offset-[-18.08px] outline-[#5467A1] inline-flex flex-col justify-center items-center gap-2.5'>
        <div className='justify-start text-black text-3xl font-semibold font-sora leading-9'>150/∞</div>
      </div>
    </div>
  </div>
  <div className='flex flex-col items-center justify-center gap-16'>
    <div className='flex items-center gap-4'>
      <div className='justify-start text-colors-neutral-950 text-3xl font-semibold font-sora leading-9'> Filter: </div>
      <ExploreButton label="Smaller" name={"Skill"} showIcon={false} width={'8vw'}/>
      <ExploreButton label="Smaller" name={"Category"} showIcon={false} width='10vw'/>
      <ExploreButton label="Smaller" name={"Sort By"} showIcon={false} width='10vw'/>
    </div>
    <div className='flex flex-col items-center gap-8'>
    <ProjectCard/>
    <ProjectCard dir='card-reverse' image={Train}/>
    <ProjectCard/>
    <ProjectCard dir='card-reverse' image={Train}/>
    </div>
    <div className='inline-flex justify-start items-start gap-20'>
      <span class="w-8 h-8 bg-[#363C43] rounded-full"></span>
      <span class="w-8 h-8 bg-[#D9D9D9] rounded-full"></span>
      <span class="w-8 h-8 bg-[#D9D9D9] rounded-full"></span>
    </div>
  </div>
</div>



{/* Contact Element */}




<div className='flex w-full px-32 py-64 relative bg-[#1B1F23] flex-col justify-center items-center gap-16 overflow-hidden' style={{ boxShadow: 'inset 0 0 72px 10px rgba(0, 0, 0, 0.25)',}}>
  <div className=' relative z-10 justify-start text-white text-[40px] font-bold font-sora leading-[44px]'>Dreaming something?, Lemme make it for you !</div>
    <div className=' relative flex items-center justify-center gap-8 z-10'>
      <ExploreButton name={"Hire Me Now !"} iconName={"arrow-redo-outline"}/>
      <PurpleButton name={"Let's Collaborate"} iconName={"arrow-redo-outline"}/>
    </div>
    <img
src={Constellation}
alt='background'
className='fixed top-0 left-0 w-full h-full object-cover opacity-[0.03] z-0 pointer-events-none'
/>
</div>



{/* Footer Element */}




<div className='relative w-full'>
  <img src={WizPeek} alt='Wiz Peek' className="w-64 h-64 absolute right-0 bottom-43 z-20" />
    <Footer />
  </div>
</div>
  )
}
