import React from 'react'
import TopMenu from './TopMenu';
import Hero from './Hero';
import { useToasts } from 'react-toast-notifications';
import { validFileType } from '../../../actions';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from '../../../api';
import messages from '../../../data/messages.json';

export default function Header({ toggleMenu, loading, fileProcessed, onAnotherFile, scope } = {}) {

    const { addToast } = useToasts();

    const handleDrop = ([ accepted = {} ], [ rejected = {} ]) => {
        if ( rejected && rejected.errors ) {
            const [ { code, message } = { code: 'unknown-error' } ] = rejected.errors;
            let messageText = messages[code];

            if ( !messageText ) {
                console.warn('Missed message for code ', code);
                messageText = message || code;
            }
            addToast(messageText, {
                appearance: 'warning',
                autoDismiss: true,
            })
            return;
        }

        scope.resetState({ loading: true });

        trackPromise(
            validFileType(accepted)
            .then(result => {
                if ( !result ) {
                    const messageText = messages['file-invalid-type'];
                    addToast(messageText, {
                        appearance: 'warning',
                        autoDismiss: true,
                    })
                    return;
                }
                return engineApi.analyseFile(accepted)
            })
            .then(result => {
                const XMLParser = require("react-xml-parser");
                const xml = new XMLParser().parseFromString(result);

                scope.setState({
                    analysisReport: xml,
                    analysisReportString: result,
                    file: accepted,
                    fileProcessed: true,
                });
            })
            .catch(error => {
                console.error(error);
/*
TODO currently it breaks execution with stack trace error. Check how it will be reacted on production mode
                addToast(error, {
                    appearance: 'error',
                    autoDismiss: true,
                })
*/
            })
            .finally(() => {
                scope.setState({ loading: false });
            }),
        );
    };

    return <div className='app-header-triangle'>
        <section className="app-header">
            <TopMenu toggleMenu={toggleMenu}/>
            <div className='container app-header-container'>
                <Hero handleDrop={handleDrop}  loading={loading} fileProcessed={fileProcessed} onAnotherFile={onAnotherFile}/>
            </div>
        </section>
    </div>
}
