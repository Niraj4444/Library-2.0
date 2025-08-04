// src/App.jsx

import React, { useState } from 'react';
// IMPORTANT: BrowserRouter is now imported here
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import BookmarksPage from './components/BookmarksPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { CURRENT_USER } from './constants.js';


// This new component contains all your old App logic
const AppContent = () => {
  const [user, setUser] = useState(CURRENT_USER);
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate(); // This now works because AppContent is inside BrowserRouter

  const handleBookmark = (bookToToggle) => {
    setBookmarks(prevBookmarks => {
      const isBookmarked = prevBookmarks.some(b => b.title === bookToToggle.title);
      if (isBookmarked) {
        return prevBookmarks.filter(b => b.title !== bookToToggle.title);
      } else {
        return [...prevBookmarks, bookToToggle];
      }
    });
  };

  const handleLogout = () => {
    setUser(null);
    setBookmarks([]);
    alert("You have been logged out.");
    navigate("/");
  };

  if (!user) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">You have been logged out.</h1>
                <p className="text-gray-400 mb-6">Please log in again to access the library.</p>
                <button 
                    onClick={() => setUser(CURRENT_USER)}
                    className="bg-rose-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-rose-700 transition-colors">
                    Log In
                </button>
            </div>
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage bookmarks={bookmarks} onBookmark={handleBookmark} />} />
          <Route path="/bookmarks" element={<BookmarksPage bookmarks={bookmarks} onBookmark={handleBookmark} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer user={user} onLogout={handleLogout} />
    </div>
  );
};


// The main App component now just sets up the router
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;