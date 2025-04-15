import React, {useState} from "react";
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';

function Nav(props){
    const location = useLocation();
    const [bold, setBold] = useState({fontWeight:400});
    return(
    <div className="nav">
            <div className="name">
                LazyWiz
            </div>

            <div className="menu">
            <ul>
                <li><Link to='/' style={location.pathname === '/' ? {fontWeight:700} : {fontWeight:400}}>Home</Link></li>
                <li><Link to='/projects' style={location.pathname === '/projects' ? {fontWeight:700} : {fontWeight:400}}>Projects</Link></li>
                <li><Link to='/about' style={location.pathname === '/about' ? {fontWeight:700} : {fontWeight:400}}>About</Link></li>
                <li><Link to='/blog' style={location.pathname === '/blog' ? {fontWeight:700} : {fontWeight:400}}>Blog</Link></li>
                </ul>
            </div>

            <div className="switch">
                <button>Switch</button>
            </div>
    </div>
    )
}

export default Nav;