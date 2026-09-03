// // export const API_BASE_URL =
// //   import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// // export const API_ENDPOINTS = {
// //   AUTH: {
// //     REGISTER: "/api/auth/register",
// //     LOGIN: "/api/auth/login",
// //     FORGOT_PASSWORD: "/api/auth/forgot-password",
// //   },

// //   DOCUMENTS: {
// //     BASE: "/api/documents",
// //     UPLOAD: "/api/documents/upload",
// //     BY_ID: (id) => `/api/documents/${id}`,
// //     DELETE: (id) => `/api/documents/${id}`,
// //     SUMMARY: (id) => `/api/documents/${id}/summary`,
// //     CHAT: (id) => `/api/documents/${id}/chat`,
// //   },

// //   SEARCH: {
// //     BASE: "/api/search",
// //   },

// //   USERS: {
// //     ME: "/api/users/me",
// //   },
// // };

// export const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL ||
//   "http://localhost:8080";

// export const API_ENDPOINTS = {
//   AUTH: {
//     REGISTER: "/api/auth/register",
//     LOGIN: "/api/auth/login",
//     FORGOT_PASSWORD: "/api/auth/forgot-password",
//   },

//   DOCUMENTS: {
//     BASE: "/api/documents",
//     UPLOAD: "/api/documents/upload",
//     BY_ID: (id) => `/api/documents/${id}`,
//     DELETE: (id) => `/api/documents/${id}`,
//     SUMMARY: (id) => `/api/documents/${id}/summary`,
//     CHAT: (id) => `/api/documents/${id}/chat`,
//   },

//   SEARCH: {
//     BASE: "/api/search",
//   },

//   USERS: {
//     ME: "/api/users/me",
//   },
// };

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:8080";

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    FORGOT_PASSWORD: "/api/auth/forgot-password",
  },

  DOCUMENTS: {
    BASE: "/api/documents",
    UPLOAD: "/api/documents/upload",
    BY_ID: (id) => `/api/documents/${id}`,
    DELETE: (id) => `/api/documents/${id}`,
    SUMMARY: (id) => `/api/documents/${id}/summary`,
    CHAT: (id) => `/api/documents/${id}/chat`,
  },

  SEARCH: {
    BASE: "/api/search",
  },

  USERS: {
    ME: "/api/users/me",
  },
};