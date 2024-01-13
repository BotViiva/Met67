import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tapahtumat from './Tapahtumat';
import Mökki from './Mökki';
import Hallitus from './Hallitus';

ReactDOM.render(
  <React.StrictMode>
    <Tapahtumat />
    <Hallitus />
    <Mökki />
  </React.StrictMode>,
  document.getElementById('root')
);