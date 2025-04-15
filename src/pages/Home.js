import React from 'react';
import { Link } from 'react-router-dom';
import Homeimg from "../images/charatrans.png";
import ExploreButton from '../components/ExploreButton';
import LinkedinButton from '../components/LinkedinButton';
import GithubButton from '../components/GithubButton';
import './Home.css';
import '../components/DesignSystem.css'

export default function Home() {
  return (
    <div className='section-1'>
        <div className='jumbo'>
        <div className='jumbo-left'>
            <div>
                <img src={Homeimg} alt='LazyChara' className="home-img"/>
            </div>

            <div className='colorboxes'>
                <div className='bluebox'>
                </div>
                <div className='purplebox'>
                </div>
            </div>
        </div>
            <div className='jumbo-right'>
                <div className='title-text'>
                    <div className='title-heading-d'>Hi,</div>
                    <div className='title-heading-d'>I'm Lazy Wiz</div>
                </div>
                <div className='title-below-text'>
                    <div className='title-med-d' style={{fontWeight: 400}}>Web / Full-Stack Developer with little bit of everything.</div>
                    <div className="buttons">
                            <div className="github-icon">
                            <GithubButton/>
                        </div>
                        <div className="linkedin-icon">
                            <LinkedinButton/>
                        </div>
                        <div className="explore-icon">

                            <ExploreButton/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrow-down'>
            <ion-icon name="arrow-down-outline" style={{color:'white', fontSize: '28px'}}></ion-icon>
            </div>
        </div>
    </div>
  )
}
