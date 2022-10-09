import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidator';
import * as reviewsController from '../controllers/reviewsController';
import validateToken from '../middlewares/tokenValidator';
import { reviewSchema } from '../utils/schemas';

const reviewsRouter = Router();

reviewsRouter.use(validateToken);
reviewsRouter.post(
  '/review/:filmId',
  validateSchema(reviewSchema),
  reviewsController.addReview
);

reviewsRouter.delete('/review/:reviewId', reviewsController.deleteReview);

export default reviewsRouter;
