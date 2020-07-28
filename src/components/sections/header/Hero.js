import React from 'react'
import { Button, ParagraphText } from '../../widgets';
import { StyledDropzone } from '../../widgets';
import supporting from '../../../data/supportedFileTypes.json';



export default function Hero({ handleDrop, loading } = {}) {
    const accept = [];
    const vendors = [];
    const fileTypes = [];
    const extByTypes = {};

    supporting.forEach((vendor, vIndex) => {
        const vendorName = Object.keys(vendor)[0];
        const vendorTypes = vendor[vendorName];
        vendors.push(vendorName);
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
                    agencies worldwide, Glasswall's award-winning d-FIRST
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
            <StyledDropzone onDrop={handleDrop} accept={accept}  loading={loading}>
                <div className="hero-drop-message">Drop a file here</div>
                <img src="/img/drag-drop-area.svg" alt="Drop Zone Area" />
                <Button inverse section="drop">SELECT A FILE</Button>
            </StyledDropzone>
        </div>
    </div>
}

