import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails, IMAGE_URL } from "../services/tmdbApi";
import { useFavorites } from "../context/FavoritesContext";
import { useWatchLater } from "../context/WatchLaterContext";

function MovieDetails() {
  const { id } = useParams();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { watchLater, addWatchLater, removeWatchLater } = useWatchLater();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadMovie = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await getMovieDetails(id);
        if (isMounted) setMovie(data);
      } catch {
        if (isMounted) setError("We couldn't load this movie right now.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadMovie();
    return () => { isMounted = false; };
  }, [id]);

  const isFavorite = favorites.some((item) => item.id === movie?.id);
  const isSavedForLater = watchLater.some((item) => item.id === movie?.id);

  const handleFavoriteToggle = () => {
    if (!movie) return;
    isFavorite ? removeFavorite(movie.id) : addFavorite(movie);
  };

  const handleWatchLaterToggle = () => {
    if (!movie) return;
    isSavedForLater ? removeWatchLater(movie.id) : addWatchLater(movie);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        Loading movie details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-message">
        <p>{error}</p>
        <Link to="/" className="btn btn--primary" style={{ marginTop: "16px", display: "inline-block" }}>
          Back to home
        </Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="detail-message">
        <p>Movie details are not available.</p>
        <Link to="/" className="btn btn--primary" style={{ marginTop: "16px", display: "inline-block" }}>
          Back to home
        </Link>
      </div>
    );
  }

  const heroImage = movie.backdrop_path || movie.poster_path;
  const genres = movie.genres?.map((g) => g.name).join(", ") || "N/A";
  const releaseYear = movie.release_date?.split("-")[0] || "N/A";
  const duration = movie.runtime ? `${movie.runtime} min` : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  const language = movie.original_language?.toUpperCase() || "N/A";

  return (
    <main className="detail-page">
      <div className="detail-hero">
        {heroImage ? (
          <>
            <img
              src={IMAGE_URL + heroImage}
              alt={movie.title}
              className="detail-hero__img"
            />
            <div className="detail-hero__gradient" />
          </>
        ) : (
          <div className="detail-hero__fallback">Poster unavailable</div>
        )}
      </div>

      <div className="detail-content">
        <Link to="/" className="detail-back">&#8592; Back to home</Link>

        <h1 className="detail-title">{movie.title}</h1>
        {movie.tagline && <p className="detail-tagline">"{movie.tagline}"</p>}

        <div className="detail-meta">
          <span className="detail-meta__chip"><strong>{releaseYear}</strong></span>
          <span className="detail-meta__chip"><strong>&#9733; {rating}</strong></span>
          <span className="detail-meta__chip">{duration}</span>
          <span className="detail-meta__chip">{language}</span>
          <span className="detail-meta__chip">{genres}</span>
        </div>

        <p className="detail-overview">{movie.overview || "No overview available."}</p>

        <div className="detail-actions">
          <button onClick={handleFavoriteToggle} className="btn btn--primary">
            {isFavorite ? "✔ Favorited" : "❤ Add to Favorites"}
          </button>
          <button onClick={handleWatchLaterToggle} className="btn btn--outline">
            {isSavedForLater ? "✔ In Watch Later" : "🕐 Watch Later"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;
