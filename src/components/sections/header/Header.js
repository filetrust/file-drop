import React from 'react'
import TopMenu from './TopMenu';
import icon from '../../../img/drag-drop-icon.png';
import { DragAndDrop } from '../../widgets';

export default function Header({ toggleMenu, handleDrop } = {}) {
    return <section className="app-header">
        <div className='container app-header-container'>
            <TopMenu toggleMenu={toggleMenu}/>
            <div className='hero'>
                <div className="hero-title">
                    <div className="hero-icon">
                        <img src={icon} alt="file drop icon"/>
                    </div>
                    <div className="hero-file-drop">File Drop</div>
                </div>
                <div className="hero-body">
                    <div className="hero-info">
                        <div className="info-title">Sanitise Your Files</div>
                        <div className="info-subtitle">
                            <span>WITH </span>
                            <span className='info-highlighted'>d-FIRST<span className='info-superscript'>TM</span></span>
                            <span> TECHNOLOGY</span>
                        </div>
                        <div className="info-text">Validated and deployed by governments and intelligence

                            agencies worldwide, Glasswall's award-winning d-FIRST

                            technology is now available to try in this simple web-interface.

                            Drag a file into the box. Your safe, regenerated file will be ready

                            to download along with a report detailing how Glasswall made it safe.
                        </div>
                        <div className="hero-buttons">
                            <button className="hero-button">HOW IT WORKS</button>
                            <button className="hero-button">SUPPORTED FILE TYPES</button>
                            <button className="hero-button">PRIVACY</button>
                            <button className="hero-button hero-button__inverse">CONTACT US</button>
                        </div>

                    </div>
                    <DragAndDrop handleDrop={handleDrop}>
                        <div className='hero-drop-message'>Drop a fie here</div>
                        <button className='hero-drop-button'>SELECT A FILE</button>
                    </DragAndDrop>
                </div>
            </div>
        </div>
    </section>
}
