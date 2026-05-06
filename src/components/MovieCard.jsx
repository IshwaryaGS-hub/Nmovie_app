import { IMAGE_URL } from "../services/tmdbApi";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const poster = movie.poster_path ? IMAGE_URL + movie.poster_path : null;
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {poster ? (
        <img
          src={poster}
          alt={movie.title}
          className="movie-card__poster"
          loading="lazy"
        />
      ) : (
        <div className="movie-card__no-poster">No Image</div>
      )}

      <div className="movie-card__overlay">
        <h3 className="movie-card__title">{movie.title}</h3>
        {rating && (
          <span className="movie-card__rating">&#9733; {rating}</span>
        )}
      </div>
    </Link>
  );
}

export default MovieCard;
