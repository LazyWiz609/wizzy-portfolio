import React from 'react'
import './Buttons.css';

export default function LinkedinButton({label, scale = 1}) {
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
    <a href='https://www.linkedin.com/in/priyanshuwiz/' style={{textDecoration: 'none'}}>
      <button className="linkedin-btn"  style={scaledStyle}>
        <ion-icon name="logo-linkedin" className="linkedin-icon-size"  style={iconStyle}></ion-icon>
            LinkedIn
        </button>
        </a>
    </>
  )
}
