import React from 'react';
import ExploreButton from './ExploreButton';
import GithubButton from './GithubButton';
import FallbackImage from '../images/car.png';

export default function ProjectCard({ dir = 'card', image = FallbackImage }) {
  const isReversed = dir === 'card-reverse';

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? 'md:flex-row-reverse' : ''
      } bg-[#F3F6FA] border border-[#B2C7DE] rounded-[20px] p-8 md:p-12 items-center gap-8 md:gap-24 self-stretch w-full md:w-[70vw] justify-center`}
    >
      <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
        <div className="text-[#363C43] font-semibold text-2xl md:text-2xl w-full text-center md:text-left">
          AI ChatBot Project
        </div>
        <div className="text-[#44505A] text-base leading-relaxed text-center md:text-left">
          Did you know I knew AI? Nope right.. See here :) I used blah blah blah here.. & shiiiiesh!
        </div>
        <div className="w-full flex flex-col items-center md:items-start gap-4 md:gap-6">
          {/* Only show GitHub button on small screens */}
          <div className="block sm:hidden">
            <GithubButton label="Smaller" scale={0.7} />
          </div>

          {/* Show both buttons on sm and up */}
          <div className="hidden sm:flex gap-4 md:gap-6">
            <GithubButton label="Smaller" scale={0.7} />
            <ExploreButton label="Smaller" scale={0.7} name="Explore" iconName="arrow-redo-outline" />
          </div>
        </div>

      </div>

      {/* Image Section (hidden on small screens) */}
      <div className="hidden md:block card-right aspect-[210.61/253.691] w-[15.66rem] md:w-[15.66rem] sm:w-[12rem] xs:w-[10rem] scale-x-[-1]">
        <img
          src={image}
          alt="Car"
          className="w-full h-full object-contain"

        />
      </div>
    </div>
  );
}
