import React from 'react';

export default function ExploreButton({ label, scale = 1, name, iconName, showIcon = true, width = 'auto' }) {
  const scaledStyle = {
    padding: `${10.118 * scale}px ${15.176 * scale}px`,
    fontSize: `${17.706 * scale}px`,
    gap: `${10.118 * scale}px`,
    width: `${width}`,
  };

  const iconStyle = {
    fontSize: `${24 * scale}px`,
  };

  return (
    <a href='/about' className='no-underline'>
      <button
        style={scaledStyle}
        className={`
          flex items-center justify-center
          border-[1.897px] border-[#5467A1]
          bg-[#D2DDEB] text-[#363C43]
          font-[400] leading-[25.294px] font-[Rubik]
          shadow-md transition-all duration-150 ease-in-out
          hover:border-[1.5px] hover:border-[#728EBF] hover:bg-[#B2C7DE] hover:text-[#44505A]
          active:border-[1.5px] active:border-[#D2DDEB] active:bg-[#3E496A] active:text-[#F4F6F7]
        `}
      >
        {showIcon && (
          <ion-icon
            name={iconName ?? 'call'}
            className="text-[24px]"
            style={iconStyle}
          ></ion-icon>
        )}
        {name ?? 'Contact'}
      </button>
    </a>
  );
}
