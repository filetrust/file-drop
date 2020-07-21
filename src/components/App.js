import React, {Component} from "react";
import "../App.css";
import { Modal } from "./widgets";
import { CSSTransition } from "react-transition-group";
import { Hero, Footer, ProcessFile } from './sections';

const initialState = {
  showModal: false
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

  render() {
    return (
      <React.Fragment>
        <div className={`app ${this.state.showMenu ? "show-menu" : ""}`}>

          <Hero toggleMenu={this.toggleMenu} toggleModal={this.toggleModal}/>
          <ProcessFile toggleModal={this.toggleModal} />
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
        <CSSTransition in={this.state.showModal} timeout={500} classNames="modal" unmountOnExit>
          <Modal onClose={this.toggleModal} containerClick={this.handleContainerClick} key={7} />
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default App;
