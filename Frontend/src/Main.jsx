import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Komponentit/Home.jsx';
import Footer from './Komponentit/Footer.jsx';
import Login from './Komponentit/Login.jsx';
import Admin from './Komponentit/Admin.jsx';
import ProtectedRoute from './Komponentit/ProtectedRoute.jsx';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
          <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    }
  />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);