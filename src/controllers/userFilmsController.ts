import { Request, Response } from 'express';
import * as userFilmsService from '../services/userFilmsService';
import httpStatus from '../utils/httpStatus';

async function addFilmToUserList(req: Request, res: Response) {
  const { originalId, title, overview, releaseDate, posterUrl } = req.body;
  const { userId } = res.locals;

  await userFilmsService.addFilmToUserList(
    userId,
    originalId,
    title,
    overview,
    releaseDate,
    posterUrl
  );

  res.sendStatus(httpStatus.CREATED);
}

async function removeFilmFromUserList(req: Request, res: Response) {
  const { userId } = res.locals;
  const { filmId } = req.params;

  await userFilmsService.removeFilmFromUserList(userId, String(filmId));

  res.sendStatus(httpStatus.OK);
}

export { addFilmToUserList, removeFilmFromUserList };
