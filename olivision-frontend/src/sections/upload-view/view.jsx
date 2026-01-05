/** @format */

import { useState, useCallback } from 'react';

import { useTranslate } from 'src/locales';
import axiosInstance, { endpoints } from 'src/lib/axios';

import { Upload } from './default/upload-default';

// ----------------------------------------------------------------------

export function UploadView() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentLang } = useTranslate();

  const handleDropSingleFile = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    // IMPORTANT: field name must match multer field name (e.g. upload.single("file"))
    formData.append('file', file);
    formData.append('currentLang', currentLang.value);

    try {
      setLoading(true);

      const response = await axiosInstance.post(endpoints.upload, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data?.data);
    } catch (err) {
      setError(err.response?.data || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Upload
      error={error}
      result={result}
      value={file}
      loading={loading}
      onClick={handleUpload}
      onDrop={handleDropSingleFile}
      onDelete={() => setFile(null)}
    />
  );
}
