import React from "react";

function ParagraphText({ context, children } = {}) {
    return (
        <div className={`paragraph-text${context ? ' ' + context + '-paragraph' : ''}`}>{children}</div>
    );
}

export default ParagraphText;
