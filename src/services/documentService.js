import apiClient from "./apiClient";
import { API_ENDPOINTS } from "../constants/apiConstants";

const documentService = {
  async upload(file, onUploadProgress) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await apiClient.post(
      API_ENDPOINTS.DOCUMENTS.UPLOAD,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (progressEvent) => {
          if (!progressEvent.total) {
            return;
          }

          const progress = Math.round(
            (progressEvent.loaded * 100) /
              progressEvent.total
          );

          onUploadProgress?.(progress);
        },
      }
    );

    return response.data;
  },

  async getAll() {
    const response = await apiClient.get(
      API_ENDPOINTS.DOCUMENTS.BASE
    );

    return response.data;
  },

  async getById(documentId) {
    const response = await apiClient.get(
      API_ENDPOINTS.DOCUMENTS.BY_ID(documentId)
    );

    return response.data;
  },

  async delete(documentId) {
    const response = await apiClient.delete(
      API_ENDPOINTS.DOCUMENTS.DELETE(documentId)
    );

    return response.data;
  },
};

export default documentService;