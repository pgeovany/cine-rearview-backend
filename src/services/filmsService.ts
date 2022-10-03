import axios from 'axios';
import FilmData from '../types/films';

const { API_KEY, SEARCH_URL, IMAGES_URL } = process.env;

async function getFilmsByName(name: string) {
  const { data } = await axios.get(
    `${SEARCH_URL}api_key=${API_KEY}&query=${name}`
  );

  const films = formatFilms(data.results);

  return films;
}

function formatFilms(films: FilmData[]) {
  return films.map((film) => {
    return {
      originalId: film.id,
      title: film.original_title,
      localTitle: film.title,
      overview: film.overview,
      poster: IMAGES_URL + film.poster_path,
      releaseDate: formatDate(film.release_date),
    };
  });
}

function formatDate(date: string) {
  // formats date from YYYY-MM-DD format to DD/MM/YYYY
  const aux = date.split('-');
  return `${aux[2]}/${aux[1]}/${aux[0]}`;
}

export { getFilmsByName };
