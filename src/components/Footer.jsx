import React from 'react'
import './Footer.css';
import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Gmail from '../images/mail.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='top-half'>
            <div className="icons-align">
                <a href='https://www.linkedin.com/in/priyanshuwiz/'>
                <div className="linkedin-button">
                <img src={Linkedin} alt='linkedin' className='linked'></img>
                </div>
                </a>
                <a href='https://github.com/LazyWiz609'>
                <div className="github-btn">
                <img src={Github} alt='linkedin' className='github'></img>
                </div>
                </a>
                <Link to='/about'>
                <div className="gmail-btn">
                <img src={Gmail} alt='linkedin' className='gmail'></img>
                </div>
                </Link>
            </div>
            <div className="footer-text title-smol-d">
            Ph. : 9599144299 |  instagram/lazywiz609
            </div>
        </div>
        <div className="bottom-text body-sm">
        © Priyanshu Nandan, All Rights Reserved
        </div>
    </div>
  )
}
