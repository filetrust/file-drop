import React from "react";
import {usePromiseTracker} from "react-promise-tracker";

function LoadingIndicator() {
  const {promiseInProgress} = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    )
  );
}

export default LoadingIndicator;
