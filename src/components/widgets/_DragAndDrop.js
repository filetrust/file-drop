import React from 'react'
import  Dropzone from './StyledDropzone';
import PropTypes from "prop-types";
import LoadingIndicator from './LoadingIndicator';

export default function _DragAndDrop({ handleDrop, children } = { }) {
    const dropzoneStyleActive = {
        width  : "20%",
        height : "250px",
        border : "5px solid green"
    };

    return (
        <Dropzone
            onDrop={handleDrop}
            // maxFiles={ 1 }
            multiple={ false }
            // activeStyle={dropzoneStyleActive}
        >
            {({ getRootProps, getInputProps }) => (
                <div className={"drop-border"}>
                    <input {...getInputProps()} />
                    <div {...getRootProps({ className: "drop-container"})}>
                        <LoadingIndicator key={6} />
                        { children }
                    </div>
                </div>
            )}
        </Dropzone>
    )
}

_DragAndDrop.propTypes = {
    handleDrop: PropTypes.func,
};


