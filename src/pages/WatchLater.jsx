import { Link } from "react-router-dom";
import { useWatchLater } from "../context/WatchLaterContext";
import MovieRow from "../components/MovieRow";

function WatchLater() {
  const { watchLater } = useWatchLater();

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-header__title">Watch Later</h1>
        <p className="page-header__sub">Movies saved for your next session</p>
      </div>
      <div className="section">
        {watchLater.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__icon">&#128336;</div>
            <p className="empty-state__title">Nothing saved yet</p>
            <p className="empty-state__text">
              Add movies to your Watch Later list and find them here anytime.
            </p>
            <Link to="/" className="btn btn--primary">Browse Movies</Link>
          </div>
        ) : (
          <>
            <div className="section__header">
              <span className="section__count">{watchLater.length} queued</span>
            </div>
            <MovieRow movies={watchLater} />
          </>
        )}
      </div>
    </main>
  );
}

export default WatchLater;
