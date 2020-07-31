import React from "react";
import links from '../../data/links.json';

function Button({ inverse, context, children, href, textAsHrefAlias = true, onClick } = {}) {
    const button = <>
        <button className={`button${inverse ? ' button__inverse' : ''}${context !== '' ? ` ${context}-button` : ''}`}
                onClick={onClick}>{children}</button>
    </>;

    let hrefOrAliias = href;
    if (href && links[href]) {
        hrefOrAliias = links[href];
    } else if (href) {
        hrefOrAliias = href;
    } if (!href && textAsHrefAlias) {
        hrefOrAliias = links[children];
    }

    if ( ! hrefOrAliias ) {
        return button;
    } else {
        return <a href={hrefOrAliias}>{button}</a>;
    }
}

export default Button;
