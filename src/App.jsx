import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import WatchLater from "./pages/WatchLater";
import Profile from "./pages/Profile";
import { FavoritesProvider } from "./context/FavoritesContext";
import { WatchLaterProvider } from "./context/WatchLaterContext";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <WatchLaterProvider>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <Footer />

        </WatchLaterProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;