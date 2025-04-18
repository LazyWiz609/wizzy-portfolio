import React from 'react'
import './Buttons.css';


export default function GithubButton({label, scale = 1}) {
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
    <a href='https://github.com/LazyWiz609' style={{textDecoration: 'none'}}>
    <button className="git-btn" style={scaledStyle}>
    <ion-icon name="logo-github" className="git-icon-size" style={iconStyle}></ion-icon>
    Github
    </button>
    </a>
    </>
  )
}
