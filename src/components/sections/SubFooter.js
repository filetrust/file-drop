import React from 'react'
import logo from '../../logo.svg';
import mainMenu from '../../data/bottomMenu.json';
import socialMenu from '../../data/socialMenu.json';
import links from '../../data/links.json';


export default function SubFooter() {
    return <div className="app-footer">
        <div className="container app-footer-inner">
            <section className="app-footer-left">
                <div className="logo">
                    <a href={links.glasswall} target='gw-window'>
                        <img src={logo} alt="Logo" height="100"/>
                    </a>
                </div>
                <span className="copyright">� Copyright 2020 - Glasswall Solutions Ltd. All Rights Reserved</span>
                <div className="social-menu">
                    {socialMenu.map(name =>
                        <a href={links[name]} target='gw-window' rel="noopener noreferrer" key={name}>
                            <div className={`social-icon ${name}`}/>
                        </a>)
                    }
                </div>
            </section>

            {mainMenu.map((section, sectionIndex) => {
                const sectionName = Object.keys(section)[0];
                const menu = section[sectionName];
                const href = links[sectionName];
                const subMenu = menu.map((name) => {
                    const href = links[name];
                    return <li key={`${name}-${sectionIndex}`}><a href={href} target='gw-window'>{name}</a></li>
                })

                return <div className="app-footer-menu" key={sectionName}>
                    <div className="app-footer-menu-title"><a href={href} target='gw-window'>{sectionName}</a></div>
                    <ul>{subMenu}</ul>
                </div>
            })}
        </div>
    </div>
}
