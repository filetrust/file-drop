import React from "react";
import { CSSTransition } from "react-transition-group";

import { RenderResults } from "../results";

export default function ProcessFile({ state } ) {
    const {fileProcessed } = state;
    return (
        <section className="process-file">
{/*
            <h1>Drag and drop a file to have it processed by the Glasswall d-FIRST&trade; Engine</h1>
            <h3>This free service is currently limited to a maximum file size of 6MB</h3>
*/}
            <CSSTransition in={fileProcessed} timeout={{enter: 500, exit: 500}} classNames="results">
                <RenderResults key={5} state={state} />
            </CSSTransition>
            {/* <div class="terms-link" onClick={this.props.toggleModal}>
              <button>Terms &amp; Conditions</button>
            </div> */}
        </section>
    );
}
