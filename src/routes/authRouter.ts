import { Router } from 'express';
import * as authController from '../controllers/authController';
import validateSchema from '../middlewares/schemaValidator';
import { signInSchema, signUpSchema } from '../utils/schemas';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  validateSchema(signUpSchema),
  authController.signUp
);

authRouter.post(
  '/sign-in',
  validateSchema(signInSchema),
  authController.signIn
);

export default authRouter;
