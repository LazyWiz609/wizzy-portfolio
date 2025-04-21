import React from 'react'
import Chara from '../images/charatrans.png'
import GithubButton from '../components/GithubButton'
import LinkedinButton from '../components/LinkedinButton'
import ExploreButton from '../components/ExploreButton'
import PurpleButton from '../components/PurpleButton'
import Linkedin from '../images/linkedin.svg'
import Github from '../images/github.svg'
import Gmail from '../images/mail.svg'
import Spotify from '../images/spotify.png'
import Luffy from '../images/luffy.png'
import VsCode from '../images/vscode.png'
import RubikCube from '../images/rubikcube.png'
import Me from '../images/me.png'
import Train from '../images/train-2.png'
import Toy from '../images/toy.png'
import Think from '../images/think.png'
import BarImg from '../images/charabar.png'
import Sitting from '../images/sitting-chara.png'
import Constellation from '../images/constellation.png';
import WizPeek from '../images/wizpeek.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      {/* Section-1 */}


      <div className='flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen relative'>
  <div className='flex flex-col md:flex-row items-center justify-center w-[90vw] md:w-[70vw] gap-12'>

    {/* Character Section - Hidden on small screens */}
    <div className='hidden md:flex flex-col items-center'>
      <img src={Chara} alt='LazyChara' className="w-[251.25px] h-auto" />
      <div className='flex gap-4 mt-4'>
        <div className='w-[38px] h-[38px] rounded-[10px] border-[3px] border-[#223E86] bg-[#66A9F4]'></div>
        <div className='w-[38px] h-[38px] rounded-[10px] border-[3px] border-[#51267D] bg-[#BA8FF1]'></div>
      </div>
    </div>

    {/* Intro Text Section */}
    <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6'>
      <div className='flex flex-col gap-1'>
        <div className='text-white text-[36px] md:text-[44px] font-bold font-sora leading-[44px]'>Hi,</div>
        <div className='text-white text-[36px] md:text-[44px] font-bold font-sora leading-[44px]'>I’m Lazy Wiz</div>
      </div>
      <div className='flex flex-col items-center md:items-start gap-6'>
        <div className='max-w-[90vw] md:w-[575px] text-white text-[18px] md:text-[24px] font-normal font-sora leading-[28px]'>
          Web / Full-Stack Developer with a little bit of everything.
        </div>
        <div className='max-w-[90vw] md:w-[575px] text-white text-[18px] md:text-[24px] font-semibold font-sora leading-[28px]'>
          250+ Designs Made | 5 ⭐ @ Hackerrank
        </div>
        <div className='flex justify-center md:justify-start items-center gap-6 md:gap-12'>
          <GithubButton />
          <LinkedinButton />
          <div className="hidden lg:block">
            <ExploreButton name={"Resume"} iconName={"document-text-outline"} />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Down Arrow */}
  <div className='absolute bottom-[32px]'>
    <ion-icon name="arrow-down-outline" style={{ color: 'white', fontSize: '28px' }}></ion-icon>
  </div>
</div>




        {/* Section-2 */}

        <div className='flex flex-col items-center justify-center min-h-screen min-w-full rounded-tl-[68px] rounded-tr-[68px] pt-[100px] py-[80px] bg-white gap-24'>
        {/* Card */}
        <div className='flex justify-between px-[40px] py-[40px] bg-color-background-default rounded-3xl shadow-[5.721649646759033px_4.577319622039795px_15.105154991149902px_0px_rgba(0,0,0,0.25)] outline-1 outline-offset-[-1.14px] outline-color-border-strong gap-16'>
          <div className='self-stretch inline-flex flex-col justify-start items-start gap-3'>
            <div className='self-stretch inline-flex flex-col justify-start items-start'>
                <div className='justify-start text-black text-2xl font-semibold font-sora leading-loose'>Priyanshu Nandan</div>
                <div className='self-stretch justify-start text-black text-lg font-normal font-rubik leading-7'>(CEO of Anime)</div>
            </div>
              <div className='self-stretch justify-start text-black text-[16px] font-normal font-rubik'>Mob: 9599144299</div>
              <div className='self-stretch justify-start text-black text-[16px] font-normal font-rubik'>lazywiz609@gmail.com</div>
              <div className='flex justify-start items-center gap-4 mt-2'>
                <a href="https://github.com/LazyWiz609" target="_blank" rel="noopener noreferrer">
                  <div className="flex p-[10px] justify-center items-center border-[2.612px] border-[#3E496A] bg-[#292F42] hover:border-[#292F42] hover:bg-[#3E496A] active:border-[#292F42] active:bg-[#1B1F23]">
                    <img src={Github} alt="github" className="w-[24px] h-[22px]" />
                  </div>
                </a>
                <Link to="/about">
                  <div className="flex p-[10px] justify-center items-center border-[2.469px] border-[#7F1D1D] bg-[#EF4444] hover:border-[#EF4444] hover:bg-[#F87171] active:border-[#F87171] active:bg-[#991B1B]">
                    <img src={Gmail} alt="gmail" className="w-[24px] h-[22px]" />
                  </div>
                </Link>
                <a href="https://www.linkedin.com/in/priyanshuwiz/" target="_blank" rel="noopener noreferrer">
                  <div className="flex p-[10px] justify-center items-center border-[2.612px] border-[#024E79] bg-[#0072B1] hover:border-[#0072B1] hover:bg-[#024E79] active:border-[#054F78] active:bg-[#033F61]">
                    <img src={Linkedin} alt="linkedin" className="w-[24px] h-[22px]" />
                  </div>
                </a>
              </div>
          </div>
            <img src={Me} alt='me' className='w-60 h-60 rounded-[120.73px]'></img>
          </div>

        {/* Stats */}
        <div className='flex flex-col items-center justify-center gap-16 w-[80vw]'>
          <div className='flex flex-col justify-center gap-6 md:flex-row lg:justify-between md:gap-14'>
            <div className='flex justify-center items-center gap-7'>
              <span className='justify-start text-[#292F42] text-[20px] font-normal font-rubik leading-9'>Design:</span>
              <div className="w-80 h-7 bg-[#A066E8]"></div>
            </div>
            <div className='flex justify-center items-center gap-7'>
            <span className='justify-start text-[#292F42] text-[20px] font-normal font-rubik leading-9'>Dev:</span>
            <div className="w-70 h-7 bg-[#66A9F4]"></div>
            </div>
          </div>
          <div className='flex justify-center flex-col gap-8 md:flex-row md:gap-32'>
            <div className='flex items-center gap-4'>
              <img src={Spotify} alt='spotify'/>
              <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">2970+ Minutes Listened</div>
            </div>
            <div className='flex items-center gap-4'>
              <img src={Luffy} alt='luffy'/>
              <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">265+ Anime Watched</div>
            </div>
            <div className='flex items-center gap-4'>
              <img src={VsCode} alt='vscode'/>
              <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">1M+ Lines of Code Written</div>
            </div>
          </div>
            <span className="text-black text-3xl font-semibold font-sora leading-9 text-center">"I love to make things that people enjoy more than just visiting. Experiences that can be felt than seen."</span>
          <div className="text-white text-3xl font-semibold font-sora leading-9">⭐⭐⭐⭐⭐</div>
        </div>
        </div>

        {/* Section-3 */}

    <div className='flex flex-col min-h-[70vh] py-[40px] items-center relative'>
      <div className="relative w-[80vw] mx-auto h-10 flex items-center justify-between">
        <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-300 transform -translate-y-1/2 z-0"></div>
        <div className="w-8 h-8 rounded-full bg-[#121418] z-10"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 z-10"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 z-10"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 z-10"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 z-10"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 z-10"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 z-10"></div>
      </div>
      <div className='flex justify-end items-center gap-28 mt-[64px] px-[5%] md:px-[5%] lg:px-0'>
      <div className='inline-flex flex-col justify-start items-start gap-12 md:justify-start'>
        <div className='self-stretch inline-flex flex-col justify-start items-start gap-6'>
          <div className='self-stretch justify-start text-white text-3xl font-semibold font-sora leading-9 text-center md:text-left'>2015 - Spark </div>
          <div className='self-stretch justify-start text-white text-lg font-normal font-rubik leading-7 text-center md:text-left '>At 10, I launched my first YouTube channel to teach others how to embed games on Blogger. <br/>Along the way, I stumbled into HTML and CSS—my first taste of creating something from nothing.</div>
        </div>
        <div className='inline-flex items-center gap-6 justify-start md:justify-center'>
          <ExploreButton name={"Read the full Blog"} iconName={"arrow-redo-outline"}/>
          <PurpleButton name={"Give a feedback"} iconName={"arrow-redo-outline"}/>
        </div>
      </div>
      <img src={RubikCube} alt="rubik-cube" className='hidden md:block'/>
      </div>

    <div className="absolute bottom-0 w-full justify-between items-end hidden md:flex">
      <img src={Toy} alt="toy" className="h-auto" />
      <img src={Train} alt="train" className="h-auto"/>
      <img src={Think} alt="thinking" className="h-auto" />
    </div>
    </div>

    {/* Section - 4 */}
      <div className='relative flex items-center justify-center min-h-screen min-w-full rounded-tl-[68px] rounded-tr-[68px] pt-[100px] py-[80px] bg-white gap-24'>
        <div className='relative self-stretch inline-flex flex-col justify-start items-start gap-8'>
          <div className='self-stretch justify-start text-black text-4xl font-bold font-sora leading-[56px]'>Skills</div>
            <div className='inline-flex flex-col justify-start items-start gap-4'>
              <div className='self-stretch justify-start text-black text-[24px] font-semibold font-sora leading-9'>Design</div>
              <div className='inline-flex justify-start items-end gap-12'>
                <img src='/icons/ps.png' alt="photoshop" className='scale-75'/>
                <img src='/icons/figma.png' alt="figma" className='scale-75'/>
                <img src='/icons/ai.png' alt='illustrator' className='scale-75'/>
                <img src='/icons/canva.png' alt='canva' className='scale-75'/>
                <img src='/icons/blender.png' alt='blender' className='scale-75'/>
                <img src='/icons/lightroom.png' alt='lightroom' className='scale-75'/>
              </div>
            </div>
            <div className='inline-flex flex-col justify-start items-start gap-4'>
              <div className="self-stretch justify-start text-black text-[24px] font-semibold font-sora leading-9">Coding</div>
                <div className='inline-flex justify-start items-end gap-12 flex-wrap content-end'>
                  <img src='/icons/c++.png' alt='c++' className='scale-75'/>
                  <img src='/icons/html5.png' alt='html' className='scale-75'/>
                  <img src='/icons/css.svg' alt='css' className='scale-75'/>
                  <img src='/icons/js.png' alt='js' className='scale-75'/>
                  <img src='/icons/python.png' alt='python' className='scale-75'/>
                  <img src='/icons/java.png' alt='java' className='scale-75'/>
                </div>
                <div className='inline-flex justify-start items-end gap-12 '>
                  <img src='/icons/mongo.png' alt='mongo' className='scale-75'/>
                  <img src='/icons/express.png' alt='express' className='scale-75'/>
                  <img src='/icons/react.png' alt='raect' className='scale-75'/>
                  <img src='/icons/mysql.png' alt='mysql' className='scale-75'/>
                  <img src='/icons/nodejs.png' alt='nodejs' className='scale-75'/>
                  <img src='/icons/php.png' alt='php' className='scale-75'/>
                </div>
            </div>
            <div className='self-stretch relative flex flex-col justify-start items-start gap-4 z-0'>
            <div className="self-stretch justify-start text-black text-[24px] font-semibold font-sora leading-9">Extras</div>
              <div className='self-stretch inline-flex justify-start items-end gap-14'>
                <div className='inline-flex flex-col justify-start items-start gap-4'>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Leadership:  ⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Story Telling: ⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Growth Mindset: ⭐⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Problem Solving: ⭐⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Adaptability: ⭐⭐⭐⭐⭐</div>
                </div>
                <div className='inline-flex flex-col justify-start items-start gap-4'>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Teamwork: ⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Communication: ⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Presentation: ⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Emotional Intelligence: ⭐⭐⭐⭐⭐</div>
                  <div className="justify-start text-black text-[16px] font-semibold font-sora leading-7">Time Management: ⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
        </div>
        <img src={BarImg} alt='chara-bar'/>
      </div>

{/* Many More to Come */}

      <div className='relative flex flex-col items-center justify-start min-h-screen py-32 overflow-hidden'>
        <div className='flex flex-col absolute top-1/5 items-center gap-2'>
          <div className="relative inline-block">
      {/* <!-- Glowing text behind --> */}
            <div className="absolute inset-0 text-white text-5xl font-bold font-sora leading-[56px] blur-sm opacity-60">
              One Star at a Time...
            </div>
            
            {/* <!-- Main visible text --> */}
            <div className="relative text-white text-5xl font-bold font-sora leading-[56px]">
              One Star at a Time...
            </div>
          </div>

          <div className='relative'>
            <div className='absolute inset-0 text-white text-4xl font-normal font-sora leading-10 blur-sm opacity-60'>
            Still Expanding
            </div>
            <div className='relative text-white text-4xl font-normal font-sora leading-10'>
            Still Expanding
            </div>
          </div>
        </div>
          <div className='absolute bottom-0'>
            <div className='absolute blur-sm'>
                <img src={Sitting} alt='sitting-chara' className='w-[265.5px] h-[356.25px]'/>
            </div>
            <div className='relative'>
                <img src={Sitting} alt='sitting-chara' className='w-[265.5px] h-[356.25px]'/>
            </div>
          </div>
          <img src="/constellations/const1.png" className="absolute top-[40%] right-[20%] w-[250px] opacity-70" />
          <img src="/constellations/const2.png" className="absolute -top-[10%] -right-[5%] w-[320px] opacity-60" />
          <img src="/constellations/const2.png" className="absolute -top-[6%] left-[15%] w-[320px] opacity-60" />
          <img src="/constellations/const3.png" className="absolute -bottom-[15%] -left-[8%] w-[290px] opacity-50" />
          <img src="/constellations/const3.png" className="absolute -top-[15%] -left-[8%] w-[290px] opacity-50" />
          <img src="/constellations/const4.png" className="absolute -bottom-[10%] right-[5%] w-[240px] opacity-75" />
          <img src="/constellations/const5.png" className="absolute top-[50%] left-[12%] w-[265px] opacity-40" />
          <img src="/constellations/const5.png" className="absolute top-[30%] -right-[10%] w-[265px] opacity-40" />
      </div>

      {/* Contact Me */}
      <div className='flex w-full px-32 py-64 relative bg-[#1B1F23] flex-col justify-center items-center gap-16 overflow-hidden' style={{ boxShadow: 'inset 0 0 72px 10px rgba(0, 0, 0, 0.25)',}}>
        <div className=' relative z-10 justify-start text-white text-[40px] font-bold font-sora leading-[44px]'>Wanna Collab, Hire or Just Chat ?</div>
          <div className=' relative flex items-center justify-center gap-8 z-10'>
            <ExploreButton name={"Hire Me Now !"} iconName={"arrow-redo-outline"}/>
            <PurpleButton name={"Let's Collaborate"} iconName={"arrow-redo-outline"}/>
          </div>
          <img
      src={Constellation}
      alt='background'
      className='fixed top-0 left-0 w-full h-full object-cover opacity-[0.02] z-0 pointer-events-none'
      />
      </div>

      {/* Footer */}
      <div className='relative w-full'>
        <img src={WizPeek} alt='Wiz Peek' className="w-64 h-64 absolute right-0 bottom-43 z-20" />
          <Footer />
        </div>
  </div>
  )
}
