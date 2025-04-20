import React from 'react'
import Flying from '../images/flying.png'
import PurpleButton from '../components/PurpleButton'
import ExploreButton from '../components/ExploreButton'

export default function Blog() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-6 min-h-screen'>

        <div className='relative'>
            <div className='absolute inset-0 text-center justify-start text-white text-5xl font-bold font-sora leading-[56px] blur-sm opacity-60'>
            Coming Soon..
            </div>
            <div className='relative text-center justify-start text-white text-5xl font-bold font-sora leading-[56px]'>
            Coming Soon..
            </div>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 text-center justify-start text-white text-4xl font-normal font-sora leading-10 blur-sm opacity-60'>
            Wanna play a sweet game ?
            </div>
            <div className='relative text-center justify-start text-white text-4xl font-normal font-sora leading-10'>
            Wanna play a sweet game ?
            </div>
          </div>
          <PurpleButton name={"Yeah Sure !"} iconName={"game-controller-outline"}/>
      </div>
    </div>
  )
}
