import React from 'react'
import logo from '../../../logo.svg';

export default function TopMenu({ toggleMenu, toggleModal } = { }) {
    return (
        <div className="app-menu-top">
            <div className="logo"><a href="https://glasswallsolutions.com/" target="blank" ><img src={logo} alt="Logo" height="100" /></a></div>
            <nav>
                <button className="menu-button" onClick={toggleMenu}></button>
                {/*<button className="info-button" onClick={toggleModal} style={{ display: "none" }}></button>*/}
                <ul className="app-menu-list">
                    <li>
                        <a href="https://engineering.glasswallsolutions.com/docs/products/cloud-sdk/sample-files" target="_blank" rel="noopener noreferrer">
                            Sample Files
                        </a>
                    </li>
                    <li><a href="https://glasswallsolutions.com/file-drop/">Product Info</a></li>
                    {/* <li><a href="https://glasswall-store.com/">Visit Store</a></li> */}
                    <li><a href="https://glasswallsolutions.com/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
