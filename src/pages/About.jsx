import React from 'react'
import ConstructionImg from '../images/construction.png'
import ProjectCard from '../components/ProjectCard'
import Train from '../images/train.png';
import ExploreButton from '../components/ExploreButton';
export default function About() {
  return (
    <div>
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
    <div>
      <div>
        <div>
          <div></div>
          <div><div></div></div>
        </div>
        <div>
          <div></div>
          <div><div></div></div>
        </div>
        <div>
          <div></div>
          <div><div></div></div>
        </div>
      </div>
      <div>
        <div className='flex items-center gap-4'>
          <div className='justify-start text-colors-neutral-950 text-3xl font-semibold font-sora leading-9'> Filter: </div>
          <ExploreButton label="Smaller" name={"Skill"} showIcon={false}/>
          <ExploreButton label="Smaller" name={"Category"} showIcon={false}/>
          <ExploreButton label="Smaller" name={"Sort By"} showIcon={false}/>
        </div>
        <ProjectCard/>
        <ProjectCard dir='card-reverse' image={Train}/>
        <ProjectCard/>
        <ProjectCard dir='card-reverse' image={Train}/>
      </div>
    </div>
    </div>
  )
}
