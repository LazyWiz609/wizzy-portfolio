import React from 'react';
import './Buttons.css';

export default function ExploreButton({label, scale = 1, name, iconName}) {
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
    <>
    <a href='/about' style={{textDecoration: 'none'}}>
    <button className="explore-btn" style={scaledStyle}>
    <ion-icon name={ionIco.title} className="explore-icon-size" style={iconStyle}></ion-icon>
        {iconTitle.title}
    </button>
    </a>
    </>
  )
}