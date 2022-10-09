import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidator';
import * as watchlistsController from '../controllers/watchlistsController';
import validateToken from '../middlewares/tokenValidator';
import { filmSchema } from '../utils/schemas';

const watchlistsRouter = Router();

watchlistsRouter.use(validateToken);
watchlistsRouter.post(
  '/watchlist',
  validateSchema(filmSchema),
  watchlistsController.addFilmToWatchlist
);

watchlistsRouter.get('/watchlist', watchlistsController.getUserWatchlist);

watchlistsRouter.delete(
  '/watchlist/:filmId',
  watchlistsController.removeFilmFromWatchlist
);

export default watchlistsRouter;
