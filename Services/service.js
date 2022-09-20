import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=e743135186923e7e145995b6e18c40f6";

// Get Popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};

// Get Upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=10751`);
  return resp.data.results;
};

// Get Romantic Movies
export const getRomanticMovies = async () => {
  const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=10749`);
  return resp.data.results;
};

//Get movie detail
export const getMovie = async (id) => {
  const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  return resp.data;
};

//Search for movie or TV by keyword
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(`${apiUrl}/search/${type}?${apiKey}&query=${query}`);
  return resp.data.results;
};