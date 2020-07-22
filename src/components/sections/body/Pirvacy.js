import React from 'react';
import { Button, ParagraphText } from '../../widgets';

function Privacy() {
    return (
        <section className="privacy">
            <div className="privacy-container container">
                <div className="section-title">We Don't Store Your Files</div>
                <div className="privacy-statement">
                    <ParagraphText>File Drop was developed to demonstrate our technology, but we treat your privacy seriously.</ParagraphText>
                    <ParagraphText> We do not read or store your files, or capture any of your personal information.</ParagraphText>
                    <ParagraphText>If you'd like to to give us feedback or learn more about how Glasswall makes files safe, please contact us.</ParagraphText>
                </div>
                <div className="privacy-buttons"><Button>VIEW OUR PRODUCTS</Button><Button inverse>CONTACT US</Button></div>
            </div>
        </section>
    )
}

export default Privacy
