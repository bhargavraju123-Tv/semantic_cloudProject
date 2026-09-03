import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Documents from "./pages/Documents/Documents";
import DocumentDetails from "./pages/DocumentDetails/DocumentDetails";
import Search from "./pages/Search/Search";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";

import ProtectedRoute from "./components/common/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function NotFoundPage() {
  return (
    <div className="container py-5">
      <h1>Page Not Found</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* =========================
              Public Routes
             ========================= */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          {/* =========================
              Protected Routes
             ========================= */}

          <Route element={<ProtectedRoute />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/documents"
              element={<Documents />}
            />

            <Route
              path="/documents/:id"
              element={<DocumentDetails />}
            />

            <Route
              path="/search"
              element={<Search />}
            />

            <Route
              path="/chat/:documentId"
              element={<Chat />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Route>

          {/* =========================
              Fallback
             ========================= */}

          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;