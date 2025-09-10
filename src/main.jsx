// src/main.jsx
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./apps/landing_page/app";
import Oauth from "@/apps/Oauth/Oauth"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Oauth" element={<Oauth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
