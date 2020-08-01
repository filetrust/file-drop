import React from "react";
import { CSSTransition } from "react-transition-group";

import { RenderResults } from "../results";

export default function ProcessFile({ state, onAnotherFile } ) {
    const { fileProcessed } = state;
    return (
        <section className="process-file">
            <div className="container">
{/*
            <div className="h1" >Drag and drop a file to have it processed by the Glasswall d&#x2011;FIRST&trade; Engine</div>
            <h3>This free service is currently limited to a maximum file size of 6MB</h3>
*/}
            <CSSTransition in={fileProcessed} timeout={{enter: 500, exit: 500}} classNames="results">
                <RenderResults key={5} state={state} onAnotherFile={onAnotherFile} />
            </CSSTransition>
            {/* <div class="terms-link" onClick={this.props.toggleModal}>
              <button>Terms &amp; Conditions</button>
            </div> */}
            </div>
        </section>
    );
}
