import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import AuthLayout from "./layouts/AuthLayout";

import Login from "./pages/Login";
import Harshita from "./pages/harshita"; // Form for Add/Edit Branch
import Branch from "./pages/branch";

function App() {
  return (
    <Routes>
      {/* Public/Auth routes (no header/footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/add" element={<Harshita />} />
        {/* Edit route using branch_no param */}
        <Route path="/edit/:branch_no" element={<Harshita />} />
      </Route>

      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Catch-all route (optional, for 404) */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
