import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { ToastProvider } from 'react-toast-notifications';
import $ from 'jquery';

import "../App.css";
import { Modal } from "./widgets";
import { Header, Footer, ProcessFile, Privacy, Technology, Supporting } from './sections';
import FeedbackToast from './widgets/FeedbackToast';

const initialState = {
    showModal: false,
    file: "",
    analysisReport: "",
    analysisReportString: "",
    validation: "",
    fileProcessed: false,
    loading: false,
    feedback: {},
};


class App extends Component {
    state = initialState;

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        });
    };

    handleContainerClick = event => {
        event.stopPropagation();
    };

    resetState = (override = {}) => {
        this.setState({ ...initialState, ...override });
    }

    onAnotherFile = () => {
        this.resetState();

        $('body').animate({
            scrollTop: 0,
        }, 1000);
    }

    render() {
        const { showMenu, showModal, loading, fileProcessed, feedback } = this.state;
        const { feedbackMessage, ...toastOptions } = feedback;

        return (
            <React.Fragment>
                <ToastProvider>
                    {feedbackMessage ? <FeedbackToast message={feedbackMessage} options={toastOptions}/> : null}
                    <div className={`app ${showMenu ? "show-menu" : ""}`}>
                        <Header toggleMenu={this.toggleMenu} handleDrop={this.handleDrop} loading={loading}
                                fileProcessed={fileProcessed} onAnotherFile={this.onAnotherFile}
                                scope={this}/>
                        <div className='app-body'>
                            <ProcessFile state={this.state} onAnotherFile={this.onAnotherFile}/>
                            <Technology/>
                            <Supporting/>
                            <Privacy/>
                        </div>
                        <Footer/>
                        <div className="app-sub-footer">
                            <a className="footer__legend__link"
                               href="https://glasswallsolutions.com/privacy-policy/">Read our Privacy Policy - </a>
                            <span className="footer__address"> Continental House, Oakridge, West End, Surrey, GU24 9PJ. Tel: +44 (0) 203 814 3890<br/></span>
                        </div>
                    </div>
                </ToastProvider>
                <CSSTransition in={showModal} timeout={500} classNames="modal" unmountOnExit>
                    <Modal onClose={this.toggleModal} containerClick={this.handleContainerClick} key={7}/>
                </CSSTransition>
            </React.Fragment>
        )
    }
}

export default App;
