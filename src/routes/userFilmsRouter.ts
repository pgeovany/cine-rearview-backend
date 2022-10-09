import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidator';
import * as userFilmsController from '../controllers/userFilmsController';
import validateToken from '../middlewares/tokenValidator';
import { filmSchema } from '../utils/schemas';

const userFilmsRouter = Router();

userFilmsRouter.use(validateToken);
userFilmsRouter.post(
  '/userlist',
  validateSchema(filmSchema),
  userFilmsController.addFilmToUserList
);

userFilmsRouter.get('/userlist', userFilmsController.getUserFilms);

userFilmsRouter.delete(
  '/userlist/:filmId',
  userFilmsController.removeFilmFromUserList
);

export default userFilmsRouter;
