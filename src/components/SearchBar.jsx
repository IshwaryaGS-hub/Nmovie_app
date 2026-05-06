import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") onSearch("");
  };

  return (
    <div className="hero">
      <h1 className="hero__title">
        Discover <span>Movies</span>
      </h1>
      <p className="hero__subtitle">Millions of movies to explore. Start searching.</p>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          placeholder="Search by title, genre, actor..."
          value={query}
          onChange={handleChange}
          aria-label="Search movies"
        />
        <button className="search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
