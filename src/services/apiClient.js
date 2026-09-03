// import axios from "axios";
// import { API_BASE_URL } from "../constants/apiConstants";

// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 30000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("currentUser");
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;

import axios from "axios";

import { API_BASE_URL } from "../constants/apiConstants";
import { getApiErrorMessage } from "./apiErrorHandler";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("currentUser");
    }

    error.userMessage = getApiErrorMessage(error);

    return Promise.reject(error);
  }
);

export default apiClient;