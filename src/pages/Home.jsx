import React from 'react';
import Homeimg from "../images/charatrans.png";
import ExploreButton from '../components/ExploreButton';
import LinkedinButton from '../components/LinkedinButton';
import GithubButton from '../components/GithubButton';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import './Home.css';
import '../components/DesignSystem.css';
import Train from '../images/train.png';
import Cup from '../images/cup.png';
import PurpleButton from '../components/PurpleButton';

export default function Home() {
  return (
<div className='wrapper'>

    {/* Section-1 */}

    <div className='section-1'>
        <div className='jumbo'>
        <div className='jumbo-left'>

                <img src={Homeimg} alt='LazyChara' className="home-img"/>

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
        </div>
        <div className='arrow-down'>
            <ion-icon name="arrow-down-outline" style={{color:'white', fontSize: '28px'}}></ion-icon>
        </div>
    </div>

    {/* Section-2 */}

    <div className="section-2">
            <div className="title-heading-d" style={{color:'#1B1F23', margin: '32px 0px 64px 0px'}}>Projects</div>
        <div className='lineAdder'>
                <div className="card-separator">
                    <div className="cardWrap">
                    <ProjectCard/>
                    <div className="lineDot">
                    <span className="dot"></span>
                    <div className="line"></div>
                    </div>
                    </div>
                    <div className="cardWrap">
                    <ProjectCard dir='card-reverse' image={Train}/>
                    <span className="dot"></span>
                    <div className="line"></div>
                    </div>
                    <div className="cardWrap">
                    <ProjectCard/>
                    <span className="dot"></span>
                    <div className="line"></div>
                    </div>
                </div>

        </div>
    </div>

    {/* Section-3 */}

    <div className="section-3">
        <div className="col-left">
            <div className='text-sec-3'>
                <div className="title-heading-d">Have a Cup of Coffee !</div>
                <div className="title-med-d">& Stay a bit more please 🥺</div>
            </div>
            <div className="sec-3-btn">
                <ExploreButton name={'Blogs'} iconName={'book-outline'}/>
                <PurpleButton name={'I still wanna leave !'} iconName={'arrow-redo-outline'}/>
            </div>
        </div>
        <div className="col-right">
            <img src={Cup} alt='Cup' className='cupimg'></img>
        </div>
    </div>
    <Footer/>
</div>
  )
}
