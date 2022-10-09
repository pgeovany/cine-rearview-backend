import axios from 'axios';
import FilmData from '../types/films';

const { API_KEY, IMAGES_URL, FILM_URL } = process.env;

function getDirectors(crew: any) {
  const directors: string[] = [];

  crew.forEach((person: any) => {
    if (person.job === 'Director') {
      directors.push(person.name);
    }
    return false;
  });

  return directors;
}

function formatFilm(film: any) {
  return {
    originalId: film.id,
    title: film.original_title,
    localTitle: film.title,
    overview: film.overview,
    poster: IMAGES_URL + film.poster_path,
    releaseDate: formatDate(film.release_date),
    runtime: film.runtime,
    genres: film.genres,
  };
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

async function getCrewAndCast(filmId: number) {
  const { data } = await axios.get(
    `${FILM_URL}/${filmId}/credits?api_key=${API_KEY}`
  );

  const crew = data.crew.map((person: any) => {
    return {
      department: person.department,
      job: person.job,
      name: person.name,
      photo: IMAGES_URL + person.profile_path,
    };
  });

  const cast = data.cast.map((person: any) => {
    return {
      character: person.character,
      name: person.name,
      photo: IMAGES_URL + person.profile_path,
    };
  });

  return { crew, cast };
}

export { getDirectors, formatFilm, formatFilms, getCrewAndCast };
