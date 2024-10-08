import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BlogPage from "./components/BlogPage";
import EditPage from "./components/EditPage";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<App />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/editblog/:id" element={<EditPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
