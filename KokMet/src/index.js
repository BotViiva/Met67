import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Landing from './Landing';
import Mökki from './Mökki';
import Hallitus from './Hallitus';
import Galleria from './Galleria';
import Footer from './Footer';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Landing />
    <Hallitus />
    <Galleria />
    <Mökki />
    <Footer />
  </React.StrictMode>,
);