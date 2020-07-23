import React from 'react';

function FileAttributes({ file, fileType } = {}) {
  const {name, size} = file;
  return(
    <div className="file-attributes table-container">
      <h1 className="table-header">File Attributes</h1>
      <table>
        <tbody>
          <tr>
            <td>File Name: </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>File Size: </td>
            <td>{size}</td>
          </tr>
          <tr>
            <td>Type: </td>
            <td>{fileType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FileAttributes;
