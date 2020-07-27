import React from "react";

function Modal({ onClose, containerClick } = {}) {
  return (
    <div className="modal-overlay file-details-modal" onClick={onClose}>
      <section className="modal-container" onClick={containerClick}>
        <header className="modal-header">
          <div className="h1" >Terms &amp; Conditions</div>
        </header>
        <div className="modal-contents">
          <p>T's and C's go here</p>
        </div>
        <footer className="modal-footer tabset-modal-file-details-footer">
          <button tabIndex="-1" className="button button-filled" onClick={onClose}>
            OK
          </button>
        </footer>
        <button tabIndex="-1" className="modal-close-button close-modal" onClick={onClose} />
      </section>
    </div>
  );
}

export default Modal;
