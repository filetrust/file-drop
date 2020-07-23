import { fileTypeDetectionApi } from "../api";

const unsupportedTypes = [
    "Unknown",
    "FileIssues",
    "BufferIssues",
    "InternalIssues",
    "LicenseExpired",
    "PasswordProtectedOpcFile"
  ];

const validFileSize = file => {
    return file.size <= 6000000;

}

async function validFileType(file) {
    const result = await fileTypeDetectionApi.getFileType(file);
    return !unsupportedTypes.includes(result.FileTypeName);

}

export {
    validFileSize,
    validFileType
  };
