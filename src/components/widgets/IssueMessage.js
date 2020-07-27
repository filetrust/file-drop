import React from 'react';

class IssueMessage extends React.Component {
    render() {
        if ( this.props.hasIssues ) {
            return <div className="has-issues"><div className="h1" >Unable to protect file due to structural issues</div></div>
        } else {
            return null
        }
    }
}

export default IssueMessage;
