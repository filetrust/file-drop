import React from 'react'
import logo from '../../../logo.svg';
import topMenu from '../../../data/topMenu.json';
import links from '../../../data/links.json';

export default function TopMenu({ toggleMenu, toggleModal } = { }) {
    return (
        <div className="app-menu-top">
            <div className="app-logo"><a href={links.glasswall} target="blank" ><img src={logo} alt="Logo" /></a></div>
            <nav>
                <button className="app-menu-button" onClick={toggleMenu}/>
                {/*<button className="app-menu-info-button" onClick={toggleModal} style={{ display: "none" }}></button>*/}
                <ul className="app-menu-list">
                    {topMenu.map(item => <li key={item}><a href={links[item]}>{item}</a></li>)}
                </ul>
            </nav>
        </div>
    )
}
