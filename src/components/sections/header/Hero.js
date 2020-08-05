import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { Button, IconButton, ParagraphText } from '../../widgets';
import { StyledDropzone } from '../../widgets';
import supporting from '../../../data/supportedFileTypes.json';
import ButtonsContainer from '../../widgets/ButtonsContainer';


export default function Hero({ handleDrop, loading, fileProcessed,  onAnotherFile } = {}) {
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
                    <span className="text-highlighted">CDR</span> TECHNOLOGY
                </div>
                <ParagraphText context="info">
                    Validated and deployed by governments and intelligence agencies worldwide, Glasswall's award-winning Content Disarm & Reconstruction (CDR) technology is now available to try in this simple web-interface. Drag a file into the box. Your safe, regenerated file will be ready to download along with a report detailing how Glasswall made it safe.
                </ParagraphText>
            </div>
            <ButtonsContainer context="hero" touchFull>
                <Button context="hero">HOW IT WORKS</Button>
                <Button context="hero">SUPPORTED FILE TYPES</Button>
                <Button context="hero">PRIVACY</Button>
                <Button context="hero" inverse href="Contact">CONTACT US</Button>
            </ButtonsContainer>
            <div className="hero-dropzone" id="dropzone">

                {!fileProcessed ?
                    <StyledDropzone onDrop={handleDrop} accept={accept} loading={loading}>
                        <div className="drop-message">Drop a file here</div>
                        <div className="drop-message drop-message__reject">Please use a supported file type</div>
                        <div className="drop-image drop-image__drop"/>
                        <Button inverse context="drop">SELECT A FILE</Button>
                    </StyledDropzone>
                    :
                    <div className="drop-container">
                        <div className="drop-border">
                            <IconButton className="button-refresh" onClick={onAnotherFile}>
                                <img src="/img/refresh-button.svg" alt="drop refresh icon"/>
                            </IconButton>
                            <div className="drop-message drop-message__processed">Your file has been processed</div>
                            <div className="drop-image drop-image__processed"/>
                            <Button inverse context="processed">VIEW RESULT</Button>
                        </div>
                    </div>}
            </div>
        </div>
    </div>
}

