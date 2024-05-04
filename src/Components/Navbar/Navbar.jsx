import React from 'react'
import './Navbar.css'
export const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>{props.siteName}</h1>
            </div>
            <div className="navmenu">
                {props.links.map((links,idx)=> 
                    <a href="" key={idx}>{links}</a>
                )}
            </div>
        </div>
    )
}
