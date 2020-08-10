import React from 'react'
import TopMenu from './TopMenu';
import Hero from './Hero';
import { useToasts } from 'react-toast-notifications';
import { validFileType } from '../../../actions';
import { trackPromise } from 'react-promise-tracker';
import { engineApi, ResponseError } from '../../../api';
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

        const { name, type } = accepted;
        console.warn(` ----------- Start of processing ${ name } [${ type }]  ${new Date().toISOString()} -------------`);
        // console.dir(accepted);

        trackPromise(
            validFileType(accepted)
            .then(result => {
                console.warn(` ----------- File Type is checked at ${new Date().toISOString()} -------------`);
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
            .then( (result) => {
                console.warn(` ----------- File Analysis is done ${new Date().toISOString()} -------------`);
                const XMLParser = require("react-xml-parser");
                const xml = new XMLParser().parseFromString(result);

                scope.setState({
                    analysisReport: xml,
                    analysisReportString: result,
                    file: accepted,
                    fileProcessed: true,
                });
            })
            .catch( (error) => {
                console.warn(` ----------- Caught of File Drop ${new Date().toISOString()} -------------`);
                if (error instanceof ResponseError) {
                    const {response: {
                        // type: type,
                        status
                    }} = error;
                    const appearance = messages.toasterAppearance[status],
                        message = messages.httpCodes[status];
                    addToast(message, {
                        appearance,
                        autoDismiss: true,
                    })
                } else {
                    addToast(error.message, {
                        appearance: 'error',
                        autoDismiss: true,
                    })
                }
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
                <Hero handleDrop={handleDrop} loading={loading} fileProcessed={fileProcessed} onAnotherFile={onAnotherFile}/>
            </div>
        </section>
    </div>
}
