import React from 'react'
import { Button, ParagraphText } from '../../widgets';
import { StyledDropzone } from '../../widgets';
import supporting from '../../../data/supportedFileTypes.json';


export default function Hero({ handleDrop, loading } = {}) {
    const accept = [];
    // const vendors = [];
    const fileTypes = [];
    const extByTypes = {};

    supporting.browser.forEach((vendor, vIndex) => {
        const vendorName = Object.keys(vendor)[0];
        const vendorTypes = vendor[vendorName];
        // vendors.push(vendorName);
        fileTypes[vIndex] = [];

        vendorTypes.forEach((type, tIndex) => {
            const typeName = Object.keys(type)[0]
            const extensions = type[typeName];
            fileTypes[vIndex].push(typeName);
            extByTypes[vendorName + '-' + typeName] = extensions;

            extensions.forEach((extension, eIndex) => {
                accept.push(extension);
            })
        })
    });


    return <div className='hero'>
        <div className="hero-title">
            <div className="hero-icon">
                <img src='/img/drag-drop-icon.png' alt="file drop icon"/>
            </div>
            <div className="hero-file-drop">File Drop</div>
        </div>
        <div className="hero-body">
            <div className="hero-info">
                <div className="info-title">Sanitise Your Files</div>
                <div className="info-subtitle">
                    <span>WITH </span>
                    <span className="text-highlighted">d-FIRST&trade;</span> TECHNOLOGY
                </div>
                <ParagraphText context="info">Validated and deployed by governments and intelligence
                    agencies worldwide, Glasswall's award-winning d&#x2011;FIRST&trade;
                    technology is now available to try in this simple web-interface.
                    Drag a file into the box. Your safe, regenerated file will be ready
                    to download along with a report detailing how Glasswall made it safe.
                </ParagraphText>
            </div>
            <div className="hero-buttons">
                <Button context="hero" href="#footer">HOW IT WORKS</Button>
                <Button context="hero">SUPPORTED FILE TYPES</Button>
                <Button context="hero">PRIVACY</Button>
                <Button context="hero" inverse href="Contact">CONTACT US</Button>
            </div>
            <div className="hero-dropzone">
                <StyledDropzone onDrop={handleDrop} accept={accept} loading={loading}>
                    <div className="hero-drop-message">Drop a file here</div>
                    <img src="/img/drag-drop-area.svg" alt="Drop Zone Area"/>
                    <Button inverse context="drop">SELECT A FILE</Button>
                </StyledDropzone>
            </div>
        </div>
    </div>
}

