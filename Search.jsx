src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [text, setText] = useState('');

  const submitSearch = () => {
    handleSearch(text);
  };

  return (
    <div className="pa3">
      <input
        type="text"
        placeholder="Tag Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="pa2 w-70"
      />

      <button
        onClick={submitSearch}
        className="pa2 ml2"
      >
        Search
      </button>

      <p>Enter a keyword to filter by tags</p>
    </div>
  );
};

export default Search;x