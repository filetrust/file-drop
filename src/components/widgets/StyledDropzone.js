import React from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 0;
  align-items: center;
  border-width: 2px;
  border-radius: 2.5rem;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  outline: none;
  transition: border .24s ease-in-out;
`;

export default function StyledDropzone({ onDrop, children }) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: 'image/*',
        onDrop
    });

    return (
        <div className="drop-container">
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                <LoadingIndicator key={6} />
                { children }
            </Container>
        </div>
    );
}

