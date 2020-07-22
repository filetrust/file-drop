import React from "react";

function ParagraphText({ context, children } = {}) {
  return (
    <div className={`paragraph-text${context ? ' ' + context + '-text': ''}`}>{children}</div>
  );
}

export default ParagraphText;
