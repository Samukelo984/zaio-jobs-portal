import "./SearchInput.css";
import React from "react";

const SearchInput = () => {
  return (
    <section className="search-container">
      <article className="search-input">
        <span className="material-symbols-outlined input-icon">search</span>
        <input type="text" placeholder="Search something..." />
      </article>
    </section>
  );
};

export default SearchInput;
