import React from 'react';
import { Button, ParagraphText, SectionTitle } from '../../widgets';
import ButtonsContainer from '../../widgets/ButtonsContainer';

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
                <ButtonsContainer context="privacy" touchFull>
                    <Button href="Products">VIEW OUR PRODUCTS</Button>
                    <Button inverse href="Contact">CONTACT US</Button>
                </ButtonsContainer>
            </div>
        </section>
    )
}

export default Privacy
