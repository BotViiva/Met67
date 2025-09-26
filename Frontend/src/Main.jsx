import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Komponentit/Footer.jsx';
import Login from './Komponentit/Login.jsx';
import Admin from './Komponentit/Hallintapaneeli/Admin.jsx';
import ProtectedRoute from './Komponentit/ProtectedRoute.jsx';
import Header from './Komponentit/Header.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Landing from './Komponentit/Landing.jsx';
import Yhteystiedot from './Komponentit/Yhteystiedot.jsx';
import Mökki from './Komponentit/Mökki.jsx';
import Tapahtumat from './Komponentit/Tapahtumat.jsx';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<Landing /> } />
          <Route path='/yhteystiedot' element={<Yhteystiedot />} />
          <Route path='/mokki' element={<Mökki />} />
          <Route path="/login" element={<Login /> } />
          <Route path='/tapahtumat' element={<Tapahtumat />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
            }/>
        </Routes>
    </Router>
    <ToastContainer />
    <Footer />
  </React.StrictMode>,
);