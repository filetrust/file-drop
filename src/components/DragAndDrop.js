import React, { Component } from 'react'
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import LoadingIndicator from './LoadingIndicator';

/*
class DragAndDrop extends Component {
  state = {
    drag: false
  }
  dropRef = React.createRef()
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({drag: true})
    }
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter === 0) {
      this.setState({drag: false})
    }
  }
  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({drag: false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files)
      this.dragCounter = 0
    }
  }
  componentDidMount() {
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }
  render() {
    return (
      <div className="drop-border" ref={this.dropRef}>
        {
          this.state.drag &&
          <div className="drop-border-dragging"/>
        }
        {this.props.children}
      </div>
    )
  }
}
*/

export default function DragAndDrop({ handleDrop } = { }) {
    return (
        <Dropzone onDrop={handleDrop} maxFiles={ 1 } multiple={ false }>
            {({ getRootProps, getInputProps }) => (
                <div className={"drop-border"}>
                    <input {...getInputProps()} />
                    <div {...getRootProps({ className: "loading-container"})}>
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


