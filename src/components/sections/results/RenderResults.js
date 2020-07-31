import React from "react";

import RenderAnalysis from "./RenderAnalysis";
import DownloadFile from "./DownloadFile";
import { IssueMessage, SectionTitle } from "../../widgets";
import DownloadAnalysisReport from "./DownloadAnalysisReport";
import FileAttributes from "./FileAttributes";

function RenderResults({ state }) {
    const { file, analysisReport, analysisReportString, validation } = state;

    if ( validation ) {
        return (
            <div className="validationErrors">
                <p>{validation}</p>
            </div>
        );
    }

    if ( file && analysisReport ) {
        const sanitisations = analysisReport.getElementsByTagName("gw:SanitisationItem");
        const remediations = analysisReport.getElementsByTagName("gw:RemedyItem");
        const issues = analysisReport.getElementsByTagName("gw:IssueItem");
        const [ { value: fileType } = { value: "unknown" } ] = analysisReport.getElementsByTagName("gw:FileType");
        const { name: fileName } = file;
        const hasIssues = issues.length;
        if ( sanitisations.length || remediations.length || hasIssues ) {
            return (
                <div className="analysis">
                    <IssueMessage hasIssues={hasIssues}/>
                    <SectionTitle context='regenerated'>Your Safe, Regenerated File Is Ready</SectionTitle>
                    <div className="analysis-container buttons-container touch-full">
                        <DownloadFile file={file} hasIssues={hasIssues}/>
                        <DownloadAnalysisReport report={analysisReportString} filename={fileName}/>
                    </div>

                    <FileAttributes file={file} fileType={fileType}/>

                    <RenderAnalysis
                        remediations={remediations}
                        sanitisations={sanitisations}
                        issues={issues}
                    />
                </div>
            );
        } else {
            return (
            <div className="is-clean analysis">
                <SectionTitle context='clean'>File is clean!</SectionTitle>
                <div className="download-container buttons-container touch-full">
                    <DownloadAnalysisReport report={analysisReportString} filename={fileName}/>
                </div>
                <FileAttributes file={file} fileType={fileType}/>
            </div>
            );
        }
    }

    return null;
}

export default RenderResults;
