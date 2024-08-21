import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ExcelUploader = ({ onFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    setUploadedFile(file);
    onFileUpload(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.xlsx',
  });

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg">
      <div
        {...getRootProps({
          className:
            'w-full text-center text-gray-400 cursor-pointer hover:text-gray-800 h-56',
        })}
      >
        <input {...getInputProps()} className="hidden" />
        <p className="text-lg">Drag & drop an Excel file here, or click to select one</p>
      </div>
      {uploadedFile && (
        <div className="mt-4 w-full overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700">Uploaded File:</h3>
          <p className="p-2 bg-white border rounded-md">{uploadedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
