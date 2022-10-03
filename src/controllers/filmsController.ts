import { Request, Response } from 'express';
import httpStatus from '../utils/httpStatus';
import * as filmsService from '../services/filmsService';

async function search(req: Request, res: Response) {
  const { search } = req.query;

  const films = await filmsService.getFilmsByName(search as string);

  res.send(films).status(httpStatus.OK);
}

export { search };
