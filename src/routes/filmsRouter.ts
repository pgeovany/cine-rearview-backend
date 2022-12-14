import { Router } from 'express';
import * as filmsController from '../controllers/filmsController';
import validateToken from '../middlewares/tokenValidator';

const filmsRouter = Router();

filmsRouter.use(validateToken);
filmsRouter.get('/search', filmsController.search);
filmsRouter.get('/details/:id', filmsController.details);

export default filmsRouter;
