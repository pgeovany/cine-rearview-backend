import axios from 'axios';
import * as filmsRepository from '../repositories/filmsRepository';
import * as filmUtils from '../utils/filmUtils';

const { API_KEY, SEARCH_URL, FILM_URL } = process.env;

async function getFilmsByName(name: string) {
  const { data } = await axios.get(
    `${SEARCH_URL}api_key=${API_KEY}&query=${name}`
  );

  const films = filmUtils.formatFilms(data.results);

  return films;
}

async function getFilmDetails(id: number) {
  const { data } = await axios.get(`${FILM_URL}/${id}?api_key=${API_KEY}`);

  const { crew, cast } = await filmUtils.getCrewAndCast(id);

  const directors = filmUtils.getDirectors(crew);

  const film = filmUtils.formatFilm(data);

  return { ...film, directors, crew, cast };
}

async function addFilm(
  originalId: number,
  title: string,
  overview: string,
  posterUrl: string,
  releaseDate: string
) {
  const filmExists = await filmsRepository.findByOriginalId(originalId);

  if (!filmExists) {
    return await filmsRepository.create({
      originalId,
      title,
      overview,
      posterUrl,
      releaseDate,
    });
  }

  return;
}

export { getFilmsByName, getFilmDetails, addFilm };
