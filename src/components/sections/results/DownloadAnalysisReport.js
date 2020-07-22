import React from 'react';
import DownloadButton from '../../widgets/DownloadButton';

class DownloadAnalysisReport extends React.Component {

    getAnalysisReport = () => {
        var binaryData = [];
        binaryData.push(this.props.report);
        let url = window.URL.createObjectURL(new Blob(binaryData, { type: "text/xml" }));
        let a = document.createElement('a');
        a.href = url;
        a.download = this.props.filename + ".xml";
        a.click();
    }

    render() {
        return (
            <DownloadButton alignLeft={false} onClick={this.getAnalysisReport}>Download Analysis Report</DownloadButton>
        )
    }
}

export default DownloadAnalysisReport;
