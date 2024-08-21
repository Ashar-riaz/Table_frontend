import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

const ExcelUploader = ({ onFileUpload }) => {
  const [fileData, setFileData] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      setFileData(jsonData);
      onFileUpload(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.xlsx, .xls' });

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg">
      <div
        {...getRootProps({
          className:
            'w-full text-center text-gray-400 cursor-pointer hover:text-gray-800 h-96',
        })}
      >
        <input {...getInputProps()} className="hidden" />
        <p className="text-lg">Drag & drop an Excel file here, or click to select one</p>
      </div>
      {fileData && (
        <div className="mt-4 w-full overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700">File Data:</h3>
          <pre className="p-2 bg-white border rounded-md max-h-64 overflow-y-auto">
            {JSON.stringify(fileData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
