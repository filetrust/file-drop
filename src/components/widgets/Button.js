import React from "react";

function Button({ inverse, section, children, onClick } = {}) {
  return (
    <button className={`button${inverse ? ' button__inverse': ''}${section ? ' ' + section + '-button': ''}`} onClick={onClick}>{children}</button>
  );
}

export default Button;
