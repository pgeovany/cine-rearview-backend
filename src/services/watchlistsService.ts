import * as filmsRepository from '../repositories/filmsRepository';
import * as watchlistsRepository from '../repositories/watchlistsRepository';

async function addFilmToWatchlist(
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

  const duplicate = await watchlistsRepository.findUnique(userId, filmId);

  if (duplicate) {
    throw {
      type: 'CONFLICT',
      message: 'This film is already on your watchlist!',
    };
  }

  await watchlistsRepository.create({ userId, filmId });
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

async function removeFilmFromWatchlist(userId: string, filmId: string) {
  const filmExists = await watchlistsRepository.findUnique(userId, filmId);

  if (!filmExists) {
    throw {
      type: 'NOT_FOUND',
      message: '',
    };
  }

  return await watchlistsRepository.remove(userId, filmId);
}

async function getUserWatchlist(userId: string) {
  return await watchlistsRepository.getUserWatchlist(userId);
}

export { addFilmToWatchlist, removeFilmFromWatchlist, getUserWatchlist };
