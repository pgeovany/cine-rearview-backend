import { Router } from 'express';
import authRouter from './authRouter';
import filmsRouter from './filmsRouter';
import userFilmsRouter from './userFilmsRouter';
import watchlistsRouter from './watchlistsRouter';

const router = Router();
router.use('/auth', authRouter);
router.use('/films', filmsRouter);
router.use(userFilmsRouter);
router.use(watchlistsRouter);

export default router;
