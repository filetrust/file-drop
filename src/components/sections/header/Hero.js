import React from 'react'
import icon from '../../../img/drag-drop-icon.png';
import { DragAndDrop } from '../../widgets';
import { Button, ParagraphText } from '../../widgets';

export default function Hero({ handleDrop } = {}) {
    return <div className='hero'>
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
                    <span className="info-highlighted">d-FIRST&trade; TECHNOLOGY</span>
                </div>
                <ParagraphText context="info">Validated and deployed by governments and intelligence
                    agencies worldwide, Glasswall"s award-winning d-FIRST
                    technology is now available to try in this simple web-interface.
                    Drag a file into the box. Your safe, regenerated file will be ready
                    to download along with a report detailing how Glasswall made it safe.
                </ParagraphText>
                <div className="hero-buttons">
                    <Button section="hero">HOW IT WORKS</Button>
                    <Button section="hero">SUPPORTED FILE TYPES</Button>
                    <Button section="hero">PRIVACY</Button>
                    <Button section="hero" inverse>CONTACT US</Button>
                </div>

            </div>
            <DragAndDrop handleDrop={handleDrop}>
                <div className="hero-drop-message">Drop a file here</div>
                <button className="hero-drop-button">SELECT A FILE</button>
            </DragAndDrop>
        </div>
    </div>
}

