// src/main.jsx
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "@/apps/landing_page/App";
import Selection_form from "@/apps/Selection_form/Selection_form";
import Branch_Selection from "@/apps/Branch_Selection/Branch_Selection";
import Loader from "@/apps/AiReviewLoader/Loader";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Selection_form" element={<Selection_form />} />
                <Route path="/Branch_Selection" element={<Branch_Selection />} />
                                <Route path="/Loader" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
