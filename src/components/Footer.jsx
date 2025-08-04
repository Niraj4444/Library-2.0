// src/components/Footer.jsx
import React from 'react';

const Footer = ({ user, onLogout }) => {
  return (
    <footer className="bg-slate-800 p-4 mt-auto text-white">
      <div className="container mx-auto flex justify-between items-center">
        <p>Logged in as: <span className="font-semibold">{user.name}</span></p>
        <button
          onClick={onLogout}
          className="bg-rose-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-rose-700"
        >
          Logout
        </button>
      </div>
    </footer>
  );
};

export default Footer;