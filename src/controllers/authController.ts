import { Request, Response } from 'express';
import * as authService from '../services/authService';
import httpStatus from '../utils/httpStatus';

async function signUp(req: Request, res: Response) {
  const { username, email, password } = req.body;

  const createdUser = await authService.createAccount(
    username,
    email,
    password
  );

  res.send(createdUser).status(httpStatus.CREATED);
}

async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;

  const token = await authService.login(email, password);

  res.send({ token }).status(httpStatus.OK);
}

export { signUp, signIn };
