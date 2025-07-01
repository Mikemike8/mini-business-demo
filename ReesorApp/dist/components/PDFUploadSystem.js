import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle, X, AlertCircle, Download } from 'lucide-react';
const PDFUploadSystem = () => {
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const [files, setFiles] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const formatFileSize = (bytes) => {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    const validateFile = (file) => {
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
    const uploadToCloudinary = async (uploadedFile) => {
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
                setFiles(prev => prev.map(file => file.id === uploadedFile.id
                    ? { ...file, status: 'success', progress: 100 }
                    : file));
            }
            else {
                // ✅ handle error as you already do
                setFiles(prev => prev.map(file => file.id === uploadedFile.id
                    ? { ...file, status: 'error' }
                    : file));
            }
        }
        catch (error) {
            console.error(error);
            setFiles(prev => prev.map(file => file.id === uploadedFile.id
                ? { ...file, status: 'error' }
                : file));
        }
    };
    const handleFiles = useCallback((fileList) => {
        const newFiles = [];
        Array.from(fileList).forEach(file => {
            const validationError = validateFile(file);
            const uploadedFile = {
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
    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragOver(false);
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
            handleFiles(droppedFiles);
        }
    }, [handleFiles]);
    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);
    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);
    const handleFileInput = useCallback((e) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            handleFiles(selectedFiles);
        }
        // Reset input value
        e.target.value = '';
    }, [handleFiles]);
    const removeFile = (fileId) => {
        setFiles(prev => prev.filter(file => file.id !== fileId));
    };
    const getStatusIcon = (file) => {
        switch (file.status) {
            case 'uploading':
                return _jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent" });
            case 'success':
                return _jsx(CheckCircle, { className: "h-4 w-4 text-green-500" });
            case 'error':
                return _jsx(AlertCircle, { className: "h-4 w-4 text-red-500" });
            default:
                return _jsx(FileText, { className: "h-4 w-4 text-gray-400" });
        }
    };
    return (_jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Submit Your Case Documents" }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Upload your debt recovery documentation securely. We accept invoices, contracts, bills of lading, and other relevant business documents." })] }), _jsxs("div", { className: `relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragOver
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'}`, onDrop: handleDrop, onDragOver: handleDragOver, onDragLeave: handleDragLeave, children: [_jsx("input", { type: "file", multiple: true, accept: ".pdf", onChange: handleFileInput, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Upload, { className: `h-12 w-12 mx-auto ${isDragOver ? 'text-blue-500' : 'text-gray-400'}` }), _jsxs("div", { children: [_jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: ["Drop your PDF files here, or ", _jsx("span", { className: "text-blue-600", children: "browse" })] }), _jsx("p", { className: "text-gray-500", children: "Supports multiple file upload \u2022 Max 10MB per file \u2022 PDF only" })] })] })] }), _jsxs("div", { className: "mt-8 bg-gray-50 rounded-lg p-6", children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Accepted Document Types:" }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Invoices"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Contracts"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Bills of Lading"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Purchase Orders"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Delivery Receipts"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Correspondence"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Legal Notices"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-blue-500" }), "Other Documents"] })] })] }), files.length > 0 && (_jsxs("div", { className: "mt-8", children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Uploaded Files:" }), _jsx("div", { className: "space-y-3", children: files.map((file) => (_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg border", children: [_jsxs("div", { className: "flex items-center space-x-3 flex-1", children: [_jsx("div", { className: "flex-shrink-0", children: getStatusIcon(file) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: file.name }), _jsx("p", { className: "text-sm text-gray-500", children: formatFileSize(file.size) })] }), file.status === 'uploading' && (_jsxs("div", { className: "flex-1 max-w-xs", children: [_jsx("div", { className: "bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-500 h-2 rounded-full transition-all duration-300", style: { width: `${file.progress}%` } }) }), _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [Math.round(file.progress), "% uploaded"] })] })), file.status === 'success' && (_jsx("div", { className: "text-sm text-green-600 font-medium", children: "Upload complete" })), file.status === 'error' && (_jsx("div", { className: "text-sm text-red-600 font-medium", children: "Upload failed" }))] }), _jsx("button", { onClick: () => removeFile(file.id), className: "ml-4 text-gray-400 hover:text-gray-600 transition-colors", children: _jsx(X, { className: "h-4 w-4" }) })] }, file.id))) })] })), files.some(file => file.status === 'success') && (_jsxs("div", { className: "mt-8 text-center", children: [_jsxs("button", { className: "inline-flex items-center px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors", children: [_jsx(Download, { className: "h-5 w-5 mr-2" }), "Submit Case Documents"] }), _jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Our team will review your documents within 24 hours" })] })), _jsx("div", { className: "mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-white text-sm font-bold", children: "\uD83D\uDD12" }) }) }), _jsxs("div", { className: "ml-3", children: [_jsx("h4", { className: "text-sm font-semibold text-blue-800", children: "Secure Document Handling" }), _jsx("p", { className: "text-sm text-blue-700 mt-1", children: "All uploaded documents are encrypted and stored securely. We maintain strict confidentiality and compliance with data protection regulations." })] })] }) })] }) }));
};
export default PDFUploadSystem;
