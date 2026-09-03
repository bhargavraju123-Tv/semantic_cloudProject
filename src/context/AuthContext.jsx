import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    authService.getCurrentUser()
  );

  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    authService.isAuthenticated()
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(authService.getCurrentUser());
      setIsAuthenticated(authService.isAuthenticated());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  const login = (userData, token = null) => {
    if (token) {
      localStorage.setItem("authToken", token);
    }

    if (userData) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(userData)
      );
    }

    setUser(userData || authService.getCurrentUser());
    setIsAuthenticated(true);
  };

  const logout = () => {
    authService.logout();

    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshUser = () => {
    const currentUser = authService.getCurrentUser();

    setUser(currentUser);
    setIsAuthenticated(authService.isAuthenticated());
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}