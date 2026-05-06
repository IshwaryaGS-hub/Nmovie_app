import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "navbar__link navbar__link--active" : "navbar__link";

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        NMovie<span>App</span>
      </Link>
      <div className="navbar__links">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/favorites" className={linkClass}>Favorites</NavLink>
        <NavLink to="/watchlater" className={linkClass}>Watch Later</NavLink>
        <NavLink to="/profile" className={linkClass}>Profile</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
