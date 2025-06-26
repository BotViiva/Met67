import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Komponentit/Home.jsx';
import Footer from './Komponentit/Footer.jsx';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);