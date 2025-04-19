import React from 'react';

export default function LinkedinButton({ label, scale = 1 }) {
  const scaledStyle = {
    padding: `${10.118 * scale}px ${15.176 * scale}px`,
    fontSize: `${17.706 * scale}px`,
    gap: `${10.118 * scale}px`,
  };

  const iconStyle = {
    fontSize: `${24 * scale}px`,
  };

  return (
    <a href="https://www.linkedin.com/in/priyanshuwiz/" className="no-underline">
      <button
        style={scaledStyle}
        className={`
          flex items-center justify-center
          border-[1.265px] border-[#024E79]
          bg-[#0072B1] text-[#F4F6F7]
          font-[400] font-[Rubik] leading-[25.294px]
          shadow-md transition-all duration-150 ease-in-out
          hover:border-[#0072B1] hover:bg-[#024E79]
          active:border-[#054F78] active:bg-[#033F61]
        `}
      >
        <ion-icon
          name="logo-linkedin"
          className="text-[24px]"
          style={iconStyle}
        ></ion-icon>
        LinkedIn
      </button>
    </a>
  );
}
