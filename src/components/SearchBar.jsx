import React from "react";

function SearchBar() {
  return (
    <input
      type="text"
      className="input"
      placeholder="Search Acts, Sections, Case Laws..."
      aria-label="Search legal content"
    />
  );
}

export default SearchBar;
