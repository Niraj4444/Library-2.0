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

// --- Page Imports (Updated) ---
import BookmarkPage from './pages/BookmarkPage'; // New
import UserProfilePage from './pages/UserProfilePage'; // New
// ContactPage is no longer needed

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
          {/* New Routes */}
          <Route path="/bookmarks" element={<BookmarkPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;