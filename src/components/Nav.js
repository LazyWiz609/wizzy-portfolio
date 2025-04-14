import React, {useState} from "react";
import './Nav.css';

function Nav(props){
    const [bold, setBold] = useState({fontWeight:400});
    return(
    <div className="nav">
            <div className="name">
                LazyWiz
            </div>

            <div className="menu">
            <ul>
                <li><a href='#' style={bold}>Home</a></li>
                
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Blog</a></li>
                </ul>
            </div>

            <div className="switch">
                <button>Switch</button>
            </div>
    </div>
    )
}

export default Nav;