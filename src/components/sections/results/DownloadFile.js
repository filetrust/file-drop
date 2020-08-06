import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from '../../../api';
import { Button } from '../../widgets';

class DownloadFile extends React.Component {
    getProtectedFile = () => {
        trackPromise(
            engineApi.protectFile(this.props.file)
            .then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = this.props.file.name;
                a.click();
            })
            .catch((error) => {
                // debugger;
                console.log(error.message)
            }))
    }

    render() {
        if ( !this.props.hasIssues ) {
            return <Button inverse onClick={this.getProtectedFile}>Download Protected File</Button>
        }
        return null
    }
}

export default DownloadFile;
