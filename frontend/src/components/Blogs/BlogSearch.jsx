// BlogSearch.js
import React, { useState } from 'react';

const BlogSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <input
        type="text"
        placeholder="Buscar blogs..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default BlogSearch;
