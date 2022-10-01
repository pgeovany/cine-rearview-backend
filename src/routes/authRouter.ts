import { Router } from 'express';
import * as authController from '../controllers/authController';
import validateSchema from '../middlewares/schemaValidator';
import { signUpSchema } from '../utils/schemas';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  validateSchema(signUpSchema),
  authController.signUp
);

export default authRouter;
