import apiClient from "./apiClient";
import { API_ENDPOINTS } from "../constants/apiConstants";

const authService = {
  async register(userData) {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.REGISTER,
      userData
    );

    return response.data;
  },

  async login(credentials) {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    if (response.data?.data?.token) {
      localStorage.setItem(
        "authToken",
        response.data.data.token
      );
    }

    if (response.data?.data?.user) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(response.data.data.user)
      );
    }

    return response.data;
  },

  async forgotPassword(email) {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      { email }
    );

    return response.data;
  },

  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
  },

  getCurrentUser() {
    const user = localStorage.getItem("currentUser");

    if (!user) {
      return null;
    }

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  },

  isAuthenticated() {
    return Boolean(localStorage.getItem("authToken"));
  },
};

export default authService;