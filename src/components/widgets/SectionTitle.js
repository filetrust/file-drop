import React from "react";

function SectionTitle({ context, children } = {}) {
    return (
        <div className={`section-title${context ? ' ' + context + '-title' : ''}`}>{children}</div>
    );
}

export default SectionTitle;
