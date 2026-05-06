import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import MovieRow from "../components/MovieRow";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-header__title">Favorites</h1>
        <p className="page-header__sub">Movies you have marked as favorites</p>
      </div>
      <div className="section">
        {favorites.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__icon">&#10084;&#65039;</div>
            <p className="empty-state__title">No favorites yet</p>
            <p className="empty-state__text">
              Open any movie and tap "Add to Favorites" to save it here.
            </p>
            <Link to="/" className="btn btn--primary">Browse Movies</Link>
          </div>
        ) : (
          <>
            <div className="section__header">
              <span className="section__count">{favorites.length} saved</span>
            </div>
            <MovieRow movies={favorites} />
          </>
        )}
      </div>
    </main>
  );
}

export default Favorites;
