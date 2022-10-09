import * as filmsRepository from '../repositories/filmsRepository';
import * as userFilmsRepository from '../repositories/userFilmsRepository';

async function addFilmToUserList(
  userId: string,
  originalId: number,
  title: string,
  overview: string,
  releaseDate: string,
  posterUrl: string
) {
  const filmId = await getFilmId(
    originalId,
    title,
    overview,
    releaseDate,
    posterUrl
  );

  const duplicate = await userFilmsRepository.findUnique(userId, filmId);

  if (duplicate) {
    throw {
      type: 'CONFLICT',
      message: 'This film is already on your list!',
    };
  }

  await userFilmsRepository.create(userId, filmId);
}

async function getFilmId(
  originalId: number,
  title: string,
  overview: string,
  releaseDate: string,
  posterUrl: string
) {
  const filmExists = await filmsRepository.findByOriginalId(originalId);

  if (filmExists) {
    return filmExists.id;
  }

  const film = await filmsRepository.create({
    originalId,
    title,
    overview,
    releaseDate,
    posterUrl,
  });

  return film.id;
}

async function removeFilmFromUserList(userId: string, filmId: string) {
  const filmExists = await userFilmsRepository.findUnique(userId, filmId);

  if (!filmExists) {
    throw {
      type: 'NOT_FOUND',
      message: '',
    };
  }

  return await userFilmsRepository.remove(userId, filmId);
}

async function getUserFilms(userId: string) {
  return await userFilmsRepository.getUserFilms(userId);
}

export { addFilmToUserList, removeFilmFromUserList, getUserFilms };
