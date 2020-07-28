import React from 'react';
import { Button, ParagraphText, SectionTitle } from '../../widgets';

function Privacy() {
    return (
        <section className="privacy" id="privacy">
            <div className="container">
                <SectionTitle>We Don't Store Your Files</SectionTitle>
                <div className="privacy-statement">
                    <ParagraphText>File Drop was developed to demonstrate our technology, but we treat your privacy seriously.</ParagraphText>
                    <ParagraphText> We do not read or store your files, or capture any of your personal information.</ParagraphText>
                    <ParagraphText>If you'd like to to give us feedback or learn more about how Glasswall makes files safe, please contact us.</ParagraphText>
                </div>
                <div className="buttons-container privacy-buttons touch-full">
                    <Button href="Products">VIEW OUR PRODUCTS</Button>
                    <Button inverse href="Contact">CONTACT US</Button>
                </div>
            </div>
        </section>
    )
}

export default Privacy
