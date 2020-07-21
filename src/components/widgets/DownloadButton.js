import React from "react";

function DownloadButton({ alignRight = false, children, onClick } = {}) {
  return (
    <button className={`download-button button-filled button-icon ${alignRight ? 'right' : 'left' }`} onClick={onClick}>{children}</button>
  );
}

export default DownloadButton;
