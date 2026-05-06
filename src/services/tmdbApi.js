import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const ensureApiKey = () => {
  if (!API_KEY) {
    throw new Error(
      "Missing TMDB API key. Add VITE_TMDB_API_KEY to your .env file."
    );
  }
};

export const fetchTrendingMovies = async () => {
  ensureApiKey();
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const searchMovies = async (query) => {
  ensureApiKey();
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  ensureApiKey();
  const res = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return res.data;
};
