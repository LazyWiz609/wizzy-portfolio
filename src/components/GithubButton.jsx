import React from 'react';

export default function GithubButton({ label, scale = 1 }) {
  const scaledStyle = {
    padding: `${10.118 * scale}px ${15.176 * scale}px`,
    fontSize: `${17.706 * scale}px`,
    gap: `${10.118 * scale}px`,
  };

  const iconStyle = {
    fontSize: `${24 * scale}px`,
  };

  return (
    <a href='https://github.com/LazyWiz609' className='no-underline'>
      <button
        style={scaledStyle}
        className={`
          flex items-center justify-center
          border-[1.265px] border-[#3E496A]
          bg-[#292F42] text-[#F4F6F7]
          font-[400] font-[Rubik] leading-[25.294px]
          shadow-md transition-all duration-150 ease-in-out
          hover:border-[#292F42] hover:bg-[#3E496A]
          active:border-[#292F42] active:bg-[#1B1F23]
        `}
      >
        <ion-icon
          name="logo-github"
          className="text-[24px]"
          style={iconStyle}
        ></ion-icon>
        Github
      </button>
    </a>
  );
}
