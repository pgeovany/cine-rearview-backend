import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';
import * as filmsService from '../services/filmsService';

async function search(req: Request, res: Response) {
  const { search } = req.query;

  const films = await filmsService.getFilmsByName(search as string);

  res.send(films).status(httpStatus.OK);
}

async function details(req: Request, res: Response) {
  const { id } = req.params;

  const film = await filmsService.getFilmDetails(Number(id));

  res.send(film).status(httpStatus.OK);
}

export { search, details };
