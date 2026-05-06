import MovieCard from "./MovieCard";

function MovieRow({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieRow;
