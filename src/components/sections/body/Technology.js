import React from 'react';
import { Button, ParagraphText } from '../../widgets';

function Technology() {
    return (
        <section className="technology">
            <div className="technology-container container">
                <div className="section-title">Introducing d-FIRST&trade;</div>
                <div className="technology-stack">
                    <div className="brick">
                        <div className="brick-picture"><img src='/img/deepfile-340.png' alt="deep-File Inspection Icon"/></div>
                        <div className="brick-abstract">deep-File Inspection</div>
                        <ParagraphText context="technology">deep-File Insperction breaks down the entire file and validates it
                            against the format's specification.</ParagraphText>
                    </div>
                    <div className="brick">
                        <div className="brick-picture"><img src='/img/remediation-340.png' alt="Remediation Icon"/></div>
                        <div className="brick-abstract">Remediation</div>
                        <ParagraphText context="technology">All deviations uncovered during the inspection are remediated back
                            into line with the file standard.</ParagraphText>
                    </div>
                    <div className="brick">
                        <div className="brick-picture"><img src='/img/sanitisation-340.png' alt="Sanitisation Technology Icon"/></div>
                        <div className="brick-abstract">Sanitisation Technology</div>
                        <ParagraphText context="technology">Sanitisation removes high-risk Active Content such as macros,
                            JavaScript, URLs and embedded files.</ParagraphText>
                    </div>
                </div>
                <div className="technology-buttons">
                    <Button inverse>LEARN MORE</Button>
                </div>
            </div>
        </section>
    )
}

export default Technology



