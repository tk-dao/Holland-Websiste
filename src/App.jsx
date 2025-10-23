// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx"; // keep if this file exists and compiles

export default function App() {
  // tiny breadcrumbs to prove what's rendering
  console.log("[App] mounted");

  return (
    <Routes>
      {/* Home → Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Optional login route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Catch-all to something visible */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
