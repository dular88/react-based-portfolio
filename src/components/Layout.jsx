// src/components/Layout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom"; // ✅ import Outlet
import "../assets/css/Layout.css";

const Layout = () => (
  <div className="layout">
    <header>
      <h1>Dinesh Kumar Verma</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
    <main>
      <Outlet /> {/* ✅ Proper way to load child routes */}
    </main>
    <footer>
      <p>&copy; 2025 Dinesh Kumar Verma</p>
    </footer>
  </div>
);

export default Layout;
