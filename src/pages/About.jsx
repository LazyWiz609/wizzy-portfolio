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
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      {/* Section-1 */}


        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-between min-h-screen w-[70vw]'>
              <div className='flex flex-col items-center'>
              <img src={Chara} alt='LazyChara' className="w-[251.25px] h-[378.75px]"/>
              <div className='flex gap-4'>
                <div className='w-[38.274px] h-[38.274px] rounded-[9.568px] border-[3.189px] border-[#223E86] bg-[#66A9F4]'></div>
                <div className='w-[38.274px] h-[38.274px] rounded-[9.568px] border-[3.189px] border-[#51267D] bg-[#BA8FF1]'></div>
              </div>
              </div>
              <div>
                <div className='self-stretch h-28 flex flex-col justify-center items-start gap-2'>
                  <div className='self-stretch justify-start text-white text-[44px] font-bold font-sora leading-[44px]'>Hi,</div>
                  <div className='self-stretch justify-start text-white text-[44px] font-bold font-sora leading-[44px]'>I’m Lazy Wiz</div>
                </div>
                <div className='self-stretch inline-flex flex-col justify-start items-start gap-9 mt-[12px]'>
                  <div className='w-[575px] justify-start text-white text-[24px] font-normal font-sora leading-[28px]'>Web / Full-Stack Developer with a little bit of everything.</div>
                  <div className='w-[575px] justify-start text-white text-[24px] font-semibold font-sora leading-[28px]'>250+ Designs Made | 5 ⭐ @ Hackerrank</div>
                  <div className='flex justify-start items-center gap-12'>
                    <GithubButton/>
                    <LinkedinButton/>
                    <ExploreButton name={"Resume"} iconName={"document-text-outline"}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute bottom-[32px]'>
            <ion-icon name="arrow-down-outline" style={{color:'white', fontSize: '28px'}}></ion-icon>
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
              <div className='self-stretch justify-start text-black text-xl font-normal font-rubik'>Mob: 9599144299</div>
              <div className='self-stretch justify-start text-black text-xl font-normal font-rubik'>lazywiz609@gmail.com</div>
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
          <div className='flex justify-center gap-32'>
            <div className='flex justify-between items-center gap-7'>
              <span className='justify-start text-[#292F42] text-[20px] font-normal font-rubik leading-9'>Design:</span>
              <div className="w-80 h-7 bg-[#A066E8]"></div>
            </div>
            <div className='flex justify-between items-center gap-7'>
            <span className='justify-start text-[#292F42] text-[20px] font-normal font-rubik leading-9'>Dev:</span>
            <div className="w-70 h-7 bg-[#66A9F4]"></div>
            </div>
          </div>
          <div className='flex justify-center gap-32'>
            <div className='flex items-center gap-4'>
              <img src={Spotify} alt='spotify'/>
              <div className="justify-start text-black text-[16px] font-semibold font-['Sora'] leading-7">2970+ Minutes Listened</div>
            </div>
            <div className='flex items-center gap-4'>
              <img src={Luffy} alt='luffy'/>
              <div className="justify-start text-black text-[16px] font-semibold font-['Sora'] leading-7">265+ Anime Watched</div>
            </div>
            <div className='flex items-center gap-4'>
              <img src={VsCode} alt='vscode'/>
              <div className="justify-start text-black text-[16px] font-semibold font-['Sora'] leading-7">1M+ Lines of Code Written</div>
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
      <div className='flex justify-end items-center gap-28 mt-[64px]'>
      <div className='inline-flex flex-col justify-start items-start gap-12'>
        <div className='self-stretch inline-flex flex-col justify-start items-start gap-6'>
          <div className='self-stretch justify-start text-white text-3xl font-semibold font-sora leading-9'>2015 - Spark </div>
          <div className='self-stretch justify-start text-white text-lg font-normal font-rubik leading-7'>At 10, I launched my first YouTube channel to teach others how to embed games on Blogger. <br/>Along the way, I stumbled into HTML and CSS—my first taste of creating something from nothing.</div>
        </div>
        <div className='inline-flex justify-start items-center gap-6'>
          <ExploreButton name={"Read the full Blog"} iconName={"arrow-redo-outline"}/>
          <PurpleButton name={"Give a feedback"} iconName={"arrow-redo-outline"}/>
        </div>
      </div>
      <img src={RubikCube} alt="rubik-cube" />
      </div>

    <div className="absolute bottom-0 w-full flex justify-between items-end">
      <img src={Toy} alt="toy" className="h-auto" />
      <img src={Train} alt="train" className="h-auto"/>
      <img src={Think} alt="thinking" className="h-auto" />
    </div>
    </div>
    </div>
  )
}
