import React, { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle, X, AlertCircle, Download } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'error';
  progress: number;
  file: File;
}


const PDFUploadSystem: React.FC = () => {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): string | null => {
    // Check file type
    if (file.type !== 'application/pdf') {
      return 'Only PDF files are allowed';
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return 'File size must be less than 10MB';
    }
    
    return null;
  };

  const uploadToCloudinary = async (uploadedFile: UploadedFile) => {
  const cloudName = "dpttzjwpr";
  const uploadPreset = "PDFDATA";

  const formDataToUpload = new FormData();
  formDataToUpload.append('file', uploadedFile.file);
  formDataToUpload.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: formDataToUpload,
    });

    const data = await response.json();

if (response.ok && data.secure_url) {
  // ✅ Save the secure URL so it appears in your list
  setUploadedUrls(prev => [...prev, data.secure_url]);

  // ✅ Mark file as uploaded
  setFiles(prev =>
    prev.map(file =>
      file.id === uploadedFile.id
        ? { ...file, status: 'success', progress: 100 }
        : file
    )
  );
} else {
  // ✅ handle error as you already do
  setFiles(prev =>
    prev.map(file =>
      file.id === uploadedFile.id
        ? { ...file, status: 'error' }
        : file
    )
  );
}

  } catch (error) {
    console.error(error);
    setFiles(prev =>
      prev.map(file =>
        file.id === uploadedFile.id
          ? { ...file, status: 'error' }
          : file
      )
    );
  }
};


  const handleFiles = useCallback((fileList: FileList) => {
    const newFiles: UploadedFile[] = [];
    
    Array.from(fileList).forEach(file => {
      const validationError = validateFile(file);
      
      const uploadedFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        status: validationError ? 'error' : 'uploading',
        progress: validationError ? 0 : 0,
        file
      };
      
      newFiles.push(uploadedFile);
      
      if (!validationError) {
  uploadToCloudinary(uploadedFile);
}

    });
    
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFiles(droppedFiles);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      handleFiles(selectedFiles);
    }
    // Reset input value
    e.target.value = '';
  }, [handleFiles]);

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getStatusIcon = (file: UploadedFile) => {
    switch (file.status) {
      case 'uploading':
        return <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Submit Your Case Documents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your debt recovery documentation securely. We accept invoices, 
            contracts, bills of lading, and other relevant business documents.
          </p>
        </div>

        {/* Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="space-y-4">
            <Upload className={`h-12 w-12 mx-auto ${isDragOver ? 'text-blue-500' : 'text-gray-400'}`} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Drop your PDF files here, or <span className="text-blue-600">browse</span>
              </h3>
              <p className="text-gray-500">
                Supports multiple file upload • Max 10MB per file • PDF only
              </p>
            </div>
          </div>
        </div>

        {/* Accepted Document Types */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Accepted Document Types:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Invoices
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Contracts
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Bills of Lading
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Purchase Orders
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Delivery Receipts
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Correspondence
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Legal Notices
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-blue-500" />
              Other Documents
            </div>
          </div>
        </div>

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files:</h4>
            <div className="space-y-3">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="flex-shrink-0">
                      {getStatusIcon(file)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {file.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    {file.status === 'uploading' && (
                      <div className="flex-1 max-w-xs">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round(file.progress)}% uploaded
                        </p>
                      </div>
                    )}
                    {file.status === 'success' && (
                      <div className="text-sm text-green-600 font-medium">
                        Upload complete
                      </div>
                    )}
                    {file.status === 'error' && (
                      <div className="text-sm text-red-600 font-medium">
                        Upload failed
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
       

        {/* Submit Button */}
        {files.some(file => file.status === 'success') && (
          <div className="mt-8 text-center">
            <button className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Submit Case Documents
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Our team will review your documents within 24 hours
            </p>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🔒</span>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-semibold text-blue-800">Secure Document Handling</h4>
              <p className="text-sm text-blue-700 mt-1">
                All uploaded documents are encrypted and stored securely. We maintain strict 
                confidentiality and compliance with data protection regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFUploadSystem;
