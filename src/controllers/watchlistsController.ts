import { Request, Response } from 'express';
import * as watchlistsService from '../services/watchlistsService';
import httpStatus from '../utils/httpStatus';

async function addFilmToWatchlist(req: Request, res: Response) {
  const { originalId, title, overview, releaseDate, posterUrl } = req.body;
  const { userId } = res.locals;

  await watchlistsService.addFilmToWatchlist(
    userId,
    originalId,
    title,
    overview,
    releaseDate,
    posterUrl
  );

  res.sendStatus(httpStatus.CREATED);
}

async function removeFilmFromWatchlist(req: Request, res: Response) {
  const { userId } = res.locals;
  const { filmId } = req.params;

  await watchlistsService.removeFilmFromWatchlist(userId, String(filmId));

  res.sendStatus(httpStatus.OK);
}

async function getUserWatchlist(req: Request, res: Response) {
  const { userId } = res.locals;

  const films = await watchlistsService.getUserWatchlist(userId);

  res.send(films).status(httpStatus.OK);
}

export { addFilmToWatchlist, removeFilmFromWatchlist, getUserWatchlist };
