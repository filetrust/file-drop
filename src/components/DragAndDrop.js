import React, { Component } from 'react'
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import LoadingIndicator from './LoadingIndicator';

export default function DragAndDrop({ handleDrop } = { }) {
    return (
        <Dropzone onDrop={handleDrop} maxFiles={ 1 } multiple={ false }>
            {({ getRootProps, getInputProps }) => (
                <div className={"drop-border"}>
                    <input {...getInputProps()} />
                    <div {...getRootProps({ className: "drop-container"})}>
                        <LoadingIndicator key={6} />
                    </div>
                    <br/>
                </div>
            )}
        </Dropzone>
    )
}

DragAndDrop.propTypes = {
    handleDrop: PropTypes.func,
};


