import { useFavorites } from "../context/FavoritesContext";
import { useWatchLater } from "../context/WatchLaterContext";

function Profile() {
  const { favorites } = useFavorites();
  const { watchLater } = useWatchLater();

  return (
    <main className="page">
      <div className="profile-page">
        <div className="profile-avatar">&#128100;</div>
        <h1 className="profile-name">Guest User</h1>
        <p className="profile-sub">Browsing as a guest</p>

        <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div style={statCard}>
            <span style={statNum}>{favorites.length}</span>
            <span style={statLabel}>Favorites</span>
          </div>
          <div style={statCard}>
            <span style={statNum}>{watchLater.length}</span>
            <span style={statLabel}>Watch Later</span>
          </div>
        </div>
      </div>
    </main>
  );
}

const statCard = {
  background: "var(--bg-elevated)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "20px 32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  minWidth: "120px",
};

const statNum = {
  fontSize: "2rem",
  fontWeight: "800",
  color: "var(--red)",
};

const statLabel = {
  fontSize: "0.8rem",
  color: "var(--text-muted)",
};

export default Profile;
