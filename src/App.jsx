// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Digitalbook.css';
import './App.css';

// --- Component Imports ---
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import Popularbooks from './components/Popularbooks';

// --- Page Imports ---
import ContactPage from './pages/ContactPage';

// Component for the Home Page content
function HomePage() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Books />
        <Popularbooks />
      </div>
    </>
  );
}

// This is the main App component
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Routes for /login and /signup are now removed. */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;