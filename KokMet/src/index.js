import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Tapahtumat from './Tapahtumat';
import Mökki from './Mökki';
import Hallitus from './Hallitus';
import Galleria from './Galleria';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Tapahtumat />
    <Hallitus />
    <Galleria />
    <Mökki />
  </React.StrictMode>,
);