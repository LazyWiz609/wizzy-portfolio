import React from 'react'
import ExploreButton from './ExploreButton';
import GithubButton from './GithubButton';
// import Car from '../images/car.png';
import FallbackImage from '../images/car.png';

export default function ProjectCard({ dir = 'card', image = FallbackImage }) {
  const isReversed = dir === 'card-reverse';

  return (
    <div
      className={`flex ${
        isReversed ? 'flex-row-reverse' : ''
      } bg-[#F3F6FA] border border-[#B2C7DE] rounded-[20px] p-12 items-center gap-24 self-stretch w-[70vw]`}
    >
      <div className="flex flex-col items-start gap-8">
        <div className="text-[#363C43] font-semibold text-2xl">AI ChatBot Project</div>
        <div className="text-[#44505A] text-base leading-relaxed">
          Did you know I knew AI? Nope right.. See here :)
          I used blah blah blah here.. & shiiiiesh!
        </div>
        <div className="flex justify-start gap-6 w-full">
          <GithubButton label="Smaller" scale={0.7} />
          <ExploreButton label="Smaller" scale={0.7} name="Explore" iconName="arrow-redo-outline" />
        </div>
      </div>
      <div className="card-right">
        <img
          src={image}
          alt="Car"
          className="w-[250.61px] h-[113.691px] scale-x-[-1]"
          style={{ aspectRatio: '250.61 / 113.691' }}
        />
      </div>
    </div>
  );
}
