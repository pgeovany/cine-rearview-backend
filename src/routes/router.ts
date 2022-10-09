import { Router } from 'express';
import authRouter from './authRouter';
import filmsRouter from './filmsRouter';
import userFilmsRouter from './userFilmsRouter';

const router = Router();
router.use('/auth', authRouter);
router.use('/films', filmsRouter);
router.use(userFilmsRouter);

export default router;
