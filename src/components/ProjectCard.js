import React from 'react'
import './ProjectCard.css'
import ExploreButton from './ExploreButton';
import GithubButton from './GithubButton';
import Car from '../images/car.png';

export default function ProjectCard() {
  return (
    <div className='card'>
        <div className="card-left">
            <div className="title-med-d col-t-primary">AI ChatBot Project</div>
            <div className="body-lg col-t-secondary">Did you know I knew AI ? Nope right.. See here :)
            I used blah blah blah here..&  shiiiiesh !</div>
            <div className="button-sec-2">
                <GithubButton  label="Smaller" scale={0.7}/>
                <ExploreButton  label="Smaller" scale={0.7}/>
            </div>
        </div>
        <div className="card-right">
            <img src={Car} alt='Car' className='car-custom'/>
        </div>
    </div>
  )
}
