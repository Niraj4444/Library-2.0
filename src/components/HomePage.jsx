import React from 'react';

// This component will eventually show all the books.
// For now, it just displays a title.
const HomePage = ({ bookmarks, onBookmark }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Digital Library</h1>
      <p className="text-center text-gray-400">
        All books will be displayed here soon.
      </p>
      {/* The list of books will go here */}
    </div>
  );
};

export default HomePage;