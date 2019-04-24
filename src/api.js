import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.API_URL,
});

export function getData() {
  return api.get('/data');
}

export function getCinema(cinemaId) {
  return api.get(`/cinema/${cinemaId}`);
}

export function getMovie(movieId) {
  return api.get(`/movies/${movieId}`);
}

export default api;
