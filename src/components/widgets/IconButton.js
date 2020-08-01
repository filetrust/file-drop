import React from "react";
import links from '../../data/links.json';

function IconButton({ context, children, href, onClick } = {}) {
    const button = <>
        <button className={`button-icon${context ? ` ${context}-button` : ''}`}
                onClick={onClick}>{children}</button>
    </>;

    let hrefOrAliias = href;

    if ( ! hrefOrAliias ) {
        return button;
    } else {
        return <a href={hrefOrAliias}>{button}</a>;
    }
}

export default IconButton;
