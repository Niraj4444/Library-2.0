import React from 'react';

// This component will show only the user's bookmarked books.
const BookmarksPage = ({ bookmarks, onBookmark }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">My Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-400">You have no bookmarks yet. Go to the homepage to add some!</p>
      ) : (
        <p className="text-center text-gray-400">Your bookmarked books will be shown here.</p>
      )}
    </div>
  );
};

export default BookmarksPage;