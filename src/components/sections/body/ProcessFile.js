import React from "react";
import { trackPromise } from "react-promise-tracker";
import { CSSTransition } from "react-transition-group";
// import "../../../App.css";

import { RenderResults } from "../results";
import {engineApi} from "../../../api";
import {validFileSize, validFileType} from "../../../actions";

const initialState = {
  file: "",
  analysisReport: "",
  analysisReportString: "",
  validation: "",
  fileProcessed: false,
  loading: false
};

class ProcessFile extends React.Component {
  state = initialState;

  resetState() {
    this.setState(initialState);
  }

  handleDrop = file => {
    this.resetState();

    if(!validFileSize(file[0])){
      this.setState({validation: "Please use a file under 6MB"});
      return;
    }

    trackPromise(
      validFileType(file[0]).then(result => {
        if (!result){
          this.setState({validation: "Please use a supported file type"});
          return;
        }

        return engineApi.analyseFile(file[0])
      })
      .then(result => {
          var XMLParser = require("react-xml-parser");
          var xml = new XMLParser().parseFromString(result);

          this.setState({
            analysisReport: xml,
            analysisReportString: result,
            file: file[0],
            fileProcessed: true
          });
      })
      .catch(error => {
        console.log(error);
      })
    );
  };

  render() {
    return (
        <div className="app-body">
            <h1>Drag and drop a file to have it processed by the Glasswall d-FIRST&trade; Engine</h1>
            <h3>This free service is currently limited to a maximum file size of 6MB</h3>
            <CSSTransition in={this.state.fileProcessed} timeout={{enter: 500, exit: 500}} classNames="results">
                <RenderResults key={5} file={this.state.file} analysisReport={this.state.analysisReport} analysisReportString={this.state.analysisReportString} validation={this.state.validation}/>
            </CSSTransition>
            {/* <div class="terms-link" onClick={this.props.toggleModal}>
              <button>Terms &amp; Conditions</button>
            </div> */}
        </div>
    );
  }
}

export default ProcessFile;
