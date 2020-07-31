import React, {Component} from "react";
import { trackPromise} from 'react-promise-tracker';
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

const pleaseUseASupportedFileType = "Please use a supported file type";

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

  resetState(override = {}) {
    this.setState({...initialState, ...override});
  }

  handleDrop = ([accepted = {}], [rejected = {}]) => {
    const self = this;

    if (rejected && rejected.errors) {
      console.error('Rejected! ', rejected.errors)
      // this.setState({validation: rejected});
      return;
    }

    if(!validFileSize(accepted)){
      this.setState({validation: "Please use a file under 6MB"});
      return;
    }
    this.resetState({loading: true});

    trackPromise(
        validFileType(accepted)
        .then(result => {
          if (!result){
            // this.setState({validation: pleaseUseASupportedFileType});
            console.error(pleaseUseASupportedFileType)
            return;
          }
          return engineApi.analyseFile(accepted)
        })
        .then(result => {
          const XMLParser = require("react-xml-parser");
          const xml = new XMLParser().parseFromString(result);

          this.setState({
            analysisReport: xml,
            analysisReportString: result,
            file: accepted,
            fileProcessed: true
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          self.setState({loading: false});
        })
    );
  };

  render() {
    const { showMenu, showModal, loading, fileProcessed } = this.state
    return (
      <React.Fragment>
        <div className={`app ${showMenu ? "show-menu" : ""}`}>
          <Header toggleMenu={this.toggleMenu} handleDrop={this.handleDrop} loading={loading} fileProcessed={fileProcessed}/>
          <div className='app-body'>
            <ProcessFile state={this.state}/>
            <Technology/>
            <Supporting/>
            <Privacy/>
          </div>
          <Footer/>
          <div className="app-sub-footer">
            <a className="footer__legend__link" href="https://glasswallsolutions.com/privacy-policy/">Read our Privacy Policy -</a>
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
