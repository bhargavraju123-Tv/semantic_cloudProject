// import apiClient from "./apiClient";
// import { API_ENDPOINTS } from "../constants/apiConstants";

// const summaryService = {
//   async generateSummary(documentId) {
//     const response = await apiClient.post(
//       API_ENDPOINTS.DOCUMENTS.SUMMARY(documentId)
//     );

//     return response.data;
//   },
// };

// export default summaryService;

import apiClient from "./apiClient";
import { API_ENDPOINTS } from "../constants/apiConstants";

const summaryService = {
  async generateSummary(documentId) {
    const response = await apiClient.post(
      API_ENDPOINTS.DOCUMENTS.SUMMARY(documentId)
    );

    return response.data;
  },
};

export default summaryService;