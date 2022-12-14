import { Request, Response } from 'express';
import * as reviewsService from '../services/reviewsService';
import httpStatus from '../utils/httpStatus';

async function addReview(req: Request, res: Response) {
  const { userId } = res.locals;
  const { filmId } = req.params;
  const { title, content } = req.body;

  await reviewsService.addReview(userId, filmId, title, content);

  res.sendStatus(httpStatus.CREATED);
}

async function deleteReview(req: Request, res: Response) {
  const { userId } = res.locals;
  const { reviewId } = req.params;

  await reviewsService.deleteReview(reviewId, userId);

  res.sendStatus(httpStatus.OK);
}

export { addReview, deleteReview };
