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

        const e = {
            lastModified: 1596710691749,
            lastModifiedDate: "Thu Aug 06 2020 12:44:51 GMT+0200 (Central European Summer Time)",
            name: "EmbeddedIssue_PNG_8150079.pptx",
            path: "EmbeddedIssue_PNG_8150079.pptx",
            size: 1902707,
            type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            webkitRelativePath: ""
        }
        scope.resetState({ loading: true });


        console.warn(` ----------- Start of processing ${ accepted }  ${new Date().toISOString()} -------------`);
        console.dir(accepted);

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
            .then(result => {
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
            .catch(error => {
                // console.log(error);
                console.warn(` ----------- Caught of File Drop ${new Date().toISOString()} -------------`);
                addToast(error.message, {
                    appearance: 'error',
                    autoDismiss: true,
                })
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
