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

export default userFilmsRouter;
