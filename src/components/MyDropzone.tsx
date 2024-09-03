"use client";
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Set the first accepted file to the file state
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        }
      </div>
      {file && (
        <div className="preview">
          <h3>Preview:</h3>
          <img src={URL.createObjectURL(file)} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default MyDropzone;
