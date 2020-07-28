import React from "react";
import Items from "./Items";

function RenderAnalysis(props) {
  return (
    <div className="analysis-results">
      <div className="sanitisationTable table-container">
        <div className="h1 table-header">
          Active content that has been sanitised (removed)
        </div>
        <table>
          <tbody>
            <Items items={props.sanitisations} />
          </tbody>
        </table>
      </div>

      <div className="remediationsTable table-container">
        <div className="h1 table-header">
          Objects & Structures that have been repaired
        </div>
        <table>
          <tbody>
            <Items items={props.remediations} />
          </tbody>
        </table>
      </div>

      <div className="issuesTable table-container">
        <div className="h1 table-header">
          Objects & Structures that are unable to be repaired
        </div>
        <table>
          <tbody>
            <Items items={props.issues} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RenderAnalysis;
