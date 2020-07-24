import React, {Component} from "react";
import { trackPromise } from 'react-promise-tracker';
import { CSSTransition } from "react-transition-group";

import "../App.css";
import { Modal } from "./widgets";
import { Header, Footer, ProcessFile, Privacy, Technology, Supporting } from './sections';
import { validFileSize, validFileType } from '../actions';
import { engineApi } from '../api';

const initialState = {
  showModal: false,

  file: "",
  analysisReport: "",
  analysisReportString: "",
  validation: "",
  fileProcessed: false,
  loading: false
};


class App extends Component {
  state = initialState;

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  handleContainerClick = event => {
    event.stopPropagation();
  };

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
          const XMLParser = require("react-xml-parser");
          const xml = new XMLParser().parseFromString(result);

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
    const { showMenu, showModal, fileProcessed } = this.state
    return (
      <React.Fragment>
        <div className={`app ${showMenu ? "show-menu" : ""}`}>
          <Header toggleMenu={this.toggleMenu} handleDrop={this.handleDrop}/>
          <div className='app-body'>
            { fileProcessed ? <ProcessFile state={this.state}/> : null }
            <Technology/>
            <Supporting/>
            <Privacy/>
          </div>
          <Footer/>
          <div className="app-sub-footer">
            <a href="https://glasswallsolutions.com/privacy-policy/">
              <span className="footer__legend__link">
                Read our Privacy Policy -
								</span>
            </a>
            <span className="footer__address">Continental House, Oakridge, West End, Surrey, GU24 9PJ. Tel: +44 (0) 203 814 3890<br /></span>
          </div>
        </div>
        <CSSTransition in={showModal} timeout={500} classNames="modal" unmountOnExit>
          <Modal onClose={this.toggleModal} containerClick={this.handleContainerClick} key={7} />
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default App;
