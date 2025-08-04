// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// Make sure this import is here
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This BrowserRouter wrapper is essential */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);