import apiClient from "./apiClient";
import { API_ENDPOINTS } from "../constants/apiConstants";

const chatService = {
  async sendMessage(documentId, message) {
    const response = await apiClient.post(
      API_ENDPOINTS.DOCUMENTS.CHAT(documentId),
      {
        message,
      }
    );

    return response.data;
  },
};

export default chatService;