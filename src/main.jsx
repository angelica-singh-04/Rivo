// src/main.jsx
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./apps/landing_page/app";
import Selection_form from "@/apps/Selection_form/Selection_form";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Selection_form" element={<Selection_form />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
