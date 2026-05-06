import { useEffect, useState } from "react";
import { fetchTrendingMovies, searchMovies } from "../services/tmdbApi";
import MovieRow from "../components/MovieRow";
import SearchBar from "../components/SearchBar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [label, setLabel] = useState("Trending This Week");

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setIsSearching(false);
      setLabel("Trending This Week");
      fetchTrendingMovies().then(setMovies);
      return;
    }
    setIsSearching(true);
    setLabel(`Results for "${query}"`);
    const data = await searchMovies(query);
    setMovies(data);
  };

  return (
    <main className="page">
      <SearchBar onSearch={handleSearch} />
      <div className="section">
        <div className="section__header">
          <h2 className="section__title">{label}</h2>
          {movies.length > 0 && (
            <span className="section__count">{movies.length} titles</span>
          )}
        </div>
        {movies.length === 0 && isSearching ? (
          <div className="empty-state">
            <div className="empty-state__icon">&#128269;</div>
            <p className="empty-state__title">No results found</p>
            <p className="empty-state__text">Try a different title or keyword.</p>
          </div>
        ) : (
          <MovieRow movies={movies} />
        )}
      </div>
    </main>
  );
}

export default Home;
