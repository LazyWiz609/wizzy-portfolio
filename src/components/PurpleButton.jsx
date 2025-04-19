import React from 'react';

export default function PurpleButton({ label, scale = 1, name, iconName }) {
  const scaledStyle = {
    padding: `${10.118 * scale}px ${15.176 * scale}px`,
    fontSize: `${17.706 * scale}px`,
    gap: `${10.118 * scale}px`,
  };

  const iconStyle = {
    fontSize: `${24 * scale}px`,
  };

  const iconTitle = { title: name ?? 'Contact' };
  const ionIco = { title: iconName ?? 'call' };

  return (
    <a href="/about" className="no-underline">
      <button
        style={scaledStyle}
        className={`
          flex items-center justify-center
          border border-[#A066E8]
          bg-[#D4BBF7] text-[#363C43]
          font-[400] font-[Rubik] leading-[25.294px]
          shadow-md transition-all duration-150 ease-in-out
          hover:border-[#8844D9] hover:bg-[#BA8FF1] hover:text-[#44505A]
          active:border-[#D2DDEB] active:bg-[#51267D] active:text-[#F4F6F7]
        `}
      >
        <ion-icon
          name={ionIco.title}
          className="text-[24px]"
          style={iconStyle}
        ></ion-icon>
        {iconTitle.title}
      </button>
    </a>
  );
}
