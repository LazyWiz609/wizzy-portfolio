import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

export default function ExploreButton({label, scale = 1}) {
    const scaledStyle = {
        padding: `${10.118 * scale}px ${15.176 * scale}px`,
        fontSize: `${17.706 * scale}px`,
        gap: `${10.118 * scale}px`,
      };
    
      const iconStyle = {
        fontSize: `${24 * scale}px`,
      };
  return (
    <>
    <a href='/about' style={{textDecoration: 'none'}}>
    <button className="explore-btn" style={scaledStyle}>
    <ion-icon name="call" className="explore-icon-size" style={iconStyle}></ion-icon>
        Contact
    </button>
    </a>
    </>
  )
}